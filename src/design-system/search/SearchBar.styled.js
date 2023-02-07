import styled from "styled-components";

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background: ${(props) => props.theme.colors.white};
  border-radius: 10px;
  padding: 0 10px;

  input {
    background: none;
    border: none;
    font-size: ${(props) => props.theme.fontSizes.base};
    padding: 10px;
  }

  input:focus-visible {
    outline: none;
  }
`;
