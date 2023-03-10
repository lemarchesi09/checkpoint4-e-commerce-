
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
        try {
            const dataPurchases = await getDocs(purchasesCollection);
            setHistory(dataPurchases.docs.map((doc) => doc.data()))
            
        } catch (error) {
            
        }
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
                {history && history.map((item, index ) =>{
                    return(  
                                <Card className="card">
                                    <Card.Body key={index}>
                                        <Card.Title className="card-title">{item.date}</Card.Title>
                                        <Card.Text className="text row">
                                        <div>
                                            <ListGroup>
                                            <ListGroup.Item>
                                                <Table>
                                                <thead>
                                                    <tr>
                                                    <th className="w-4">Product</th>
                                                    <th>Quantity</th>
                                                    <th>Price</th>
                                                    
                                                    </tr>
                                                </thead>
                                                {/* {Object.values(item.dataProducts).map(product => 
                                                    (<li key={product.item.category}>{product.item.title}</li>))} */}
                                                    
                                                    {item.ItemCart && item.ItemCart.map((product) => {
                                                        return(
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                {product.item.title.length >= 20 ? product.item.title.slice(0, 30)+`...` : product.item.title}
                                                                </td>
                                                                <td>
                                                                {product.quantity}
                                                                </td>
                                                                <td>
                                                                {product.item.price}
                                                                </td>

                                                            </tr>
                                                        </tbody>       

                                                        )
                                            })}
                                                

            
                                            </Table>
                                            
                                        </ListGroup.Item>
                                        </ListGroup>
                                    </div>
                                    <h4 className="my-3">Total value: $ </h4>
                                    </Card.Text>
                                </Card.Body>
                                </Card>
                    )
                })}
            </div>
        </div>
    )
}