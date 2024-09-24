import CartScreen from "../screens/CartScreen";
import Product from "../components/Product";
import { CartProvider } from "../context/CartProvider";

const ProductScreen = () => {
  const products = [
    { id: 1, name: "iPhone 16 Pro", price: 20.50 },
    { id: 2, name: "Sumsung S24 Ultra", price: 45.59 },
    { id: 3, name: "Oneplus 12r", price: 30.99 },
  ];

  return (
    <CartProvider>
      <div className="container mx-auto p-4 mt-10">
        <h1 className="text-4xl font-bold mb-8">Cart Using Context and useReducer</h1>
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
