import { DIRECTION } from './mapDirectionToText';

function sortProducts(products, sort) {
  const newProducts = [...products];
  newProducts.sort((productA, productB) => {
    if (sort === DIRECTION.ASC) {
      return productA.price - productB.price;
    }
    if (sort === DIRECTION.DESC) {
      return productB.price - productA.price;
    }
    return 0;
  });
  return newProducts;
}

export default sortProducts;
