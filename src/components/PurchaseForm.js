import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useUserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
//redux functions
import { useSelector } from "react-redux";
import "../styles/PurchaseForm.css";
import { useState, useEffect } from "react";

const PurchaseForm = () => {
  const { user, setUser } = useUserContext();
  const cartItem = useSelector((state) => state.item);

  const navigate = useNavigate();
  const [acumulator, setAcumulator] = useState(0);
  const [qtyCatch, SetQtyCatch] = useState(0);
  const [totalValue,setTotalValue]=useState(0);
  const [dataUser, setDataUser] = useState({
    name: "",
    email: "",
    Adress: "",
    ZipCode: "",
  });
  console.log('cartItem', cartItem);


  const date = Date()
  const sendData = (e) => {
    e.preventDefault();
    if (
      dataUser.name === "" ||
      dataUser.email === "" ||
      dataUser.Adress === "" ||
      dataUser.ZipCode === ""
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "All fields are required!",
      });
    } else {
      navigate("/PaymentMethod");
      setUser({ ...user, dataForm: dataUser, ItemCart: cartItem ,totalValue: totalValue, date: date});
    }
  };
  useEffect(() => {
    let ActualQuantity = 0;
    let ActualPrice = 0;
    cartItem.forEach((element) => {
      ActualQuantity += element.quantity;
      ActualPrice += parseInt(element.item.price * element.quantity);
    });

    setAcumulator(ActualPrice.toFixed(3));
    SetQtyCatch(ActualQuantity);
    setTotalValue( ActualPrice)
  }, []);
  const saveData = (e) => {
    setDataUser({ ...dataUser, [e.target.name]: e.target.value });
  };
  return (
    <div className="PurchaseForm">
      <Card className=" cards cardContainer">
        <Card className="purchase-card">
          <Card.Body>
            <Card.Title className="card-title">Purchase Form</Card.Title>
            <Card.Text className="text row">
              <input
                className="mb-3"
                type="text"
                placeholder="Name"
                name="name"
                onChange={(e) => saveData(e)}
              />
              <input
                className="mb-3"
                type="text"
                placeholder="Address"
                name="Adress"
                onChange={(e) => saveData(e)}
              />
              <input
                className="mb-3"
                type="text"
                placeholder="Zip Code"
                name="ZipCode"
                onChange={(e) => saveData(e)}
              />
              <input
                className="mb-3"
                type="email"
                placeholder="E-mail"
                name="email"
                onChange={(e) => saveData(e)}
              />
              <textarea className="mb-3" placeholder="Observations" />
            </Card.Text>
            <div className="buttons">
              <Button variant="outline-success">Check Cart</Button>
              <Button
                variant="outline-primary"
                className="mx-3"
                type="submit"
                onClick={sendData}
              >
                Submit
              </Button>
            </div>
          </Card.Body>
        </Card>
        <Card className="card">
          <Card.Body>
            <Card.Title className="card-title">Purchase Details</Card.Title>
            <Card.Text className="text row">
              <h3>Purchase Resume</h3>
              <div>
                <ListGroup>
                  <ListGroup.Item>
                    <Table>
                      <thead>
                        <tr>
                          <th className="w-4">Product</th>
                          <th>item</th>
                          <th>Cost</th>
                        </tr>
                      </thead>
                      {cartItem.map((item) => (
                        <tbody>
                          <tr>
                            <td>
                              <div class="d-flex flex-column product-details">
                                <span class="font-weight-bold">
                                  {item.item.title.slice(0, 10)}...
                                </span>
                              </div>
                            </td>
                            <td>{item.quantity}</td>
                            <td>${item.item.price * item.quantity}</td>
                          </tr>
                        </tbody>
                      ))}
                    </Table>
                  </ListGroup.Item>
                </ListGroup>
              </div>
              <h4 className="my-3">Total value: ${totalValue} </h4>
            </Card.Text>
          </Card.Body>
        </Card>
      </Card>
    </div>
  );
};

export default PurchaseForm;
