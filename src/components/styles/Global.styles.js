import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, input, button, select, textarea, option {
    font-family: 'Poppins', sans-serif;
    -webkit-font-family: 'Poppins', sans-serif;
    -moz-font-family: 'Poppins', sans-serif;
    -ms-font-family: 'Poppins', sans-serif;
    -o-font-family: 'Poppins', sans-serif;
  }
`;

export default GlobalStyle;
