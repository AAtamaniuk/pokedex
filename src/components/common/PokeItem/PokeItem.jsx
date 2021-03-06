import React from 'react'
import PropTypes from 'prop-types'
import { formatNumber } from '../../../helpers/formatNumber'
// Styles
import './PokeItem.css'

const PokeItem = ({pokemon, handleClick}) => {
  const renderPokeTypes = (types) => {
    return (
      types.map(item => {
        const {type} = item
        return <div className={`PokeItem__type PokeItem__type--${type.name}`} key={type.name}>{type.name}</div>
      })
    )
  }

  const {types, name, id, sprites} = pokemon
  const {front_default} = sprites
  return (
    <div className='PokeItem' onClick={handleClick} role='button'>
      <div className='PokeItem__img-wrapper'>
        {
          // eslint-disable-next-line
        } <img className='PokeItem__img' src={front_default} alt={name}/>
      </div>
      <div className='PokeItem__number'>{`№${formatNumber(id, 3)}`}</div>
      <div className='PokeItem__title'>{name}</div>
      {renderPokeTypes(types)}
    </div>
  )
}

PokeItem.propTypes = {
  pokemon: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired
}

export default PokeItem
