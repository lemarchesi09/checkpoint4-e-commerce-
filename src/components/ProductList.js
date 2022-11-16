import { db } from "../firebase/firebase";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import "../styles/ProductList.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Link } from "react-router-dom";

const MySwal = withReactContent(Swal);

export const ProductList = () => {
  const [products, setProducts] = useState([]);
  const productsCollection = collection(db, "generalProducts");

  const getProducts = async () => {
    const dataProducts = await getDocs(productsCollection);
    setProducts(dataProducts.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const confirmDeleteProduct = (id) => {
    MySwal.fire({
      title: "Are you sure to delete this product?",
      text: "This action can't be reversed!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProduct(id);
      }
    });
  };

  const deleteProduct = async (id) => {
    const productToDelete = doc(db, "generalProducts", id);
    try {
      await deleteDoc(productToDelete);
      MySwal.fire({
        title: "Deleted!",
        text: "Your product has been deleted.",
        icon: "success",
        confirmButtonText: "Ok",
      });
    } catch (error) {
      MySwal.fire({
        title: "Error!",
        text: "Your product has not been deleted.",
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
    getProducts();
  };

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="productsContainer">
        <table className="productsTable">
          <thead>
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => {
              return (
                <tr key={product.id}>
                  <td>
                    <i className="fab fa-angular fa-lg text-danger me-3"></i> <strong>{product.title}</strong>
                  </td>
                  <td>{product.category}</td>
                  <td>{product.price}</td>
                  <td>{product.stock}</td>
                  <td>{product.description}</td>
                  <td>
                    <Link to={`/admin/update/${product.id}`}>
                      <button type="button" className="btn btn-primary">
                        <i className="far fa-eye">Update</i>
                      </button>
                    </Link>
                    <button type="button" className="btn btn-danger" onClick={() => confirmDeleteProduct(product.id)}>
                      <i className="far fa-trash-alt">Delete</i>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
