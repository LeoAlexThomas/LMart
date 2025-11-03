import { Fragment, useEffect, useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import CartCard from "../Components/CartCard";

const Cart = ({
  cartItems,
  cartItemsCount,
  setCartItemsCount,
  onRemoveFromCartClicked,
}) => {
  const handleIncrementCart = (product) => {
    const itemCount = cartItemsCount[product.id];
    setCartItemsCount((prev) => ({
      ...prev,
      [product.id]: itemCount + 1,
    }));
  };

  const handleDecrementCart = (product) => {
    const itemCount = cartItemsCount[product.id];
    if (itemCount <= 1) {
      return;
    }
    setCartItemsCount((prev) => ({
      ...prev,
      [product.id]: itemCount - 1,
    }));
  };

  const getTotal = () => {
    let total = 0;
    cartItems.map((ele) => {
      total += ele.price * cartItemsCount[ele.id];
    });
    return total.toFixed(2);
  };

  return (
    <div className="px-4 my-4 max-w-[1440px] mx-auto">
      <h2 className="text-3xl font-bold text-[#141517]">Cart</h2>
      <div className="flex gap-4 flex-col lg:flex-row">
        <div className="w-full flex  rounded-lg  mt-3">
          {cartItems.length === 0 ? (
            <div className="w-full h-full flex bg-[#F2F4F7] gap-4 flex-col justify-center items-center rounded-md">
              <FaCartPlus className="w-10 h-10 text-[#FF4F18]" />
              <p className="text-xl font-bold text-[#141519]">
                Please add product to cart
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-4 h-full overflow-y-auto">
              {cartItems.map((ele) => {
                return (
                  <Fragment key={ele.id}>
                    <CartCard
                      item={ele}
                      itemCount={cartItemsCount[ele.id]}
                      onIncrementCart={() => handleIncrementCart(ele)}
                      onDecrementCart={() => handleDecrementCart(ele)}
                      onRemoveItemFromCart={() => onRemoveFromCartClicked(ele)}
                    />
                  </Fragment>
                );
              })}
            </div>
          )}
        </div>
        {cartItems.length > 0 && (
          <div className="flex gap-2 flex-col rounded-lg p-4 mt-3 bg-white border-2 border-[#F2F4F7] w-full max-w-full lg:max-w-sm sticky md:relative bottom-4 md:bottom-0 h-fit">
            <h4 className="text-xl font-bold text-[#141517]">
              Estimated Total
            </h4>
            <ItemViewer label="Total Price:" value={`$${getTotal()}`} />
            <ItemViewer label="Discount:" value="10% OFF" />
            <div className="w-full h-0.5 bg-[#1B1B1E]" />
            <ItemViewer
              label="Final Price:"
              value={`$${((getTotal() / 100) * 90).toFixed(2)}`}
            />
          </div>
        )}
      </div>
    </div>
  );
};

const ItemViewer = ({ label, value }) => {
  return (
    <div className="flex gap-2 justify-between items-center">
      <p className="text-base font-medium text-[#141519]">{label}</p>
      <p className="text-base text-[#141519]">{value}</p>
    </div>
  );
};

export default Cart;
