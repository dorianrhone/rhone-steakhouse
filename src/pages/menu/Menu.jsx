import Intro from "../../components/intro/Intro";
import Category from "../../components/category/Category";

import oysterImg from "./images/oysters.jpg";
import crabcakeImg from "./images/crabcakes.jpg";
import calamariImg from "./images/calamari.jpg";

import appBg from "./images/os1.png";
import mainBg from "./images/steak1.png";
import dessertBg from "./images/cake1.png";

const menuData = [
    {id: 1, img: oysterImg, name: "Oyster", description: "Fresh oysters from the Pacific", price: "$19.99"},
    {id: 2, img: crabcakeImg, name: "Crab Cake", description: "Delicious crab cakes with a hint of spice", price: "$29.99"},
    {id: 3, img: calamariImg, name: "Calamari", description: "Crispy fried calamari with marinara sauce", price: "$39.99"},
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
                categoryImage={appBg}
                items={menuData}
                type="menu"
            />
            <Category
                title="Main Courses"
                categoryImage={mainBg}
                items={menuData}
                type="menu"
            />
            <Category
                title="Desserts"
                categoryImage={dessertBg}
                items={menuData}
                type="menu"
            />
        </div>
    );
};

export default Menu;