// Initial State
const initialState = {
    recipeList: {},
};

const recipeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_RECIPES_LIST_ASYNC': {
            return {
                ...state,
                recipeList: action.recipeList,
            };
        }
        default: {
            return state;
        }
    }
};

// Exports
export default recipeReducer;