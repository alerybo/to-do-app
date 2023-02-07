import styled from "styled-components";

export const GridContainer = styled.div`
  /* display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  grid-auto-rows: fit-content; */
  -webkit-column-count: 3;
  -moz-column-count: 3;
  column-count: 3;

  -webkit-column-gap: 15px;
  -moz-column-gap: 15px;
  column-gap: 15px;
`;
