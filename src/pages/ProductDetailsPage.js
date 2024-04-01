import React,{ useState, useEffect, useContext } from "react";
import { ProductContext } from "../ProductContext";
import { useParams } from "react-router-dom";

export default function ProductDetailsPage(){

    let context = useContext(ProductContext);
    const { productID } = useParams();
    const [product, setProduct] = useState({});
    useEffect( ()=> {
        const fetchProducts = () => {
            let tempProduct = context.getProductByID(productID);
            setProduct(tempProduct[0]);
        }
        fetchProducts()
    }, [productID])

    return (
        <>
            <h1>Product Details</h1>
            {product ? (
                <ul>
                    <li>Product Name: {product.product_name}</li>
                    <li>Product Price: {product.price}</li>
                </ul>
            ): (
                <h3>No Product Found</h3>
            )}
        </>
    );
}