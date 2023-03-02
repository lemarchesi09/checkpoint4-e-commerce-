import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useUserContext } from "../context/userContext";

export const PaymentConfirm = () =>{

    const { user, setUser } = useUserContext();
    console.log('user en confirm', user.dataForm.Adress);
    
 return(
    <>
    <h2>Check Info </h2>
        <Card className="card">
          <Card.Body>
            <Card.Title className="card-title">Purchase Resume</Card.Title>
            <Card.Text className="text row">
              <div>
                <ListGroup>
                  <ListGroup.Item>
                    <Table>
                      <thead>
                        <h4>Cart</h4>
                        <tr>
                          <th className="w-4">Product</th>
                          <th>Item</th>
                          <th>Cost</th>
                        </tr>
                      </thead>
                      {user.ItemCart.map((item) => (
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
                            <td>${item.item.price}</td>
                          </tr>
                        </tbody>
                      ))}
                      <thead>
                        <h4>Shipping information</h4>
                        <tr>
                            <th className="w-4">Address</th>     
                            <th>Zip Code</th>
                            <th>Contact e-mail</th>
                            
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                            <td>{user.dataForm.Adress}</td>
                            <td>{user.dataForm.ZipCode}</td>
                            <td>{user.dataForm.email}</td>
                        </tr>
                      </tbody>
                    </Table>
                    
                  </ListGroup.Item>
                </ListGroup>
              </div>
              <h4 className="my-3">Total value: ${user.totalValue} </h4>
            </Card.Text>
          </Card.Body>
        </Card>
        <button type="submit" className="btn btn-success">
                Confirm
        </button>
    </>
 )   
}