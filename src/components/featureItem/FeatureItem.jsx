import "./FeatureItem.css";
import { Link } from "react-router-dom";

const FeatureItem = ({ imgage, alt, title, description, linkTo }) => {
    return (
        <Link to= {linkTo} className="feature-item">
            <img src={imgage} alt={alt} />
            <h3>{title}</h3>
            <p>{description}</p>
        </Link>
    );
};

export default FeatureItem;