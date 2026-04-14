import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Trash2 } from "lucide-react";
import { removeItem } from "../utils/cartSlice";

const Cart = () => {
  const CartItems = useSelector((store) => store.cart?.items || []);
  const dispatch = useDispatch();

  const totalPrice = CartItems.reduce((acc, item) => acc + item.price, 0);

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  if (CartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[70vh]">
        <h1 className="text-2xl font-semibold text-gray-700">
          Your Cart is Empty 🛒
        </h1>
        <p className="text-gray-500 mt-2">
          Add some delicious food to get started
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      {/* Items */}
      <div className="space-y-4">
        {CartItems.map((item) => (
          <div
            key={item.product_id}
            className="flex gap-4 bg-white p-4 rounded-xl shadow-sm border"
          >
            {console.log(item.product_id)}
            <img
              src={item.product_imageUrl}
              alt={item.product_name}
              className="w-24 h-24 object-cover rounded-lg"
            />

            {/* Info */}
            <div className="flex flex-col justify-between flex-1">
              <div>
                <h2 className="font-semibold text-gray-800">
                  {item.product_name}
                </h2>
                <p className="text-xs text-gray-500 line-clamp-2 mt-1">
                  {item.small_description}
                </p>
              </div>

              <div className="flex justify-between items-center mt-2">
                <span className="font-bold text-orange-600">₹{item.price}</span>

                <div className="flex items-center gap-3">
                  {/* OLD Quantity UI (unchanged) */}
                  <div className="flex items-center gap-2 border rounded-lg px-2 py-1">
                    <button className="text-lg">-</button>
                    <span>1</span>
                    <button className="text-lg">+</button>
                  </div>

                  {/* Trash Icon Button */}
                  <button
                    onClick={() => handleRemove(item.product_id)}
                    className="p-2 border border-red-500 text-red-500 rounded-md hover:bg-red-500 hover:text-white transition"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Total Section */}
      <div className="mt-6 p-4 bg-white rounded-xl shadow-md border flex justify-between items-center">
        <h2 className="text-lg font-semibold">Total</h2>
        <span className="text-xl font-bold text-green-600">₹{totalPrice}</span>
      </div>

      {/* Checkout Button */}
      <button className="w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold transition">
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Cart;
