import React, { Fragment, useState } from 'react'
import Link from 'next/link'
// import { NavLink } from 'react-router-dom'
import { StyledNav } from '../styles/Nav_style'
import Burger from './Burger'

// https://nextjs.org/docs/api-reference/next/link#if-the-child-is-a-function-component
// eslint-disable-next-line react/display-name
const NavLink = React.forwardRef(({ onClick, href, navlinkName }, ref) => {
    return (
        <a href={href} onClick={onClick} ref={ref}>
            <p>{navlinkName}</p>
        </a>
        )
})


const NavComponent = ({ hostParent }) => {

    const [burgerOpen, setBurgerOpen] = useState(false)
    const handleClick = () => {
        setBurgerOpen(!burgerOpen)
      /* !burgerOpen ? document.body.style = 'position:fixed' : document.body.style = 'position:initial' */
    }

    return (
        <Fragment>

            <Burger open={burgerOpen} hostParent={hostParent} setOpen={handleClick} />

            <StyledNav burgerOpen={burgerOpen} hostParent={hostParent} >
                <NavLink href='/development/DevSection' onClick={handleClick} navlinkName='Development' />
                <NavLink href='/webdesign/WebdesignSection' onClick={handleClick} navlinkName='Webdesign' />
                <NavLink href='/info/InfoSection' onClick={handleClick} navlinkName='Info' />

                {/* <Link href='/webdesign/WebdesignSection' passHref aria-label='Webdesigns' onClick={handleClick}><p>Webdesign</p></Link>
                <Link href='/info/InfoSection' passHref aria-label='Info' onClick={handleClick}><p>Info</p></Link> */}
            </StyledNav>

        </Fragment>
    )
}

export default NavComponent
