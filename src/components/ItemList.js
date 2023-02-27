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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h1 className="textAboveItems">PRODUCTOS MAS BUSCADOS❤🔥</h1>
      <div className="itemList">
        {dataCarrousel.slice(0, 4).map((item, index) => (
          <Item item={item} index={index}/>
          // <Link key={index} to={`/itemDetails/${item.id}`} className="cursor-pointer">
          //   <div className="cardContainer">
          //     <Card className="card" key={index}>
          //       <div className="imgContainer">
          //         <Card.Img className="image" variant="top" src={`${item.image}`} />
          //       </div>
          //       <Card.Body>
          //         <Card.Title className="card-title">{item.title}</Card.Title>
          //         <Card.Text className="text row">
          //           <p>${item.price}</p>
          //           <p>
          //             <i className="bi bi-truck "></i> Envio gratis!
          //           </p>
          //         </Card.Text>
          //       </Card.Body>
          //     </Card>
          //   </div>
          // </Link>
        ))}
      </div>
    </>
  );
};
export default ItemList;
