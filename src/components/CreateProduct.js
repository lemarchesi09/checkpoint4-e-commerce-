import { db } from "../firebase/firebase";
import { collection, addDoc } from "firebase/firestore";
import { Button } from "bootstrap";
import { useState } from "react";


export const CreateProduct = () =>{
    const productsCollection = collection(db, "generalProducts");

    const [product, setProduct] = useState({
        title: "",
        description: "",
        stock: 0,
    })

    const addProduct = async (e) =>{
        e.preventDefault();
        try{
            await addDoc(productsCollection, product)
            console.log('Producto enviado');
        }catch(error){
            console.log('Error', error);
        }
    }

    const handleChange = (e) =>{
        setProduct({
            ...product,
            [e.target.name]: e.target.value,
        })
    }
    return(
        <div>
        <h2>Create Product</h2>
        <form onSubmit={addProduct}>
            <input
                type="text"
                name="title"
                placeholder="Title"
                value={product.title}
                // onChange={(e) => setTitle(e.target.value)} // Plausible de refactorizar
                onChange={handleChange}
            />
            <input
                type="text"
                name="description"
                placeholder="Description"
                value={product.description}
                // onChange={(e) => setDescription(e.target.value)}
                onChange={handleChange}
            />
            <input
                type="number"
                name="stock"
                placeholder="Stock"
                value={product.stock}
                // onChange={(e) => setStock(e.target.value)}
                onChange={handleChange}
            />

            <button className="btn btn-success" variant="success" type="submit">
                Create Product
            </button>
        </form>
    </div>
    )
}