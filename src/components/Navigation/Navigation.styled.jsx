import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: block;
  text-decoration: none;
  padding: 12px;
  font-weight: 500;
  color: #2a363b;
  font-size: 16px;
  &.active {
    color: #0066cc;
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
