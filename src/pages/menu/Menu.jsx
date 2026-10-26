import MenuItem from "../../components/menuItem/MenuItem";
import Intro from "../../components/intro/Intro";

const Menu = () => {
    return (
        <div id="menu" className="page">
            <Intro
                title="OUR MENU"
                description="STEAK - SEAFOOD - WINE"
            />
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