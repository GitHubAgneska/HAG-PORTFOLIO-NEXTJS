import Tooltip from './Tooltip'

import Image from 'next/image'

import githublogo from '../public/icons/github_logo_white.png'
import readme from '../public/icons/readme_icon_nostroke_yellow.png'
import deployongoing from '../public/icons/deploy-ongoing_icon.png'

import { AppItemWrapper, AppListItem, AppLinksWrapper, AppLogoWrapper, SpecialImg, AppKeywordsWrapper, AppLink, LinkImgWrapper } from '../styles/App-item_style'
// import { SrOnlyH2 } from '../../style/global_style'

const AppItem = (app) => {
  return (

    <>
      { Object.keys(app).map(a => (
        
        <AppListItem key={Math.random()} >
          
          <AppItemWrapper isDeployed={app[a].deployed}>

            <AppLogoWrapper isDeployed={app[a].deployed} appName={app[a].name} notes={app[a].notes}>
              
              <Tooltip tooltipContent='deploy in progress!' parent='deploy' />
              <a href={app[a].deployLink} aria-label='app deploy'>
                <Image src={app[a].logo} layout="fill" alt='app logo' priority='true'/>
              </a>
              
              { !app[a].deployed && 
                <SpecialImg src={deployongoing} alt='ongoing deploy icon' layout="fill" />
              }

            </AppLogoWrapper>

            <AppKeywordsWrapper>
                {app[a].keywords.map(k => (
                  <p key={Math.random()}> {k}</p>
                ))}
            </AppKeywordsWrapper>

            <AppLinksWrapper>

              <AppLink>
                <a href={app[a].repoLink} aria-label='app github repo'>
                  <Tooltip tooltipContent='go to Github' />
                 {/*  <SrOnlyH2>GITHUB</SrOnlyH2> */}

                  <LinkImgWrapper>
                    <Image src={githublogo} alt='github logo' />
                  </LinkImgWrapper>

                </a>
              </AppLink>

              <AppLink>
                <a href={app[a].readmeLink} aria-label='app github readme'>
                  <Tooltip tooltipContent='go to Readme' />
                 {/*  <SrOnlyH2>More info</SrOnlyH2> */}

                  <LinkImgWrapper>
                    <Image src={readme} alt='More info logo' />
                  </LinkImgWrapper>
                </a>
              </AppLink>

            </AppLinksWrapper>



          </AppItemWrapper>
        </AppListItem>

      ))}
    </>
  )
}
export default AppItem
