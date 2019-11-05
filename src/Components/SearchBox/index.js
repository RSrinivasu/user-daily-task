import React, { Fragment, useState, useEffect } from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import * as friensAction from '../../redux/actions/friendsAction'
import './index.css'
import { Button, Badge , Spinner} from 'react-bootstrap'


function SearchBox(props){
    let { actions , searchList , updateFriend } = props
    let [userInput, setUserInput] = useState("")
    let [showSuggestions, setShowSuggestions] =useState(false) 
    let filterSuggestions =[]
    let [activeSuggestionsIndex, setActiveSuggestionsIndex] = useState(0)

    function onChange(e){
        let value = e.target.value
        actions.searchFriends(value)
        setUserInput(value)
        setShowSuggestions(true)
    }

    function onClick(update){
        console.log("onclick function ",update)
        actions.updateFriend(update, userInput)
    }

    function onKeyDown(e){
        setActiveSuggestionsIndex(1)
    }

    let { response }= searchList
    if(response &&  response.data && response.data.length )
        {
            filterSuggestions= response.data
        }else{
            filterSuggestions = []
        }    
    return(
    <>
        <Fragment >
            <div className="search">
                <div className="search-comp">
                    <input  type="text" 
                            onChange={onChange}
                            onKeyDown={onKeyDown}
                            value={userInput}
                    />
                    <button><i className="fa fa-search"></i></button>
                </div>
                <SuggestionsListComponent 
                            userInput={userInput}  
                            showSuggestions= {showSuggestions}
                            filterSuggestions={filterSuggestions}
                            activeSuggestionsIndex= {activeSuggestionsIndex}
                            onClick= {onClick}
                            updateFriend = {updateFriend}
                            />
        </div>
        </Fragment>
    </>
    )
}

function SuggestionsListComponent(props){
    let {showSuggestions, userInput , filterSuggestions,activeSuggestionsIndex , updateFriend,onClick } = props
    let suggestionsComponent =""
    if(showSuggestions && userInput){
        if(filterSuggestions && filterSuggestions.length > 0){
            suggestionsComponent=(
                <ul className="suggestions">
                    {
                        filterSuggestions.map((suggestions,index)=>{
                            let className , request , _status
                            if(index === activeSuggestionsIndex ){
                                className = "active-suggestion"
                            }
                            let { status } = suggestions
                            if(status && status.length > 0){
                                _status = status[0]
                            }
                            else{
                                request = "Request"
                            }
                            return(
                                <li className={className} key={index}>
                                    <DisplaySaggesations
                                        id={suggestions.clientId} 
                                        url={suggestions.url} 
                                        name={suggestions.name}
                                        request={request}
                                        status={_status}
                                        onClick={onClick}
                                        updateFriend = {updateFriend}
                                        />
                                </li>
                            )
                        })
                    }
                </ul>
            )
        }
        else{
            suggestionsComponent = (
            <ul className="suggestions">
               <li><em>No suggestions, you're on your own!</em></li> 
            </ul>
            )
        }
    }
    return suggestionsComponent
}



function DisplaySaggesations(props){
    let {url , name , request , status , id ,updateFriend , onClick } = props  
    let { update_loading } = updateFriend
    if( update_loading && updateFriend.id === id ){
        return <SpinnerButton />
    }
    else{
        return(
            <div className="view-card">
                <img src={url} alt="invalid" />
                <div className="label">
                    <div>{ name }</div> 
                    { request ? <Button variant="outline-primary" 
                                onClick={() =>onClick({status:1, to:id})} >{request}</Button>:
                                null}
                    { status ?
                        status.code === 2 ?<h4><Badge pill variant="secondary">{status.meaning}</Badge></h4>:
                        <Button variant="outline-primary"
                                onClick={() =>onClick({status:status.code, to:id})} >{status.meaning}</Button>
                        :null
                    }
                </div>
            </div>
        )
    }
}

function SpinnerButton(){
    return(
    <>
       <div className="card-loading">
        <div className="spinners">
            <Spinner animation="grow" variant="success" />
            <Spinner animation="grow" variant="danger" />
            <Spinner animation="grow" variant="warning" />
            <Spinner animation="grow" variant="info" />
            <Spinner animation="grow" variant="light" />
            <Spinner animation="grow" variant="dark" />
        </div>
       </div>
    </>)
}


const mapStateToProps =(state)=>({
    searchList: state.friendSearchList,
    updateFriend:state.updateFriend
})

const mapDispatchToprops=(dispatch)=>({
    actions: bindActionCreators(friensAction, dispatch)
})

export default connect(mapStateToProps,mapDispatchToprops)(SearchBox)
