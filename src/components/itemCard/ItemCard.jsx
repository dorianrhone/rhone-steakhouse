import "./ItemCard.css";
import ItemDialog from "../itemDialog/ItemDialog";
import { useState } from "react";
import { API_BASE_URL } from "../../config";

const ItemCard = (items) => {
    const [showDialog, setShowDialog] = useState(false);

    const showDetails = () => {
        setShowDialog(true);
    };

    const hideDetails = (e) => {
        e.stopPropagation();
        setShowDialog(false);
    };

    return (
        <div className="item-card" onClick={showDetails}>
            <img src={`${API_BASE_URL}/images/${items.img}`} alt="Item" />
            <div className="item-details">
                <div className="item-header">
                    <h3>{items.name}</h3>
                    <span className="item-price">{items.price}</span>
                </div>
                <p>{items.description}</p>
                {showDialog && <ItemDialog item={items} onClose={hideDetails} />}
            </div>
        </div>
    );
};

export default ItemCard;