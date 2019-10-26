import React from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import * as friensAction from '../../redux/actions/friendsAction'
import { Row , Col}from 'react-bootstrap'
import SearchBox from '../SearchBox';
import CustomeCard  from './CustomeCard';
import ChatWindow from './ChatBox';
import axios from '../../redux/actions/axios';

class Friends extends React.Component{
    
    constructor(props){
        super(props)
        this.state={
            chatList:[],
            chatHistory:[]
        }

    }


    componentDidMount(){
        let { actions } = this.props
        actions.friendsList()
    }

    async onClick(obj){
        let {
            user:{
              response:{
                data:{
                  accessToken
                }
              }
            }
          } = this.props
        let options = {
            headers:{
            "access-token": accessToken
            }
        }
        let { clientId } = obj
        let index = this.state.chatList.findIndex(chatObj => chatObj.ClientId === clientId )
        let { data:{data} } = await axios.get(`${process.env.REACT_APP_USER_TASK_API}/chat?to=${clientId}`,options)
            this.setState({
                chatList:[obj],
                chatHistory: data?data:[]
            })
    }

    render(){
        let { chatList, chatHistory } = this.state
        let { response, friends_loading } = this.props.friends
        let result_page =""
        if( !friends_loading ){
            if(response){
                let { data } = response
                result_page =(
                    <div>                        
                        <Row>  
                            {
                                data.map((obj , index )=><Col md={3} key={index}> <CustomeCard  {...obj} 
                                 onClick={() =>this.onClick(obj)}/></Col> )
                            }
                        </Row>    
                    </div>
                )
            }
            else{
                result_page= <Row> <div> Please Visit after some time </div></Row>
            }
        }else{
            result_page=  <Row> <div>loading</div> </Row>
        }
    return(
        <div>
            <Row>
                <div className="mt-4 mb-4">
                    <SearchBox />
                </div>
            </Row>
            {result_page}
            <div className="chat-popup">
              {
                chatList.map((chatObj,index) => <ChatWindow  {...chatObj } history={chatHistory}  key={index}/>)
                }
            </div>
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
    user:state.user,
    friends: state.friends,
    searchList: state.friendSearchList
})

const mapDispatchToprops=(dispatch)=>({
    actions: bindActionCreators(friensAction, dispatch)
})
 
export default connect(mapStateToProps,mapDispatchToprops)(Friends)