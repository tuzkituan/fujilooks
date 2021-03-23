// Initial State
const initialState = {
    recipeList: [],
    recipeDetail: {}
};

const recipeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_RECIPES_LIST_ASYNC': {
            return {
                ...state,
                recipeList: action.recipeList,
            };
        }
        case 'FETCH_RECIPE_DETAIL_ASYNC': {
            return {
                ...state,
                recipeDetail: action.recipeDetail,
            };
        }
        default: {
            return state;
        }
    }
};

// Exports
export default recipeReducer;