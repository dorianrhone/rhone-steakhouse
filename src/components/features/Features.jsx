import "./Features.css";
import FeatureItem from "../featureItem/FeatureItem";
import steakhouse from "./images/steakhouse.png";
import wine from "./images/wine.png";
import dining from "./images/dining.png";

const Features = () => {
    return (
        <div className="features">
            <FeatureItem
                imgage={steakhouse} 
                alt="STEAK PHOTO"
                title="EXCEPTIONAL CUISINE"
                description="Prime cuts, fresh seafood, seasonal ingredients."
            />
            <FeatureItem
                imgage ={wine} 
                alt="WINE PHOTO"
                title="CURATED WINE"
                description="A collection for every occasion."
            />
            <FeatureItem
                imgage={dining} 
                alt="DINING PHOTO"
                title="A REFINED ATMOSPHERE"
                description="Where modern style meets Southern charm."
            />
        </div>
    );
};

export default Features;