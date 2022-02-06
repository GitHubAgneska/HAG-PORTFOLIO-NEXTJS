import React, { Fragment, useState } from 'react'
import Link from 'next/link'
// import { NavLink } from 'react-router-dom'
import { StyledNav } from '../styles/Nav_style'
import Burger from './Burger'

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
                <Link href='/development/DevSection' passHref aria-label='Development' onClick={handleClick}><p>Development</p></Link>
                <Link href='/webdesign/WebdesignSection' passHref aria-label='Webdesigns' onClick={handleClick}><p>Webdesign</p></Link>
                <Link href='/info/InfoSection' passHref aria-label='Info' onClick={handleClick}><p>Info</p></Link>
            </StyledNav>

        </Fragment>
    )
}

export default NavComponent
