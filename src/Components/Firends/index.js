import React from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import * as friensAction from '../../redux/actions/friendsAction'
import { Row , Col}from 'react-bootstrap'
import SearchBox from '../SearchBox';
import CustomeCard  from './CustomeCard';

class Friends extends React.Component{
    
    componentDidMount(){
        let { actions } = this.props
        actions.friendsList()
    }


    render(){
        return(
            <div>
                <Row>
                    <div className="mt-4 mb-4">
                        <SearchBox />
                    </div>
                </Row>
                
                <Row>
                    <Col md={3}> <CustomeCard /></Col>
                    <Col md={3}> <CustomeCard /></Col> 
                    <Col md={3}> <CustomeCard /></Col> 
                    <Col md={3}> <CustomeCard /></Col>
                    <Col md={3}> <CustomeCard /></Col> 
                    <Col md={3}> <CustomeCard /></Col>
                </Row>
                
            </div>
        )
    }
}


// function Friends(props){
//     let { actions } = props
//     return(
//     <>
//         <div className="text-center mt-4 mb-4">
//             <SearchBox {...props}/>
//         </div>
//         <div>
//         <Row>
//             <Col md={3}> <CustomeCard /></Col>
//             <Col md={3}> <CustomeCard /></Col> 
//             <Col md={3}> <CustomeCard /></Col> 
//             <Col md={3}> <CustomeCard /></Col>
//         </Row>
//         </div>
//     </>
//     )
// }


const mapStateToProps =(state)=>({
    friends: state.friends,
    searchList: state.friendSearchList
})

const mapDispatchToprops=(dispatch)=>({
    actions: bindActionCreators(friensAction, dispatch)
})
 
export default connect(mapStateToProps,mapDispatchToprops)(Friends)