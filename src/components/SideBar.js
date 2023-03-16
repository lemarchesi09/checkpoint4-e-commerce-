import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import { FaList, FaHistory } from "react-icons/fa";
import { FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import "../styles/SideBar.css";
import { useUserContext } from "../context/userContext";
import  Logo  from "../assets/img/logo-market.png"

export const SideBar = () => {
  const { collapseSidebar, collapsed } = useProSidebar();
  const { setUser } = useUserContext();

  return (
    <>
      <div id="sidebar">
        <Sidebar className="pro-sidebar">
          <div className="logo-side">
            <img  src={Logo}/>
            <div className="closemenu" onClick={() => collapseSidebar()}>
              {collapsed ? <FiArrowRightCircle /> : <FiArrowLeftCircle />}
            </div>
          </div>
          <Menu iconShape="square">
            <MenuItem icon={<FaList />} routerLink={<Link to="/admin/productlist" />}>
              My products
            </MenuItem>
            <MenuItem icon={<RiPencilLine />} routerLink={<Link to="/admin/productform" />}>
              Add product
            </MenuItem>
            <MenuItem icon={<FaHistory />} routerLink={<Link to="/admin/sellhistory" />}>
              Sell history
            </MenuItem>
          </Menu>
          <Menu iconShape="square" id="footer">
            <MenuItem
              icon={<FiLogOut />}
              id="logout"
              onClick={() => {
                setUser(null);
              }}
            >
              Logout
            </MenuItem>
          </Menu>
        </Sidebar>
      </div>
    </>
  );
};
