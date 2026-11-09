import "./Category.css";
import ItemCard from "../itemCard/ItemCard";

const Category = ({ title, categoryImage, items = [], type }) => {
    const SERVER_URL = "https://rhone-steakhouse-server.onrender.com/"

    return (
        <section className="category-container">
            <div className="category-feature-img">
                <img src={`${SERVER_URL}/images/${categoryImage}`} alt={title} />
            </div>
            <div className="category-content">
                <h2 className="category-title">{title}</h2>
                <div className="category-items">
                    {items.map((item) => (
                        <ItemCard
                        key={item.id}
                        img={`${SERVER_URL}/images/${item.img_name}`}
                        name={item.name}
                        description={item.description}
                        price={item.price}
                        type={type}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Category;