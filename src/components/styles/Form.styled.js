import styled from "styled-components";

export const StyledForm = styled.form`
  display: block;
  margin-bottom: 1.5rem;

  h2 {
    text-align: center;
    margin-bottom: 1.5rem;
  }

  div {
    display: flex;
    justify-content: center;
  }

  input {
    padding: 0.25rem 0.25rem 0.25rem 1rem;
    font-size: 1rem;
    background: #f1f2ed;
    border-radius: 0.25rem 0 0 0.25rem;
    border: none;
    flex: 1 0 auto;
    color: gray;
  }

  button {
    background: #ced1be;
    font-size: 0.85rem;
    border: none;
    flex: 0 0 5rem;
    padding: 0.25rem;
    border-radius: 0 0.25rem 0.25rem 0;
    transition: all 0.3s;
  }

  button:hover {
    background: #a6a899;
  }
`;
