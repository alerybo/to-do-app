import styled from "styled-components";

export const TextButton = styled.button`
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
    background: ${(props) => props.theme.colors.backgroundSecondary};
  }

  svg {
    display: inline-block;
    vertical-align: middle;
  }
`;
