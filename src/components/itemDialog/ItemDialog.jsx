import "./ItemDialog.css";
import { API_BASE_URL } from "../../config";

const ItemDialog = ({item, onClose}) => {
    return (
        <div id="item-dialog" className="w3-modal">
            <div className="w3-modal-content">
                <div className="w3-container">
                    <span id="dialog-close" className="w3-button w3-display-topright"
                        onClick={onClose}>
                        &times;</span>
                </div>
                <div id="item-dialog-content">
                    <img src={`${API_BASE_URL}/images/${item.img_name}`} alt="Item" />
                    <p>{item.category}</p>
                    <h2>{item.name}</h2>
                    <p>{item.description}</p>
                    <span className="item-price">{item.price}</span>
                </div>
            </div>
        </div>
    )
};

export default ItemDialog;