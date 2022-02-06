import React from 'react'

import { useRouter } from 'next/router'
import Link from 'next/link'

// import { useLocation } from 'react-router-dom'
// import { NavLink } from 'react-router-dom'

import { StyledHeader, MainLogoWrapper, MainLogo } from './Header_style'
//import { SrOnlyH1 } from '../styles/global_style'
import hagLogo from '../public/images/HAG_logo_darkBG_full.png'
import NavComponent from '../components/nav/Nav'


const Header = () => {

  const router = useRouter()
  const location = router.pathname // or router.asPath
  // const location = useLocation();

  const isHomePage = location.pathname === '/' || location.pathname === 'home'

  return (

      <StyledHeader>
        <MainLogoWrapper>
          
          <Link href="/" passHref>
            <MainLogo src={hagLogo} alt='hag Logo' />
          </Link>
          
         {/*  <SrOnlyH1>HAG portfolio webdev 2022</SrOnlyH1> */}
        </MainLogoWrapper>
        
        { !isHomePage &&  <NavComponent /> }

      </StyledHeader>
    )
}

export default Header
