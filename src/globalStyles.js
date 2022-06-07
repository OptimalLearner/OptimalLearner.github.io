import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        overflow-x: hidden;
    }
    ::-webkit-scrollbar {
        width: 15px;
    }
    ::-webkit-scrollbar-track {
        background-color: #232323;
    }
    ::-webkit-scrollbar-thumb {
        background-color: #FFD93D;
        border-radius: 0.25rem;
        border: 2px solid #232323;
    }
`;

export default GlobalStyle;