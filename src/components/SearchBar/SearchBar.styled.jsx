import styled from '@emotion/styled';

export const ButtonIcon = styled.button`
  display: flex;
  align-items: center;
  background-color: inherit;
  width: 30px;
  height: 30px;
  border: 0;
  margin-right: 4px;
  margin-left: 4px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  &:hover {
    transform: scale(1.2);
  }
`;
