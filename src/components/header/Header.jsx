import "./Header.css";
import logo from "./images/logo.png";
import Navigation from "../navigation/Navigation";

const Header = () => {
    return (
        <header className="main-header">
            <div className="header-left">
                <img src={logo} alt="Rhone Steakhouse Logo" />
                <h1>Rhone Steakhouse</h1>
            </div>
            <Navigation />
        </header>
    );
};

export default Header;