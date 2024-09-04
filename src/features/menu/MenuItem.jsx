import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utilis/helpers";
import { addItem, getIsInCart, getPizzaQuantity } from "../cart/cartSlice";
import DeleteItem from "../../ui/DeleteItem";
import UpdatePizzaQuantity from "../../ui/UpdatePizzaQuantity";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch();

  const isInCart = useSelector(getIsInCart(id));

  const quantity = useSelector(getPizzaQuantity(id));

  function handleAddPizza() {
    const newPizza = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };

    dispatch(addItem(newPizza));
  }

  return (
    <li className="flex gap-4 py-2">
      <img
        className={`h-24 ${soldOut ? "opacity-70 grayscale" : ""}`}
        src={imageUrl}
        alt={name}
      />
      <div className="flex grow flex-col pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}

          {isInCart && (
            <div className="flex items-center gap-3">
              <UpdatePizzaQuantity pizzaID={id} pizzaQuantity={quantity} />
              <DeleteItem pizzaID={id} />
            </div>
          )}
          {!isInCart && !soldOut ? (
            <Button type="small" onClick={handleAddPizza}>
              Add to cart
            </Button>
          ) : (
            ""
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
