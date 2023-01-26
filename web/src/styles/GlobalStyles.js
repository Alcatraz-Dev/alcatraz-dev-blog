import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root{
    --primary: #59981A;
    --secondary: #81B622;
    --darkBlue: #070747; 
    --darkPurple: #0E0034;
    --black-1: #0D121F;
    --black-2: #121826;
    --white-1: #C6BED9;
    --gray: #64718A;
    --grey: var(--gray);
    --white: white;
    --black: black;
  }
  html{
    font-size: 10px;
  }
  
  body{
    min-height: 100vh;
    line-height: 1.5;
    width: 100%;
    font-family: 'Inter';
    background: var(--black-1);
    color: var(--white);
  }
  a{
    text-decoration: none;
    color: var( --white-1);
  }

  .container{
    max-width: 1200px;
    margin: 0 auto;
    width: 95%;
    margin-top:30px;
    margin-bottom:30px;
  }
  .container-iframe{
    max-width: 1200px;
    width: 100%;
    border-radius:15px;
    border:none;
    margin-top:30px;
    margin-bottom:30px;
  
  }
  .container-PostImage{
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
    border-radius:15px;
    border:none;
  }
  .container-code-lg{
   
    position:relative;
  }

  img, svg{
    height: 100%;
    width: 100%;
    
  }


  .dec{
    li, ul{
      list-style: none;
      
    }
  }
  .code-font{
    font-size:15px;
  }
  .Copy-Button{
   
    position:absolute;
    right :20px;
    top:15px;
    font-size:18px;
    background:transparent;
    border:none transparent;
    color: var(--white-1);
    &:hover {
     color: #00AEFF;
     cursor: pointer;
   
     
  }

`;

export default GlobalStyles;
