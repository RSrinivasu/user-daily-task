import React from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import * as friensAction from '../../redux/actions/friendsAction'
import * as chatActions from '../../redux/actions/chatAction'
import { Row , Col}from 'react-bootstrap'
import SearchBox from '../SearchBox';
import CustomeCard  from './CustomeCard';
import ChatWindow from './ChatBox';

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

    onClick(obj){
        let { chatActions } = this.props
        chatActions.chatHistory(obj)
    }

    render(){
        let { chatList , history } = this.props.chat
        let { response, friends_loading } = this.props.friends
        let {user:{response:{data}}} = this.props
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
                chatList.map((chatObj,index) => {
                    if(chatObj.isClosed)
                    {   
                         return null
                    }
                    else
                    {
                        return <ChatWindow currentUser={data}  {...chatObj } history={ history }  key={index}/>
                    }
                })
            }
            {/* {chatList.length > 0?<ChatWindow currentUser={data}  {...chatList[0] }   key={1}/>:null} */}
            </div>
        </div>
    )
    }
}


const mapStateToProps =(state)=>({
    user:state.user,
    friends: state.friends,
    searchList: state.friendSearchList,
    chat:state.chat
})

const mapDispatchToprops=(dispatch)=>({
    actions: bindActionCreators(friensAction, dispatch),
    chatActions: bindActionCreators(chatActions ,  dispatch)
})
 
export default connect(mapStateToProps,mapDispatchToprops)(Friends)