import "../styles/NavBarAdmin.css";
import { useUserContext } from "../context/userContext";

export const NavBarAdmin = () => {
  const { user } = useUserContext();

  return (
    <>
      <div className="navbar position-fixed">
        
        <div className="profile_info">
          <p>Welcome, {user.email}</p>
        </div>
      </div>
    </>
  );
};
