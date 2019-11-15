import * as types from '../constants/user'

let userState = {
    response:null,
    user_loading:false,
    app_loading:false
}

let userReducer = (state=userState, action)=>{
    switch(action.type){
        case types.USER_LOGIN_REQ:
            return Object.assign({}, state,{
                app_loading:true
            })

        case types.USER_LOGIN_SUC:
                return Object.assign({}, state,{
                    response: action.data,
                    app_loading:false
            })
        
        case types.USER_LOGIN_FAI:
                return Object.assign({}, state,{
                    response: null,
                    app_loading:false
            })

        case types.USER_LOGOUT_REQ:
                return Object.assign({}, state,{
                    response: action.data,
                    app_loading:false
            })
        
        case types.USER_LOGOUT_SUC:
                return Object.assign({}, state,{
                    response: null,
                    app_loading:false
            })
        case types.USER_LOGOUT_FAI:
                return Object.assign({}, state,{
                    response: action.data,
                    app_loading:false
            })  
            
        default:
            return state
    }
}

export default userReducer