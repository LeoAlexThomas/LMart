import { useState } from "react";
import NavBar from "./Components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import CustomToast from "./Components/CustomToast";
import NotFound from "./Pages/NotFound";

const App = () => {
  // Toast State
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Cart Item State
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsCount, setCartItemsCount] = useState({});

  // Modal State Changers
  const handleModelOpen = () => setIsModalOpen(true);
  const handleModelClose = () => setIsModalOpen(false);

  const handleCartButtonClicked = (item) => {
    if (cartItems.includes(item)) {
      // Removing item from cart [product card button]
      handleRemoveFromCartClicked(item);
      return;
    }
    // Adding Item to cart
    setCartItems((prev) => [...prev, item]);
    // Adding Item count to cart item
    setCartItemsCount((prev) => ({ ...prev, [item.id]: 1 }));

    // Opening toast model message
    handleModelOpen();
  };

  const handleRemoveFromCartClicked = (item) => {
    setCartItems((prev) => prev.filter((ele) => ele != item));
  };

  return (
    <div className="bg-white h-screen overflow-y-auto select-none">
      {/* NOTE: Success Message Toast */}
      {isModalOpen && (
        <CustomToast
          toastId="successMessage"
          message="Added Successfully to cart"
          onToastClose={handleModelClose}
          isWarningToast={false}
        />
      )}
      <BrowserRouter>
        {/* Header */}
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
                cartItemsCount={cartItemsCount}
                setCartItemsCount={setCartItemsCount}
                onRemoveFromCartClicked={handleRemoveFromCartClicked}
              />
            }
          />
          {/* Nomatch page routing */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* Footer Section */}
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
