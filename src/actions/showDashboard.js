export const showDash = ()=>{
    return async dispatch=>{
        await dispatch ({type:"SHOW_DASHBOARD" , payload:true})
    }
}

export const hideDash = ()=>{
    return async dispatch=>{
        await dispatch ({type:"HIDE_DASHBOARD" , payload:false})
    }
}