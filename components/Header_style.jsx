import styled from 'styled-components'

export const StyledHeader = styled.header`
    width: 100%;
    position: relative; 

    display: flex; flex-flow: row nowrap;
    justify-content: space-between; align-items: center;
    
    transition: height 1s ease-in-out;

    @media screen and (max-width: 600px) {height: 12vh; padding-top: 3%;}
    @media screen and (min-width: 600px) {height: 100px;}
    /* @media screen and (min-width: 1080px) {height: unset;}  */
    a { display: block; }
`

export const MainLogoWrapper = styled.div`
    margin: 2%;
    a {  max-width: 7vh; }
    transition: all 1s ease-in-out;
    
    img {
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 100%;
    }
`

export const MainLogo = styled.img`
    max-width: 100%;
    height:auto;
`

