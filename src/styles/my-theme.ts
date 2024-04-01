import { DefaultTheme, createGlobalStyle } from "styled-components";

const MyGlobalStyle = createGlobalStyle`
  * {
      padding:0;
      margin:0;
      vertical-align:baseline;
      list-style:none;
      border:0;
      box-sizing: border-box;
  }

  a {
      text-decoration: none;
  }

  button {
    cursor: pointer;
  }

  &::-webkit-scrollbar              { 
    width: 10px; 
  }
  &::-webkit-scrollbar-track-piece  { 
    border-radius: 7px;
  }
  &::-webkit-scrollbar-thumb        { 
    background-color: #ea4444c8;
    border-radius: 7px;
    cursor: grab;

    &:active{
      cursor: grabbing;
      background-color: #E40F0F;
    }
  }
`;

const myTheme: DefaultTheme = {
  colors: {
    black: "#1D1D1D",
    white: "#fff",
    red: "#E40F0F",
    light: "#EEEEEE",
  },
};

export { myTheme, MyGlobalStyle };
