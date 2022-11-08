import { db } from "../firebase/firebase";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import "../styles/Products.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export const Products = () => {
  const [products, setProducts] = useState([]);
  const productsCollection = collection(db, "generalProducts");
  const getProducts = async () => {
    const dataProducts = await getDocs(productsCollection);
    setProducts(dataProducts.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const confirmDeleteProduct = (id) => {
    console.log("id", id);
    MySwal.fire({
      title: "Are you sure to delete this product?",
      text: "This action don't have reverse!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      console.log("result", result);
      if (result.isConfirmed) {
        deleteProduct(id);
      }
    });
  };

  const deleteProduct = async (id) => {
    const productToDelete = doc(db, "products", id);
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
  }, []);

  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-12">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Category</th>
                  <th scope="col">Price</th>
                  <th scope="col">Stock</th>
                  <th scope="col">Description</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => {
                  return (
                    <tr key={product.id}>
                      <td>
                        <i class="fab fa-angular fa-lg text-danger me-3"></i> <strong>{product.title}</strong>
                      </td>
                      <td>{product.category}</td>
                      <td>{product.price}</td>
                      <td>{product.stock}</td>
                      <td>{product.description}</td>
                      <td>
                        <button type="button" class="btn btn-primary">
                          <i class="far fa-eye">Update</i>
                        </button>
                        <button type="button" class="btn btn-danger" onClick={() => confirmDeleteProduct(product.id)}>
                          <i class="far fa-trash-alt">Delete</i>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
