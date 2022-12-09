import styled from "styled-components";

export const Task = styled.div`
  padding: 0.25rem;
  display: flex;
  align-items: center;

  input[type="checkbox"] {
    margin: 0.25rem;
  }
  input:checked {
    accent-color: grey;
  }
  input[type="text"] {
    margin: 0.25rem;
    flex-grow: 1;
    background: transparent;
    border: none;
    padding: 0.25rem;
  }
  button {
    margin: 0.5rem;
    background: transparent;
    border: none;
    transition: 0.3s;
  }
  button:hover {
    color: grey;
  }
`;
