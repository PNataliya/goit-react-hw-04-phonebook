import styled from '@emotion/styled';

export const FormDataInput = styled.form`
  margin-bottom: 50px;
`;

export const EntryFieldLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const InputName = styled.span`
  font-weight: 600;
  margin-bottom: 5px;
  color: #565656;
`;

export const InputArea = styled.input`
  height: 40px;
  padding: 0 10px 0 10px;

  border: 1px solid #858585;
  border-radius: 6px;
  outline: none;

  font-size: 14px;
  &:focus {
    border-color: #0084ff;
  }
  &::placeholder {
    font-size: 12px;
  }
`;

export const ButtonSubmit = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 200px;
  height: 40px;

  font-weight: 700;

  background-color: #cce1ff;
  border: none;
  border-radius: 6px;
  color: #565656;
  cursor: pointer;
  transition: background-color 300ms linear;
  &:hover,
  &:focus {
    background-color: #0084ff;
  }
`;
