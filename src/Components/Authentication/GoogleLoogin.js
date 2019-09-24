import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import GoogleLogin from 'react-google-login'
import * as userAction from '../../redux/actions/userAction'
import { Redirect } from 'react-router-dom'


class CustomGoogleButton extends React.Component
{
    constructor(props){
        super(props)
        this.state = {
            redirected:false
        }
    }

    googleLoginHandle =(res)=>{
        if(res){
            let { profileObj ,accessToken  }= res
            let data = {
                name:profileObj.name,
                url:profileObj.imageUrl,
                clientId: profileObj.googleId,
                email:profileObj.email,
                accessToken:accessToken
            }
            this.props.user.login(data)
        }
    }
  
    render(){
        return(
            <GoogleLogin
                clientId="728953728341-10c1q023rrlvqgi98rcbfmu477o1rfm5.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
                buttonText="Google"
                onSuccess={this.googleLoginHandle}
                // onFailure={this.googleLoginHandle}
                icon ={true}
                style={{"width":"15px"}}
                fetchBasicProfile={true}
                cssClass="btn btn-outline-primary btn-block btn-sm"
            />
        )
    }
}


const mapDispatchToprops=(dispatch)=>({
    user: bindActionCreators(userAction, dispatch)
})

export default connect(null,mapDispatchToprops) (CustomGoogleButton)