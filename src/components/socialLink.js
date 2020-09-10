import React from 'react'


import socialLinkStyles from './socialLink.module.css'

const SocialLink = () => {

  return (
    <div className={socialLinkStyles.socialWrap}>
      <a className={socialLinkStyles.socialLink} href="https://twitter.com/10ursabanoglu" target="_blank" rel="noopener noreferrer">twitter</a>
      <a className={socialLinkStyles.socialLink} href="https://instagram.com/10ursabanoglu" target="_blank" rel="noopener noreferrer">instagram</a>
      <a className={socialLinkStyles.socialLink} href="https://dribbble.com/10ursabanoglu" target="_blank" rel="noopener noreferrer">dribbble</a>
      <a className={socialLinkStyles.socialLink} href="https://www.behance.net/10ursabanoglu" target="_blank" rel="noopener noreferrer">behance</a>
      <a className={socialLinkStyles.socialLink} href="https://www.figma.com/@10ursabanoglu" target="_blank" rel="noopener noreferrer">figma</a>
      <a className={socialLinkStyles.socialLink} href="https://codepen.io/Onursabanoglu" target="_blank" rel="noopener noreferrer">codepen</a>
      <a className={socialLinkStyles.socialLink} href="https://github.com/10ursabanoglu" target="_blank" rel="noopener noreferrer">github</a>
      <a className={socialLinkStyles.socialLink} href="https://medium.com/@10ursabanoglu" target="_blank" rel="noopener noreferrer">medium</a>
      <a className={socialLinkStyles.socialLink} href="https://www.linkedin.com/in/onur-%C5%9Fabano%C4%9Flu-816b49144/" target="_blank" rel="noopener noreferrer">linkedin</a>
    </div>
  )
}

export default SocialLink