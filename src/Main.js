import React from 'react'
import { Route , Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import  AppPage  from './Components/AppPage/AppPage'

    
function Main(props){
    let { user } = props
    if(user.response)
    {
        return(        
        <div>
            <Route path="/" render={()=><AppPage />} />
        </div>
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