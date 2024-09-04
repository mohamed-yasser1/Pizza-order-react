import { formatCurrency } from "../../utilis/helpers";
import DeleteItem from "../../ui/DeleteItem";
import UpdatePizzaQuantity from "../../ui/UpdatePizzaQuantity";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <UpdatePizzaQuantity pizzaID={pizzaId} pizzaQuantity={quantity} />
        <DeleteItem pizzaID={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
