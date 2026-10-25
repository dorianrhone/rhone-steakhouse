import "./FeatureItem.css";

const FeatureItem = ({ imgage, alt, title, description }) => {
    return (
        <section className="feature-item">
            <img src={imgage} alt={alt} />
            <h3>{title}</h3>
            <p>{description}</p>
        </section>
    );
};

export default FeatureItem;