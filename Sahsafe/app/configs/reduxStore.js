import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';

// Reducers
import * as Reducers from '@redux/reducers';

const rootReducer = combineReducers({
  common: Reducers.common,
  landing: Reducers.landing,

});

export default () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};
