import { useDispatch } from "react-redux";
import Button from "./Button";
import {
  decreaseItemQuentiy,
  increaseItemQuentiy,
} from "../features/cart/cartSlice";

function UpdatePizzaQuantity({ pizzaID, pizzaQuantity }) {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-1 md:gap-3">
      <Button
        type="round"
        onClick={() => dispatch(decreaseItemQuentiy(pizzaID))}
      >
        -
      </Button>
      {pizzaQuantity}
      <Button
        type="round"
        onClick={() => dispatch(increaseItemQuentiy(pizzaID))}
      >
        +
      </Button>
    </div>
  );
}

export default UpdatePizzaQuantity;
