
import { db } from "../firebase/firebase";
import { collection, doc, getDocs, getDoc, getFirestore, query, where, } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useUserContext } from "../context/userContext";

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

    console.log('user', user);
    console.log('history', history);
    return (
        <div>
            <h2>Purchase History</h2>

            <div className="container">
                {history.map((item, ) =>{
                
                    // console.log('data', item);
                    // const filtered = history.filter(function(element){
                    //     console.log('element', element);
                    //     return element["user"] === user;
                    //   });
                    //   console.log('filtrad', filtered);
                    
                    return(
                        <div key={item.useriId}>
                            <p>Date 15 de noviembre de 2022{item.userId}</p>
                            <hr/>
                            <div>
                                <img/>
                                <div>
                                    <p>Nombre: {item.shippingInfo?.name}</p>
                                    <p>Address: {item.shippingInfo?.Adress}</p>
                                    <span>Completo</span>
                                    <p>Titulo</p>
                                </div>
                                
                            </div>
                        </div>

                    )
                })}
            </div>
        </div>
    )
}