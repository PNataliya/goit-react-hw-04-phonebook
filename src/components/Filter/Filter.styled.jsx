import styled from '@emotion/styled';

export const FindLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
`;

export const PromptFind = styled.p`
  font-weight: 600;
  margin-bottom: 5px;
  color: #565656;
`;

export const FindInput = styled.input`
  height: 40px;
  padding: 0 10px;

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
