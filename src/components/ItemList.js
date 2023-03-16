import React, { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import "../styles/itemList.css";
import Item from "./Item";

const ItemList = () => {
  const [dataCarrousel, setDataCarrousel] = useState([]);
  const productsCollection = collection(db, "generalProducts");
  const getData = async () => {
    try {
      const dataProducts = await getDocs(productsCollection);
      const items = dataProducts.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setDataCarrousel(items);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1 className="textAboveItems">PRODUCTOS MAS BUSCADOS❤🔥</h1>
      <div className="itemList">
        {/* 
          CODIGO PARA DEVOLVER PRODUCTOS RANDOM
          {dataCarrousel.splice(Math.floor(Math.random()*dataCarrousel.length),4).map((item,index);} 

          CODIGO PARA MOSTRAR PRIMEROS 4 PRODUCTOS
          dataCarrousel.slice(0, 4).map((item, index)
        */}
        {dataCarrousel.slice(0, 4).map((item, index) => (
          <Item item={item} index={index}/>
        ))}
      </div>
    </>
  );
};
export default ItemList;
