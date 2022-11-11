import { useState } from "react";
import { Link } from "react-router-dom";

import {user, setUser, searchProducts, setSearchProducts, useUserContext} from "../context/userContext";
import "../styles/navBar.css";
import { db } from "../firebase/firebase";
import { collection, doc, query, where, getDocs } from "firebase/firestore";

export const NavBar = () =>{
    // User from context
    const {user, setUser} = useUserContext();
    console.log('user en NavBar', user);
    // Search Products from context
    const {searchProducts, setSearchProducts} = useUserContext();

    const productsCollection = collection(db, "generalProducts");
    
    const getProductsFromSearch = async () =>{
        // Get some products
        // const q = query(collection(db, "generalProducts"), where("title", "==", "otra"));

        // try {
        //     const querySnapshot = await getDocs(q);
        //     querySnapshot.forEach((doc) => {
        //       // doc.data() is never undefined for query doc snapshots
        //     //   console.log(doc.uid, " => ", doc.data());
        //     console.log(doc);
        //     });
            
        // } catch (error) {
        //     console.log(error);
        // }

        // Get All products
        
        const dataProducts = await getDocs(productsCollection);
        // const querySnapshot = await getDocs(collection(db, "generalProducts"));
        setSearchProducts(dataProducts.docs.map((doc) => ({...doc.data(), id: doc.id }) ));
        console.log(searchProducts);
        // querySnapshot.forEach((doc) => {
        //     setSearchProducts(doc.data)
        //   // doc.data() is never undefined for query doc snapshots
        //   console.log(doc.id, " => ", doc.data());
        // });

    }

    // Creating a state for search input
    const [search, setSearch] = useState("");
    const handleChange = (e) =>{
        setSearch(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        getProductsFromSearch();
        // const filter = (search) =>{
        //     let resultadoBusqueda = db.filter((product) =>{
        //         if ((product.title).toString().toLowerCase().includes(search.toLowerCase())){
        //             return product
        //         }
            
        //     })
        //     setSearchProducts(resultadoBusqueda)
            
        // }

        
    }

    console.log('search', search);
    return(
        <nav className="navbar navbar-expand-md navbar-expand-lg bg-light">
            <div className="container-fluid">
            <Link to="/" className="nav-link"> Logo </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse flex-column p-1" id="navbarSupportedContent">
                    {/* SearchBar */}
                    <form className="d-flex  form" role="search" onSubmit={handleSubmit}>
                        <input className="form-control me-2 " type="search" name="search" onChange={handleChange} placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    <ul className="navbar-nav mb-2 mb-lg-0 w-75">
                        <li className="nav-item">
                            <Link to="/" className="nav-link"> Home </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="#" className="nav-link"> Category 1 </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="#" className="nav-link"> Category 2 </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="#" className="nav-link"> Category 3 </Link>
                        </li>
                    </ul>
                </div>
                <div className="nav-user  d-flex justify-content-evenly">
                    {/*  CONDICIONAL PARA MOSTRAR LOG IN O LOG OUT   */}
                {user ? (
                    <Link to="/" className="nav-item" onClick={() => {setUser(null)}}>Log Out<i className="bi bi-person-check-fill ms-1"></i></Link>
                    )
                    : (
                    <Link to="/login" className="nav-item">Log in <i className="bi bi-person ms-1"></i></Link>   

                    )
                }

                    <div>
                        <Link to='#'>Purchase History</Link>
                    </div>
                    <div>
                        <Link to='/cart'> <i className="bi bi-cart"></i>(0) </Link>
                    </div>
                </div>

            </div>
            </nav>
    )
}