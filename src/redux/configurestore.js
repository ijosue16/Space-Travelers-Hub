import { applyMiddleware, combineReducers, legacy_createStore as createStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import Rocketreducer from './Rocket/rockets';
import Missionreducer from './Missions/Missions';

const rootReducer = combineReducers({
  Rocketz: Rocketreducer,
  Missions: Missionreducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
