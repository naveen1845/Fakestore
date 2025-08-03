import {Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Aboutus from './Components/Aboutus/Aboutus';
import Products from './Components/Product/Products';
import ProductDetails from './Components/Product/ProductDetails';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Routes>
          <Route path='/aboutus' element={<Aboutus/>}/>
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/" element={<Home />} />
        </Routes>
    </div>
  );
}

export default App;
