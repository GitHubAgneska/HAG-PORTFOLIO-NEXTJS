import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { StyledBurger } from '../styles/Buger_style'
import iconClose from '../public/icons/icon_close.png'
import iconBurger  from '../public/icons/icon_burgerMenu.png'

// https://nextjs.org/docs/api-reference/next/link#if-the-child-is-a-function-component
// eslint-disable-next-line react/display-name
const BurgerIcon = React.forwardRef(({ onClick, href }, ref) => {
  return (
    <a href={href} onClick={onClick} ref={ref}>
      <Image src={iconBurger} alt='burger icon' />
    </a>
  )
})


const Burger = ({ open, setOpen, hostParent }) => {
  
  return (

    <StyledBurger hostParent={hostParent} open={open} onClick={setOpen}>
      {open
        ? <span id='closeNavIcon'><Image src={iconClose} alt='close icon' /></span>
        : <span id='burgerIcon'><Link href='/' passHref><BurgerIcon /></Link></span>}
    </StyledBurger>
  )
}
export default Burger
/* Burger.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
  }; */
