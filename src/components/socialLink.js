import React from "react"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import socialLinkStyles from "./socialLink.module.css"

import Icon from "./icons"

const SocialLink = () => {
  return (
    <nav className={socialLinkStyles.socialWrap}>
      <OutboundLink
        className={socialLinkStyles.socialLink}
        href="https://twitter.com/10ursabanoglu"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon name="Twitter" />
        <span className={socialLinkStyles.socialLabel}>Twitter</span>
      </OutboundLink>
      <OutboundLink
        className={socialLinkStyles.socialLink}
        href="https://github.com/onursabanoglu"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon name="Github" />
        <span className={socialLinkStyles.socialLabel}>Github</span>
      </OutboundLink>
      <OutboundLink
        className={socialLinkStyles.socialLink}
        href="https://medium.com/@10ursabanoglu"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon name="Medium" />
        <span className={socialLinkStyles.socialLabel}>Medium</span>
      </OutboundLink>
      <OutboundLink
        className={socialLinkStyles.socialLink}
        href="https://www.linkedin.com/in/onursabanoglu/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon name="Linkedin" />
        <span className={socialLinkStyles.socialLabel}>Linkedin</span>
      </OutboundLink>
      <OutboundLink
        className={socialLinkStyles.socialLink}
        href="https://dribbble.com/10ursabanoglu"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon name="Dribbble" />
        <span className={socialLinkStyles.socialLabel}>Dribbble</span>
      </OutboundLink>
      <OutboundLink
        className={socialLinkStyles.socialLink}
        href="https://codepen.io/Onursabanoglu"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon name="Codepen" />
        <span className={socialLinkStyles.socialLabel}>Codepen</span>
      </OutboundLink>
      <OutboundLink
        className={socialLinkStyles.socialLink}
        href="https://letterboxd.com/10ursabanoglu/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon name="Letterboxd" />
        <span className={socialLinkStyles.socialLabel}>Letterboxd</span>
      </OutboundLink>
      <OutboundLink
        className={socialLinkStyles.socialLink}
        href="https://www.goodreads.com/user/show/105229626-onur-sabanoglu"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon name="Goodreads" />
        <span className={socialLinkStyles.socialLabel}>Goodreads</span>
      </OutboundLink>
      <OutboundLink
        className={socialLinkStyles.socialLink}
        href="https://www.instagram.com/10ursabanoglu/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon name="Instagram" />
        <span className={socialLinkStyles.socialLabel}>Instagram</span>
      </OutboundLink>
    </nav>
  )
}

export default SocialLink
