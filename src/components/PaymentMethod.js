import React, { useState } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import "../styles/card.css";
const PaymentMethod = () => {

  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [focus, setFocus] = useState("");

  return (
    <div>
      <Cards
        name={name}
        number={number}
        expiry={expiry}
        cvc={cvc}
        focused={focus}
      />
      <form className=" container ">
        <div className="container-inputs d-flex flex-column justify-content-center">
          <div className="input-name">
            <input
              type="text"
              name="name"
              placeholder="Name Card"
              onFocus={(e) => setFocus(e.target.name)}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="input-number">
            <input
              type="tel"
              name="number"
              placeholder="Card Number"
              onFocus={(e) => setFocus(e.target.name)}
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>
          <div className="input-expiry">
            <input
              type="text"
              name="expiry"
              placeholder="expiry"
              onFocus={(e) => setFocus(e.target.name)}
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
            />
          </div>
          <div className="input-cvc">
            <input
              type="tel"
              name="cvc"
              placeholder="CVC"
              onFocus={(e) => setFocus(e.target.name)}
              value={cvc}
              onChange={(e) => setCvc(e.target.value)}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default PaymentMethod;
