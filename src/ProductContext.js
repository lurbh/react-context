import React, { createContext, useState, useCallback, useMemo } from "react";

export const ProductContext = createContext();

export default function ProductContextData(props)
{
    const [products, setProducts] = useState([
        {
          id: 1,
          product_name: "Anvils",
          price: 9.99
        },
        {
          id: 2,
          product_name: "Hammers",
          price: 19.99
        },
        {
          id: 3,
          product_name: "Screwdriver",
          price: 29.99
        }
    ]);

    const addProduct = (productName, price) => {
        let id = Math.floor(Math.random() * 1000000);
        setProducts([...products, {
        id: id,
        product_name: productName,
        price: price
        }]);
    };

    function getProductByID(ProductParams)
    {
        const foundProduct = products.filter((p) => p.id === parseInt(ProductParams)) 
        return foundProduct;
    }

    const context = useMemo(() => {
        return {
            products : products,
            getProducts : () => {return products;},
            addProduct : (productName, price) => {
                let id = Math.floor(Math.random() * 1000000);
                setProducts([...products, {
                id: id,
                product_name: productName,
                price: price
                }]);
            },
            getProductByID: (productID) => {
                return products.filter((p) => p.id === parseInt(productID)) 
            }
        }
    }, [products]);
    // {
    //     getProducts: () => {return products;},
    //     addProduct: addProduct,
    //     getProductByID: getProductByID
    // };

    return (
        <ProductContext.Provider value={context}>
            {props.children}
        </ProductContext.Provider>
    )
    
    //   const context = {
    //     getProducts: () => {return products;},
    //     addProduct: (productName, price) => {
    //       let id = Math.floor(Math.random() * 1000000);
    //       setProducts([...products, {
    //         id: id,
    //         product_name: productName,
    //         price: price
    //       }]
    //       )
    //     }
    //   }
}
