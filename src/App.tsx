import { Toaster } from "react-hot-toast";
import ProductScreen from "./screens/ProductScreen";

const App = () => {
  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
      <ProductScreen />
    </div>
  );
};

export default App;
