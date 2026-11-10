import "./ItemDialog.css";

const ItemDialog = (Item) => {
    return (
        <div id="item-dialog" className="w3-modal">
            <div className="w3-modal-content">
                <div className="w3-container">
                    <span id="dialog-close" className="w3-button w3-display-topright">
                        onClick={Item.onClose}
                        &times;</span>
                </div>
                <div id="item-dialog-content">
                    
                </div>
            </div>
        </div>
    )
};

export default ItemDialog;