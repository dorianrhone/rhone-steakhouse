import "./Header.css";
import logo from "./images/logo.png";
import Navigation from "../navigation/Navigation";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="main-header">
            <Link to="/" className="header-left">
                <img src={logo} alt="Rhone Steakhouse Logo" />
                <h1>RHONE STEAKHOUSE</h1>
            </Link>
            <Navigation />
        </header>
    );
};

export default Header;