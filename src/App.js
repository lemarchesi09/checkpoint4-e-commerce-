import { Routes, Route, Link } from "react-router-dom";
import { UserProvider, useUserContext } from "./context/userContext";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { NavBar } from "./components/NavBar";
import { Home } from "./components/Home";
import "./index.css";
import { CreateProduct } from "./components/CreateProduct";
import { ProductForm } from "./components/ProductForm";
import { ProductList } from "./components/ProductList";
import ItemDetails from "./components/ItemDetails";
import { Cart } from "./components/Cart";
import PurchaseForm from "./components/PurchaseForm";
import { ProductUpdate } from "./components/ProductUpdate";
import { SideBar } from "./components/SideBar";
import { ProSidebarProvider } from "react-pro-sidebar";
import userEvent from "@testing-library/user-event";
import { Admin } from "./components/Admin";

function App() {

  // const {user, setUser} = useUserContext();
  // console.log('user app', user);
  return (
    <UserProvider>
      <div className="App">
        {/* {user === null || user?.role === "user" &&  <h1>Hola</h1>} */}
        
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create" element={<CreateProduct />} />
          <Route path="/itemDetails/:id/" element={<ItemDetails />} />

          <Route path="/cart/*" element={<Cart/>} />
          <Route path="/PurchaseForm/*" element={<PurchaseForm/>} />
          <Route path="/admin/*" element={<Admin/>} />
        </Routes>
        
      
      </div>
    </UserProvider>
  );
}
export default App;
