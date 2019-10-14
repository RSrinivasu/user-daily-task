import * as types from '../constants/friends'

let  serachState= {
    response:null,
    search_loading:false,
}

let searchReducer = (state=serachState, action)=>{
    switch(action.type){
        case types.FRIENDS_SEARCH_REQ:
            return Object.assign({}, state,{
                search_loading:true
            })

        case types.FRIENDS_SEARCH_SUC:
                return Object.assign({}, state,{
                    response: action.data,
                    search_loading:false
            })
        
        case types.FRIENDS_SEARCH_FAI:
                return Object.assign({}, state,{
                    response: null,
                    search_loading:false
            })
    
        default:
            return state
    }
}

export default searchReducer