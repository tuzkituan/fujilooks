// Initial State
const initialState = {
    currentUser: {},
};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SAVE_GOOGLE_USER_ASYNC': {
            return {
                ...state,
                currentUser: action.currentUser,
            };
        }
        default: {
            return state;
        }
    }
};

// Exports
export default loginReducer;