import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import GoogleLogin from 'react-google-login'
import * as userAction from '../../redux/actions/userAction'
import google from '../icons/google-brands.svg'


class CustomGoogleButton extends React.Component
{
    googleLoginHandle =(res)=>{
        if(res){
        let { profileObj }= res
        let data = {
            name:profileObj.name,
            url:profileObj.imageUrl
        }
        this.props.user.fbLogin(data)
        window.location.href ="/"
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