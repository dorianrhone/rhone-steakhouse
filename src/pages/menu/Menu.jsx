import Intro from "../../components/intro/Intro";
import Category from "../../components/category/Category";

const menuData = [
    {id: 1, img: "images/menu1.jpg", name: "Menu Item 1", description: "Description for menu item 1", price: "$19.99"},
    {id: 2, img: "images/menu2.jpg", name: "Menu Item 2", description: "Description for menu item 2", price: "$29.99"},
    {id: 3, img: "images/menu3.jpg", name: "Menu Item 3", description: "Description for menu item 3", price: "$39.99"},
]

const Menu = () => {
    return (
        <div id="menu" className="page">
            <Intro
                title="OUR MENU"
                description="STEAK - SEAFOOD - WINE"
            />
            <Category
                title="Appetizers"
                items={menuData}
                type="menu"
            />
            <Category
                title="Main Courses"
                items={menuData}
                type="menu"
            />
            <Category
                title="Desserts"
                items={menuData}
                type="menu"
            />
        </div>
    );
};

export default Menu;