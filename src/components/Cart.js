import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem } from "../../src/features/item/itemSlice";
import "../styles/cart.css";

const Cart = () => {
  const [acum, setAcum] = useState(0);

  const stateItem = useSelector((state) => state.item);
 console.log(stateItem);
  const dispatch= useDispatch()

  const deleteProduct =(id)=>{
    dispatch(deleteItem(id))

  }
// accumulator to render the total price
  useEffect(() => {
    let newValue = 0;
    stateItem.forEach((element) => {
      newValue = newValue + Number(element.item.price) * element.quantity;
    });
    setAcum(newValue);
  }, []);
  return (
    <div className="container mt-5 mb-5">
      <h4>Shopping cart</h4>

      {stateItem.length===0? <h1 className="text-center">todavia no hay productos en el carrito!</h1>:stateItem.map((item) => (
        <div className="d-flex justify-content-center row">
          <div className="col-md-8">
            <div className="p-2">
              <div className="d-flex flex-row align-items-center pull-right">
                <span className="mr-1 font-weight-bold">
    
                  quantity: {item.item.quantity}
                </span>
                <i className="fa fa-angle-down"></i>
              </div>
            </div>
            <div className="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded">
              <div className="d-flex flex-column align-items-center product-details">
                <span className="font-weight-bold">{item.item.title}</span>
                <div className="d-flex flex-row product-desc">
                  <div className="size mr-1"></div>
                  <div className="color">
                    <span className="text-grey"> stock :{item.item.stock}</span>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-row align-items-center qty">
                <i className="fa fa-minus text-danger"></i>
                <h5 className="text-grey mt-1 mr-1 ml-1">
                  {" "}
                  quantity:{item.quantity}
                </h5>
                <i className="fa fa-plus text-success"></i>
              </div>
              <div className="deleteItem">
                <button className="btn btn-danger" onClick={()=> deleteProduct(item.item.id)}>
                  delete
                </button>
              </div>
              <div>
                <h5 className="text-grey">
                  ${item.item.price * item.quantity}{" "}
                </h5>
              </div>
              <div className="d-flex align-items-center">
                <i className="fa fa-trash mb-1 text-danger"></i>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className={`${stateItem.length===0? "d-none":"d-block"} d-flex flex-row align-items-around mt-3 p-2 bg-white rounded`}>
        <button
          className="btn btn-warning btn-block btn-lg ml-2 pay-button"
          type="button"
        >
          Proceed to Pay
        </button>
        <div className="totalPrice d-flex justify-content-around">
          <h3> Total price: ${acum}</h3>
        </div>
      </div>
    </div>
  );
};
export default Cart;
