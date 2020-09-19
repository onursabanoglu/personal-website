import React from 'react'
import { OutboundLink } from "gatsby-plugin-google-analytics"



import socialLinkStyles from './socialLink.module.css'

const SocialLink = () => {

  return (
    <div className={socialLinkStyles.socialWrap}>
      <OutboundLink className={socialLinkStyles.socialLink} href="https://twitter.com/10ursabanoglu" target="_blank" rel="noopener noreferrer">twitter</OutboundLink>
      <OutboundLink className={socialLinkStyles.socialLink} href="https://instagram.com/10ursabanoglu" target="_blank" rel="noopener noreferrer">instagram</OutboundLink>
      <OutboundLink className={socialLinkStyles.socialLink} href="https://dribbble.com/10ursabanoglu" target="_blank" rel="noopener noreferrer">dribbble</OutboundLink>
      <OutboundLink className={socialLinkStyles.socialLink} href="https://www.behance.net/10ursabanoglu" target="_blank" rel="noopener noreferrer">behance</OutboundLink>
      <OutboundLink className={socialLinkStyles.socialLink} href="https://www.figma.com/@10ursabanoglu" target="_blank" rel="noopener noreferrer">figma</OutboundLink>
      <OutboundLink className={socialLinkStyles.socialLink} href="https://codepen.io/Onursabanoglu" target="_blank" rel="noopener noreferrer">codepen</OutboundLink>
      <OutboundLink className={socialLinkStyles.socialLink} href="https://github.com/10ursabanoglu" target="_blank" rel="noopener noreferrer">github</OutboundLink>
      <OutboundLink className={socialLinkStyles.socialLink} href="https://medium.com/@10ursabanoglu" target="_blank" rel="noopener noreferrer">medium</OutboundLink>
      <OutboundLink className={socialLinkStyles.socialLink} href="https://www.linkedin.com/in/onur-%C5%9Fabano%C4%9Flu-816b49144/" target="_blank" rel="noopener noreferrer">linkedin</OutboundLink>
    </div>
  )
}

export default SocialLink