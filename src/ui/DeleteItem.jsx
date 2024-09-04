import { useDispatch } from "react-redux";
import Button from "./Button";
import { deleteItem } from "../features/cart/cartSlice";

function DeleteItem({ pizzaID }) {
  const dispatch = useDispatch();

  function handleDeletePizza(id) {
    dispatch(deleteItem(id));
  }

  return (
    <Button type="small" onClick={() => handleDeletePizza(pizzaID)}>
      Delete
    </Button>
  );
}

export default DeleteItem;
