import styled from 'styled-components';

export const Contacts = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 5px;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;

export const ItemBtn = styled.button`
  margin-left: 5px;
  cursor: pointer;
  &:hover,
  :focus {
    background-color: #0066cc;
    color: white;
  }
`;
