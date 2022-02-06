
/* this file is only informative: to be used, it must be copied to the parent element's style file */
/*  use like so on parent style: &:hover ${StyledTooltip} { visibility: visible; }  */
import styled from 'styled-components'

export const StyledTooltip = styled.span`
    visibility: hidden;
    width: 120px;
    position: absolute;
    z-index: 1;
    /* top: -42px; */
    background-color: black;
    color: #fff;
    text-align: center;
    padding: 5px 0;
    border-radius: 6px;
`
