import styled from "styled-components";

export const ColorPickerButton = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 1px solid ${(props) => props.theme.colors.textSecondary};
  &.green {
    background-color: ${(props) => props.theme.colors.greenAccent};
  }
  &.pink {
    background: ${(props) => props.theme.colors.pinkAccent};
  }
  &.yellow {
    background: ${(props) => props.theme.colors.yellowAccent};
  }
  &.white {
    background: ${(props) => props.theme.colors.white};
  }
`;
