import React from 'react'
import { OutboundLink } from "gatsby-plugin-google-analytics"
import socialLinkStyles from './socialLink.module.css'

import Icon from './icons';







const SocialLink = () => {

  return (
    <nav className={socialLinkStyles.socialWrap}>
      <OutboundLink className={socialLinkStyles.socialLink} href="https://twitter.com/10ursabanoglu" target="_blank" rel="noopener noreferrer"><Icon name="Twitter" /></OutboundLink>
      <OutboundLink className={socialLinkStyles.socialLink} href="https://github.com/10ursabanoglu" target="_blank" rel="noopener noreferrer"><Icon name="Github" /></OutboundLink>
      <OutboundLink className={socialLinkStyles.socialLink} href="https://medium.com/@10ursabanoglu" target="_blank" rel="noopener noreferrer"><Icon name="Medium" /></OutboundLink>
      <OutboundLink className={socialLinkStyles.socialLink} href="https://www.linkedin.com/in/onur-%C5%9Fabano%C4%9Flu-816b49144/" target="_blank" rel="noopener noreferrer"><Icon name="Linkedin" /></OutboundLink>
      <OutboundLink className={socialLinkStyles.socialLink} href="https://letterboxd.com/10ursabanoglu/" target="_blank" rel="noopener noreferrer"><Icon name="Letterboxd" /></OutboundLink>
      <OutboundLink className={socialLinkStyles.socialLink} href="https://www.behance.net/10ursabanoglu" target="_blank" rel="noopener noreferrer"><Icon name="Behance" /></OutboundLink>
      <OutboundLink className={socialLinkStyles.socialLink} href="https://codepen.io/Onursabanoglu" target="_blank" rel="noopener noreferrer"><Icon name="Codepen" /></OutboundLink>
      <OutboundLink className={socialLinkStyles.socialLink} href="https://dribbble.com/10ursabanoglu" target="_blank" rel="noopener noreferrer"><Icon name="Dribbble" /></OutboundLink>
      <OutboundLink className={socialLinkStyles.socialLink} href="https://www.figma.com/@10ursabanoglu" target="_blank" rel="noopener noreferrer"><Icon name="Figma" /></OutboundLink>
      <OutboundLink className={socialLinkStyles.socialLink} href="https://www.instagram.com/10ursabanoglu/" target="_blank" rel="noopener noreferrer"><Icon name="Instagram" /></OutboundLink>
      <OutboundLink className={socialLinkStyles.socialLink} href="https://vsco.co/10ursabanoglu/gallery" target="_blank" rel="noopener noreferrer"><Icon name="Vsco" /></OutboundLink>
      <OutboundLink className={socialLinkStyles.socialLink} href="https://www.goodreads.com/user/show/105229626-onur-sabanoglu" target="_blank" rel="noopener noreferrer"><Icon name="Goodreads" /></OutboundLink>
    </nav>
  )
}

export default SocialLink