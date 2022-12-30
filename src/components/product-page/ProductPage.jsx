import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { orderActions } from 'redux/order';
import NavRoute from './NavRoute';

const { products } = require('../../assets/json/products.json');

const Wrapper = styled.div`
  font-size: 1.1rem;
  font-weight: 550;
  padding: 1rem;
`;

const WrapperImg = styled.div`
  padding: 2rem 1rem;
  margin: 1rem 1rem;
  background-color: white;
`;

const StyleContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const StyleImg = styled.img`
  width: 20rem;
`;

const StyleProduct = styled.div`
  min-width: 20rem;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin-left: 1rem;

  > h3 {
    font-size: 2.5rem;
    margin: 0.3rem 0 0.1rem 0;
  }

  > p {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0.8rem 0;
  }
`;

const WrapperSelect = styled.div`
  display: inline-block;
  margin: 2rem 0;

  & select {
    text-align: center;
    height: 2.5rem;
    display: inline-block;

    :last-child {
      margin-left: 2rem;
      @media only screen and (max-width: 800px) {
        margin-left: 0;
      }
    }
  }

  @media only screen and (max-width: 800px) {
    display: block;
    margin: 1rem 0;

    & select {
      display: block;
      margin: 1rem 0;
      :last-child {
        margin-left: 0;
      }
    }
  }
`;

const StyleButton = styled.button`
  font-size: 1.3rem;
  padding: 0.5rem 0;
  margin: 3rem 0;
  color: black;
  background-color: inherit;

  :hover {
    color: white;
    background-color: black;
  }
  @media only screen and (max-width: 800px) {
    padding: 0.5rem 0;
    margin: 1rem 0;
  }
`;

export default function ProductPage() {
  const dispatch = useDispatch();
  const [size, setSize] = useState('');
  const [quantity, setQuantity] = useState('');
  const [errMsg, setErrMsg] = useState('');

  const MAX_COUNT = 3;
  const { id } = useParams();
  const product = products.find((item) => {
    return item.id === Number(id);
  });

  const onSizeChange = (event) => {
    setSize(event.target.value);
  };

  const onQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const onAddtoCart = () => {
    if (!size) {
      setErrMsg('Please select size');
      return;
    }
    if (!quantity) {
      setErrMsg('Please select quantity');
      return;
    }
    setErrMsg('');
    const orderInfo = {
      id: product.id,
      name: product.name,
      size: size,
      image: product.image,
      singlePrice: Number(product.price),
      quantity: Number(quantity),
      price: product.price * quantity,
    };
    dispatch(orderActions.addToCart(orderInfo));
  };

  console.log(product);

  return (
    <Wrapper>
      <NavRoute title={product.name} />
      <StyleContent>
        <WrapperImg>
          <StyleImg alt={product.name} src={require(`../../assets/products/${product.image}`)} />
        </WrapperImg>
        <StyleProduct>
          <h3>{product.name}</h3>
          <p>$ {product.price}</p>
          <WrapperSelect>
            <select value={size} onChange={onSizeChange}>
              <option value="">Select Size</option>
              {product.sizes.map((size) => {
                return (
                  <option key={size} value={size}>
                    {size}
                  </option>
                );
              })}
            </select>
            <select value={quantity} onChange={onQuantityChange}>
              <option value="">Select Quantity</option>
              {Array.from({ length: MAX_COUNT }, (_, k) => k + 1).map((count) => {
                return (
                  <option key={count} value={count}>
                    {count}
                  </option>
                );
              })}
            </select>
          </WrapperSelect>
          <p style={{ color: 'red' }}>{errMsg}</p>
          <StyleButton onClick={onAddtoCart}>Add to cart</StyleButton>
        </StyleProduct>
      </StyleContent>
    </Wrapper>
  );
}
