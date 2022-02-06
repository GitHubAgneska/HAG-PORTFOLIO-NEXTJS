import styled from 'styled-components'

export const StyledHeader = styled.header`
    width: 100%;
    position: relative; 
    @media screen and (max-width: 600px) {height: 12vh; padding-top: 3%;}
    @media screen and (min-width: 600px) {height: 100px;}

    display: flex; flex-flow: row nowrap;
    justify-content: space-between; align-items: center;
    transition: height 1s ease-in-out;
`

export const MainLogoWrapper = styled.div`
    border:1px solid red; 
    @media screen and (max-width: 600px) {width: 7vh;}
    @media screen and (min-width: 600px) {width: 10vh;}
    margin: 2%;
    a { display: block; }
    transition: all 1s ease-in-out;
`

