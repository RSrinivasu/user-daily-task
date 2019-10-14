import * as types from '../constants/friends'
import axios from 'axios'

// Sign in Actions

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


export const searchFriendSuccess = (payload) => ({
  type: types.FRIENDS_SEARCH_SUC,
  data:payload
})

export const searchFriendFail = () => ({
  type: types.FRIENDS_SEARCH_FAI
})

export const searchFriendRequest = () => ({
  type: types.FRIENDS_SEARCH_REQ
})

export const friendsList = () => {
  return async dispatch => {
    try {
      dispatch(friendListRequest())
      //let { data } = await axios.post('http://localhost:3030/user-daily-task/v1/login')
      let data ={
        success:true,
        message: "get succusess",
          data:[{
            name:"srinu",
            url:"",
            frinds:""
          },
          {
            name:"ramu",
            url:"",
            frinds:""
          },
          {
            name:"nayak",
            url:"",
            frinds:""
          }]
      } 
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
      let { data } = await axios.get(`http://localhost:3030/user-daily-task/v1/search?q=${q}`,options)
      dispatch(searchFriendSuccess(data))
    } catch (e) {
      console.log(e)
      dispatch(searchFriendFail())
    }
  }
}

