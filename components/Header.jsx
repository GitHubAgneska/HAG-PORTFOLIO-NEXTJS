import React from 'react'

import { useRouter } from 'next/router'
import Link from 'next/link'
// import { useLocation } from 'react-router-dom'
// import { NavLink } from 'react-router-dom'

import Image from 'next/image'
import { StyledHeader, MainLogoWrapper, MainLogo } from '../styles/Header_style'
//import { SrOnlyH1 } from '../styles/global_style'
import hagLogo from '../public/logos/hag_logo_darkBG_full.png'
import NavComponent from '../components/Nav'


const Header = () => {

  const router = useRouter()
  const location = router.pathname // or router.asPath
  // const location = useLocation();

  const isHomePage = location.pathname === '/' || location.pathname === 'home'

  return (

      <StyledHeader>
        <MainLogoWrapper>
          
          <Link href="/" passHref>
            <Image src={hagLogo} alt='hag Logo' layout="responsive"  />
          </Link>
          
         {/*  <SrOnlyH1>HAG portfolio webdev 2022</SrOnlyH1> */}
        </MainLogoWrapper>
        
        { !isHomePage &&  <NavComponent /> }

      </StyledHeader>
    )
}

export default Header
