import { OPEN_MODAL, CLOSE_MODAL } from '../actionConstants'

const initialState = {
  modalOpen: false
}

const show = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL: {
      return {
        ...state,
        modalOpen: true
      }
    }
    case CLOSE_MODAL: {
      return {
        ...state,
        modalOpen: false
      }
    }
    default: {
      return state
    }
  }
}

export default show
