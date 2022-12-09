import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *,
    ::after,
    ::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }   

    body {
        font-family: 'Roboto', sans-serif;
        background: #c2d1b2;
        line-height: 1.5;
        font-size: 0.875rem;
    }
`;
