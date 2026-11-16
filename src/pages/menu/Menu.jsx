import Intro from "../../components/intro/Intro";
import Category from "../../components/category/Category";
import {useState, useEffect} from "react";
import axios from "axios";
import { API_BASE_URL } from "../../config";
import AddItem from "../../components/addItem/AddItem";
import "./Menu.css";

const Menu = () => {
    const [menuItems, setMenuItems] = useState([]);
    const [pending, setPending] = useState(true);
    const [showAddDialog, setShowAddDialog] = useState(false);

    const openAddDialog = () => {
        setShowAddDialog(true);
    };

    const closeAddDialog = () => {
        setShowAddDialog(false);
    };

    const addItemToMenu = (item) => {
        setMenuItems([...menuItems, item]);
    };

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
            <div className="add-item-button">
                <button id="btn-add-item" onClick={openAddDialog}>+ Add Menu Item</button>
            </div>

            {showAddDialog && (<AddItem
                add_item_to_menu={addItemToMenu}
                close_dialog={closeAddDialog}
            />
            )}

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