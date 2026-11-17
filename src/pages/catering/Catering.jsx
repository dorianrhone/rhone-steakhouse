import {useState, useEffect} from "react";
import { API_BASE_URL } from "../../config";
import axios from "axios";

import Contact from "../../components/contact/Contact";
import Intro from "../../components/intro/Intro";
import Category from "../../components/category/Category";
import AddItem from "../../components/addItem/AddItem";
import "./Catering.css";

const Catering = () => {
    const [cateringItems, setCateringItems] = useState([]);
    const [pending, setPending] = useState(true);
    const [showAddDialog, setShowAddDialog] = useState(false);

    const openAddDialog = () => {
        setShowAddDialog(true);
    };

    const closeAddDialog = () => {
        setShowAddDialog(false);
    };

    const addItemToCatering = (item) => {
        setCateringItems([...cateringItems, item]);
    };

    useEffect(() =>{ 
        const loadCateringItems = async() => {
            const response = await axios.get(`${API_BASE_URL}/api/menu`);
            setPending(false);
            setCateringItems(response.data);
        };
        
        loadCateringItems();

    },[]);

    const cateringData1 = cateringItems.filter(item => item.category === "STEAK & CHOPS" || item.category === "SEAFOOD");

    const cateringData2 = cateringItems.filter(item => item.category === "WINES");

    const cateringData3 = cateringItems.filter(item => item.category === "APPETIZERS" || item.category === "DESSERT");
    
    return (
        <div id="catering" className="page">
            <Intro 
                title="CATERING"
                description="BRING THE RHONE EXPERIENCE TO YOUR EVENT"
            />

            <div className="add-item-button">
                <button id="btn-add-item" onClick={openAddDialog}>+ Add Catering Item</button>
            </div>

            {showAddDialog && (<AddItem
                add_item_to_catering={addItemToCatering}
                close_dialog={closeAddDialog}
            />
            )}
        
            <div className="catering-items">
                {pending && <p>Loading Catering Items...</p>}
                <Category
                    catergoryImage={`${API_BASE_URL}/images/lobster.png`}
                    title="Surf & Turf"
                    description="A combination of the finest cuts of steak and fresh seafood, perfect for any occasion."
                    items={cateringData1}
                />
                <Category
                    catergoryImage={`${API_BASE_URL}/images/wine.png`}
                    title="Wine Special"
                    description="A selection of our finest wines, carefully curated to complement your meal."
                    items={cateringData2}
                />
                <Category
                    catergoryImage={`${API_BASE_URL}/images/p1.png`}
                    title="Rhone's Special"
                    description="Our signature dishes, crafted with the utmost care and attention to detail."
                    items={cateringData3}
                />
            </div>
           <Contact />
        </div>
    );
};

export default Catering;