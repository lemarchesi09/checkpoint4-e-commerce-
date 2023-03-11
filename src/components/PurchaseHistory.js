
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
    useEffect (() =>{
        getPurchases()
        
    }, [])

    return (
        <div>

            <div className="container">
            <h2 className="pt-3">Orders</h2>
                {history && history.reverse().map((item, index ) =>{
                    return(  
                                <Card className="card my-5" style={{backgroundColor: "#efefef"}}>
                                    <Card.Body key={index}>
                                        <Card.Title className="card-title">{item.date}</Card.Title>
                                        <Card.Text className="text row">
                                        <div>
                                            <ListGroup>
                                            <ListGroup.Item>
                                                <Table>
                                                <thead>
                                                    <tr>
                                                    <th className="">Product</th>
                                                    <th>Quantity</th>
                                                    <th>Price</th>
                                                    </tr>
                                                </thead>
                                                    
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
                                    <h4 className="my-3">Total value: ${item?.totalValue} </h4>
                                    </Card.Text>
                                </Card.Body>
                                </Card>
                    )
                })}
            </div>
        </div>
    )
}