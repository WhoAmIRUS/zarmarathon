import { combineReducers } from '@reduxjs/toolkit';
import pokemon from './pokemon/pokemon.slice';

const rootReducer = combineReducers({
  pokemon,
});

export default rootReducer;
