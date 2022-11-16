import { Routes, Route, Link, Navigate } from "react-router-dom";

import { useUserContext } from "../context/userContext";
import Cart from "./Cart";
import PurchaseForm from "./PurchaseForm";
export const User = () =>{
    const {user} = useUserContext();
    return(
        <div>
            {user?.role === "user"  && 
            <>
       
            <Routes>
                <Route path="/cart/*" element={<Cart />} />
                <Route path="/purchaseForm/*" element={<PurchaseForm />} />
            </Routes>
            </>
}

</div>
)
}