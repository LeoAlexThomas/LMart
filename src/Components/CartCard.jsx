import { IoIosAdd } from "react-icons/io";
import { IoMdRemove } from "react-icons/io";
import { MdOutlineDeleteOutline } from "react-icons/md";

const CartCard = ({
  item,
  itemCount,
  onIncrementCart,
  onDecrementCart,
  onRemoveItemFromCart,
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 rounded-md overflow-hidden bg-[#1B1B1E] items-stretch pr-0 md:pr-4">
      <div className=" p-4 h-full flex justify-center items-center w-full max-w-full md:max-w-[200px]">
        <img
          src={item.image}
          alt=""
          className="w-40 h-40 rounded-lg object-contain "
        />
      </div>
      <div className="flex flex-col xl:flex-row gap-4 py-4">
        <div className="flex grow flex-col px-4 md:px-0 gap-2 ">
          <h5 className="text-xl font-bold text-[#FBFBFB]">{item.title}</h5>
          <p className="text-base text-[#878787] line-clamp-4">
            {item.description}
          </p>
          <p className="text-base text-[#FBFBFB]">
            Price: ${(item.price * itemCount).toFixed(2)}
          </p>
        </div>
        <div className="flex flex-row xl:flex-col gap-4 items-end justify-between px-4 md:px-0 h-full">
          <div className="flex gap-4 border border-[#F56E0F] rounded-md items-center justify-between py-1 px-4">
            <IoIosAdd
              className="w-6 h-6 text-[#F56E0F] cursor-pointer"
              onClick={onIncrementCart}
            />
            <p className="text-base text-[#F56E0F] w-5 text-center">
              {itemCount}
            </p>
            <IoMdRemove
              className="w-6 h-6 text-[#F56E0F] cursor-pointer"
              onClick={onDecrementCart}
            />
          </div>
          <div
            className="flex flex-row gap-2 item-center bg-red-400 rounded-md w-[100px] px-2 py-1 cursor-pointer"
            onClick={onRemoveItemFromCart}
          >
            <MdOutlineDeleteOutline className="w-6 h-6 text-[#FBFBFB]" />
            <p className="text-base text-[#FBFBFB] text-center">Remove</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
