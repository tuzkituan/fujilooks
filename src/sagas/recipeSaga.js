import { call, put, takeLatest, takeEvery } from 'redux-saga/effects';
import request from '../utils/request';

function fetchRecipeFn () {
  return request('list-recipes', 'POST', {})
}

function* fetchRecipeList(action) {
    try {
      const response = yield call(fetchRecipeFn);
      yield put({ 
        type: 'FETCH_RECIPES_LIST_ASYNC',
        recipeList: response?.recipes
      });
    }
    catch (error) {
      // console.log(error);
    }
}

export function* watchFetchRecipeList() {
    // // Take Every Action
    // yield takeEvery('FETCH_RECIPES_LIST', fetchRecipeList);

    // Take Last Action
    yield takeLatest('FETCH_RECIPES_LIST', fetchRecipeList);
  }
  

  function fetchRecipeDetailFn (payload) {
    return request('get-recipe', 'POST', payload)
  }

  function* fetchRecipeDetail(action) {
    try {
      const response = yield call(fetchRecipeDetailFn, { id: action.payload._id });
      yield put({ 
        type: 'FETCH_RECIPE_DETAIL_ASYNC',
        recipeDetail: response?.recipe || {},
      });
    }
    catch (error) {
      // console.log(error);
    }
}

export function* watchFetchRecipeDetail() {
  // Take Last Action
  yield takeLatest('FETCH_RECIPE_DETAIL', fetchRecipeDetail);
}

// CLEAR RECIPE DETAIL
function* clearRecipeDetail(action) {
  yield put({ 
    type: 'CLEAR_RECIPE_DETAIL_ASYNC',
  });
}

export function* watchClearRecipeDetail() {
  // Take Last Action
  yield takeLatest('CLEAR_RECIPE_DETAIL', clearRecipeDetail);
}
