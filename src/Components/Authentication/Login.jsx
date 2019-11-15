import React,{Component} from "react"
import {Container, Button, Row,  Col} from 'react-bootstrap'
import {InputGroup , FormControl, Form} from 'react-bootstrap'
import usericon from '../icons/user-regular.svg'
import passwordicon from '../icons/lock-solid.svg'
import AlertBox from "../utilities/AlertBox";
import CustomFBLoginButton from "./FacebookLogin"
import CustomGoogleButton from "./GoogleLoogin";

export default class Login extends Component
{
    constructor(props){
        super(props)
        this.state={
            username:"",
            password:""
        }
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault() 
        console.log("submited")
    }

    render(){
        let { username, password } = this.state
        return(
            <Container>
                <AlertBox />
                <div className="login-page" > 
                        <div className="login-lable">
                            Login
                        </div>
                    <Form onSubmit={this.handleSubmit}>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1">
                                    <img alt="" src={usericon}  width={20}/>
                                </InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl
                                        name="username"
                                        value={username}
                                        placeholder="Username"
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                        onChange={this.handleChange}
                                        required
                                    />        
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1">
                                    <img alt="" src={passwordicon}  width={20}/>
                                </InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl
                                        value={password}
                                        type= "password"
                                        name="password"
                                        placeholder="Password"
                                        aria-label="Password"
                                        aria-describedby="basic-addon1"
                                        onChange={this.handleChange}
                                        required
                                    />        
                        </InputGroup>
                        <Button variant="primary" size="sm" type="submit" block>
                            LOGIN
                        </Button>  
                    </Form>
                    <div className="small-lable">
                        Or login with
                    </div>
                    <Row>
                        <Col xs={12} md={6} className="col-pad">
                            <CustomFBLoginButton />
                        </Col>
                        <Col xs={12} md={6} className="col-pad">
                            <CustomGoogleButton />
                        </Col>
                    </Row>
                </div> 
            </Container>
        )
    }
}
