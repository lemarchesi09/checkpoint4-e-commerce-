import { Routes, Route } from "react-router-dom";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { NavBar } from "./components/NavBar";
import { Home } from "./components/Home";
import { Footer } from "./components/Footer";
import { AboutUs } from "./components/AboutUs";
import "./index.css";
import { UserProvider } from "./context/userContext";
import { CreateProduct } from "./components/CreateProduct";
import { ProductForm } from "./components/ProductForm";
import { Products } from "./components/Products";
//import { useSelector } from "react-redux";
import ItemDetails from "./components/ItemDetails";
import { Cart } from "./components/Cart";

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
          <Route path="/aboutUs" element={<AboutUs />}/>
          <Route path="/itemDetails/:id/" element={<ItemDetails />}/>
          <Route path="/product" element={<ProductForm />} />
          <Route path="/productlist" element={<Products />} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>

        <Footer />
      </div>
    </UserProvider>
  );
}
export default App;
