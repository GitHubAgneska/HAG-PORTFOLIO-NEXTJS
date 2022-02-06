import React, { Fragment, useState } from 'react'
import Link from 'next/link'
// import { NavLink } from 'react-router-dom'
import { StyledNav } from './Nav_style'
import Burger from '../burger/Burger'

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
                <Link href='/development' passHref aria-label='Development' onClick={handleClick}><p>Development</p></Link>
                <Link href='/webdesign' passHref aria-label='Webdesigns' onClick={handleClick}><p>Webdesign</p></Link>
                <Link href='/info' passHref aria-label='Info' onClick={handleClick}><p>Info</p></Link>
            </StyledNav>

        </Fragment>
    )
}

export default NavComponent
