import React, { useState } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import "../styles/card.css";
const PaymentMethod = () => {
    const [dataCard, setDataCard] = useState({
        number:'',
        name:'',
        expiry :'',
        cvc:'',
    })
    const [focus, setFocus] =useState('')
//   const [number, setNumber] = useState("");
//   const [name, setName] = useState("");
//   const [expiry, setExpiry] = useState("");
//   const [cvc, setCvc] = useState("");
//   const [focus, setFocus] = useState("");
const {name,number,expiry,cvc} = dataCard
console.log(dataCard.number);
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
              value={dataCard.name}
              onChange={(e) => setDataCard({name:e.target.value})}
            />
          </div>
          <div className="input-number">
            <input
              type="tel"
              name="number"
              placeholder="Card Number"
              onFocus={(e) => setFocus(e.target.name)}
              value={dataCard.number}
              onChange={(e) => setDataCard({number:e.target.value})}
            />
          </div>
          <div className="input-expiry">
            <input
              type="text"
              name="expiry"
              placeholder="expiry"
              onFocus={(e) =>setFocus(e.target.name)}
              value={dataCard.expiry}
              onChange={(e) => setDataCard({expiry:e.target.value})}
            />
          </div>
          <div className="input-cvc">
            <input
              type="tel"
              name="cvc"
              placeholder="CVC"
              onFocus={(e) => setFocus(e.target.name)}
              value={dataCard.cvc}
              onChange={(e) => setDataCard({cvc:e.target.value})}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default PaymentMethod;
