import React from 'react';
import styled from 'styled-components';
import ProductCard from './ProductCard';

const Wrapper = styled.div`
  padding: 1.5rem;
  border: 1px solid black;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-column: center / center;
  grid-gap: 3rem;
`;

export default function Products({ products }) {
  return (
    <Wrapper>
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </Wrapper>
  );
}
