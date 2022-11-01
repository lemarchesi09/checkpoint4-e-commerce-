import { Register } from "./Register"
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import "../styles/login.css";
import firebaseApp from '../firebase/firebase';
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {user, setUser, useUserContext} from "../context/userContext";

export const Login = () =>{

    const {user, setUser} = useUserContext();
    const navigate = useNavigate();
    const auth = getAuth(firebaseApp);

    // console.log('User en login', userLogged);

    // onAuthStateChanged(auth, (userFromFirebase) => {
    //     if (userFromFirebase){
    //         setUser(userFromFirebase)
    //     }else {
    //         setUser(null);
    //     }
    // })

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

    const onSubmit = (data, e) =>{
        e.preventDefault();
        const email = data.email;
        const password = data.password;
    
        try {
            (signInWithEmailAndPassword(auth, email, password))
            .then(userCredential => {
                const userLogged = {
                    email: userCredential.user.email,
                    id: userCredential.user.uid
                }
                console.log(userCredential);

                // Seting user in Context with setUser imported
                setUser(userLogged)
                console.log(user);
                navigate("/")

            })

            
        } catch (error) {
            console.log('Error', error);
        }
        
    }

    

    return(
        <div className="d-flex flex-column align-items-center">
            Login
            <div className="">
                <h1>Welcome to Free Market</h1>
                <p>You'll find everything you need</p>
            </div>
            <div className="form__cont">
            {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
            <form className="d-flex flex-column align-items-center border border-top-0 border-primary p-3 rounded-bottom" onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <label>Email:</label>
                <input
                className="form__inp"
                type="email"
                placeholder="Enter your email"
                autoComplete="off"
                {...register("email", {
                    required: {
                    value: true,
                    message: "Email is required",
                    },
                    maxLength: {
                    value: 30,
                    message: "Field must be less than 30 characters",
                    },
                })}
                />
    
                {/* errors will return when field validation fails  */}
                {errors.email && <span>{errors.email.message}</span>}
    
                <label>Password:</label>
                <input
                className="form__inp"
                type="password"
                placeholder="Enter Password"
                autoComplete="off"
                {...register("password", {
                    required: {
                    value: true,
                    message: "Password is required",
                    },
                    maxLength: {
                    value: 20,
                    message: "Field must be less than 20 characters",
                    },
                    minLength: {
                    value: 6,
                    message: "Field must contain more than 6 characters",
                    },
                })}
                />
                {errors.password && <span>{errors.password.message}</span>}
    
                <input className="form__sub" type="submit" value="LOG IN" />
                <p className="formu__signUp">
                Don't have an account yet?{" "}
                <Link to="/register" className="formu__signUp__link">
                    SIGN UP
                </Link>
                </p>
            </form>
            </div>
        </div>
    )
}

