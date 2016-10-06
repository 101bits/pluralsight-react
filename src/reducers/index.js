import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import transactions from './transactionReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  courses,
  authors,
  transactions,
  ajaxCallsInProgress
});

export default rootReducer;
