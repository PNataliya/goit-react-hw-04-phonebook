import styled from '@emotion/styled';

export const ContactData = styled.div`
  display: flex;
  align-items: center;
`;

export const Icon = styled.span`
  height: 30px;
  width: 30px;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  background-color: #0084ff3d;

  margin-right: 15px;
  padding: 5px;
  border-radius: 3px;

  color: #290268;
`;

export const Number = styled.p`
  font-weight: 700;
  margin-right: 15px;
`;

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 35px;
  height: 35px;
  padding: 5px;

  border: none;
  border-radius: 3px;
  background-color: #ffffff;

  cursor: pointer;
  transition: background-color 300ms linear;
  &:hover,
  &:focus {
    background-color: #0084ff;
  }
`;
