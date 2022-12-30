import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { TiShoppingBag, TiShoppingCart } from 'react-icons/ti';
import { useSelector } from 'react-redux';

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 0 2rem;
  height: 80px;
  background-color: #a1a1a1;
`;

const WrapperIcon = styled.div`
  position: relative;
  display: block;
  height: 30px;

  div {
    position: absolute;
    right: 1rem;
    top: 0rem;
    border-radius: 50%;
    font-size: 0.9rem;
    right: -0.6rem;
    width: 20px;
    height: 20px;
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      color: white;
    }
  }
`;

export default function Header() {
  const navigate = useNavigate();
  const orders = useSelector((state) => state.order.orders);

  const onShoppingCartClick = () => {
    navigate('/checkout');
  };

  const totalQuantity = Object.values(orders).reduce((sum, order) => {
    return sum + order.quantity;
  }, 0);

  return (
    <Wrapper>
      <Link to="/">
        <TiShoppingBag size={40}></TiShoppingBag>
      </Link>
      <WrapperIcon onClick={onShoppingCartClick}>
        <TiShoppingCart size={40}></TiShoppingCart>
        {totalQuantity ? (
          <div>
            <span>{totalQuantity}</span>
          </div>
        ) : null}
      </WrapperIcon>
    </Wrapper>
  );
}
