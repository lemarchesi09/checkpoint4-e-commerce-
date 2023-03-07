import React, { useState } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import "../styles/card.css";
import { useNavigate } from "react-router-dom";
    
//context 
import { useUserContext } from "../context/userContext";
const PaymentMethod = () => {
  // actual data about user 
  const { user, setUser } = useUserContext();
  const [cc, setCC] = useState({
    number: "",
    name: "",
    expiry: "",
    cvc: "",
    focus: "",
  });

  console.log('user en payment method', user);
  const navigate = useNavigate();

  const { number, name, expiry, cvc, focus } = cc;

  const handleInputFocus = (e) => {
    setCC({ ...cc, focus: e.target.name });
  };

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setCC({ ...cc, [name]: value });
  };

  const saveCC =(e)=>{
    e.preventDefault()
    setUser({...user,cc:cc})
    console.log(user)
    navigate("/PaymentConfirm")
  }
  return (
    <div>
      <Cards
        name={name}
        number={number}
        expiry={expiry}
        cvc={cvc}
        focused={focus}
      />
      <form className=" container " onSubmit={saveCC}>
        <div className="container-inputs d-flex flex-column justify-content-center">
          <div className="input-name">
            <input
              type="text"
              name="name"
              placeholder="Name Card"
              required
              onFocus={handleInputFocus}
              onChange={handleInputChange}
              value={name}
            />
          </div>
          <div className="input-number">
            <input
              type="tel"
              name="number"
              placeholder="Card Number"
              required
              maxLength={16}
              onFocus={handleInputFocus}
              onChange={handleInputChange}
              value={number}
            />
          </div>
          <div className="input-expire">
            <input
              type="tel"
              name="expiry"
              placeholder="Expiry Date"
              required
              maxLength={4}
              onFocus={handleInputFocus}
              onChange={handleInputChange}
              value={expiry}
            />
          </div>
          <div className="input-cvc">
            <input
              type="tel"
              name="cvc"
              placeholder="CVC"
              required
              maxLength={3}
              onFocus={handleInputFocus}
              onChange={handleInputChange}
              value={cvc}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">SaveCC</button>
      </form>
    </div>
  );
};

export default PaymentMethod;
