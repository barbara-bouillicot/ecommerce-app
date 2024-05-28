import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from './pages/Products';
import About from './pages/About';
import Cart from './pages/Cart';
import { CartProvider } from './components/CartContext';


function App() {

  return (
    <CartProvider>
    <Router>
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/about' element={<About />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
    </Router>
    </CartProvider>
  );
}

export default App;
