import * as types from '../constants/chat'

let chatState = {
    chatList:[],
    history:[]
}

let chatReducer = (state=chatState, action)=>{
    switch(action.type){
        case types.CHAT_REQ:
            return Object.assign({}, state,{
            })

        case types.CHAT_SUC:
                return Object.assign({}, state,{
                    history: action.data.history,
                    chatList:action.data.chat
            })
        
        case types.CHAT_FAI:
                return Object.assign({}, state,{
            })

        
        default:
            return state
    }
}

export default chatReducer