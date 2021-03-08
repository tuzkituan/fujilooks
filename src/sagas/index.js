// Imports: Dependencies
import { all, fork } from 'redux-saga/effects';

// Imports: Redux Sagas
import { watchSaveGoogleUser } from './loginSaga';

// Redux Saga: Root Saga
export function* rootSaga () {
  yield all([
    fork(watchSaveGoogleUser),
  ]);
};
