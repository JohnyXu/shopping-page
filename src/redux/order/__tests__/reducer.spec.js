import orderReducer, { orderActions } from '..';

const order = {
  id: '1',
  name: 'Shoes',
  size: 'S',
  singlePrice: 13,
  quantity: 3,
  price: 39,
};

const state = {
  orders: {
    S1: {
      id: '1',
      name: 'Shoes',
      size: 'S',
      singlePrice: 13,
      quantity: 3,
      price: 39,
    },
  },
};

describe('(Reducer) order', () => {
  it('should return the initial state', () => {
    expect(orderReducer(undefined, {})).toEqual({
      orders: {},
    });
  });

  it('should handle addToCart', () => {
    expect(
      orderReducer(undefined, orderActions.addToCart(order)),
    ).toEqual(state);
  });

  it('should handle changeProductQuantity', () => {
    const change = {
      id: '1',
      size: 'S',
      quantity: -2,
      singlePrice: 13,
    };
    expect(
      orderReducer(state, orderActions.changeProductQuantity(change)),
    ).toEqual({
      orders: {
        S1: {
          id: '1',
          name: 'Shoes',
          size: 'S',
          singlePrice: 13,
          quantity: 1,
          price: 13,
        },
      },
    });
  });
});
