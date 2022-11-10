import { Routes, Route, Link, Navigate } from "react-router-dom";
import { SideBar } from "./SideBar";
import { ProSidebarProvider } from "react-pro-sidebar";
import { ProductForm } from "./ProductForm";
import { ProductList } from "./ProductList";
import { ProductUpdate } from "./ProductUpdate";
import { useUserContext } from "../context/userContext";

export const Admin = () =>{
    const {user} = useUserContext();
    return(
        <div>
            {user?.role === "admin"  ? 
            <>
            
            <Routes>
                <Route path="/productform" element={<ProductForm />} />
                <Route path="/productlist" element={<ProductList />} />
                <Route path="/update/:id" element={<ProductUpdate />} />
            </Routes>
            <ProSidebarProvider>
            <SideBar />
            </ProSidebarProvider> 
            </>
            : 
            
            <>
            <Navigate to={"/"}></Navigate>
            </>}

</div>
)
}