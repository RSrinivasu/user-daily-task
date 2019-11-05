import * as types from '../constants/chat'
import axios from './axios'


// Sign in Actions

export const chatSuccess = (chat, history) => ({
  type: types.CHAT_SUC,
  data:{chat,history}
})

export const chatFail = () => ({
  type: types.CHAT_FAI
})

export const chatRequest = () => ({
  type: types.CHAT_REQ
})

/**
 * update history
 */
// export const updateChatSuccess = (history) => ({
//   type: types.UPDATE_CHAT_SUC,
//   data:history
// })

// export const updateChatFail = () => ({
//   type: types.UPDATE_CHAT_FAI
// })

// export const updateChatRequest = () => ({
//   type: types.UPDATE_CHAT_REQ
// })


export const chatHistory = (obj) => {
  return async (dispatch ,getState) => {
    try {
      dispatch(chatRequest())
      let {
        user:{
          response:{
            data:{
              accessToken
            }
          }
        },
        chat:{
            chatList,
            history
        }
      } =getState()
    let options = {
        headers:{
        "access-token": accessToken
        }
    }
    let { clientId } = obj
    
    let { data:{data} } = await axios.get(`${process.env.REACT_APP_USER_TASK_API}/chat?to=${clientId}`,options)
    history= data
    chatList =[ obj ]
    
    dispatch(chatSuccess(chatList,history))
    } catch (e) {
      console.log(e)
      dispatch(chatFail())
    }
  }
}

export const updateHistoryObject =(clientId)=>{
  return async (dispatch , getState) =>{
    try{
      dispatch(chatRequest())
      let {
        user:{
          response:{
            data:{
              accessToken
            }
          }
        },
        chat:{
            chatList,
            history
        }
      } =getState()
    let options = {
        headers:{
        "access-token": accessToken
        }
    }
    let { data:{data} } = await axios.get(`${process.env.REACT_APP_USER_TASK_API}/chat?to=${clientId}`,options)
      history = data
      dispatch(chatSuccess(chatList,history))
    }
    catch(e){
      console.log(e)
      dispatch(chatFail())
    }
  }
} 
