import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import GoogleLogin from 'react-google-login'
import * as userAction from '../../redux/actions/userAction'
import { Redirect } from 'react-router-dom'
import {Button} from 'react-bootstrap'
import google from '../icons/google-brands.svg'


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
                //buttonText="Google"
                render={(props)=><Button  variant="outline-primary"
                    className={"btn  btn-block btn-sm"}  onClick={props.onClick}><img alt="" src={google} width={20}/>Google</Button> }
                onSuccess={this.googleLoginHandle}
                // onFailure={this.googleLoginHandle}
            />
        )
    }
}


const mapDispatchToprops=(dispatch)=>({
    user: bindActionCreators(userAction, dispatch)
})

export default connect(null,mapDispatchToprops) (CustomGoogleButton)