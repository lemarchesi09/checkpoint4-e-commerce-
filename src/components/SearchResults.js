import {
  user,
  setUser,
  searchProducts,
  setSearchProducts,
  useUserContext,
} from "../context/userContext";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/searchResults.css";

export const SearchResults = () => {
  const { searchProducts, setSearchProducts } = useUserContext();
  const [products, setProducts] = useState([]);

  // searchProducts.forEach((doc) => {
  //     // doc.data() is never undefined for query doc snapshots
  // console.log('Desde Search Results', doc.id, " => ", doc.data());
  // });
  const getProducts = () => {
    const resultado = searchProducts.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setProducts(
      resultado
      // searchProducts.forEach((doc) => ({ ...doc.data(), id: doc.id }))
    );
  };
  useEffect(() => {
    getProducts();
  }, [searchProducts]);

  return (
    <div className="container">
      <div className="d-flex justify-content-center items-center container">
        {products &&
          products.map(
            (item, index) => (
              <Link
                key={index}
                to={`/itemDetails/${item.id}`}
                className="cursor-pointer"
              >
                <div className="card" key={index}>
                  <div className="card-img-top">
                    <img
                      src={item.image}
                      alt="..."
                      className="searchcard_img_cont"
                    />
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
            )
            // <Link
            //     key={index}
            //     to={`/itemDetails/${item.id}`}
            //     className="cursor-pointer"
            //     >
            //     <div className="searchcard d-flex p-3" key={index}>
            //         <div className="searchcard_img_cont">
            //         <img src={item.image} alt="..." className="image-card" />
            //         </div>

            //         <div className="searchcard_body ps-5 d-flex flex-column justify-content-between">
            //             <h5 className="card-title">{item.title}</h5>
            //         <div className="icon-ship">
            //             <p className="card-text">${item.price}</p>
            //             <p className="card-text">
            //             <i className="bi bi-truck "></i> Envio gratis!
            //             </p>
            //         </div>
            //         </div>
            //     </div>
            // </Link>
          )}
      </div>
    </div>
  );
};
