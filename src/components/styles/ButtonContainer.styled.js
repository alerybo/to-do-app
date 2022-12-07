import styled from "styled-components";

export const ButtonContainer = styled.form`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1.5rem;

  button {
    background: #f1f2ed;
    border: none;
    padding: 0.3rem 0.5rem;
    border-radius: 0.25rem;
    transition: all 0.3s;
  }

  button:hover {
    background: #ced1be;
  }
`;
