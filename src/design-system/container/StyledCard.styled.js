import styled from "styled-components";

export const StyledCard = styled.div`
  display: inline-block;
  width: 100%;
  height: fit-content;
  background: ${(props) => props.theme.colors.white};
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  padding: 30px;
  margin-bottom: 20px;

  input::placeholder {
    opacity: 1;
  }
`;
