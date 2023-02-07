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
        font-family: 'Source Sans Pro', sans-serif;
        color: ${(props) => props.theme.colors.textPrimary};
    }

    p {
        font-size: ${(props) => props.theme.fontSizes.base};
        font-family: 'Source Sans Pro', sans-serif;
    }
    h2 {
        font-size: ${(props) => props.theme.fontSizes.title};
        font-weight:100;
    }
    a{
        color: ${(props) => props.theme.colors.textPrimary};
        text-decoration:none;
        display: flex;
        align-items:center;
        font-family: 'Source Sans Pro', sans-serif;

    }
`;
