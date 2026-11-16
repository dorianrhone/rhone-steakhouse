import {useState} from "react";
import { API_BASE_URL } from "../../config";
import "./AddItem.css";

const AddItem = (props) => {
    const [prevSrc, setPrevSrc] = useState("");
    const [result, setResult] = useState("");

    const uploadImage = async (e) => {
        setPrevSrc(URL.createObjectURL(e.target.files[0]));
    };

    const addItemtoServer = async (e) => {
        e.preventDefault();
        setResult("Adding Item...");
        const formData = new FormData(e.target);

        const response = await fetch(`${API_BASE_URL}/api/menu`, {
            method: "POST",
            body: formData
        });

        if(response.status==200){
            setResult("Item Added Successfully!");
            props.add_item_to_menu(await response.json());
            props.close_dialog();
        } else {
            setResult("Error Adding Item");
        }
    };

    return (
        <div id="add-item-dialog" className="w3-modal">
            <div className="w3-modal-content">
                <div className="w3-container">
                    <span id="dialog-close" 
                    className="w3-button w3-display-topright" 
                    onClick={props.close_dialog}>&times;
                    </span>
                </div>
                <div id="item-dialog-content">
                    <h2>Add Menu Item</h2>
                    <form onSubmit={addItemtoServer}>
                        <p>
                            <label htmlFor="item-name">Name:</label>
                            <input type="text" id="item-name" name="name" required minlength="3"/>
                        </p>

                        <p>
                            <label htmlFor="item-description">Description:</label>
                            <input type="text" id="item-description" name="description" required minlength="10"/>
                        </p>

                        <p>
                            <label htmlFor="item-price">Price:</label>
                            <input type="number" id="item-price" name="price" required min="0"/>
                        </p>

                        <p>
                            <label htmlFor="item-category">Category:</label>
                            <select id="item-category" name="category" required>
                                <option value="">Select a category</option>
                                <option value="APPETIZERS">APPETIZERS</option>
                                <option value="STEAK & CHOPS">STEAK & CHOPS</option>
                                <option value="SEAFOOD">SEAFOOD</option>
                                <option value="DESSERT">DESSERT</option>
                                <option value="WINES">WINES</option>
                            </select>
                        </p>

                        <section>
                            <p id="img-prev-section">
                                {prevSrc==="" ? ("") : (<img id="img-prev" src={prevSrc}/>)}
                            </p>

                            <p>
                                <label htmlFor="item-image">Image:</label>
                                <input type="file" id="img" name="img" accept="image/*" onChange={uploadImage}/>
                            </p>
                        </section>

                        <p>
                            <button type="submit">Add Item</button>
                        </p>
                        
                        <p id="add-item-result">{result}</p>
                        
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddItem;