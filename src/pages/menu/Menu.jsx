import Intro from "../../components/intro/Intro";
import Category from "../../components/category/Category";
import {useState, useEffect} from "react";
import axios from "axios";
import { API_BASE_URL } from "../../config";

const Menu = () => {
    const [menuItems, setMenuItems] = useState([]);
    const [pending, setPending] = useState(true);

    useEffect(() =>{ 
        const loadMenuItems = async() => {
            const response = await axios.get(`${API_BASE_URL}/api/menu`);
            setPending(false);
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
                {pending && <p>Loading Menu...</p>}
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