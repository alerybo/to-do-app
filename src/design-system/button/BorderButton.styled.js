import styled from "styled-components";

export const BorderButton = styled.button`

  width: fit-content;
  display: block;
  background: transparent;
  border: 1px solid ${(props) => props.theme.colors.textPrimary};
  padding: 10px 16px;
  border-radius: 10px;
  transition: all 0.3s;
  color: ${(props) => props.theme.colors.textPrimary};
  cursor: pointer;

  &:hover,
  &.active {
    background: ${(props) => props.theme.colors.backgroundPrimary};
  }
`;
