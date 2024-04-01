import React, { useContext } from "react";
import { ProductContext } from './ProductContext';
import AddProducts from "./AddProducts";

export default function ProductListing()
{
    let context = useContext(ProductContext);

    return (
        <>
            <ul>
                {context.getProducts().map(product =>  (
                    <li key={product.id}>{product.product_name}-${product.price}</li>
                ))}
            </ul>
            <AddProducts/>
        </>
    )
}