import "./App.css";
import DisplayCart from "./components/DisplayCart";
import HandleAddItem from "./components/HandleAddItem";

import { CartProvider } from "./contexts/CartContext";

function App() {
  return (
    <>
      <h1>React-useContext-ShoppingCartApp</h1>
      <CartProvider>
        <div>
          <DisplayCart />
          <HandleAddItem />
        </div>
      </CartProvider>
    </>
  );
}

export default App;
