import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import "../styles/PurchaseForm.css";
const PurchaseForm = () => {
  return (
    <div className="PurchaseForm">
      <Card className=" cards cardContainer">
        <Card className="card">
          <Card.Body>
            <Card.Title className ="card-title">Purchase Form</Card.Title>
            <Card.Text className="text row">
              <input className="mb-3" type="text" placeholder="Name"/>
              <input  className="mb-3" type="text" placeholder="Address"/>
              <input  className="mb-3" type="text" placeholder="Zip Code"/>
              <input  className="mb-3" type="email" placeholder="E-mail"/>
              <textarea className="mb-3" placeholder="Observations"/>
            </Card.Text>
            <div className="buttons">
              <Button variant="outline-success">Check Cart</Button>
              <Button variant="outline-primary" className="mx-3">Submit</Button>
            </div>
          </Card.Body>
        </Card>
        <Card className="card">
          <Card.Body>
            <Card.Title className ="card-title">Purchase Details</Card.Title>
            <Card.Text className="text row">
              <h3>Purchase Resume</h3>
              <ListGroup>
                <ListGroup.Item>
                  <Table>
                    <thead>
                      <tr>
                        <th className="w-4">Product</th>
                        <th>Quantity</th>
                        <th>Cost</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div class="d-flex flex-column product-details"><span class="font-weight-bold">Basic T-shirt</span>
                            <div class="d-flex flex-row product-desc">
                                <div class="size mr-1"><span class="text-grey">Size:</span><span class="font-weight-bold">&nbsp;M</span></div>
                            </div>
                            <div class="d-flex flex-row product-desc">
                                <div class="color"><span class="text-grey">Color:</span><span class="font-weight-bold">&nbsp;Grey</span></div>
                            </div>
                          </div>
                        </td>
                        <td>2</td>
                        <td>$20.00</td>
                      </tr>
                    </tbody>
                  </Table>
                </ListGroup.Item>
              </ListGroup>
              <h4>Total value: </h4>
            </Card.Text>
          </Card.Body>
        </Card>
      </Card>
    </div>
  );
};

export default PurchaseForm;
