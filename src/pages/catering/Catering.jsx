import Contact from "../../components/contact/Contact";
import Intro from "../../components/intro/Intro";
import Category from "../../components/category/Category";

import stripImg from "./images/strip.jpg";
import salmonImg from "./images/salmon.jpg";
import ribeyeImg from "./images/ribeye.jpg";

const cateringData = [
    {id: 1, img: stripImg, name: "Catering Item 1", description: "Description for catering item 1", price: "$19.99"},
    {id: 2, img: salmonImg, name: "Catering Item 2", description: "Description for catering item 2", price: "$29.99"},
    {id: 3, img: ribeyeImg, name: "Catering Item 3", description: "Description for catering item 3", price: "$39.99"},
]

const Catering = () => {
    return (
        <div id="catering" className="page">
            <Intro 
                title="CATERING"
                description="BRING THE RHONE EXPERIENCE TO YOUR EVENT"
            />
            <Category 
                title="Steakhouse Package"
                categoryImage={stripImg}
                items={cateringData}
                type="catering"
            />
            <Category 
                title="Seafood Package"
                categoryImage={salmonImg}
                items={cateringData}
                type="catering"
            />
            <Category 
                title="Rhone's Special"
                categoryImage={ribeyeImg}
                items={cateringData}
                type="catering"
            />
           <Contact />
        </div>
    );
};

export default Catering;