import "./ItemCard.css";

const ItemCard = ({ img, name, description, price }) => {
    return (
        <div className="item-card">
            <img src={img} alt={name} />
            <div className="item-details">
                <div className="item-header">
                    <h3>{name}</h3>
                    <span className="item-price">{price}</span>
                </div>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default ItemCard;