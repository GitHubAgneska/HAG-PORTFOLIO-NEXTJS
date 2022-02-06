import styled from 'styled-components'

export const StyledBurger = styled.div`
    ${({ hostParent }) => hostParent === 'home'? 'display:none': `
    
        position: absolute;
        width: 2em;
        height: 2em;
        right:0;
        display: flex; flex-direction: column;
        justify-content: space-around;
        font-size: 5vw;
        @media screen and (min-width: 600px) {opacity:0;}
        @media screen and (max-width: 600px) {opacity: 1;}
        transition: opacity 0.3s linear;
        
        i { font-size: 6vh; color: white; }
        i:hover, i:active { 
            
            text-shadow: /* - neon effect - */
                /* White glow */
                    0 0 10px #fff,
                /* Green glow */
                    0 0 42px #0fa,
                    0 0 82px #0fa,
                    0 0 92px #0fa,
                    0 0 102px #0fa,
                    0 0 151px #0fa;
                    transition: all 0.2s ease-in-out;
        }
    `
}`
