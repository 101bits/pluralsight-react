import * as types from './actionTypes';
import transactionApi from '../api/mockTransactionApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadTransactionsSuccess(transactions) {
  return {type: types.LOAD_TRANSACTIONS_SUCCESS, transactions};
}


export function loadTransactions() {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return transactionApi.getAllTransactions().then(transactions => {
      dispatch(loadTransactionsSuccess(transactions));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}
