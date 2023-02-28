import { useUserContext } from "../context/userContext";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState  } from "react";
import "../styles/searchResults.css";
import { db } from "../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
import Item from "./Item";

export const SearchResults = () => {
  const { searchProducts } = useUserContext();
  const [products, setProducts] = useState([]);
  const { busqueda } = useParams();

  const productsCollection = collection(db, "generalProducts");

  // Hacer pedido asincrono a DB para luego setear los productos filtrados por categoria
  const getData = async () => {
    try {
      const dataProducts = await getDocs(productsCollection);
      const items = dataProducts.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setProducts(items.filter((item) => item.category === busqueda))
    } catch (error) {
      console.log(error);
    }
  };


  // const getProducts = async () => {
  //   await setProducts(searchProducts.filter((item) => item.category === busqueda))

  //   console.log('entrando en await de searchresults', searchProducts);
  //   console.log('estoy fuera del if de busqueda', products);

  //   // if (busqueda) {
  //   //   setProducts(products.filter((item) => item.category === busqueda))
  //   //   console.log('estoy en el if de busqueda', products);
  //   // }
  //   // console.log('estoy fuera del if de busqueda', products);

  //   // try {
  //   //   const response = await searchProducts.docs.map((doc) => ({
  //   //     ...doc.data(),
  //   //     id: doc.id,
  //   //   }));
  //   //   console.log('result in gentProducts', response);
  //   //   setProducts(response);
  
  //   //   console.log('searchprod en searchresult', searchProducts);
      
  //   // } catch (error) {
  //   //   console.log(error);
  //   // }
  // };
  
  useEffect(() => {
    getData();
    // getProducts();
    console.log('searchproducts en searchresult', searchProducts);
    console.log(busqueda);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchProducts,busqueda]);

  console.log('products en searchresult2', products);
  return (
    <>
    <h2 className="m-auto mt-2">{busqueda}</h2>
      <div className="container ">
        <div className="results-cont">{/* borre itemList d-flex justify-content-center items-center container*/}
          {products &&
            products.map((item, index) => (
              <Item item={item} index={index}/>
              // <Link key={index} to={`/itemDetails/${item.id}`} className="cursor-pointer">
              //   <div className="card" key={index}>
              //     <div className="card-img-top">
              //       <img src={item.image} alt="..." className="searchcard_img_cont" />
              //     </div>
              //     <div className="card-body">
              //       <h5 className="card-title">{item.title}</h5>
              //       <div className="icon-ship">
              //         <p className="card-text">${item.price}</p>
              //         <p className="card-text">
              //           <i className="bi bi-truck "></i> Envio gratis!
              //         </p>
              //       </div>
              //     </div>
              //   </div>
              // </Link>
            ))}
        </div>
      </div>
    </>
  );
};
