import styled from 'styled-components'


export const WebdesignStyledSection = styled.section`
    margin: auto;
    height:90%;
    overflow: scroll;
`

export const CarouselWrapper = styled.div`
    width: 100%;
    padding-top: 5%;
    @media screen and (min-width: 992px) {
        width: 80%;
        margin: auto;
    }
    
    .carousel .thumbs-wrapper,          /* thumbs */
    .carousel-status { display: none; } /* pages status */

    .carousel .control-arrow::before {  /* carousel arrows */
        margin: 0 5px;
        display: inline-block;
        border-top: 15px solid transparent;
        border-bottom: 15px solid transparent;
    }


`