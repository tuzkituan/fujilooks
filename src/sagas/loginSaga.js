import { put, takeLatest } from 'redux-saga/effects';
 
function* saveGoogleUser(payload) {
    try {
      yield put({ 
        type: 'SAVE_GOOGLE_USER_ASYNC',
        currentUser: payload.currentUser 
      });
    }
    catch (error) {
      // console.log(error);
    }
}

export function* watchSaveGoogleUser() {
    // // Take Every Action
    // yield takeEvery('DECREASE_COUNTER', decreaseCounter);
  
    // Take Last Action
    yield takeLatest('SAVE_GOOGLE_USER', saveGoogleUser);
  }
  