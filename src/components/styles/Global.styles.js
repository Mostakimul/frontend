import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
  }

  body, input, button, select, textarea, option {
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    -webkit-font-family: 'Poppins', sans-serif;
    -moz-font-family: 'Poppins', sans-serif;
    -ms-font-family: 'Poppins', sans-serif;
    -o-font-family: 'Poppins', sans-serif;
  }

  body {
    padding: 1rem;
    background: rgba(81, 94, 190, 1);
  background: -webkit-linear-gradient(
    top left,
    rgba(81, 94, 190, 1),
    rgba(31, 148, 161, 1)
  );
  background: -moz-linear-gradient(
    top left,
    rgba(81, 94, 190, 1),
    rgba(31, 148, 161, 1)
  );
  background: linear-gradient(
    to bottom right,
    rgba(81, 94, 190, 1),
    rgba(31, 148, 161, 1)
  );
  }

`;

export default GlobalStyle;
