// -----------------------------------------------------
// Redux Imports
// -----------------------------------------------------

import { combineReducers } from 'redux';

// -----------------------------------------------------
// Load Reducers
// -----------------------------------------------------

import appReducer from './app';
import videoReducer from './video';
import introReducer from './intro';

// -----------------------------------------------------
// Share reducers to application
// -----------------------------------------------------

const reducers = combineReducers({
  app: appReducer,
  video: videoReducer,
  intro: introReducer
});

export default reducers;
