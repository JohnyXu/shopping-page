import { SIZE } from './mapDirectionToText';

function filterProducts(products, filter) {
  const newProducts =
    filter === SIZE.ALL
      ? [...products]
      : products.filter((product) => {
          return product.sizes.includes(filter);
        });
  return newProducts;
}

export default filterProducts;
