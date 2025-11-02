import { useState } from "react";
import NavBar from "./Components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleCartButtonClicked = (item) => {
    if (cartItems.includes(item)) {
      handleRemoveFromCartClicked(item);
      return;
    }
    setCartItems((prev) => [...prev, item]);
  };

  const handleRemoveFromCartClicked = (item) => {
    setCartItems((prev) => prev.filter((ele) => ele != item));
  };

  return (
    <div className="bg-[#151419] h-screen overflow-y-auto">
      <BrowserRouter>
        <NavBar cartItems={cartItems} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                cartItems={cartItems}
                onCartButtonClicked={handleCartButtonClicked}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                cartItems={cartItems}
                onRemoveFromCartClicked={handleRemoveFromCartClicked}
              />
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
