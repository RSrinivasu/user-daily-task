import React from 'react'
import { Route , Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as chatActions from './redux/actions/chatAction'

import  AppPage  from './Components/AppPage/AppPage'
import NavBar from './Components/AppPage/NavBar';
import { Container } from 'react-bootstrap';
import Firends from './Components/Friends';
    
function Main(props){
    let { user , chatActions } = props
    console.log(chatActions)

    if(user.response)
    {
        let { response:{data:{clientId}}} = user
        window.socket.on(clientId,function(msg){
            chatActions.updateHistoryObject(msg)
        })
        return(   
        <>
            <NavBar></NavBar>     
            <Container>
                {/* <Route path="/" exact render={ ()=> <Redirect to="/user-dialy-task"/> }/>  */}
                <Route exact path="/" render={()=><AppPage />} />
                <Route exact path="/friends" render={()=><Firends />} />
            </Container>
        </>
    )
    }
    else{
        return(    
        <div>
            {
                user.app_loading ?
                <h1>Lodding....</h1>:
                <Route path="/" render={()=> <Redirect to="/login"/>} /> 
            }
        </div>
        )
    }
}


const mapStateToProps = (state) =>({
   user:state.user
})

const mapDispatchToprops=(dispatch)=>({
    chatActions: bindActionCreators(chatActions ,  dispatch)
})
 

export default connect(mapStateToProps, mapDispatchToprops) (Main)