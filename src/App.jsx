import { useState } from 'react';
import Navbar from './components/Navbar';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartDetailsPage'; 

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false); 

  return (
    <div>
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} cartItems={cartItems} />
    
      {showCart ? (
        <CartPage cartItems={cartItems} setCartItems={setCartItems} />
      ) : (
        <ProductsPage searchTerm={searchTerm} cartItems={cartItems} setCartItems={setCartItems} />
      )}
      <button 
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full"
        onClick={() => setShowCart(!showCart)}
      >
        {showCart ? "Back to Products" : "View Cart"}
      </button>
    </div>
  );
};

export default App;
