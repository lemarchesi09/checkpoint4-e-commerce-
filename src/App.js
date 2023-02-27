import { Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/userContext";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { NavBar } from "./components/NavBar";
import { Home } from "./components/Home";
import { AboutUs } from "./components/AboutUs";
import "./index.css";
import ItemDetails from "./components/ItemDetails";
import Cart from "./components/Cart";
import PurchaseForm from "./components/PurchaseForm";
import { Admin } from "./components/Admin";
import { SearchResults } from "./components/SearchResults";
import ItemList from "./components/ItemList";
import { PurchaseHistory } from "./components/PurchaseHistory";
import PaymentMethod from "./components/PaymentMethod";
import { Footer } from "./components/Footer";
function App() {
  return (
    <UserProvider>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/itemDetails/:id/" element={<ItemDetails />} />
          <Route path="/cart/*" element={<Cart />} />
          <Route path="/purchasehistory/*" element={<PurchaseHistory />} />
          <Route path="/purchaseForm/*" element={<PurchaseForm />} />
          <Route path="/PaymentMethod" element={<PaymentMethod />} />
          <Route path="/searchResults/:busqueda" element={<SearchResults />} />
          <Route path="/admin/*" element={<Admin />} />
          <Route path="/aboutUs" element={<AboutUs />} />
        </Routes>
        <Footer />
      </div>
    </UserProvider>
  );
}
export default App;
