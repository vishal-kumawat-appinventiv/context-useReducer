import CartScreen from "../screens/CartScreen";
import Product from "../components/Product";
import { CartProvider } from "../context/CartProvider";
import { products } from "../utils/mock";

const ProductScreen = () => {
  return (
    <CartProvider>
      <div className="container mx-auto p-4 mt-10">
        <h1 className="text-4xl font-extrabold mb-8">
          Cart Using Context and useReducer
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {products.map((product) => (
            <Product key={product.id} {...product} />
          ))}
        </div>
        <CartScreen />
      </div>
    </CartProvider>
  );
};

export default ProductScreen;
