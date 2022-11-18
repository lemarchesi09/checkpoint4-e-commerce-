import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useUserContext } from "../context/userContext";
//redux functions
import { useSelector } from "react-redux";
import "../styles/PurchaseForm.css";
import { useState, useEffect } from "react";

const PurchaseForm = () => {
  const { user } = useUserContext();
  const [acumulator, setAcumulator] = useState(0);
  const [qtyCatch, SetQtyCatch] = useState(0);
  const cartItems = useSelector((products) => products.item);

  useEffect(() => {
    let ActualQuantity = 0;
    let ActualPrice = 0;
    cartItems.forEach((element) => {
      ActualQuantity += element.quantity;
      ActualPrice += parseInt(element.item.price)
    });
   
    setAcumulator(ActualPrice.toFixed(3));
    SetQtyCatch(ActualQuantity);
  }, []);

  return (
    <div className="PurchaseForm">
      <Card className=" cards cardContainer">
        <Card className="card">
          <Card.Body>
            <Card.Title className="card-title">Purchase Form</Card.Title>
            <Card.Text className="text row">
              <input className="mb-3" type="text" placeholder="Name" />
              <input className="mb-3" type="text" placeholder="Address" />
              <input className="mb-3" type="text" placeholder="Zip Code" />
              <input className="mb-3" type="email" placeholder="E-mail" />
              <textarea className="mb-3" placeholder="Observations" />
            </Card.Text>
            <div className="buttons">
              <Button variant="outline-success">Check Cart</Button>
              <Button variant="outline-primary" className="mx-3">
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
                        {cartItems.map((item) => (
                          <tbody>
                            <tr>
                              <td>
                                <div class="d-flex flex-column product-details">
                                  <span class="font-weight-bold">
                                    {item.item.title.slice(0,10)}...
                                  </span>
                                      {/* <div class="d-flex flex-row product-desc">
                                    <div class="size mr-1">
                                      <span class="text-grey">Size:</span>
                                      <span class="font-weight-bold">&nbsp;M</span>
                                    </div>
                                  </div>
                                  <div class="d-flex flex-row product-desc">
                                    <div class="color">
                                      <span class="text-grey">Color:</span>
                                      <span class="font-weight-bold">&nbsp;Grey</span>
                                    </div>
                                  </div> */}
                                </div>
                              </td>
                              <td>{item.quantity}</td>
                              <td>${item.item.price}</td>
                            </tr>
                          </tbody>
                        ))}
                      </Table>
                    </ListGroup.Item>
                  
                  </ListGroup>
               
                </div>
                 <h4 className="my-3">Total value: ${qtyCatch * acumulator} </h4>
            </Card.Text>
          </Card.Body>
        </Card>
      </Card>
    </div>
  );
};

export default PurchaseForm;
