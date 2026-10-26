import "./CateringItem.css";

const CateringItem = ({ img, name, description, price }) => {
    return (
        <div className="catering-item">
            <img src={img} alt={name} />
            <h3>{name}</h3>
            <p>{description}</p>
            <span>{price}</span>
        </div>
    );
};

export default CateringItem;