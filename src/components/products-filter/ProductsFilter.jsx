import React from 'react';
import styled from 'styled-components';
import { TiArrowSortedDown } from 'react-icons/ti';
import mapDirectionToText, { SIZE, DIRECTION } from '../home/mapDirectionToText';

const FilterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 500px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

const FilterRightWrapper = styled.div`
  display: inline-block;
  @media only screen and (max-width: 500px) {
    display: block;
    margin-left: 1rem;
  }
`;

const ProductTitle = styled.p`
  display: inline-block;
  font-size: 1.2rem;
  min-width: 5rem;
  font-weight: 500;
  margin-left: 1rem;

  @media only screen and (max-width: 500px) {
    display: block;
    margin: 0.5rem 1rem;
  }
`;

const FilterContentWrapper = styled.div`
  display: none;
  position: absolute;
  right: 0;
  min-width: 16rem;
  box-shadow: 3px 3px 15px 5px #aaaaaa;
  z-index: 1;
  > p {
    text-transform: uppercase;
    background-color: rgb(226, 222, 222);
    margin: 0;
    text-align: center;
    padding: 0.6rem 1rem;
    :hover {
      background-color: white;
    }
  }
`;

const DropdownWrapper = styled.div`
  display: inline-block;
  position: relative;
  margin-left: 1rem;
  > span {
    font-size: 1.1rem;
    font-weight: 500;
    margin: 0.3rem 1rem;
    text-transform: uppercase;

    @media only screen and (max-width: 500px) {
      margin: 0;
    }
  }
  :hover > ${FilterContentWrapper} {
    display: block;
  }
  @media only screen and (max-width: 500px) {
    display: block;
    margin: 0.5rem 0;
  }
`;

const DropdownButton = styled.button`
  outline: none;
  border: none;
  text-transform: uppercase;
  background-color: inherit;
  text-decoration: underline;
  > icon {
    margin-left: 1rem;
  }
`;

export default function ProductsFilter({
  count,
  orderBy,
  filterBy,
  onOrderByCallback,
  onFilterByCallback,
}) {
  const orderText = mapDirectionToText(orderBy);
  return (
    <div>
      <h2>Products</h2>
      <FilterWrapper>
        <ProductTitle>
          {count} {count > 1 ? 'items' : 'item'}
        </ProductTitle>

        <FilterRightWrapper>
          <DropdownWrapper>
            <span>Order By:</span>
            <DropdownButton>
              {orderText} <TiArrowSortedDown />
            </DropdownButton>
            <FilterContentWrapper>
              {Object.values(DIRECTION).map((direction) => {
                const text = mapDirectionToText(direction);
                return (
                  <p
                    onClick={() => {
                      onOrderByCallback(direction);
                    }}
                    key={direction}
                  >
                    {text}
                  </p>
                );
              })}
            </FilterContentWrapper>
          </DropdownWrapper>

          <DropdownWrapper>
            <span>Filter By Size:</span>
            <DropdownButton>
              {filterBy} <TiArrowSortedDown />
            </DropdownButton>
            <FilterContentWrapper>
              {Object.values(SIZE).map((size) => {
                return (
                  <p
                    onClick={() => {
                      onFilterByCallback(size);
                    }}
                    key={size}
                  >
                    {size}
                  </p>
                );
              })}
            </FilterContentWrapper>
          </DropdownWrapper>
        </FilterRightWrapper>
      </FilterWrapper>
    </div>
  );
}
