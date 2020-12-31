import { orderTypes, orderActions } from '..';

describe('(Actions) order', () => {
  it('should create an action for ADD_TO_CART', () => {
    const order = {
      id: '1',
      name: 'Shoes',
      size: 'S',
      singlePrice: 13,
      quantity: 2,
      price: 26,
    };
    const expectedAction = {
      type: orderTypes.ADD_TO_CART,
      payload: {
        order,
      },
    };
    expect(orderActions.addToCart(order)).toEqual(expectedAction);
  });

  it('should create an action for CHANGE_PRODUCT_QUANTITY', () => {
    const change = {
      id: '1',
      size: 'M',
      quantity: 2,
      singlePrice: 15,
    };
    const expectedAction = {
      type: orderTypes.CHANGE_PRODUCT_QUANTITY,
      payload: { change },
    };
    expect(orderActions.changeProductQuantity(change)).toEqual(
      expectedAction,
    );
  });
});
