import { db } from "../firebase/firebase";
import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../features/product/productsSlice";

export const ProductForm = () => {
  const productsCollection = collection(db, "generalProducts");

  const [product, setProduct] = useState({
    title: "",
    price: 0,
    category: "",
    description: "",
    image: "",
    stock: 0,
  });

  const dispatch = useDispatch();

  // const addProduct = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await addDoc(productsCollection, product);
  //     console.log("Producto creado", product);
  //   } catch (error) {
  //     console.log("Error", error);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(addProduct(await addDoc(productsCollection, product)), console.log(product));
  };

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="col-xxl">
      <div className="card mb-4">
        <h5 className="card-header d-flex align-items-center justify-content-between">Enter product details</h5>
        <form className="card-body" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="defaultFormControlInput"
              placeholder="T-Shirt"
              aria-describedby="defaultFormControlHelp"
              name="title"
              value={product.title}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Unit Price
            </label>
            <input
              type="text"
              className="form-control"
              id="defaultFormControlInput"
              aria-describedby="defaultFormControlHelp"
              name="price"
              value={product.price}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlSelect1" className="form-label">
              Category
            </label>
            <select
              className="form-select"
              id="exampleFormControlSelect1"
              aria-label="Default select example"
              name="category"
              value={product.category}
              onChange={handleChange}
            >
              <option>Open this select menu</option>
              <option value="category3">Category 1</option>
              <option value="category2">Category 2</option>
              <option value="category3">Category 3</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Stock
            </label>
            <input
              type="text"
              className="form-control"
              id="defaultFormControlInput"
              aria-describedby="defaultFormControlHelp"
              name="stock"
              value={product.stock}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="formFile" className="form-label">
              Image
            </label>
            <input
              className="form-control"
              type="file"
              id="formFile"
              name="image"
              value={product.image}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Description
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              name="description"
              value={product.description}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="row justify-content-end">
            <div className="col-sm-10">
              <button type="submit" className="btn btn-primary">
                Add product
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
