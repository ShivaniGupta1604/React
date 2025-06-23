import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../Utils/cartSlice";

const Cart = () => {
  //subscribing to a small portion of the store - This is efficient because React-Redux will only re-render the component when cart.items actually changes.
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  //subscribing to the whole store and then extracting items - this is not efficient -> The problem is: any change in any part of the Redux store will cause this component to re-render, even if cart.items hasn’t changed.
  //   const store= useSelector((store)=>store)
  //   const cartItems=store.cart.items;

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="p-2 m-2 bg-black text-white rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && (
          <h1>Your cart is empty. Please add items to your cart!</h1>
        )}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
