import React from 'react';
import PropTypes from 'prop-types';
// Styles
import './PokeItem.css';

const PokeItem = ({pokemon}) => {
  return (
    <div className='PokeItem'>
      <img className='PokeItem__img' src={pokemon.sprites.front_default} alt={pokemon.name}/>
      <div className='PokeItem__number'>{pokemon.id}</div>
      <span className='PokeItem__title'>{pokemon.name}</span>
    </div>
  );
};

PokeItem.propTypes = {};

export default PokeItem;
