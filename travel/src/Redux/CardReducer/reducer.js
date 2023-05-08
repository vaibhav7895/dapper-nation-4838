import { ADD_TO_CART, REMOVE_FROM_CART } from "./actionTypes";

const initialState = {
  cartItems: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:{
      
      return {...state,cartItems:action.payload}
    }

    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};




