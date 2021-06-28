const reducer =( state={}, action) => {
    switch (action.type) {
        case 'GET_PRODUCT':
            return{...state, loading: true};
        default:
            return state;
    }
};
export default reducer;