import * as types from '../constants/initialApp'

let initialState = {
    response:null,
    app_loading:false
}

let appReducer = (state=initialState, action)=>{
    switch(action.type){
        case types.INITIAL_APP:
            return Object.assign({}, state)
        default:
            return state
    }
}

export default appReducer