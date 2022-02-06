import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        scroll-behavior: smooth;
    }
    html {
        font-size: 100%; /* = 16px default */
        font-family: Avenir, Helvetica, Arial, sans-serif;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    body { 
        margin: 0; height: 100vh;
        background-image: url('../public/images/nightsky_gradient-2.png');
        background-repeat: no-repeat;
        background-position: cover;
    }
    button { display: block; border: none; }
    a, input, button {cursor: pointer; }
    a { text-decoration: none; }

    .app-container {
        height: 100vh;
        @media screen and (max-width: 600px) { margin: 0% 5%;}
        @media screen and (min-width: 600px) {margin: 0% 10%;} 
        @media screen and (min-width: 1440px) {margin: 0% 1%;} 
        overflow: hidden;
    }
    
    main { width:100%; height:100vh;}

    .notFoundPage-wrapper {

        .notFound-pic-wrapper {
            // @include calcResponsiveSize(320px, 195px, 50vw, 580px);
            //@include max-992px { height: 70px;}
            //@include min-992px { height: 200px;}
            img { 
                min-width: auto;
                max-height: 100%;
                margin: auto;
                display: block;
            }
        }
        h1, h2 {text-align: center;}
    }
    
    // accessibility
    .visuallyHidden {
        border: 0;
        clip: rect(0 0 0 0);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px;
    }
}
`

/* accessibility - .sr-only class */
export const SrOnlyH1 = styled.h1`
    border: 0 !important;
    clip: rect(1px, 1px, 1px, 1px) !important; /* 1 */
    -webkit-clip-path: inset(50%) !important;
    clip-path: inset(50%) !important; /* 2 */
    height: 1px !important;
    margin: -1px !important;
    overflow: hidden !important;
    padding: 0 !important;
    position: absolute !important;
    width: 1px !important;
    white-space: nowrap !important; /* 3 */
`

export const SrOnlyH2 = styled.h2`
    border: 0 !important;
    clip: rect(1px, 1px, 1px, 1px) !important; /* 1 */
    -webkit-clip-path: inset(50%) !important;
    clip-path: inset(50%) !important; /* 2 */
    height: 1px !important;
    margin: -1px !important;
    overflow: hidden !important;
    padding: 0 !important;
    position: absolute !important;
    width: 1px !important;
    white-space: nowrap !important; /* 3 */
`
