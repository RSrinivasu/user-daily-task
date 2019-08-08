import React from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import { Navbar ,Nav, Button}from 'react-bootstrap'
import * as userAction from '../../redux/actions/userAction'


function _Navbar(props){
    let {name, url} = props.user.response
    return(
    <>
        <Navbar bg="primary" variant="dark">
            <Nav  className="mr-auto">
            <img
                alt=""
                src={url}
                width="30"
                height="30"
                className="d-inline-block align-top"
                />
            <Navbar.Text variant="dark" className="nav-bar-text" >{name}</Navbar.Text>
            </Nav>
            <Nav>
                <Button onClick={() => props.actions.logout()}> Logout</Button>
            </Nav>
        </Navbar>
    </>
    )
}


const mapStateToProps =(state)=>({
    user:state.user
})

const mapDispatchToprops=(dispatch)=>({
    actions: bindActionCreators(userAction, dispatch)
})
 
export default connect(mapStateToProps,mapDispatchToprops)(_Navbar)