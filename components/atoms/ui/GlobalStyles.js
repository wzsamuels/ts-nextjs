import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    box-sizing: border-box;
    transition: all 1s;
  }
  
  *,
  ::before,
  ::after {
    box-sizing: inherit;
  }

  a {
    color: ${props => props.theme.colors.text};
  }
  
  /*
  body * + * {
    margin-top: 1.5em;
  }
 
   */
  html, body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    //font-family: 'Roboto', sans-serif;
    font-size: 16px;
    transition: all .5s;
    mix-blend-mode: normal;
    color: ${props => props.theme.colors.text};
    background: ${props => props.theme.colors.background};
    /* width */
    ::-webkit-scrollbar {
      width: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: #f1f1f1;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #888;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  }
  
`;

export default GlobalStyles;