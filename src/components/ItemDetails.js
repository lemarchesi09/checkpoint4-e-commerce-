import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProduct } from "../features/product/productsSlice";
import "../styles/itemDetails.css";

const ItemDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  // state for calculate quantity*price
  const [quantity, setQuantity] = useState(0);
  // state for the input
  const [count, setCount] = useState(1);
  const { title, price, description, image, category, rate } = item;
  const dispatch= useDispatch()
  const navigate = useNavigate();

  const getDataItem = async () => {
    const url = `https://fakestoreapi.com/products/${id}`;
    const data = await fetch(url);
    const res = await data.json();
    setItem(res);
  };
  const getQuantity = (e) => {
    setQuantity(Number(e.target.value));
    setCount(Number(e.target.value));
  };
  const addToCart=()=>{
dispatch(addProduct(item))
navigate('/')
alert("producto cargado re piola ameo 🤙")
  }
  useEffect(() => {
    getDataItem();
  }, []);
  return (
    <div className="p-4">
      <div className="card  col-md-4 w-100  ">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={image} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-6">
            <div className="card-body d-flex  flex-column justify-content-center">
              <p className="card-text">
                <span>{category}</span>.
              </p>
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}.</p>

              {quantity > 1 ? (
                <p className="card-text">${price * quantity} </p>
              ) : (
                <p className="card-text">${price}</p>
              )}
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
            <div className=" row-md-2 d-flex justify-content-around">
              <div className="card_input_count">
                <input
                  type="number"
                  min={1}
                  max={10}
                  value={count}
                  onChange={getQuantity}
                  style={{ width: "70px" }}
                />
              </div>

              <div className="card-buttons d-flex  col-md-6 gap-4  ">
                <div className="card-button_buy">
                  <button className="btn btn-primary ">Buy now</button>
                </div>
                <div className="card-button_Add ">
                  <button className="btn btn-primary" onClick={addToCart}>Add now </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
