import styled from 'styled-components'

export const StyledNav = styled.nav`

/* ------- BASE STYLE  ------- */
    font-family: 'Shrikhand';
    display: flex;

    a p { color: white;}
    
    a:hover, a:active { 
        border:1px solid white; border-radius:5px;

        /* - neon effect - */
        text-shadow:
                /* White glow */
                    0 0 10px #fff,
                /* Green glow */
                    0 0 42px #0fa,
                    0 0 82px #0fa,
                    0 0 92px #0fa,
                    0 0 102px #0fa,
                    0 0 151px #0fa;
                    transition: all 0.3s linear;
    }
    
    /* ---- HOME PAGE DESKTOP ONLY: nav is full page ----- */
    ${({ hostParent }) => hostParent === 'home' && `
        position: absolute; height:90vh; width: 100%;
        top: 2vh; margin: auto; 
        
        flex-flow: column nowrap;  
        @media screen and (min-width: 600px) {

           /*  height:60%;  */
           /*  margin: 3% 8.5%; */
            
            font-size: calc(2vw + 3vh + 1vmin);

            a { padding: 3%; transition: all 0.5s linear;}
            a:first-child {  align-self: end; margin-left: 8.5%; }
            a:nth-child(2) { align-self: start;}
            a:nth-child(3) { align-self: end; }
            a p { margin: 0; }
            justify-content: space-between;
        }

    /* ---- HOME PAGE MOBILE ONLY ----- */
        @media screen and (max-width: 600px) {
            font-size: 30px;
            a { align-self: initial; width: unset; p { text-align: center; }}
            justify-content: center;
        }
        transition: all 0.5s linear;
    `}
    transition: background-color 0.3s ease-in-out;


    /* -------- ALL PAGES (except home) -------- */
    ${({ hostParent }) => hostParent !== 'home' && `
        
    /* --------  DESKTOP -------- */
            @media screen and (min-width: 600px) {
                position: absolute; right: 0;
                width: 60%; display: flex; flex-flow: row nowrap;
                justify-content: space-between;
            }
    /* --------  MOBILE -------- */
            @media screen and (max-width: 600px) {
                display: none; 
                
                ${({ burgerOpen }) => burgerOpen && `

                    position:fixed; 
                    top: 11vh;
                    flex-flow: column nowrap;
                    
                    z-index:3;
                    overflow: hidden;
                    background-color: #ffc39d;
                    color: white;
                    justify-content: center; align-items:center;
                    -webkit-box-shadow: 0px 13px 34px 2px rgba(35,1,45,0.69); 
                    box-shadow: 0px 13px 34px 2px rgba(35,1,45,0.69);
                    a { width: 100%; max-width: unset; }
                    a p { font-size:1.5em; color: white; text-transform: uppercase; font-size:1.3em; }
                    .active { text-decoration: none; font-weight: bold; p { border-bottom:1px solid white; border-top:1px solid white;} }
                `}
                ${({ burgerOpen }) => !burgerOpen && 'visibility: hidden;'}
            }
    `}
`