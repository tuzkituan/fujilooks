// Imports: Dependencies
import { all, fork } from 'redux-saga/effects';

// Imports: Redux Sagas
import { watchsaveLoginUser } from './loginSaga';
import { watchFetchRecipeList, watchFetchRecipeDetail, watchClearRecipeDetail } from './recipeSaga'

// Redux Saga: Root Saga
export function* rootSaga() {
  yield all([
    fork(watchFetchRecipeList),
    fork(watchFetchRecipeDetail),
    fork(watchClearRecipeDetail),
    fork(watchsaveLoginUser),
  ]);
};
