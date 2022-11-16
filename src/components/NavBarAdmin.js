import "../styles/NavBarAdmin.css";
import { useUserContext } from "../context/userContext";

export const NavBarAdmin = () => {
  const { user } = useUserContext();

  return (
    <>
      <div className="navbar">
        <div className="profile_pic">
          {/* <img src="images/img.jpg" alt="..." className="img-circle profile_img"> */}
        </div>
        <div className="profile_info">
          <p>Welcome, {user.email}</p>
        </div>
      </div>
    </>
  );
};
