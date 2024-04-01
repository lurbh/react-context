import './App.css';
import ProductListing from './ProductListing';
import ProductContextData from './ProductContext';

function App() {

  

  return (
    <ProductContextData>
      <>
        <ProductListing/>
      </>
    </ProductContextData>
  );
}

export default App;
