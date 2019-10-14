import React from 'react'
import { Route , Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import  AppPage  from './Components/AppPage/AppPage'
import _Navbar from './Components/AppPage/NavBar';
import { Container } from 'react-bootstrap';
import Firends from './Components/Firends';
    
function Main(props){
    let { user } = props
    if(user.response)
    {
        return(   
        <>
            <_Navbar />     
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

export default connect(mapStateToProps, null) (Main)