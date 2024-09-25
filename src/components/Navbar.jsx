import { Search } from '@mui/icons-material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = ({ searchTerm, setSearchTerm, cartItems }) => {
  return (
    <div className="w-full h-[60px] bg-gray-300 flex justify-between p-5">
      <h1 className="text-xl font-bold">MOCK TEST</h1>
      <div className="w-[250px] flex bg-white py-4 items-center justify-center rounded-lg">
        <Search className="text-black" />
        <input
          className="outline-none text-gray-600 font-bold w-full ml-2"
          type="text"
          placeholder="Search Products...."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} 
        />
      </div>

      <div className="relative">
        <ShoppingCartIcon />
        {cartItems.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2 text-sm">
            {cartItems.length}
          </span>
        )}
      </div>
    </div>
  );
};

export default Navbar;
