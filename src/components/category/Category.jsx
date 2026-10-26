import "./Category.css";
import ItemCard from "../itemCard/ItemCard";

const Category = ({ title, categoryImage, items = [], type }) => {
    return (
        <section className="category-container">
            <div className="category-feature-img">
                <img src={categoryImage} alt={title} />
            </div>
            <div className="category-content">
                <h2 className="category-title">{title}</h2>
                <div className="category-items">
                    {items.map((item) => (
                        <ItemCard
                            key={item.id}
                            img={item.img}
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