import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { TiShoppingBag, TiShoppingCart } from 'react-icons/ti';
import { useHistory } from 'react-router-dom';
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

  span {
    position: absolute;
    font-size: 0.9rem;
    right: -0.6rem;
  }
`;

export default function Header() {
  const history = useHistory();
  const orders = useSelector((state) => state.order.orders);

  const onShoppingCartClick = () => {
    history.push('/checkout');
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
          <span className="badge badge-pill badge-success">{totalQuantity}</span>
        ) : null}
      </WrapperIcon>
    </Wrapper>
  );
}
