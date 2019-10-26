import * as types from '../constants/friends'

let  updateState = {
    response:null,
    update_loading:false,
}

let updateReducer = (state=updateState, action)=>{
    switch(action.type){
        case types.UPDATE_FRIENDS_REQ:
            return Object.assign({}, state,{
                update_loading:true,
                id:action.data
            })

        case types.UPDATE_FRIENDS_SUC:
            return Object.assign({}, state,{
                    response: action.data,
                    update_loading:false
            })
        
        case types.UPDATE_FRIENDS_FAI:
            return Object.assign({}, state,{
                    response: null,
                    update_loading:false
            })
    
        default:
            return state
    }
}

export default updateReducer