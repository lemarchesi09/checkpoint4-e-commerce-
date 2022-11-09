import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import { FaList, FaHistory } from "react-icons/fa";
import { FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import "../styles/SideBar.css";

export const SideBar = () => {
  const { collapseSidebar, collapsed } = useProSidebar();

  return (
    <>
      <div id="sidebar">
        <Sidebar className="pro-sidebar">
          <div className="logotext">
            <p>Logo</p>
          </div>
          <div className="closemenu" onClick={() => collapseSidebar()}>
            {collapsed ? <FiArrowRightCircle /> : <FiArrowLeftCircle />}
          </div>
          <Menu iconShape="square">
            <MenuItem icon={<FaList />} routerLink={<Link to="/productlist" />}>
              My products
            </MenuItem>
            <MenuItem icon={<RiPencilLine />} routerLink={<Link to="/productform" />}>
              Add product
            </MenuItem>
            <MenuItem icon={<FaHistory />} routerLink={<Link to="/" />}>
              Sell history
            </MenuItem>
          </Menu>
          <Menu iconShape="square" id="footer">
            <MenuItem icon={<FiLogOut />} id="logout">
              Logout
            </MenuItem>
          </Menu>
        </Sidebar>
        ;
      </div>
    </>
  );
};
