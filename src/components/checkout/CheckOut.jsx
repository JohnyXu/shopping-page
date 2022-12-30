import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { orderActions } from '../../redux/order';
import NavRoute from '../product-page/NavRoute';

const Wrapper = styled.div`
  font-size: 1.1rem;
  font-weight: 550;
  padding: 1rem;
`;

const StyleTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin: 1rem auto;
  text-transform: uppercase;
`;

const StyleOrder = styled.div`
  margin: 1rem 3rem 0 3rem;

  @media only screen and (max-width: 800px) {
    display: none;
  }
`;

const WrapperButton = styled.div`
  float: right;
  padding: 0.5rem 1rem;
  margin: 1rem 3rem;

  @media only screen and (max-width: 800px) {
    float: none;
    display: flex;
    justify-content: center;
    padding: 0.5rem 1.5rem;
  }
`;

const StyleButton = styled.button`
  font-size: 1.1rem;
  padding: 0.5rem 1rem;
  color: white;
  background-color: black;
  text-transform: uppercase;

  :hover {
    color: black;
    background-color: inherit;
  }

  @media only screen and (max-width: 800px) {
    padding: 0.5rem 1.5rem;
  }
`;

const WrapperQuantity = styled.span`
  font-size: 1.2rem;

  > span {
    padding: 0.2rem;
    border: 1px solid black;
    border-radius: 8%;

    color: white;
    background-color: black;

    :hover {
      color: black;
      background-color: inherit;
    }
  }
`;

const StyleSub = styled.span`
  margin-right: 1rem;
  @media only screen and (max-width: 800px) {
    margin: 0;
    padding: 0 1rem;
  }
`;

const StyleAdd = styled.span`
  margin-left: 1rem;
  @media only screen and (max-width: 800px) {
    margin: 0;
    padding: 0 1rem;
  }
`;

const StyleQuantity = styled.div`
  display: inline-block;
  @media only screen and (max-width: 800px) {
    padding: 0 1rem;
  }
`;

const StyleEmpty = styled.h4`
  font-size: 1.5rem;
  font-weight: 550;
  text-align: center;
  margin: 1rem auto;
  text-transform: uppercase;
`;

const StyleProductDetailWrapper = styled.div`
  display: none;

  @media only screen and (max-width: 800px) {
    display: flex;
    align-items: center;
    padding: 1rem;
    margin: 1rem 0.3rem;
    background-color: #ccc;
    border-radius: 5px;
  }
`;

const MobileProductImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 5px;
  margin-right: 1rem;
`;

const ProductDetailContentWrapper = styled.div`
  flex: 1;
`;

const FlexBetween = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export default function CheckOut() {
  const dispatch = useDispatch();
  const reduxOrders = useSelector((state) => state.order.orders);
  const orders = Object.values(reduxOrders);
  const totalPrice = orders.reduce((sum, order) => {
    return sum + order.price;
  }, 0);

  const onChangeCallback = (id, size, singlePrice, quantity) => {
    const change = {
      id,
      size,
      quantity,
      singlePrice,
    };
    dispatch(orderActions.changeProductQuantity(change));
  };

  const renderQuantityOption = ({ id, size, quantity, singlePrice }) => {
    return (
      <WrapperQuantity>
        <StyleSub
          onClick={() => {
            onChangeCallback(id, size, singlePrice, -1);
          }}
        >
          -
        </StyleSub>
        <StyleQuantity> {quantity}</StyleQuantity>
        <StyleAdd
          onClick={() => {
            onChangeCallback(id, size, singlePrice, 1);
          }}
        >
          +
        </StyleAdd>
      </WrapperQuantity>
    );
  };

  const onCheckOutClick = () => {
    alert(`The total price is :${totalPrice}`);
  };

  return (
    <Wrapper>
      <NavRoute title={'check out'} />
      {totalPrice ? (
        <React.Fragment>
          <StyleTitle>my order</StyleTitle>
          <StyleOrder>
            <table className="table">
              <thead>
                <tr>
                  <th className="text-uppercase">item</th>
                  <th className="text-uppercase">size</th>
                  <th className="text-uppercase">single price</th>
                  <th className="text-uppercase">quantity</th>
                  <th className="text-uppercase">price</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((item, index) => {
                  if (item.quantity <= 0) {
                    return null;
                  }
                  return (
                    <tr key={item.size + item.id}>
                      <td>{item.name}</td>
                      <td>{item.size}</td>
                      <td>{item.singlePrice}</td>
                      <td>{renderQuantityOption(item)}</td>
                      <td>{item.price}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <hr style={{ marginTop: '-1rem' }} />
          </StyleOrder>
          {orders.map((item, index) => {
            if (item.quantity <= 0) {
              return null;
            }
            return (
              <StyleProductDetailWrapper key={item.size + item.id}>
                <MobileProductImage
                  alt={item.name}
                  src={require(`../../assets/products/${item.image}`)}
                />
                <ProductDetailContentWrapper>
                  <FlexBetween>
                    <p>{item.name}</p>
                    <p>{item.size}</p>
                  </FlexBetween>
                  <FlexBetween>
                    <div>{renderQuantityOption(item)}</div>
                    <p>{item.price}</p>
                  </FlexBetween>
                </ProductDetailContentWrapper>
              </StyleProductDetailWrapper>
            );
          })}
          <WrapperButton>
            <StyleButton onClick={onCheckOutClick}>check out:${totalPrice} </StyleButton>
          </WrapperButton>
        </React.Fragment>
      ) : (
        <StyleEmpty>empty order</StyleEmpty>
      )}
    </Wrapper>
  );
}
