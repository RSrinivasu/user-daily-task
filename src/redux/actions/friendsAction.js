import * as types from '../constants/friends'
import axios from './axios'

// *****friend list********

export const friendListSuccess = (payload) => ({
  type: types.FRIENDS_LIST_SUC,
  data:payload
})

export const friendListFail = () => ({
  type: types.FRIENDS_LIST_FAI
})

export const friendListRequest = () => ({
  type: types.FRIENDS_LIST_REQ
})

//**********search**********

export const searchFriendSuccess = (payload) => ({
  type: types.FRIENDS_SEARCH_SUC,
  data:payload
})

export const searchFriendFail = () => ({
  type: types.FRIENDS_SEARCH_FAI
})

export const searchFriendRequest = () => ({
  type: types.FRIENDS_SEARCH_REQ,
})

//***********update***************

export const updateFriendSuccess = (payload) => ({
  type: types.UPDATE_FRIENDS_SUC,
  data:payload
})

export const updateFriendFail = () => ({
  type: types.UPDATE_FRIENDS_FAI
})

export const updateFriendRequest = (id) => ({
  type: types.UPDATE_FRIENDS_REQ,
  data:id
})

export const friendsList = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(friendListRequest())
      let {
        user:{
          response:{
            data:{
              accessToken
            }
          }
        }
      } = getState()
      let options = {
        headers:{
        "access-token": accessToken
        }
      }
      let { data } = await axios.get(`${process.env.REACT_APP_USER_TASK_API}/friend` , options)
      dispatch(friendListSuccess(data))
    } catch (e) {
      console.log(e)
      dispatch(friendListFail())
    }
  }
}

export const searchFriends = (q) => {
  return async (dispatch, getState) => {
    try {
      let {
        user:{
          response:{
            data:{
              accessToken
            }
          }
        }
      } = getState()
      dispatch(searchFriendRequest())
      let options = {
        headers:{
        "access-token": accessToken
        }
      }
      let { data } = await axios.get(`${process.env.REACT_APP_USER_TASK_API}/search?q=${q}`,options)
      dispatch(searchFriendSuccess(data))
    } catch (e) {
      console.log(e)
      dispatch(searchFriendFail())
    }
  }
}


export const updateFriend = (update, searchWord) => {
  return async (dispatch, getState) => {
    console.log("action" ,update)
    try {
      let {
        user:{
          response:{
            data:{
              accessToken,
              clientId
            }
          }
        }
      } = getState()
      dispatch(updateFriendRequest(update.to))
      let options = {
        headers:{
        "access-token": accessToken
        }
      }
      let body={
        from:clientId,
        to:update.to,
        status:update.status
      }
      let { data } = await axios.put(`${process.env.REACT_APP_USER_TASK_API}/friend`,body ,options)
      dispatch(updateFriendSuccess(data))
      dispatch(searchFriends(searchWord))
    } catch (e) {
      console.log(e)
      dispatch(updateFriendFail())
    }
  }
}
