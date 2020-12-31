import sortProducts from './sortProducts';
import { DIRECTION } from './mapDirectionToText';

const products = [
  {
    id: 100,
    name: 'Denim wash shirt',
    image: 'denim_wash_shirt.jpg',
    price: 25,
    sizes: ['S', 'M'],
  },
  {
    id: 101,
    name: 'Plaid shirt',
    image: 'plaid_shirt.jpg',
    price: 50,
    sizes: ['S', 'M', 'L', 'XL'],
  },
];

describe('sortProducts', () => {
  it('sortProducts ASC', () => {
    const result = sortProducts(products, DIRECTION.ASC);
    expect(result[0]).toBe(products[0]);
    expect(result[1]).toBe(products[1]);
  });

  it('sortProducts DESC', () => {
    const result = sortProducts(products, DIRECTION.DESC);
    expect(result[0]).toBe(products[1]);
    expect(result[1]).toBe(products[0]);
  });

  it('Not Supported', () => {
    const result = sortProducts(products, 'Balabala');
    expect(result).toStrictEqual(products);
  });
});
