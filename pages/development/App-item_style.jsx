import styled from 'styled-components'

export const StyledTooltip = styled.span`
    visibility: hidden;
    width: 120px;
    position: absolute;
    z-index: 8;

    top: -6vh;
    left: ${({ parent }) => parent === 'deploy'? '6vh;':  '-12vh;'}
    padding: 5px 0;
    font-size: 0.8em;
    text-align: center;
    color: #fff;
    background-color: black;
    border-radius: 6px;
    box-shadow: 
                0 0 3px #fff,
                0 0 0.2rem #0fa,
                0 0 0.7rem #0fa,
                inset 0 0 0.2rem #0fa;
`

export const AppListItem = styled.li `list-style-type:none`

export const AppItemWrapper = styled.div`
    width: 100%; 
    margin: 5% 0;

    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    color: white;
    border: 1px solid white; border-radius: 5px;
    
    /* border neon effect */
    box-shadow: 
                0 0 3px #fff,
                0 0 0.2rem #0fa,
                0 0 0.7rem #0fa,
                inset 0 0 0.2rem #0fa;

    @media screen and (max-width: 600px) { height: 15vh; }
    @media screen and (min-width: 600px) { height: 17vh; }
`

export const AppLogoWrapper = styled.div`

    /* border:1px solid yellow; */
    
    height: 100%;
    position:relative; /* related to tooltip abs pos */
    display: flex;
    
    @media screen and (max-width: 600px) {
        flex-basis: 35%;
        /* max-height: 80px; */
        max-width: 40%;
        padding: 1%;
        
    }
    @media screen and (min-width: 600px) {
        flex-basis: 30%; 
        max-width:50%;
        padding: 1%;
    }
    a { overflow: hidden;}
    img {
        height: 100%;
        max-width: 100%;
        object-fit: contain;
        object-position: left;
    }

    ${ ({isDeployed}) => !isDeployed && `
        /* img { opacity: 0.3;} */
        &:hover ${StyledTooltip} { visibility: visible; }

    `}

    ${ ({isDeployed}) => isDeployed && `
        img:hover {
            box-shadow: 
            0 0 1rem #bc13fe,
            0 0 1rem #bc13fe,
            inset 0 0 10rem #bc13fe;
            transition: all 0.2s ease-in-out;
        }
    ` }
`

export const SpecialImg = styled.img`
        &:hover { box-shadow: unset !important; }
        opacity: 1 !important;
        box-shadow:  0 0 1rem #000000, inset 0 0 10rem #00000080;
        object-position: initial !important;
        z-index:2;
        position: absolute; bottom: 0; right:0;
        
        @media screen and (max-width: 600px) { object-fit: cover !important; }
        @media screen and (min-width: 600px) { object-fit: contain !important; }
`

export const AppKeywordsWrapper = styled.div`
        height:100%;
        display: flex;
        flex-flow: column wrap;
        justify-content: center;

        p:first-child { font-weight: bold;}

        @media screen and (max-width: 600px) {
            flex-basis: 65%;
            p { font-size: calc(1vw + 1vh + 1vmin); }
        }
        @media screen and (min-width: 600px) {
            flex-basis: 55%;
            p { font-size: calc(0.7vw + 0.3vh + 1.5vmin);}
        }
        
        padding: 1%;
        overflow:hidden;

        p {
            margin: 0;
            overflow:hidden; 
            text-overflow: ellipsis;
            border-left: 1px solid white;
            padding-left: 2%;
        }
        p:hover { overflow:visible; }
`

export const AppLinksWrapper = styled.div`
    display: flex;
    @media screen and (max-width: 600px) {
        flex-basis:15%;
        flex-flow: column nowrap;
        height: 100%;
        align-items: space-evenly;
        justify-content: space-evenly;
    }
    @media screen and (min-width: 600px) { flex-basis:20%; flex-flow: row nowrap;}
    justify-content: end;
`

export const AppLink = styled.div`
    position: relative;
    &:hover ${StyledTooltip} { visibility: visible; }
    margin: 0 5%;
`
export const LinkImgWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;

    @media screen and (max-width: 600px) { height: 5vh; width: 5vh; }
    @media screen and (min-width: 600px) { height: 9vh; width: 9vh; }
    
    border: 1px solid white; border-radius: 50%;
    
    img {  
        max-width:80%; height:auto; max-height: 70px;
    
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
