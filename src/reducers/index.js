// Imports: Dependencies
import { combineReducers } from 'redux';

// Imports: Reducers
import loginReducer from './loginReducer';
import recipeReducer from './recipeReducer';

// Redux: Root Reducer
const rootReducer = combineReducers({
  loginReducer,
  recipeReducer
});

// Exports
export default rootReducer;