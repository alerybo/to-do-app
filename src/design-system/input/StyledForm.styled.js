import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  div {
    flex-grow: 1;
  }

  input {
    color: black;
  }

  .list-title > input {
    font-size: ${(props) => props.theme.fontSizes.large};
  }

  .css-yz9k0d-MuiInputBase-input.Mui-disabled {
    -webkit-text-fill-color: ${(props) => props.theme.colors.textPrimary};
  }
`;
