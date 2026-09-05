import "./App.css";
import DisplayCart from "./components/DisplayCart";
import HandleAddItem from "./components/HandleAddItem";

import { CartProvider } from "./contexts/CartContext";

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-gray-800 justify-center">
        <h1>React-useContext-ShoppingCartApp</h1>
        <CartProvider>
          <div>
            <DisplayCart />
            <HandleAddItem />
          </div>
        </CartProvider>
      </div>
    </>
  );
}

export default App;
