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

    const categoryList = [
        "APPETIZERS",
        "STEAK & CHOPS",
        "SEAFOOD",
        "DESSERT",
        "WINES"
    ];

    return (
        <div id="menu" className="page">
            <Intro
                title="OUR MENU"
                description="STEAK - SEAFOOD - WINE"
            />
            <div className="menu-items">
                {categoryList.map((category) => (
                    <Category
                        key={category}
                        title={category}
                        categoryImage={menuItems.find(i => i.category === category)?.img_name}
                        items={menuItems.filter(i => i.category === category)}
                     />
                ))}
            </div>
        </div>
    );
};

export default Menu;