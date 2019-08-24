import React from 'react'
import { Route , Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import  AppPage  from './Components/AppPage/AppPage'
import _Navbar from './Components/AppPage/NavBar';
import { Container } from 'react-bootstrap';
    
function Main(props){
    let { user } = props
    if(user.response)
    {
        return(   
        <>
            <_Navbar />     
            <Container>
                <Route path="/" render={()=><AppPage />} />
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