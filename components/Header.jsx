import React from 'react'

import { useRouter } from 'next/router'
import Link from 'next/link'
// import { useLocation } from 'react-router-dom'
// import { NavLink } from 'react-router-dom'

import Image from 'next/image'
import { StyledHeader, MainLogoWrapper } from '../styles/Header_style'
//import { SrOnlyH1 } from '../styles/global_style'
import hagLogo from '../public/logos/hag_logo_white_full.png'
import NavComponent from '../components/Nav'


// https://nextjs.org/docs/api-reference/next/link#if-the-child-is-a-function-component
// eslint-disable-next-line react/display-name
const MainLogo = React.forwardRef(({ onClick, href }, ref) => {
  return (
    <a href={href} onClick={onClick} ref={ref}>
      <Image src={hagLogo} alt='hag Logo' layout="responsive" />
    </a>
  )
})


const Header = () => {

  const router = useRouter()
  const isHomePage = router.pathname === '/'

  return (

      <StyledHeader>
        <MainLogoWrapper>
          <Link href="/" passHref>
            <MainLogo />
          </Link>
         {/*  <SrOnlyH1>HAG portfolio webdev 2022</SrOnlyH1> */}
        </MainLogoWrapper>
        
        { isHomePage? <NavComponent hostParent="home" /> : <NavComponent hostParent="any" /> }

      </StyledHeader>
    )
}

export default Header
