import { Link } from "react-router-dom";
import "../styles/footer.css";
import { useUserContext } from "../context/userContext";

export const Footer = () => {
  const { user } = useUserContext();
  return (
    <>
      {user?.role === "admin" ? (
        <></>
      ) : (
        <div className="footer text-center text-lg-start text-muted">
          <div className="text-center p-4">
            <Link to="/aboutUs" className="footer-link">
              About us
            </Link>
          </div>
        </div>
      )}
    </>
  );
};
