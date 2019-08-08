import { combineReducers } from 'redux'
import app from './initialApp'
import user from './user'

export default combineReducers({
    app,
    user
})