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
                        img={`${API_BASE_URL}/images/${item.img_name}`}
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