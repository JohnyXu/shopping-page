import filterProducts from './filterProducts';
import { SIZE } from './mapDirectionToText';

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

describe('filterProducts', () => {
  it('filterProducts filter S', () => {
    const result = filterProducts(products, SIZE.S);
    expect(result[0]).toBe(products[0]);
    expect(result[1]).toBe(products[1]);
    expect(result).toStrictEqual(products);
  });

  it('filterProducts filter L', () => {
    const result = filterProducts(products, SIZE.L);
    expect(result[0]).toBe(products[1]);
  });

  it('Not Supported', () => {
    const result = filterProducts(products, 'Balabala');
    expect(result).toStrictEqual([]);
  });
});
