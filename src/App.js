import { Routes, Route, Link } from "react-router-dom";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { NavBar } from "./components/NavBar";
import { Home } from "./components/Home";
import "./index.css";
import { UserProvider } from "./context/userContext";
import { CreateProduct } from "./components/CreateProduct";
import { ProductForm } from "./components/ProductForm";
import { ProductList } from "./components/ProductList";
import { useSelector } from "react-redux";
import ItemDetails from "./components/ItemDetails";
import { ProductUpdate } from "./components/ProductUpdate";
import { SideBar } from "./components/SideBar";
import { ProSidebarProvider } from "react-pro-sidebar";

function App() {
  // const products = useSelector((state) => state.products);
  // console.log("products", products);

  return (
    <UserProvider>
      <div className="App">
        <NavBar />
        {/* <ProSidebarProvider>
          <SideBar />
        </ProSidebarProvider> */}
        ;
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create" element={<CreateProduct />} />
          <Route path="/itemDetails/:id/" element={<ItemDetails />} />
          <Route path="/productform" element={<ProductForm />} />
          <Route path="/productlist" element={<ProductList />} />
          <Route path="/update/:id" element={<ProductUpdate />} />
        </Routes>
      </div>
    </UserProvider>
  );
}
export default App;
