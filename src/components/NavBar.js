import { Link } from "react-router-dom";

import {user, setUser, useUserContext} from "../context/userContext";
import "../styles/navBar.css";

export const NavBar = () =>{
    // User from context
    const {user, setUser} = useUserContext();
    console.log('user en NavBar', user);

    return(
        <nav className="navbar navbar-expand-md navbar-expand-lg bg-light">
            <div className="container-fluid">
            <Link to="/" className="nav-link"> Logo </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse flex-column p-1" id="navbarSupportedContent">
                    <form className="d-flex  form" role="search">
                        <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search"/>
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
                    <Link to="/" className="nav-item" onClick={() => {setUser(null)}}>Log Out <i className="bi bi-person-check-fill ms-1"></i></Link>
                    )
                    : (
                    <Link to="/login" className="nav-item">Log in <i className="bi bi-person ms-1"></i></Link>   

                    )
                }

                    <div>
                        <Link to='#'>Purchase History</Link>
                    </div>
                    <div>
                        <Link to='/cart'> <i class="bi bi-cart"></i>(0) </Link>
                    </div>
                </div>

            </div>
            </nav>
    )
}