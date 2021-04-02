import { createGlobalStyle } from 'styled-components'
import {
  dblack, groldSLight, customScroll
} from './config/variables'

export const GlobalStyles = createGlobalStyle` 
  /*----------Default-CSS--------------*/
  body {
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
    font-family: ${groldSLight};
    color: ${dblack};
    margin: 0;
    padding: 0;
    -webkit-text-size-adjust: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
    ${customScroll};
  }
  body.over-hidden{
    overflow: hidden;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *:after, *:before{
    box-sizing: border-box;
  }

  :focus {
    outline: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 700;
    margin-bottom: 20px;
  }

  p {
    margin-bottom: 20px;
  }

  a {
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  .container {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 20px;
    width: 100%;
  }
`
