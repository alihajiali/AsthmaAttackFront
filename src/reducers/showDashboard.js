export const dashboardReducer = (state=false , action)=>{
    switch(action.type){
        case "SHOW_DASHBOARD": return action.payload;
        case "HIDE_DASHBOARD": return action.payload;
        default: return state;
    }

}
