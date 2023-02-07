import { applyMiddleware, combineReducers, legacy_createStore as createStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import Rocketreducer from './Rocket/rockets';

const rootReducer = combineReducers({
  Rocketz: Rocketreducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
