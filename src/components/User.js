import { Routes, Route, Navigate } from "react-router-dom";
import { useUserContext } from "../context/userContext";
import Cart from "./Cart";
import PurchaseForm from "./PurchaseForm";

export const User = () => {
  const { user } = useUserContext();
  return (
    <div>
      {user?.role === "user" ? (
        <>
          <Routes>
            <Route path="/cart/*" element={<Cart />} />
            <Route path="/purchaseForm/*" element={<PurchaseForm />} />
          </Routes>
        </>
      ) : (
        <>
          <Navigate to={"/"}></Navigate>
        </>
      )}
    </div>
  );
};
