import React, { useEffect, useState } from "react";
import "../styles/itemCards.css";
const ItemList = () => {
  const [dataCarrousel, setDataCarrousel] = useState([]);

  const getData = async () => {
    try {
      const data = await fetch("https://fakestoreapi.com/products");
      const res = await data.json();
      setDataCarrousel(res);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(dataCarrousel);
  return (
    <>
      <h1 className=" textAboveItems">PRODUCTOS MAS BUSCADOS❤🔥</h1>
      <div className="d-flex justify-content-center items-center container">
        {dataCarrousel.slice(0, 4).map((item, index) => (
          <div className="card" key={index}>
            <div className="card-img-top">
              <img src={item.image} alt="..." className="image-card" />
            </div>

            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <div className="icon-ship">
                <p className="card-text">${item.price}</p>
                <p className="card-text">
                  <i class="bi bi-truck "></i> Envio gratis!
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default ItemList;
