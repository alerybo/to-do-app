import styled from "styled-components";

export const TextButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: transparent;
  border: none;
  margin: 0 5px;
  padding: 10px 16px;
  border-radius: 10px;
  transition: all 0.3s;
  color: ${(props) => props.theme.colors.textPrimary};
  font-size: ${(props) => props.theme.fontSizes.base};
  text-align: center;
  cursor: pointer;

  &:hover,
  &.active {
    background: rgba(0, 0, 0, 0.05);
  }

  svg {
    display: inline-block;
    vertical-align: middle;
  }
`;
