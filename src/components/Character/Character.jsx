import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Character.module.css';

const Character = ({ name, image, id }) => (
  <Link to={`/detail/${id}`}>
    <figure className={styles.box}>
      <img src={image} alt={name} />
      <figcaption>{name}</figcaption>
    </figure>
  </Link>
);

Character.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default Character;
