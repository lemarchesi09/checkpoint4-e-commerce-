import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Table from "react-bootstrap/Table";
import { useUserContext } from "../context/userContext";
import { db } from "../firebase/firebase";
import { collection, addDoc, doc, updateDoc, increment } from "firebase/firestore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useDispatch, useSelector } from "react-redux";
import { resetCart } from "../features/item/itemSlice";

export const PaymentConfirm = () =>{

    // Codigo para disminuir el stock de los productos
    // const washingtonRef = doc(db, "cities", "DC");

    // // Atomically increment the population of the city by 50.
    // await updateDoc(washingtonRef, {
    //     population: increment(-50)
    // });


    const MySwal = withReactContent(Swal);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { user, setUser } = useUserContext();
    const {ItemCart, cc, dataForm, totalValue} = user

    const cartItem = useSelector((state) => state.item);

    // const stateItem = useSelector((state) => state.item);
    // console.log('estoy en confirm viendo el estado', stateItem);

    const purchasesCollection = collection(db, "purchases");

    const date = Date()
    const [purchase, setPurchase] = useState({})

    
    const removeCart = () =>{
      dispatch(resetCart())
    }
    
    const sendPurchase = async() =>{
      try {
        await addDoc(purchasesCollection, purchase);
        
        MySwal.fire({
          title: "Success!",
          text: "Your purchase has been confirmed",
          icon: "success",
          confirmButtonText: "Ok",
        });
        removeCart();
        navigate("/");
      } catch (error) {
        MySwal.fire({
          title: "Error!",
          text: "Something went wrong",
          icon: "error",
          confirmButtonText: "Ok",
        });
        console.log(error);
      }
    }

    useEffect(() =>{
      setPurchase({
        userId: user.uid,
        ItemCart,
        dataPurchase: cc,
        shippingInfo: dataForm,
        date: date,
        totalValue
      })
      console.log('user en payment confirm', user);
    },[])
    
 return(
    <>
    <div className="container">
    {/* <h2>Check Info </h2> */}
        <Card className="card">
          <Card.Body>
            <Card.Title className="card-title">Purchase Summary</Card.Title>
            <Card.Text className="text row">
              <div>
                <ListGroup>
                  <ListGroup.Item>
                    <Table>
                      <thead >
                        <h4 className="pt-3 fw-bold">Cart</h4>
                        <tr>
                          <th className="w-4">Product</th>
                          <th>Item</th>
                          <th>Cost</th>
                        </tr>
                      </thead>
                      {user.ItemCart.map((item) => (
                        <tbody key={item.item.id}>
                          <tr>
                            <td>
                              <div class="d-flex flex-column product-details">
                                <span class="font-weight-bold">
                                  {item.item.title.slice(0, 30)}...
                                </span>
                              </div>
                            </td>
                            <td>{item.quantity}</td>
                            <td>${item.item.price}</td>
                          </tr>
                        </tbody>
                      ))}

                    </Table>
                    <Table >
                      <thead>
                          <h4 className="pt-3 fw-bold">Shipping information</h4>
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

        <button type="submit" className="btn btn-success mt-3" onClick={sendPurchase}>
                Confirm
        </button>
    </div>
    </>
 )   
}