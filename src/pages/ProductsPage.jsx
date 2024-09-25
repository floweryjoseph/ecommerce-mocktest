import { useEffect, useState } from "react";

const ProductsPage = ({ searchTerm, cartItems, setCartItems }) => {
  const [products, setProducts] = useState([]);
  const [readMore, setReadMore] = useState({}); 

  const fetchData = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const toggleReadMore = (id) => {
    setReadMore((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const isAlreadyInCart = prevItems.some((item) => item.id === product.id);

      if (isAlreadyInCart) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full flex flex-wrap">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <div key={product.id} className="w-[20%] p-4 border rounded-md mb-4 flex flex-col gap-2 items-center justify-center">
            <img
              src={product.image}
              alt={product.title}
              className="w-36 h-36 object-cover"
            />
            <p className="text-lg font-bold">Price: Rs.{product.price}/-</p>
            <h2 className="text-lg font-bold text-gray-500 text-center">{product.title}</h2>
            
            <p className="text-center">
              {readMore[product.id]
                ? product.description
                : `${product.description.slice(0, 50)}...`}
              <button
                className="text-blue-600 ml-2"
                onClick={() => toggleReadMore(product.id)}
              >
                {readMore[product.id] ? "Read Less" : "Read More"}
              </button>
            </p>

            <button
              className="bg-blue-900 text-white px-4 py-3 rounded-lg"
              onClick={() => handleAddToCart(product)}
            >
              {cartItems.some((item) => item.id === product.id) ? "Add More +" : "Add To Cart"}
            </button>
          </div>
        ))
      ) : (
        <p>No products found</p>
      )}
    </div>
  );
};

export default ProductsPage;
