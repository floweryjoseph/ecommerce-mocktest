
const CartDetailsPage = ({ cartItems, setCartItems }) => {

 
  const handleIncrement = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

 
  const handleDecrement = (id) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0) 
    );
  };


  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="w-full p-4">
      <h1 className="text-2xl font-bold mb-4">Cart Items</h1>
      {cartItems.length > 0 ? (
        <div className="flex flex-col gap-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between border-b p-4">
              <div className="flex items-center gap-4">
                <img src={item.image} alt={item.title} className="w-16 h-16 object-cover" />
                <div>
                  <h2 className="font-bold">{item.title}</h2>
                  <p>Price: Rs.{item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <button
                  className="bg-gray-300 px-3 py-1 rounded-md"
                  onClick={() => handleDecrement(item.id)}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  className="bg-gray-300 px-3 py-1 rounded-md"
                  onClick={() => handleIncrement(item.id)}
                >
                  +
                </button>
              </div>
            </div>
          ))}
          <div className="flex justify-end mt-4">
            <h2 className="text-xl font-bold">Total: Rs.{totalPrice.toFixed(2)}</h2>
          </div>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartDetailsPage;
