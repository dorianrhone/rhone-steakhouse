import "./Category.css";
import ItemCard from "../itemCard/ItemCard";
import { API_BASE_URL } from "../../config";

const Category = ({ title, categoryImage, items = [], type }) => {
    return (
        <section className="category-container">
            <div className="category-feature-img">
                <img src={`${API_BASE_URL}/images/${categoryImage}`} alt={title} />
            </div>
            <div className="category-content">
                <h2 className="category-title">{title}</h2>
                <div className="category-items">
                    {items.map((item) => (
                        <ItemCard
                        key={item._id}
                        _id={item._id}
                        name={item.name}
                        category={item.category}
                        description={item.description}
                        price={item.price}
                        img_name={item.img_name}
                        type={type}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Category;