import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as userAction from '../../redux/actions/userAction'
import FacebookLogin from 'react-facebook-login';
import facebook from '../icons/facebook-brands.svg'


class CustomFBLoginButton extends React.Component
{
    facebookLoginHandle =(res)=>{
        console.log("facebook ",res)
        if(res.status != "unknown" )
        {
            let data = {
                name: res.name,
                url: res.picture.data.url
            } 
            this.props.user.fbLogin(data)
            window.location.href ="/"
        }
    }

    render(){
        return(
            <FacebookLogin 
                appId="370600466988119"
                fields="name,email,picture"
                callback={this.facebookLoginHandle}
                textButton="Facebook"
                cssClass={ "btn btn-outline-primary btn-block btn-sm"}
                icon={<img alt="" src={facebook} width={20}/>}
                version="4.0"
            />
        )
    }
}


const mapDispatchToprops=(dispatch)=>({
    user: bindActionCreators(userAction, dispatch)
})

export default connect(null,mapDispatchToprops) (CustomFBLoginButton)