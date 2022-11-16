import { useUserContext } from "../context/userContext";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/searchResults.css";

export const SearchResults = () => {
  const { searchProducts } = useUserContext();
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    const resultado = searchProducts.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    setProducts(resultado);
  };
  useEffect(() => {
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchProducts]);

  return (
    <div className="container">
      <div className="d-flex justify-content-center items-center container">
        {products &&
          products.map((item, index) => (
            <Link key={index} to={`/itemDetails/${item.id}`} className="cursor-pointer">
              <div className="card" key={index}>
                <div className="card-img-top">
                  <img src={item.image} alt="..." className="searchcard_img_cont" />
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
    </div>
  );
};
