import styled from "styled-components";

export const Button = styled.button`
  background: #f1f2ed;
  border: none;
  padding: 0.3rem 0.5rem;
  border-radius: 0.25rem;
  transition: all 0.3s;
  font-size: 0.7rem;
  color: #5c5c5c;

  &:hover,
  &.active {
    background: #ced1be;
  }
`;
