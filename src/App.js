import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import ProductListing from './ProductListing';
import ProductContext from './ProductContext';
import AddProducts from './AddProducts';

function App() {

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

  const context = {
    getProducts: () => {return products;},
    addProduct: (productName, price) => {
      let id = Math.floor(Math.random() * 1000000);
      setProducts([...products, {
        id: id,
        product_name: productName,
        price: price
      }]
      )
    }
  }

  return (
    <ProductContext.Provider value={context}>
      <>
        <ProductListing/>
      </>
    </ProductContext.Provider>
  );
}

export default App;
