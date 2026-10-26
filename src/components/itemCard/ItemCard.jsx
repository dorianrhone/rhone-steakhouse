import "./ItemCard.css";

const ItemCard = ({ img, name, description, price }) => {
    return (
        <div className="item-card">
            <img src={img} alt={name} />
            <h3>{name}</h3>
            <p>{description}</p>
            <span>{price}</span>
        </div>
    );
};

export default ItemCard;