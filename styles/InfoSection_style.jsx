import styled from 'styled-components'


export const StyledInfoSection = styled.section`
    width:100%;
    margin: 5% 0%;
    border: 1px solid white; border-radius: 5px;
    
    /* border neon effect */
    box-shadow: 
                0 0 0.8rem #bc13fe,
                0 0 2.8rem #bc13fe,
                inset 0 0 1.3rem #bc13fe;


    img { max-width:100%; height:auto; }
    color: white; font-family: 'Questrial';
`

export const InfoSectionWrapper = styled.div`
    padding:5%;
    display: flex;
    align-items:center;
    @media screen and (max-width: 600px) {flex-flow: column nowrap;}
    @media screen and (min-width: 600px) {flex-flow: row nowrap; justify-content: space-between; }
`

export const InfoPres =  styled.div`

    display: flex; flex-flow: row nowrap;
    flex-grow: 2;
    align-items:center;

    @media screen and (min-width: 600px) {
        flex-basis: 60%;
        
        border-right: 1px solid white;
    }
    @media screen and (max-width: 600px) {
        flex-basis: 100%;
        justify-content: space-around;
        padding-bottom: 5%;
        border-bottom: 1px solid white;
    }
    transition: all 0.2s linear;
    
    /* headshot */
    div:first-child { 
        flex: 0;
        padding:2%;
        img {
            min-width: 80px;
            border-radius: 50%;
        }
    }

`
export const InfoPresText = styled.div`
    max-height: 100%;
    overflow: hidden;

    line-height:1.2;
    text-overflow: ellipsis;

    h1, h2, h3 {margin: 0;}
    a h3 { color: white;  transition: all 0.3s ease-in-out;}
    
    a h3:hover {
        padding: 2%;
        border: 1px solid white;
        border-radius:2px;
        box-shadow:  /* border neon effect */
                    0 0 0.8rem #bc13fe,
                    0 0 2.8rem #bc13fe,
                    inset 0 0 1.3rem #bc13fe;
    }

    @media screen and (max-width: 600px) {
        h1, h2 { font-size: calc(1vw + 1vh + 1vmin);}
        h3 {font-size: calc(1vw + 1vh + 0.8vmin); }
    }
    @media screen and (min-width: 600px) {
        h1, h2 {font-size: calc(1.5vw + 0.3vh + 1vmin); }
        h3 {font-size: calc(1vw + 1vh + 0.3vmin); }
    }
    @media screen and (min-width: 1200px) {
        h1, h2 { font-size: calc(1.5vw + 0vh + 0vmin); }
    }
`

export const InfoPresLinks = styled.div`
    display: flex;
    align-items:center;
    justify-content: space-between;
    @media screen and (max-width: 600px) {flex-basis: 100%;  flex-flow: column nowrap;}
    @media screen and (min-width: 600px) {flex-flow: row nowrap; border-left: 1px solid white;}
`

export const GroupIconsWrapper = styled.div`
/* border: 1px solid red;   */
    display: flex;
    align-items:center;
    flex-flow: row nowrap;
    
    @media screen and (max-width: 600px) {height:60px;}
    @media screen and (min-width: 600px) {justify-content: end;}
    div { margin: 5%; }
`

export const IconWrapper = styled.div` 
    border: 1px solid white; border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    a {
        display: block; display: flex;
        justify-content: center;
        align-items: center;
        align-content: center;
    }
    img {  
        max-width:100%; height:auto;
        max-height: 60px; min-width: 30px;
    }
    &:hover {
        border-radius:5px;
        transition: all 0.1s ease-in-out; 
        /* border neon effect */
        box-shadow: 
                    0 0 0.8rem #bc13fe,
                    0 0 2.8rem #bc13fe,
                    inset 0 0 1.3rem #bc13fe;       
    }
`
export const DownloadIconWrapper = styled(IconWrapper)`
    @media screen and (max-width: 600px) {margin: 10%;}
    @media screen and (min-width: 600px) {margin: 5%;}

    img {  
        max-width:100%;
        height:auto;
        max-height: 90px;
        min-width: 40px;
    }
`