import React from 'react';
import PropTypes from 'prop-types';
import IconGitHub from './github';
import IconLinkedin from './linkedin';
import IconTwitter from './twitter';

const Icon = ({ name }) => {
  switch (name) {
    case 'GitHub':
      return <IconGitHub />;
    case 'Linkedin':
      return <IconLinkedin />;
    case 'Twitter':
      return <IconTwitter />;
    default:
      return 'No icon';
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
