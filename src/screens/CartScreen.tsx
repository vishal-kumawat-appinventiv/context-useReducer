import toast from "react-hot-toast";
import { useCart } from "../context/CartContext";

const CartScreen = () => {
  const { state, dispatch } = useCart();
  const totalPrice = state.cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleRemove = (id: number) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
    toast.success("Item removed from cart");
  };

  const handleQuantityChange = (id: number, quantity: number) => {
    if (quantity < 1) return;
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
  };

  return (
    <div className="container mx-auto mt-10">
      <div className="mb-4 flex items-center gap-5">
        <h2 className="text-4xl font-extrabold">Shopping Cart </h2>
        <i className="bi bi-bag-check-fill text-3xl"></i>
      </div>
      {state.cartItems.length > 0 ? (
        <div>
          <ul>
            {state.cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center bg-gray-200 gap-5 rounded mb-4"
              >
                <div>
                  <div className="p-2">
                    <img
                      src={item?.image}
                      alt={item?.name}
                      className="h-full w-28 object-cover"
                    />
                  </div>
                </div>
                <li className="flex justify-between items-center rounded p-2 pl-5 w-full">
                  <div>
                    <h3 className="text-2xl font-bold">{item.name}</h3>
                    <p className="text-xl mt-1">₹ {item.price.toFixed(2)}</p>
                    <div className="flex items-center mt-2">
                      <button
                        className="bg-gray-400 px-2 py-1 rounded"
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity - 1)
                        }
                      >
                        <i className="bi bi-dash text-2xl"></i>
                      </button>
                      <span className="mx-2 text-xl">{item.quantity}</span>
                      <button
                        className="bg-gray-400 px-2 py-1 rounded"
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity + 1)
                        }
                      >
                        <i className="bi bi-plus text-2xl"></i>
                      </button>
                    </div>
                  </div>
                  <button
                    className="text-red-500"
                    onClick={() => handleRemove(item.id)}
                  >
                    <i className="bi bi-trash3 text-3xl mr-4"></i>
                  </button>
                </li>
              </div>
            ))}
          </ul>
          <div className="mt-4 bg-gray-800 text-white py-3 px-1 rounded">
            <h3 className="text-xl font-bold">
              Total: ₹ {totalPrice.toFixed(2)}
            </h3>
          </div>
        </div>
      ) : (
        <p className="text-xl">{"Your cart is empty :("}</p>
      )}
    </div>
  );
};

export default CartScreen;
