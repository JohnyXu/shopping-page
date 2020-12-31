import * as types from './types';

const initState = {
  orders: {},
};

const addToCartReducer = (state, action) => {
  const { order } = action.payload;
  const orderKey = order.size + order.id;
  const preOrderQuantity = state.orders[orderKey]
    ? state.orders[orderKey].quantity
    : 0;

  const nextQuantity = order.quantity + preOrderQuantity;
  const nextPrice = nextQuantity * order.singlePrice;

  return {
    ...state,
    orders: {
      ...state.orders,
      [orderKey]: {
        ...order,
        quantity: nextQuantity,
        price: nextPrice,
      },
    },
  };
};

const changeProductQuantity = (state, action) => {
  const { change } = action.payload;
  const orderKey = change.size + change.id;
  const preOrderQuantity = state.orders[orderKey]
    ? state.orders[orderKey].quantity
    : 0;

  const nextQuantity =
    change.quantity + preOrderQuantity > 0
      ? change.quantity + preOrderQuantity
      : 0;
  const nextPrice = nextQuantity * change.singlePrice;

  return {
    ...state,
    orders: {
      ...state.orders,
      [orderKey]: {
        ...state.orders[orderKey],
        quantity: nextQuantity,
        price: nextPrice,
      },
    },
  };
};

const orderReducer = (state = initState, action) => {
  switch (action.type) {
    case types.ADD_TO_CART:
      return addToCartReducer(state, action);
    case types.CHANGE_PRODUCT_QUANTITY:
      return changeProductQuantity(state, action);
    default:
      return state;
  }
};

export default orderReducer;
