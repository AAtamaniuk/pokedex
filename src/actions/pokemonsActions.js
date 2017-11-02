import {
  FETCH_LIST_START,
  FETCH_LIST_SUCCESS,
  FETCH_LIST_ERROR,
  FETCH_POKEMONS_START,
  FETCH_POKEMONS_SUCCESS,
  FETCH_POKEMONS_ERROR
} from '../actionConstants';
import axios from 'axios';

export function fetchList() {
  return (dispatch) => {
      dispatch({type: FETCH_LIST_START});
      axios.get('https://pokeapi.co/api/v2/pokemon/?limit=24&offset=0')
        .then(response => {
          const { results } = response.data;
          dispatch({type: FETCH_LIST_SUCCESS, payload: results});
          return results;
        })
        .then(results => fetchPokemons(results, dispatch))
        .catch(error => dispatch({type: FETCH_LIST_ERROR, payload: error}));
    }
}

export function fetchPokemons(arr, dispatch) {
    dispatch({type: FETCH_POKEMONS_START});
    let requestsArr = [];
    arr.map(item => requestsArr.push(axios.get(item.url)));
    axios.all(requestsArr)
      .then(response => {
        const pokemons = [];
        response.map(item => pokemons.push(item.data));
        dispatch({type: FETCH_POKEMONS_SUCCESS,  payload: pokemons});
      })
      .catch(error => dispatch({type: FETCH_POKEMONS_ERROR, payload: error}))
}