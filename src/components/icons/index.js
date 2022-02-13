import React from 'react';

import Dribbble from './Dribbble';
import Github from './Github';
import Instagram from './Instagram';
import Linkedin from './Linkedin';
import Medium from './Medium';
import Twitter from './Twitter';
import Xbox from './Xbox';
import Letterboxd from './Letterboxd';
import Goodreads from './Goodreads';


const Icon = props => {
  switch(props.name) {
    case "Dribbble":
      return <Dribbble {...props} />;
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
    case "Xbox":
      return <Xbox {...props} />;
    case "Letterboxd":
      return <Letterboxd {...props} />;
    case "Goodreads":
      return <Goodreads {...props} />;
    default:
      return <div />;
  }
}
export default Icon;