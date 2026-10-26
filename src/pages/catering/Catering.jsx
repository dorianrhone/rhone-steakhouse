import "./Catering.css";
import CateringItem from "../../components/cateringItem/CateringItem";
import Contact from "../../components/contact/Contact";

const Catering = () => {
    return (
        <div id="catering" className="page">
            <section className="catering-header">
                <h2>CATERING</h2>
                <p>BRING THE RHONE EXPERIENCE TO YOUR EVENT</p>
            </section>
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
            <Contact />
        </div>
    );
};

export default Catering;