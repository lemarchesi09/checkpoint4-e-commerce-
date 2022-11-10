import React, { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";
import "../styles/itemCards.css";

const productsCollection = collection(db, "generalProducts");

const ItemList = () => {
  const [dataCarrousel, setDataCarrousel] = useState([]);

  const getData = async () => {
    try {
      const dataProducts = await getDocs(productsCollection);
      const items = dataProducts.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      console.log("items", items);
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
      <h1 className=" textAboveItems">PRODUCTOS MAS BUSCADOS❤🔥</h1>
      <div className="d-flex justify-content-center items-center container">
        {dataCarrousel.slice(0, 4).map((item, index) => (
          <Link key={index} to={`/itemDetails/${item.id}`} className="cursor-pointer">
            <div className="card" key={index}>
              <div className="card-img-top">
                <img src={item.image} alt="..." className="image-card" />
              </div>

              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <div className="icon-ship">
                  <p className="card-text">${item.price}</p>
                  <p className="card-text">
                    <i className="bi bi-truck "></i> Envio gratis!
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};
export default ItemList;
