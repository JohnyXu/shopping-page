import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 2rem 1rem;
  background-color: white;
`;

const StyleImg = styled.img`
  display: block;
  margin: 0 auto;
  height: 12rem;
`;

const StyleTitle = styled.h3`
  font-size: 1.4rem;
  text-align: center;
  margin: 0.5rem 0;
  text-decoration: none;
`;

const StylePrice = styled.p`
  font-size: 1.2rem;
  font-weight: 550;
  text-align: center;
  margin: 0.3rem 0;
`;

export default function ProductCard({ product }) {
  return (
    <Wrapper>
      <Link
        to={`/product/${product.id}`}
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <StyleImg
          alt="goods"
          src={
            require(`../../assets/products/${product.image}`).default
          }
        />
        <StyleTitle>{product.name}</StyleTitle>
      </Link>
      <StylePrice>$ {product.price}</StylePrice>
    </Wrapper>
  );
}
