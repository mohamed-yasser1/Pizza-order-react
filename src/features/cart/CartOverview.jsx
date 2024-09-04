import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPizzasQuantity, getPizzasTotalPrice } from "./cartSlice";

function CartOverview() {
  const pizzaTotalQuantity = useSelector(getPizzasQuantity);
  const pizzaTotalPrice = useSelector(getPizzasTotalPrice);

  if (!pizzaTotalPrice) return null;

  return (
    <div className="flex items-center justify-between bg-stone-800 p-4 text-sm uppercase text-stone-200 sm:p-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{pizzaTotalQuantity} pizzas</span>
        <span>${pizzaTotalPrice}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
