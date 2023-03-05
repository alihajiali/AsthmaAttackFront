export const codeReducer = (state = "", action) => {
    switch (action.type) {
        case "GET_CODE":
            return action.payload ; //spread Operator
        case "ACTIVE_USER":
            return action.payload ;  
        default:
            return state;
    }
};
