import "./Menu.css";
import MenuItem from "../../components/menuItem/MenuItem";

const Menu = () => {
    return (
        <div id="menu" className="page">
            <section className="menu-header">
                <h2>MENU</h2>
                <p>Experience the finest steaks, fresh seafood, and an exquisite selection of wines.</p>
            </section>
            <MenuItem 
                img="path/to/image.jpg"
                name="Item Name"
                description="Item Description"
                price="$19.99"
            />
            <MenuItem 
                img="path/to/image2.jpg"
                name="Another Item"
                description="Another Description"
                price="$29.99"
            />
            <MenuItem 
                img="path/to/image3.jpg"
                name="Third Item"
                description="Third Description"
                price="$39.99"
            />
        </div>
    );
};

export default Menu;