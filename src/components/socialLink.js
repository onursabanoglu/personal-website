import React from 'react'
import { OutboundLink } from "gatsby-plugin-google-analytics"
import socialLinkStyles from './socialLink.module.css'

import Icon from './icons';


const SocialLink = () => {

  return (
    <nav className={socialLinkStyles.socialWrap}>
      <OutboundLink className={socialLinkStyles.socialLink} href="https://twitter.com/10ursabanoglu" target="_blank" rel="noopener noreferrer"><Icon name="Twitter" /></OutboundLink>
      <OutboundLink className={socialLinkStyles.socialLink} href="https://github.com/onursabanoglu" target="_blank" rel="noopener noreferrer"><Icon name="Github" /></OutboundLink>
      <OutboundLink className={socialLinkStyles.socialLink} href="https://medium.com/@10ursabanoglu" target="_blank" rel="noopener noreferrer"><Icon name="Medium" /></OutboundLink>
      <OutboundLink className={socialLinkStyles.socialLink} href="https://www.linkedin.com/in/onursabanoglu/" target="_blank" rel="noopener noreferrer"><Icon name="Linkedin" /></OutboundLink>
      <OutboundLink className={socialLinkStyles.socialLink} href="https://dribbble.com/10ursabanoglu" target="_blank" rel="noopener noreferrer"><Icon name="Dribbble" /></OutboundLink>
      <OutboundLink className={socialLinkStyles.socialLink} href="https://live.xbox.com/tr-TR/Profile?gamertag=onursabanoglu" target="_blank" rel="noopener noreferrer"><Icon name="Xbox" /></OutboundLink>
      <OutboundLink className={socialLinkStyles.socialLink} href="https://letterboxd.com/10ursabanoglu/" target="_blank" rel="noopener noreferrer"><Icon name="Letterboxd" /></OutboundLink>
      <OutboundLink className={socialLinkStyles.socialLink} href="https://www.goodreads.com/user/show/105229626-onur-sabanoglu" target="_blank" rel="noopener noreferrer"><Icon name="Goodreads" /></OutboundLink>
      <OutboundLink className={socialLinkStyles.socialLink} href="https://www.instagram.com/10ursabanoglu/" target="_blank" rel="noopener noreferrer"><Icon name="Instagram" /></OutboundLink>
    </nav>
  )
}

export default SocialLink