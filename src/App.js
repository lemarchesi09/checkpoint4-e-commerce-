
import { Routes, Route, Link } from "react-router-dom";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { NavBar } from "./components/NavBar";
import { Home } from "./components/Home";
import "./index.css";
import { UserProvider } from "./context/userContext";
import { CreateProduct } from "./components/CreateProduct";
import ItemDetails from "./components/ItemDetails";


function App() {
  
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
        </Routes>
        
      </div>
    
    </UserProvider>
  )
  }
export default App;
