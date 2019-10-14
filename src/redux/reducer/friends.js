import * as types from '../constants/friends'

let  friendsState= {
    response:null,
    friends_loading:false,
}

let friendsReducer = (state=friendsState, action)=>{
    switch(action.type){
        case types.FRIENDS_LIST_REQ:
            return Object.assign({}, state,{
                friends_loading:true
            })

        case types.FRIENDS_LIST_SUC:
                return Object.assign({}, state,{
                    response: action.data,
                    friends_loading:false
            })
        
        case types.FRIENDS_LIST_FAI:
                return Object.assign({}, state,{
                    response: null,
                    friends_loading:false
            })
    
        default:
            return state
    }
}

export default friendsReducer