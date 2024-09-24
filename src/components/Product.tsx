import toast from "react-hot-toast";
import { useCart } from "../context/CartContext";

const Product = ({
  id,
  name,
  price,
}: {
  id: number;
  name: string;
  price: number;
}) => {
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    dispatch({ type: "ADD_ITEM", payload: { id, name, price, quantity: 1 } });
    toast.success("Item added to cart");
  };

  return (
    <div className="border p-4 bg-gray-200 rounded">
      <h3 className="text-2xl font-bold">{name}</h3>
      <p>₹ {price.toFixed(2)}</p>
      <button
        className="bg-gray-600 text-white px-4 py-2 mt-2 rounded"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
