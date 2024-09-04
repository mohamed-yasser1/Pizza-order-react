import { createSlice } from "@reduxjs/toolkit";

const initialState = { cart: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter(
        (pizza) => pizza.pizzaId !== action.payload,
      );
    },
    increaseItemQuentiy(state, action) {
      const pizza = state.cart.find(
        (pizza) => pizza.pizzaId === action.payload,
      );
      pizza.quantity++;
      pizza.totalPrice = pizza.quantity * pizza.unitPrice;
    },
    decreaseItemQuentiy(state, action) {
      const pizza = state.cart.find(
        (pizza) => pizza.pizzaId === action.payload,
      );
      pizza.quantity--;
      pizza.totalPrice = pizza.quantity * pizza.unitPrice;
      if (!pizza.quantity) cartSlice.caseReducers.deleteItem(state, action);
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuentiy,
  decreaseItemQuentiy,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getCart = (store) => store.cart.cart;

export const getPizzasQuantity = (store) =>
  store.cart.cart.reduce((sum, pizza) => sum + pizza.quantity, 0);

export const getPizzasTotalPrice = (store) =>
  store.cart.cart.reduce((sum, pizza) => sum + pizza.totalPrice, 0);

export const getPizzaQuantity = (id) => (store) => {
  return store.cart.cart.find((pizza) => pizza.pizzaId === id)?.quantity ?? 0;
};

export const getIsInCart = (id) => (store) =>
  store.cart.cart.some((pizza) => pizza.pizzaId === id);
