import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem } from "../../src/features/item/itemSlice";
import "../styles/cart.css";
import { db } from "../firebase/firebase";
import { collection, addDoc } from "firebase/firestore";
import { useUserContext } from "../context/userContext";
import { Navigate, Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';

const Cart = () => {
  const { user } = useUserContext();
  const [acum, setAcum] = useState(0);
  const stateItem = useSelector((state) => state.item);
  console.log(stateItem);
  const arrayTransformado = stateItem.map((producto) => producto);
  // Converting array to object
  const object = Object.assign({}, stateItem);


  const [compra, setCompra] = useState(object);
  const date = Date();
  console.log(date);

  const sendBuyToFirebase = async () => {
    try {
      await addDoc(purchasesCollection, { ...compra, user: user, date: date });

    } catch (error) {
  console.log(error)
    }
  };

  const dispatch = useDispatch();

  const purchasesCollection = collection(db, "purchases");

  const deleteProduct = (id) => {
    dispatch(deleteItem(id));
  };
  // accumulator to render the total price
  useEffect(() => {
    let newValue = 0;
    stateItem.forEach((element) => {
      newValue = newValue + Number(element.item.price) * element.quantity;
    });
    setAcum(newValue);
  }, [stateItem]);
  return (
    <div>
      {user?.role === "user" ? (
        <>
          <div className="container mt-5 mb-5 cartContainer">
            <h4>Shopping cart</h4>
            <div>
              <Card>
            {stateItem.length === 0 ? (
              <h1 className="text-center">No products in the cart.</h1>
            ) : (
              stateItem.map((item, index) => (
                <div className="d-flex justify-content-center cartDetail">
                  <div className="cart">
                    <div key={index} className="cartProduct p-2 bg-white mt-4 px-3 rounded" >
                      <div className="d-flex justify-content-center justify-content-sm-start">
                        <img src={item.item.image} className="w-50 rounded-start"></img>
                      </div>
                      <div className="d-flex flex-column product-details itemTitle-cart">
                        <h3 className="font-weight-bold">{item.item.title}</h3>
                      </div>
                      <div className="qtyPrice">

                      <div className="qty">
                        <i className="fa fa-minus text-danger"></i>
                        <h5 className="text-grey mt-1 mr-1 ml-1"> Amount: {item.quantity}</h5>
                        <i className="fa fa-plus text-success"></i>
                        <div className="product-desc">
                          <div className="size mr-1"></div>
                          <div className="color">
                            <span className="text-grey"> Stock: {item.item.stock}</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h5 className="text-grey font-weight-bold">
                          ${item.item.price * item.quantity}
                          {""}
                        </h5>
                      </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <i className="fa fa-trash mb-1 text-danger"></i>
                      </div>
                    </div>
                  </div>  
                    <div className="deleteItem">
                        <button className="btn btn-danger" onClick={() => deleteProduct(item.item.id)}>
                          Delete
                        </button>
                    </div>
                </div>
                
                ))
                )}
                </Card>
            </div>
            
            <div className={`${ stateItem.length === 0 ? "d-none" : "d-block" } d-flex flex-column mt-3 p-2 bg-white rounded`} >
              <div className="totalPrice d-flex justify-content-end">
                <h3> Total price: ${acum}</h3>
              </div>
              <div className="d-flex justify-content-end">

              <Link to="/purchaseForm">
                <button
                  className="btn btn-warning btn-block btn-lg ml-2 pay-button"
                  type="button"
                  onClick={() => {
                    sendBuyToFirebase();
                  }}
                >
                  {" "}
                  Proced to pay{" "}
                </button>
              </Link>
                    </div>
            </div>
          </div>
        </>
      ) : (
        <Navigate to={"/"}></Navigate>
      )}
    </div>
  );
};
export default Cart;
