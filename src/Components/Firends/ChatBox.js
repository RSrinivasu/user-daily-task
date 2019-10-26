import React from "react"

import './chatbox.css'

function ChatWindow(props){
   let { clientId,url, name , history } = props
   console.log("history",history , clientId)
   console.log(new Date(6752065026015625218))
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
                        if(to === clientId ){
                        return(<div className="msg-container darker">
                                    <img src={url} alt="Avatar" style={{width:100}}></img>
                                        <p>{msg}</p>
                                        <span className="time-right">{sendiing_time}</span>
                                    </div>
                        )
                        }
                        else{
                            return(
                                <div className="msg-container ">
                                <img src="https://lh3.googleusercontent.com/a-/AAuE7mBigEi8avnJeRzUD7FofuUTdtdc0KLK4Lx9af3Hyw=s96-c"  className="right" alt="Avatar" style={{width:100}}></img>
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
                    <input type="text" className="input-field"/>
                    {/* <img 
                    src="/avatar_g2.jpg" alt="Avatar" className="right"  style="width:100%; "></img> */}
                </div>
            </div>
        </div>
        </>
    )
}


export default ChatWindow