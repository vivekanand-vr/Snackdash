import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import CartEmpty from "./CartEmpty";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const price = useSelector((store) => store.cart.totalPrice);

  return cartItems.length === 0 ? (
    <CartEmpty />
  ) : (
    <div className="p-2 m-2 w-8/12 mx-auto">
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="p-4">
            {cartItems?.map((item) => (
              <CartItem data={item} key={item?.id} />
            ))}
          </div>

          <div className="p-4 bg-gray-100 border-t border-gray-200 flex justify-between">
            <p className="text-lg font-semibold">Total: {price}</p>
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
