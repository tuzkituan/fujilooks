import { call, put, takeLatest, takeEvery } from 'redux-saga/effects';
const API = 'http://localhost:3030'

function* fetchRecipeList(action) {
    try {
      console.log('avsdasdas',asdasdsa);

      const response = yield call(`${API}/list-recipes`);
      console.log('response',response);

      yield put({ 
        type: 'FETCH_RECIPES_LIST_ASYNC',
        recipeList: response.recipes
      });
    }
    catch (error) {
      console.log(error);
    }
}

export function* watchFetchRecipeList() {
    // // Take Every Action
    yield takeEvery('FETCH_RECIPES_LIST', fetchRecipeList);

    // Take Last Action
    // yield takeLatest('FETCH_RECIPES_LIST', fetchRecipeList);
  }
  