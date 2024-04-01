import './App.css';
import ProductContextData from './ProductContext';
import ProductDetailsPage from './pages/ProductDetailsPage';
import ProductListingPage from './pages/ProductListingPage';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

function App() {

  

  return (
    <ProductContextData>
      <>
        <Router>
          <Routes>
            <Route path='' element={<ProductListingPage/>}/>
            <Route path='/productDetails/:productID' element={<ProductDetailsPage/>}/>
          </Routes>
        </Router>
      </>
    </ProductContextData>
  );
}

export default App;
