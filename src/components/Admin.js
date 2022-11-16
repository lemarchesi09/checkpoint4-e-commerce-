import { Routes, Route, Navigate } from "react-router-dom";
import { SideBar } from "./SideBar";
import { ProSidebarProvider } from "react-pro-sidebar";
import { ProductForm } from "./ProductForm";
import { ProductList } from "./ProductList";
import { ProductUpdate } from "./ProductUpdate";
import { useUserContext } from "../context/userContext";
import { NavBarAdmin } from "./NavBarAdmin";

export const Admin = () => {
  const { user } = useUserContext();
  return (
    <div>
      {user?.role === "admin" ? (
        <>
          <div className="d-flex justify-content-center"></div>
          <ProSidebarProvider>
            <SideBar />
          </ProSidebarProvider>
          <NavBarAdmin />
          <Routes>
            <Route path="/productform/*" element={<ProductForm />} />
            <Route path="/productlist/*" element={<ProductList />} />
            <Route path="/update/:id" element={<ProductUpdate />} />
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
