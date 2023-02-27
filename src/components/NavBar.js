import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../context/userContext";
import "../styles/navBar.css";
import { db } from "../firebase/firebase";
import { collection, query, where, getDocs, getDoc } from "firebase/firestore";
import { useSelector } from "react-redux";

import  Logo  from "../assets/img/logo-market.png"


export const NavBar = () => {
  // User from context
  const { user, setUser } = useUserContext();
  // Search Products from context
  const { searchProducts,setSearchProducts } = useUserContext();

  // Local State for all products
  const [allProducts, setAllProducts] = useState([])

  const getAllProducts = async () =>{
    const productsCollection = collection(db, "generalProducts");
    const response = await getDocs(productsCollection);
    
    setAllProducts(response.docs.map((doc) => ({ ...doc.data()})));
    console.log('allProducts', allProducts);
    setSearchProducts(response.docs.map((doc) => ({ ...doc.data()})));
    console.log('searchProd en nav', searchProducts);
    // setSearchProducts(allProducts);
    // console.log('searchProd en nav', searchProducts);
    
  }
  // value to display the number of items in the cart

  const quantityELements = useSelector((state) => state.item);

  // Creating a state for search input
  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  // Navigate
  const navigate = useNavigate();

  const getProductsFromSearch = async () => {

    // const result = searchProducts.filter((product) => {

    //   return product.title.toLowerCase() === "Mens Casual Slim Fit"
    // }
    // )
    // console.log('result',result);
    // setSearchProducts(result)
    // Get some products
    const q = query(collection(db, "generalProducts"), where("title", "==", search));

    // In querySnapshot comes the response. Then, a forEach function is needed to capture every doc founded
    const querySnapshot = await getDocs(q);
    setSearchProducts(querySnapshot);
    setSearchProducts(querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
    
    }
    ));

   

    navigate(`/searchResults/${search}`);
  };

  // const getProductsByCategory();

  const handleSubmit = (e) => {
    e.preventDefault();
    getProductsFromSearch();
    e.target.search.value = "";
  };

  console.log('allProducts2', allProducts);
  console.log('searchProd en nav Fuera', searchProducts);

  useEffect(() => {
    getAllProducts();
    
  }, [])
  return (
    <>
      {user?.role !== "admin" ? (
        <nav className="position-fixed navbar navbar-expand-md navbar-expand-lg bg-light">
          <div className="container-fluid">
            <Link to="/" className="nav-link-logo">
              <img className="logo" src={ Logo } alt="logo"/>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse flex-column p-1" id="navbarSupportedContent">
              {/* SearchBar */}
              <form className="d-flex form w-100 align-items-center" role="search" onSubmit={handleSubmit}>
                <input
                  className="form-control me-2"
                  type="search"
                  name="search"
                  onChange={handleChange}
                  placeholder="Search by Title"
                  aria-label="Search"
                />
                <button className="btn btn-outline-primary" type="submit">
                  Search
                </button>
              </form>
              <ul className="navbar-nav mb-2 mb-lg-0 ">
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    {" "}
                    Home{" "}
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/searchResults/Jewelry" className="nav-link">

                    Jewelry
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/searchResults/Electronics" className="nav-link">
                    
                    Electronics
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/searchResults/Womens's Clothing" className="nav-link">
                    Womens's Clothing
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/searchResults/Men's Clothing" className="nav-link">
                    Men's Clothing
                  </Link>
                </li>
              </ul>
            </div>
            <div className="nav-user d-flex justify-content-evenly">
              {/*  CONDICIONAL PARA MOSTRAR LOG IN O LOG OUT   */}
              {user ? (
                <>
                  <Link
                    to="/"
                    className="nav-item"
                    onClick={() => {
                      setUser(null);
                    }}
                  >
                    Log Out<i className="bi bi-person-check-fill ms-1"></i>
                  </Link>
                  <div>
                    <Link to="/purchasehistory" >History <i class="bi bi-clock-history"></i></Link>
                  </div>
                  <div className="cart">
                    <Link to="/cart">
                      <i className="bi bi-cart">
                        <div className="quantityElements">{quantityELements.length}</div>
                      </i>
                    </Link>
                  </div>
                </>
              ) : (
                <Link to="/login" className="nav-item">
                  Log in <i className="bi bi-person ms-1"></i>
                </Link>
              )}
            </div>
          </div>
        </nav>
      ) : (
        <></>
      )}
    </>
  );
};
