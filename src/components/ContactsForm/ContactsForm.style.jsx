import styled from 'styled-components';

export const ContactsContainer = styled.div`
  padding: 20px;
  margin: 0 auto;
  display: flex;
`;
export const Form = styled.form`
  padding: 5px;
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const AddBtn = styled.button`
  cursor: pointer;
  &:hover {
    background-color: #0066cc;
  }
`;
export const Title = styled.p`
  margin-top: 0;
`;
