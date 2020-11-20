import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle<any>`
  a {
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
    filter: brightness(120%);
  }
`;
