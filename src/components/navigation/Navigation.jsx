import "./Navigation.css";
import {NavLink} from "react-router-dom";
import {useState} from "react";

const Navigation = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleNav = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="main-nav">
            <a id="toggle-nav" onClick={toggleNav} href="#">
                {menuOpen?(<p>&#8963;</p>):(<p>&#8964;</p>)}
            </a>
            <ul className={menuOpen?" ":"hide-small"}>
                <li><NavLink to="/">HOME</NavLink></li>
                <li><NavLink to="/menu">MENU</NavLink></li>
                <li><NavLink to="/catering">CATERING</NavLink></li>
                <li><NavLink to="/events">EVENTS</NavLink></li>
                <li><NavLink to="/reservations">RESERVATIONS</NavLink></li>
            </ul>
        </nav>
    );
};

export default Navigation;