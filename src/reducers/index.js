import { combineReducers } from 'redux';

import auth from './authReducer';
import tables from './tablesReducer';
import show from './showReducer';
import filters from './filterReducer'

export default combineReducers({
  auth,
  tables,
  show,
  filters
});


