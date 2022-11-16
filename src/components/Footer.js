import { Link } from "react-router-dom";
import "../styles/footer.css";

export const Footer = () =>{
    return(
        <div className='footer text-center text-lg-start text-muted'>
            <div className='text-center p-4'>
                <Link to="/aboutUs" className="footer-link"> About us... </Link>

            </div>
        </div>
    );
}