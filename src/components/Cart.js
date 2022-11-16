import React from "react";
import { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem } from "../../src/features/item/itemSlice";
import "../styles/cart.css";
import { db } from "../firebase/firebase";
import { collection, addDoc } from "firebase/firestore";
import { useUserContext } from "../context/userContext";
import { Navigate,Link } from "react-router-dom";

const Cart = () => {
  const {user} = useUserContext();
  const [acum, setAcum] = useState(0);
  const stateItem = useSelector((state) => state.item);
  console.log(stateItem);
  const arrayTransformado = stateItem.map((producto) => producto);
  console.log('array nuevo', arrayTransformado);
  // Converting array to object
  const object = Object.assign({}, stateItem)
  console.log('array pasado a objetos', object);

  const [compra, setCompra] = useState(object);

  const sendBuyToFirebase = async () => {
    try{
       await addDoc(purchasesCollection, compra)
       console.log('entro el try', compra);
    }catch(error){
      console.log('error in sendBuyToFirebase', error);
    }
  }

  const dispatch= useDispatch()

  const purchasesCollection = collection(db, "purchases")

  const deleteProduct =(id)=>{
    console.log('delete id', id);
    dispatch(deleteItem(id))

  }
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

      {user?.role === "user"  ?
      <>
      
        <div className="container mt-5 mb-5">
          <h4>Shopping cart</h4>
  
          {stateItem.length===0? <h1 className="text-center">todavia no hay productos en el carrito!</h1>:stateItem.map((item, index) => (
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
                <div key={index} className="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded">
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
                      ${item.item.price * item.quantity}{""}
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
          <Link to="/purchaseForm">
            <button
              className="btn btn-warning btn-block btn-lg ml-2 pay-button"
              type="button"
              onClick={() => {sendBuyToFirebase()}}
            > Proced to pay </button>
             </Link>
            <div className="totalPrice d-flex justify-content-around">
              <h3> Total price: ${acum}</h3>
            </div>
          </div>
        </div>
      </>
      :
      <Navigate to={"/"}></Navigate>
    }
    </div>
  );
};
export default Cart;
