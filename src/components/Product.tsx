import toast from "react-hot-toast";
import { useCart } from "../context/CartContext";
import { ADD_ITEM } from "../utils/constant";

const Product = ({
  id,
  name,
  price,
  image,
}: {
  id: number;
  name: string;
  price: number;
  image: string;
}) => {
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    dispatch({
      type: ADD_ITEM,
      payload: { id, name, price, quantity: 1, image },
    });
    toast.success("Item added to cart");
  };

  return (
    <div className="flex flex-col gap-2 justify-center items-center p-4 bg-gray-200 rounded">
      <h3 className="text-3xl font-bold">{name}</h3>
      <div className="p-2">
        <img src={image} alt={name} className="w-full object-cover" />
      </div>
      <p className="text-2xl">₹ {price.toFixed(2)}</p>
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
