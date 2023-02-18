import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, updateItem } from "../../src/features/item/itemSlice";
import { db } from "../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useNavigate, useParams } from "react-router-dom";
//import { useUserContext } from "../context/userContext";
import "../styles/itemDetails.css";

const ItemDetails = () => {
  //const { user, setUser } = useUserContext();
  const { id } = useParams();
  const [count, setCount] = useState(1);
  //const navigate = useNavigate();

  const [itemQty, setItemQty] = useState({
    item: {},
    quantity: count,
  });

  const { title, price, description, image, category, stock } = itemQty.item;

  const stateItem = useSelector((state) => state.item);

  const dispatch = useDispatch();

  const productsCollection = collection(db, "generalProducts");

  const getProducts = async () => {
    try {
      const dataProducts = await getDocs(productsCollection);
      const items = dataProducts.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      const item = items.find((item) => item.id === id);
      setItemQty({ ...itemQty, item: item });
    } catch (error) {
      console.log(error);
    }
  };

  const increasebutton = () => {
    const newValue = count + 1;
    if (newValue <= stock) {
      setCount(newValue);
    }
    setItemQty({ ...itemQty, quantity: newValue });
  };

  const decreaseButton = () => {
    const newValue = count - 1;
    if(newValue<=0){
      
    }else{
      newValue >= itemQty.quantity && setCount(newValue);
      setItemQty({ ...itemQty, quantity: newValue });
    }

  };

  const addToCart = () => {
    if (stateItem.some((item) => item.item.id === itemQty.item.id)) {
      dispatch(updateItem({ ...itemQty.item.id, quantity: itemQty.quantity }));
    } else {
      dispatch(addItem(itemQty));
    }
  };

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="p-4">
      <div className="card col-md-4 w-100 ">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={image} className="img-fluid rounded-start" alt=" Product img" />
          </div>
          <div className="col-md-6">
            <div className="card-body d-flex  flex-column justify-content-center">
              <p className="card-text">
                <span>{category}</span>.
              </p>
              <h5 className="card-title">{title}</h5>
              <p className="card-text text-description">{description}.</p>
              <p className="card-text">${price}</p>
              <p className="card-text">
                <small className="text-muted"> stock: {stock}</small>
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
            <div className=" row-md-2 d-flex justify-content-around">
              <div className="card_input_count d-flex">
                <button className="btn btn-primary btn-det" onClick={decreaseButton}>
                  -
                </button>
                {count}
                <button className="btn btn-primary btn-det" onClick={increasebutton}>
                  +
                </button>
              </div>

              <div className="card-buttons d-flex  col-md-6 gap-4  ">
                <div className="card-button_buy">
                  <button className="btn btn-primary ">Buy now</button>
                </div>
                <div className="card-button_Add ">
                  <button className="btn btn-primary" onClick={addToCart}>
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
