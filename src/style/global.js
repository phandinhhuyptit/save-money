import styled, { css, createGlobalStyle } from 'styled-components';
import 'antd/dist/antd.css';
export const GlobalStyle = createGlobalStyle`
 html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
    border: none;
    box-sizing: border-box;
    font-size: 100%;
    color: inherit;
    /* font: inherit; */
    background: none;
}  
html,body {
  box-sizing: border-box;
  background-color: rgb(241, 240, 241);
  font-family: 'Roboto', sans-serif;
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  -webkit-tap-highlight-color: transparent;
  ${
    '' /* -webkit-touch-callout: none;
    -webkit-user-select: none;
     -khtml-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none; */
  }
  overflow-y: auto;
}
.container { 
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    height: 100%;
    @media (min-width: 576px){
    max-width: 540px;
    }
    @media (min-width: 768px) {
    max-width: 720px;
    }
    @media (min-width: 992px){
    max-width: 960px;
    }
    @media (min-width: 1200px){
    max-width: 1264px;
    }
}
.container-2 {
    margin-bottom: 24px;
    width: 100%;
    margin-left: auto!important;
    margin-right: auto!important;
    padding-left: 1rem;
    padding-right: 1rem;
    max-width: 1264px;
}
#__next{
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    
}
:root {
    --button-icon-color: #ffff
}
`;
