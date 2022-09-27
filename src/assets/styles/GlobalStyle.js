import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    /* -webkit-font-smoothing: antialiased;
    -webkit-osx-font-smoothing:grayscale; */
}
html{
    font-size:10px;
  
}

*,*::after, *::before{
    box-sizing:inherit;
    margin:0;
    padding:0;
}
body{
    font-size:10px;
    box-sizing:border-box;
    /* background-color:#070724 ;
    background-image:url("../images/"); */
    color:#FFFFFF;
}
a,button,input{

}

a:-webkit-any-link {
    color: #FFFFFF;


}


h1{  
    font-family: "Antonio";
    font-weight: 500;
    font-size: 80px;
    line-height: 103px;
};

h2 {
      font-family: "Antonio";
      font-weight: 500;
      font-size: 40px;
      line-height: 52px;
      letter-spacing: -1,5px;
}

h3: {
      font-family: "Spartan";
      font-weight: 700;
      font-size: 12px;
      line-height: 25px;
      letter-spacing: 2.6px;
};

h3: {
      font-family: "Spartan";
      font-size: 12px;
      line-height: 25px;
      letter-spacing: 2.6px;
}

h4: {
      font-family: "Spartan";
      font-weight: 700;
      font-size: 11px;
      line-height: 25px;
      letter-spacing: 1px;
};

input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none; 
  margin: 0; 
}

#gatsby-focus-wrapper {
  height: 0;
}


`
