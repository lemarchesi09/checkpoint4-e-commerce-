import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//import { Rating } from 'react-simple-star-rating'
import "../styles/itemDetails.css";
const ItemDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const [quantity,setQuantity] =useState(0)
  const [count,setCount] =useState(1)
  const { title, price, description, image, category,rate } = item;


  const getDataItem = async () => {
    const url = `https://fakestoreapi.com/products/${id}`;
    console.log(url);
    const data = await fetch(url);
    const res = await data.json();
    setItem(res);
  };
  const getQuantity=(e)=>{
      setQuantity (Number(e.target.value))
      setCount(Number(e.target.value))

  
    console.log(quantity);
  }
  useEffect(() => {
    getDataItem();
  }, []);
  return (
    <div className="p-4">
      <div class="card  col-md-4 w-100  ">
        <div class="row g-0">
          <div class="col-md-4">
            <img src={image} class="img-fluid rounded-start" alt="..." />
          </div>
          <div class="col-md-6">
            <div class="card-body d-flex  flex-column justify-content-center">
              <p class="card-text">
                <span>{category}</span>.
              </p>
              <h5 class="card-title">{title}</h5>
              <p class="card-text">{description}.</p>
              
           {quantity>1? <p class="card-text">${price*quantity} </p> : <p class="card-text">${price}</p> }
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
            <div className=" row-md-2 d-flex justify-content-around">
              <div className="card_input_count" >
              <input type="number" min={1} max={10} value={count} onChange={getQuantity} style={{ width: "70px" }} />
              </div>
         
              <div className="card-buttons d-flex  col-md-6 gap-4  ">
                <div className="card-button_buy">
                  <button className="btn btn-primary ">Buy now</button>
                </div>
                <div className="card-button_Add ">
                  <button className="btn btn-primary">Add now </button>
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
