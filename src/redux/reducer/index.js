import { combineReducers } from 'redux'
import app from './initialApp'
import user from './user'
import friends from './friends'
import friendSearchList from './searchFriends'

export default combineReducers({
    app,
    user,
    friends,
    friendSearchList
})