import { Link } from "react-router-dom";
import "../styles/footer.css";
import { useUserContext } from "../context/userContext";

const Footer = () => {
  const { user } = useUserContext();
  return (
    <>
      {user?.role === "admin" ? (
        <></>
      ) : (
        <div className="footer text-center text-lg-start text-muted">
          <div className="text-center p-4">
            <Link to="/aboutUs" className="footer-link">
              Acerca de nosotros...{" "}
            </Link>
          </div>
        </div>
      )}
    </>
  );
};
export default Footer