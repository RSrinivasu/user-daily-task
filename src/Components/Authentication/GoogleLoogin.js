import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import GoogleLogin from 'react-google-login'
import * as userAction from '../../redux/actions/userAction'
import {Button} from 'react-bootstrap'
import google from '../icons/google-brands.svg'
import history from '../../redux/history'

class CustomGoogleButton extends React.Component
{
    constructor(props){
        super(props)
        console.log("props-------------",props)
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
            history.push('/')
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

// import { useHistory } from "react-router";

// function CustomGoogleButton(props){
//     let history = useHistory()

//     function googleLoginHandle(res){
//                 if(res){
//                     let { profileObj ,accessToken  }= res
//                     let data = {
//                         name:profileObj.name,
//                         url:profileObj.imageUrl,
//                         clientId: profileObj.googleId,
//                         email:profileObj.email,
//                         accessToken:accessToken
//                     }
//                     props.user.login(data)
//                     history.push("/")
//                 }
//     }

//     return(
//             <GoogleLogin
//                 clientId="728953728341-10c1q023rrlvqgi98rcbfmu477o1rfm5.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
//                 //buttonText="Google"
//                 render={(props)=><Button  variant="outline-primary"
//                     className={"btn  btn-block btn-sm"}  onClick={props.onClick}><img alt="" src={google} width={20}/>Google</Button> }
//                 onSuccess={googleLoginHandle}
//                 // onFailure={this.googleLoginHandle}
//             />
//     )
// }



const mapDispatchToprops=(dispatch)=>({
    user: bindActionCreators(userAction, dispatch)
})

export default connect(null,mapDispatchToprops) (CustomGoogleButton)