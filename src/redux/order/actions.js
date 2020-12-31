import * as types from './types';

export const addToCart = (order) => ({
  type: types.ADD_TO_CART,
  payload: { order },
});

export const changeProductQuantity = (change) => ({
  type: types.CHANGE_PRODUCT_QUANTITY,
  payload: { change },
});
