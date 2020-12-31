import React, { useState } from 'react';
import ProductsFilter from '../products-filter';
import Products from '../products';
import styled from 'styled-components';
import { SIZE, DIRECTION } from './mapDirectionToText';
import sortProducts from './sortProducts';
import filterProducts from './filterProducts';

const { products } = require('../../assets/json/products.json');

const Wrapper = styled.div`
  padding: 1rem 2rem;
`;

export default function Home() {
  const [orderBy, setOrderBy] = useState(DIRECTION.ASC);
  const [filterBy, setFilterBy] = useState(SIZE.ALL);

  const initProducts = sortProducts(
    filterProducts(products, filterBy),
    orderBy,
  );
  const [newProducts, setNewProducts] = useState(initProducts);

  const onOrderByCallback = (order) => {
    setOrderBy(order);
    const sorts = sortProducts(
      filterProducts(products, filterBy),
      order,
    );
    setNewProducts(sorts);
  };

  const onFilterByCallback = (filter) => {
    setFilterBy(filter);
    const sorts = sortProducts(
      filterProducts(products, filter),
      orderBy,
    );
    setNewProducts(sorts);
  };

  return (
    <Wrapper>
      <ProductsFilter
        count={newProducts.length}
        orderBy={orderBy}
        filterBy={filterBy}
        onOrderByCallback={onOrderByCallback}
        onFilterByCallback={onFilterByCallback}
      />
      <Products products={newProducts} />
    </Wrapper>
  );
}
