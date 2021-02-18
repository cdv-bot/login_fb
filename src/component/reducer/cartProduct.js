import * as actions from "./../constants/cartProducts";
const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.CART_PRODUCT: {
      let id = -1;
      let arr = [...state];
      if (state.length === 0) {
        id = -1;
      } else {
        state.forEach((key, index) => {
          if (action.payload.product.id === key.product.id && action.payload.size === key.size) {
            id = index;
          }
        });
      }
      if (id !== -1) {
        arr[id] = {
          ...arr[id],
          count: arr[id].count + 1
        }
      } else {
        arr.push({
          count: 1,
          product: action.payload.product,
          size: action.payload.size,
        })
      }
      return arr;
    }
    default:
      return state;
  }
};

export default reducer;
