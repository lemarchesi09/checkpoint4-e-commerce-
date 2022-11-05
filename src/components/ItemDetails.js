import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/itemDetails.css";
const ItemDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const { title, price, description, image,category } = item;
  console.log(category);

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
    <div className="p-4" >
     <div class="card  col-md-4 w-100  " >
  <div class="row g-0">
    <div class="col-md-4">
      <img src={image} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-6">
      <div class="card-body d-flex  flex-column justify-content-center">
      <p class="card-text"><span>{category}</span>.</p>
        <h5 class="card-title">{title}</h5>
        <p class="card-text">{description}.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
      <div className="card-buttons row-md-2 d-flex justify-content-around">
      <input type="number"  style={{width:'70px'}}/>
      <button className="btn btn-primary ">Buy now</button>
      <button className="btn btn-primary">Add now </button>
    </div>
    </div>
   
  </div>
</div>
    </div>
  );
};

export default ItemDetails;
