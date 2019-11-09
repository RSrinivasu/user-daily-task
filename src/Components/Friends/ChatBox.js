import React, { useState, useEffect } from "react"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as chatActions from '../../redux/actions/chatAction'
import closeIcon from '../icons/window-close-solid.svg'
import './chatbox.css'


function ChatWindow(props){
   let { clientId,url, name  , currentUser:{accessToken} } = props
   let [ history, setHistory ] = useState(props.history)
   let [ input_msg , setInputMsg ]= useState("")

   function onChange(e){
        setInputMsg(e.target.value)
   }

   function onKeyDown(e){
    let { chatActions  } = props

      if(e.key === "Enter"){
        
        let msgBody = {
                to: clientId , 
                msg: input_msg,
                status:"pendding" ,
                token:accessToken,
                sendiing_time:new Date().toDateString()
            }
        window.socket.emit("receiver" , {...msgBody,token:accessToken})
        chatActions.updateHistoryObject(clientId)
        setInputMsg("")
        e.preventDefault();
      }
    }

    function onClick(){
        let { chatActions  } = props
        chatActions.updateChatList(clientId,true)
    }

    useEffect(()=>{
        let value = history.length-1
        let  elmnt = document.getElementById(`msg${value}`);
        if(elmnt) elmnt.scrollIntoView({ block: "center", inline: "nearest"})
        setHistory(props.history)
    })

    return(        
        <>
          <div className="chat-container">
            <div className="header">
                    <div className="left">
                        <img src={url} alt="Avatar" style={{width:100}}></img>
                        <p>{name}</p>
                    </div>
                    <div className="right" onClick={onClick} ><img src={closeIcon} className="close-icon" ></img></div> 
            </div>
            <div className="msg-body">
                {
                    history.map((chat,index) =>{
                        let { to , msg , status , sendiing_time } = chat
                        let time = new Date(sendiing_time*1000)
                        if(to !== clientId ){
                        return(<div className="msg-container darker" key={index} id={`msg${index}`}>
                                    <img src={url} alt="Avatar" style={{width:100}}></img>
                                        <p>{msg}</p>
                                        <span className="time-right">{sendiing_time}</span>
                                    </div>
                        )
                        }
                        else{
                            return(
                                <div className="msg-container " key={index} id={`msg${index}`}>
                                <img src={props.currentUser.url}  className="right" alt="Avatar" style={{width:100}}></img>
                                    <p>{msg} </p>
                                    <span className="time-left">{sendiing_time}</span>
                                </div>
                                )
                        }
                    })
                }
            </div>
            <div className="footer">
                <div className="input-container">
                    <input type="text" name="input_msg" value={input_msg} className="input-field" onChange={onChange} onKeyPress={onKeyDown}/>
                </div>
            </div>
        </div>
        </>
    )
}


const mapDispatchToprops=(dispatch)=>({
    chatActions: bindActionCreators(chatActions ,  dispatch)
})
 

export default connect(null,mapDispatchToprops) (ChatWindow)