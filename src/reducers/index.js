import { combineReducers } from 'redux';

import pokemons from './pokemonsReducer';
import show from './showReducer';

export default combineReducers({
  show,
  pokemons
});


