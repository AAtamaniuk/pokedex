import {
  FETCH_LIST_START,
  FETCH_LIST_SUCCESS,
  FETCH_LIST_ERROR,
  FETCH_POKEMONS_START,
  FETCH_POKEMONS_SUCCESS,
  FETCH_POKEMONS_ERROR
} from '../actionConstants'

const initialState = {
  fetching: false,
  fetched: false,
  list: [],
  pokemons: [],
  error: null
}

const pokemons = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LIST_START: {
      return {
        ...state,
        fetching: true
      }
    }
    case FETCH_LIST_SUCCESS: {
      return {
        ...state,
        list: action.payload
      }
    }
    case FETCH_LIST_ERROR: {
      return {
        ...state,
        fetching: false,
        fetched: true,
        error: action.payload
      }
    }
    case FETCH_POKEMONS_START: {
      return {
        ...state,
        fetching: true
      }
    }
    case FETCH_POKEMONS_SUCCESS: {
      return {
        ...state,
        fetching: false,
        fetched: true,
        pokemons: action.payload
      }
    }
    case FETCH_POKEMONS_ERROR: {
      return {
        ...state,
        fetching: false,
        fetched: true,
        error: action.payload
      }
    }
    default: {
      return state
    }
  }
}

export default pokemons
