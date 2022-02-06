import { StyledBurger } from '../styles/Buger_style'
import Link from 'next/link'
import Image from 'next/image'
import iconClose from '../public/icons/icon_close.png'
import iconBurger  from '../public/icons/icon_burgerMenu.png'

const Burger = ({ open, setOpen, hostParent }) => {
  
  return (

    <StyledBurger hostParent={hostParent} open={open} onClick={setOpen}>
      {open
        ? <span id='closeNavIcon'><Image src={iconClose} alt='close icon' /></span>
        : <span id='burgerIcon'><Link href='/' passHref><Image src={iconBurger} alt='burger icon' /></Link></span>}
    </StyledBurger>
  )
}
export default Burger
/* Burger.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
  }; */
