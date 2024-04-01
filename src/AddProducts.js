import React, { useContext, useState } from "react";
import { ProductContext } from "./ProductContext";

const AddProducts= () => {
    const context = useContext(ProductContext);

    const [product_name, setProductName] = useState("");
    const [price, setProductPrice] = useState(0);

    const onUpdateFormField = (e) => {
        const {name,value} = e.target;
        if(name === "product_name")
            setProductName(value)
        if(name === "price")
            setProductPrice(parseFloat(value))
    }

    const onAddProduct = () => {
        context.addProduct(product_name,price);
    }

    return (
        <>
            <h1>Add New Product</h1>
            <div>
                <label>Product Name:</label>
                <input type="text" name="product_name" value={product_name} onChange={onUpdateFormField}/>
            </div>
            <div>
                <label>Price:</label>
                <input type="number" name="price" value={price} onChange={onUpdateFormField}/>
            </div>
            <button onClick={onAddProduct}>Add</button>
        </>
    )
}

export default AddProducts;