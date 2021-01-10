import React from 'react';

import Behance from './Behance';
import Codepen from './Codepen';
import Dribbble from './Dribbble';
import Figma from './Figma';
import Github from './Github';
import Instagram from './Instagram';
import Linkedin from './Linkedin';
import Medium from './Medium';
import Twitter from './Twitter';


const Icon = props => {
  switch(props.name) {
    case "Behance":
      return <Behance {...props} />;
    case "Codepen":
      return <Codepen {...props} />;
    case "Dribbble":
      return <Dribbble {...props} />;
    case "Figma":
      return <Figma {...props} />;
    case "Github":
      return <Github {...props} />;
    case "Instagram":
      return <Instagram {...props} />;
    case "Linkedin":
      return <Linkedin {...props} />;
    case "Medium":
      return <Medium {...props} />;
    case "Twitter":
      return <Twitter {...props} />;
    default:
      return <div />;
  }
}
export default Icon;