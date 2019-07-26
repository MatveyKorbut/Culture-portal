import React from 'react';
import PropTypes from 'prop-types';

const person = ({ avatar, name, link }) => (
  // Можно взять готовую карточку из material ui
  <>
    <img src={avatar} alt={name} />
    <h3>{name}</h3>
    <a href={`https://github.com/${link}`}>{link}</a>
  </>
);

person.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default person;
