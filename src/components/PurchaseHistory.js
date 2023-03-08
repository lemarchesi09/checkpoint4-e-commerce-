
import { db } from "../firebase/firebase";
import { collection, doc, getDocs, getDoc, getFirestore, query, where, } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useUserContext } from "../context/userContext";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Table from "react-bootstrap/Table";

export const PurchaseHistory = () =>{

    const {user} = useUserContext();
    const [history, setHistory] = useState([{}])
    const purchasesCollection = collection(db, "purchases");

    const getPurchases = async () => {
        const dataPurchases = await getDocs(purchasesCollection);
        setHistory(dataPurchases.docs.map((doc) => doc.data()))
    }

    // const result = history.filter((item  => item.userId === user.uid ));

    useEffect (() =>{
        getPurchases()
        
    }, [])


    console.log('tratando de entrar a los productos',history);
    return (
        <div>
            <h2>Purchase History</h2>

            <div className="container">
                {history.map((item, index ) =>{
                
                    // console.log('data', item);
                    // const filtered = history.filter(function(element){
                    //     console.log('element', element);
                    //     return element["user"] === user;
                    //   });
                    //   console.log('filtrad', filtered);
                    
                    return(
                        <div key={index}>
                            <span>{item?.date}</span>
                            <hr/>
                            <div>
                                <img/>
                                <div>
                                    <p>Name: {item.shippingInfo?.name}</p>
                                    <p>Address: {item.shippingInfo?.Adress}</p>
                                    <p>Date: {item?.date}</p>
                                    <span>Completo</span>
                                    <p>Titulo</p>
                                </div>
                                <Card className="card">
                                    <Card.Body key={index}>
                                        <Card.Title className="card-title">{item?.date}</Card.Title>
                                        <Card.Text className="text row">
                                        <div>
                                            <ListGroup>
                                            <ListGroup.Item>
                                                <Table>
                                                <thead>
                                                    <tr>
                                                    <th className="w-4">Product</th>
                                                    <th>Item</th>
                                                    <th>Cost</th>
                                                    </tr>
                                                </thead>
                                        
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                    
                                                        </td>
                                                        <td>

                                                        </td>
                                                        <td>

                                                        </td>

                                                    </tr>
                                                </tbody>       

            
                                            </Table>
                                            
                                        </ListGroup.Item>
                                        </ListGroup>
                                    </div>
                                    <h4 className="my-3">Total value: $ </h4>
                                    </Card.Text>
                                </Card.Body>
                                </Card>
                                                        
                            </div>
                        </div>

                    )
                })}
            </div>
        </div>
    )
}