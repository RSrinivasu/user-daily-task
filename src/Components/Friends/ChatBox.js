import React, { useState, useEffect } from "react"
import './chatbox.css'


function ChatWindow(props){
   let { clientId,url, name  , currentUser:{accessToken} } = props
   let [ history, setHistory ] = useState(props.history)
   let [ input_msg , setInputMsg ]= useState("")

   function onChange(e){
        setInputMsg(e.target.value)

   }

   function onKeyDown(key){
      if(key.keyCode === 13){
        let msgBody = {
                to: clientId , 
                msg: input_msg,
                status:"pendding" ,
                token:accessToken,
                sendiing_time:new Date().toDateString()
            }
        window.socket.emit("receiver" , {...msgBody,token:accessToken})
        setHistory([...history,msgBody])
        setInputMsg("")
      }
    }

    useEffect(()=>{
        let value = history.length-1
        console.log("length", value)
        let  elmnt = document.getElementById(`msg${value}`);
            if(elmnt) elmnt.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"})
    })

    return(        
        <>
          <div className="chat-container">
            <div className="header">
                    <img src={url} alt="Avatar" style={{width:100}}></img>
                    <p>{name}</p>
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
                    <input type="text" name={input_msg} className="input-field" onChange={onChange} onKeyDown={onKeyDown}/>
                    {/* <img 
                    src="/avatar_g2.jpg" alt="Avatar" className="right"  style="width:100%; "></img> */}
                </div>
            </div>
        </div>
        </>
    )
}


export default ChatWindow