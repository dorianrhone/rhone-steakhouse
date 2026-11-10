import "./ItemCard.css";
import ItemDialog from "../itemDialog/ItemDialog";
import { useState } from "react";
import { API_BASE_URL } from "../../config";

const ItemCard = ({ img, name, description, price }) => {
    const [showDialog, setShowDialog] = useState(false);

    const showDetails = () => {
        setShowDialog(true);
    };

    const hideDetails = () => {
        setShowDialog(false);
        console.log(showDialog);
    };

    return (
        <div className="item-card" onClick={showDetails}>
            <img src={img} alt={name} />
            <div className="item-details">
                <div className="item-header">
                    <h3>{name}</h3>
                    <span className="item-price">{price}</span>
                </div>
                <p>{description}</p>
                {showDialog && <ItemDialog />}
            </div>
        </div>
    );
};

export default ItemCard;