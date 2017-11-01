import React from 'react';
import PropTypes from 'prop-types';
// Styles
import './PokeItem.css';

const PokeItem = ({pokemon}) => {
  return (
    <div className='PokeItem'>
      <div className='PokeItem__img-wrapper'>
        <img className='PokeItem__img' src={pokemon.sprites.front_default} alt={pokemon.name}/>
      </div>
      <div className='PokeItem__number'>{`№ ${pokemon.id}`}</div>
      <div className='PokeItem__title'>{pokemon.name}</div>
      {
        pokemon.types.map(item => {
          const { type } = item;
          return <div className={`PokeItem__type PokeItem__type--${type.name}`} key={type.name}>{type.name}</div>;
        })
      }
    </div>
  );
};

PokeItem.propTypes = {};

export default PokeItem;
