import CateringItem from "../../components/cateringItem/CateringItem";
import Contact from "../../components/contact/Contact";
import Intro from "../../components/intro/Intro";

const Catering = () => {
    return (
        <div id="catering" className="page">
            <Intro 
                title="CATERING"
                description="BRING THE RHONE EXPERIENCE TO YOUR EVENT"
            />
            <CateringItem 
                img="path/to/image.jpg"
                name="Item Name"
                description="Item Description"
                price="$19.99"
            />
            <CateringItem 
                img="path/to/image2.jpg"
                name="Another Item"
                description="Another Description"
                price="$29.99"
            />
            <CateringItem 
                img="path/to/image3.jpg"
                name="Third Item"
                description="Third Description"
                price="$39.99"
            />
           
        </div>
    );
};

export default Catering;