import "./Navigation.css";
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <nav className="main-nav">
            <ul>
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