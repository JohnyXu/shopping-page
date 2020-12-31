import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyleNavLink = styled.p`
  text-transform: uppercase;
`;

const StyleItem = styled.span`
  margin-left: 0.8rem;
`;

export default function NavRoute({ title }) {
  return (
    <StyleNavLink>
      <Link style={{ marginRight: '0.5rem' }} to="/">
        Home
      </Link>
      {'>'}
      <StyleItem>{title}</StyleItem>
    </StyleNavLink>
  );
}
