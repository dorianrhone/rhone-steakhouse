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
            <div className="menu-items">
                {menuItems.map((item) => (
                    <Category 
                    key={item._id} 
                    name={item.name}
                    description={item.description}
                    price={item.price}
                    src={item.img_name} />
                ))}
            </div>
        </div>
    );
};

export default Menu;