import "./Category.css";
import ItemCard from "../itemCard/ItemCard";

const Category = ({ title, items = [], type }) => {
    return (
        <section className="category">
            <h2>{title}</h2>
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
        </section>
    );
};

export default Category;