import React, { Fragment } from "react";
import useApiCall from "../hooks/useApiCall";
import { MdErrorOutline } from "react-icons/md";
import { HiOutlineEmojiSad } from "react-icons/hi";
import ProductCard from "../Components/ProductCard";
import { FaShoppingCart } from "react-icons/fa";

const Home = ({ cartItems, onCartButtonClicked }) => {
  const { item, isLoading, error } = useApiCall({
    url: "https://fakestoreapi.com/products",
  });

  if (error) {
    return (
      <div className="flex flex-col gap-2 justify-center items-center h-screen">
        <MdErrorOutline className="text-red-400 w-10 h-10" />
        <p className="text-base font-medium text-center text-red-400">
          Something went wrong
        </p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex flex-col gap-6 justify-center items-center h-screen">
        <i className="fa-solid fa-spinner fa-spin-pulse text-[#FF4F18] fa-2xl"></i>
        <p className="text-lg font-medium text-center text-[#FBFBFB]">
          Loading
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-[1440px] mx-auto px-4 my-4">
      <h2 className="text-3xl font-bold text-[#151419]">Products</h2>
      {item === null || item.length === 0 ? (
        <div className="flex justify-center p-4 items-center flex-col h-screen">
          <HiOutlineEmojiSad className="w-8 h-8 text-[#FF4F18] " />
          <p className="text-lg text-center text-[#FBFBFB]">
            Products not found
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-4 gap-8 ">
          {item.map((prod) => {
            const isProductInCart = cartItems
              .map((ele) => ele.id)
              .includes(prod.id);
            return (
              <Fragment key={prod.id}>
                <ProductCard
                  product={prod}
                  cartButtonElements={
                    isProductInCart ? (
                      <>
                        <FaShoppingCart className="w-4 h-4" />
                        Remove from Cart
                      </>
                    ) : (
                      <>
                        <FaShoppingCart className="w-4 h-4" />
                        Add to Cart
                      </>
                    )
                  }
                  onCartButtonClicked={() => onCartButtonClicked(prod)}
                />
              </Fragment>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Home;
