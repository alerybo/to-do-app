import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  div {
    flex-grow: 1;
  }

  input {
    font-size: ${(props) => props.theme.fontSizes.small};
  }
`;
