import React from 'react'
import Link from 'next/link'
// import { NavLink } from 'react-router-dom'
import Image from 'next/image'

import headshot from '../../public/cv/headshot.png'
import downloadresumeIcon from '../../public/icons/download_resume_icon.png'
import githubIcon from '../../public/icons/github_logo_white.png'
import linkedinIcon from '../../public/icons/linkedin_logo.png'
import { StyledInfoSection, InfoSectionWrapper, InfoPres, InfoPresText,InfoPresLinks, GroupIconsWrapper, IconWrapper, DownloadIconWrapper} from '../../styles/InfoSection_style'

const githubagneska = 'https://github.com/GitHubAgneska'
const linkedIn = 'https://www.linkedin.com/in/h-agnes-genay/'


const InfoSection = () => {
    return (
        <StyledInfoSection>
            <InfoSectionWrapper>
                
                <InfoPres>
                    <div><Image src={headshot} alt='headshot' /></div>
                    <InfoPresText>
                        <h1>H.Agnes Genay</h1>
                        <h2>Frontend developer & creative</h2>
                        <a href="mailto:agneska.dev@gmail.com"><h3>agneska.dev@gmail.com</h3></a>
                    </InfoPresText>
                </InfoPres>

                <InfoPresLinks>
    
                    <DownloadIconWrapper>
                        <a href="/cv/HAG_frontend_dev-CV_2022.png" target="_blank" download rel="noopener noreferrer">
                            <Image src={downloadresumeIcon} alt='download resume icon' />
                        </a>
                    </DownloadIconWrapper>

                    
                    <GroupIconsWrapper>
                        <IconWrapper>
                            <a href={githubagneska} aria-label='link to github profile'>
                                <Image src={githubIcon} alt='github icon' />
                            </a>
                        </IconWrapper>

                        <IconWrapper>
                            <a href={linkedIn} aria-label='link to linkedIn profile'>
                                <Image src={linkedinIcon} alt='linkedin icon' />
                            </a>
                        </IconWrapper>
                    </GroupIconsWrapper>

                </InfoPresLinks>

            </InfoSectionWrapper>

        </StyledInfoSection>
    )
}

export default InfoSection