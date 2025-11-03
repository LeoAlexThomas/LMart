import { useState } from "react";
import NavBar from "./Components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import CustomToast from "./Components/CustomToast";

const App = () => {
  // Toast State
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Cart Item State
  const [cartItems, setCartItems] = useState([]);

  // Modal State Changers
  const handleModelOpen = () => setIsModalOpen(true);
  const handleModelClose = () => setIsModalOpen(false);

  const handleCartButtonClicked = (item) => {
    if (cartItems.includes(item)) {
      handleRemoveFromCartClicked(item);
      return;
    }
    setCartItems((prev) => [...prev, item]);
    handleModelOpen();
  };

  const handleRemoveFromCartClicked = (item) => {
    setCartItems((prev) => prev.filter((ele) => ele != item));
  };

  return (
    <div className="bg-[#151419] h-screen overflow-y-auto">
      {isModalOpen && (
        <CustomToast
          toastId="successMessage"
          message="Added Successfully to cart"
          onToastClose={handleModelClose}
          isWarningToast={false}
        />
      )}
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
