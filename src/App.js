import { Routes, Route, Link } from "react-router-dom";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { NavBar } from "./components/NavBar";
import { Home } from "./components/Home";
import "./index.css";
import { UserProvider } from "./context/userContext";
import { CreateProduct } from "./components/CreateProduct";
import { ProductForm } from "./components/ProductForm";
import { Products } from "./components/Products";
import { useSelector } from "react-redux";
import ItemDetails from "./components/ItemDetails";

function App() {
  // const products = useSelector((state) => state.products);
  // console.log("products", products);

  return (
    <UserProvider>
      <div className="App">
        <NavBar />

        <Routes>
        <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register />}/>
          <Route path="/create" element={<CreateProduct />}/>
          <Route
            path="/itemDetails/:id/"
            element={<ItemDetails />}
            />
          <Route path="/product" element={<ProductForm />} />
          <Route path="/productlist" element={<Products />} />
        </Routes>
      </div>
    </UserProvider>
  );
}
export default App;
