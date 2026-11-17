import Contact from "../../components/contact/Contact";
import Intro from "../../components/intro/Intro";
import Category from "../../components/category/Category";
import {useState, useEffect} from "react";
import axios from "axios";
import { API_BASE_URL } from "../../config";


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
            const response = await axios.get(`${API_BASE_URL}/api/catering`);
            setPending(false);
            setCateringItems(response.data);
        };
        
        loadCateringItems();

    },[]);

    const cateringData = [
        {
            name: "Surf & Turf",
            description: "A delicious combination of steak and seafood, perfect for any occasion.",
            price: "$50 per person"
        },
        {
            name: "Wine Special",
            description: "A curated selection of fine wines to complement your meal.",
            price: "$30 per person"
        },
        {
            name: "Rhone's Special",
            description: "A unique dish crafted by our chef, showcasing the best of our menu.",
            price: "$40 per person"
        }
    ];

    const stripImg = "/images/strip.jpg";
    const salmonImg = "/images/salmon.jpg";
    const ribeyeImg = "/images/ribeye.jpg";

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
                    title="Surf & Turf"
                    categoryImage={stripImg}
                    items={cateringData}
                    type="catering"
                />
                <Category 
                    title="Wine Special"
                    categoryImage={salmonImg}
                    items={cateringData}
                    type="catering"
                />
                <Category 
                    title="Rhone's Special"
                    categoryImage={ribeyeImg}
                    items={cateringData}
                    type="catering"
                />
            </div>
           <Contact />
        </div>
    );
};

export default Catering;