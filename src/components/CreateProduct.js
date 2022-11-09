import { db } from "../firebase/firebase";
import firebaseApp from "../firebase/firebase";
import { collection, addDoc, setDoc, doc, getFirestore } from "firebase/firestore";
import { Button } from "bootstrap";
import { useState } from "react";
import { useUserContext } from "../context/userContext";

export const CreateProduct = () => {
  const productsCollection = collection(db, "generalProducts");
  const usersCollection = collection(db, "users");
  const firestore = getFirestore(firebaseApp);

  // Get user from Context
  const { user, setUser } = useUserContext();

  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: 0,
    stock: 0,
  });

  const addProduct = async (e) => {
    e.preventDefault();
    try {
      // Add product to general store
      await addDoc(productsCollection, product);
      console.log("Producto enviado a productsCollection");
      // await setDoc(usersCollection,product )

      // Add product to personal collection
      if (user.hasOwnProperty("productsToSell")) {
        await setDoc(doc(db, "users", `/${user.uid}`), {
          ...user,
          productsToSell: [product],
        });

        console.log("Producto agregado en el usuario registrado");
      } else {
        await setDoc(doc(db, "users", `/${user.uid}`), {});
        console.log("entro en el else de productsToSell");
      }
      // const userRef = doc(db, `users/${result.user.uid}`);
      // Capturar el user logeado - Esta faltando eso
      // await setDoc(userRef, {sellerProducts: product });
    } catch (error) {
      console.log("Error", error);
    }
  };

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };
  return (
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
          type="text"
          name="price"
          placeholder="Price"
          value={product.price}
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
  );
};
