import { createStore } from "redux";

const NEW_MESSAGE = "NEW_MESSAGE";

const messages = (state = [], action) => {
  if (action.type === NEW_MESSAGE) {
    return [...state, action.payload];
  }
  return state;
};

const store = createStore(messages);

export { NEW_MESSAGE, store }