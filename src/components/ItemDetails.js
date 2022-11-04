import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../styles/itemDetails.css'
const ItemDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const { title, price, description, image } = item;

  const getDataItem = async () => {
    const url = `https://fakestoreapi.com/products/${id}`;
    console.log(url);
    const data = await fetch(url);
    const res = await data.json();
    setItem(res);
  };
  useEffect(() => {
    getDataItem();
  }, []);
  return (
    <div>
      <div className="itemsDetailsContainer container ">
        <div className="itemsDetailsContainer__data d-flex ">
          <div className="itemsDetailsContainer__data__img">
            <img src={image} alt="" />
          </div>
          <div className="itemsDetailsContainer__data ">
          <h1>{title}</h1>
          <h2>{description}</h2>
          <p> ${price}</p>

          </div>
          <div className="itemsDetailsContainer__data__img">
            <input type="number" />
            <button className="btn btn-primary">Buy now</button>
            <button className="btn btn-primary" >Add to cart </button>
          </div>
     
        </div>
      </div>

  
  </div>

  );
};

export default ItemDetails;
