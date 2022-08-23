import React from 'react';
import PropTypes from 'prop-types';

const Character = () => (
  <h1>hello world</h1>
);

Character.propTypes = {
  name: PropTypes.string.isRequired
};

export default Character;
