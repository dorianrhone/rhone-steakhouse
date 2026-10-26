import Contact from "../../components/contact/Contact";
import Intro from "../../components/intro/Intro";
import Category from "../../components/category/Category";

const cateringData = [
    {id: 1, img: "images/catering1.jpg", name: "Catering Item 1", description: "Description for catering item 1", price: "$19.99"},
    {id: 2, img: "images/catering2.jpg", name: "Catering Item 2", description: "Description for catering item 2", price: "$29.99"},
    {id: 3, img: "images/catering3.jpg", name: "Catering Item 3", description: "Description for catering item 3", price: "$39.99"},
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
                items={cateringData}
                type="catering"
            />
            <Category 
                title="Seafood Package"
                items={cateringData}
                type="catering"
            />
            <Category 
                title="Rhone's Special"
                items={cateringData}
                type="catering"
            />
           <Contact />
        </div>
    );
};

export default Catering;