import Intro from "../../components/intro/Intro";
import Category from "../../components/category/Category";
import {useState, useEffect} from "react";
import axios from "axios";

const Menu = () => {
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() =>{ 
        const loadMenuItems = async() => {
            const response = await axios.get("https://rhone-steakhouse-server.onrender.com/api/menu");
            setMenuItems(response.data);
        };
        
        loadMenuItems();

    },[]);

    return (
        <div id="menu" className="page">
            <Intro
                title="OUR MENU"
                description="STEAK - SEAFOOD - WINE"
            />
            <Category
                title="Appetizers"
                categoryImage={appBg}
                items={menuItems}
                type="menu"
            />
            <Category
                title="Main Courses"
                categoryImage={mainBg}
                items={menuItems}
                type="menu"
            />
            <Category
                title="Desserts"
                categoryImage={dessertBg}
                items={menuItems}
                type="menu"
            />
        </div>
    );
};

export default Menu;