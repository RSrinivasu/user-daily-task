import React, { Fragment, useState, useEffect } from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import * as friensAction from '../../redux/actions/friendsAction'
import './index.css'
import { Button, Badge } from 'react-bootstrap'


function SearchBox(props){
    let { actions , searchList } = props
    let [userInput, setUserInput] = useState("")
    let [showSuggestions, setShowSuggestions] =useState(false)
    let [filterSuggestions, setFilterSuggestions] = useState([])
    let [activeSuggestionsIndex, setActiveSuggestionsIndex] = useState(0)


    function onChange(e){
        let value = e.target.value
        actions.searchFriends(value)
        setUserInput(value)
        setShowSuggestions(true)
    }

    useEffect(()=>{
        let { response } = searchList
        if(response &&  response.data && response.data.length )
        {
            setFilterSuggestions(response.data)
        }else{
            setFilterSuggestions([])
        }
    })


    function onKeyDown(e){
        setActiveSuggestionsIndex(1)
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
                            />
        </div>
        </Fragment>
    </>
    )
}

function SuggestionsListComponent(props){
    let {showSuggestions, userInput , filterSuggestions,activeSuggestionsIndex } = props
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
                                        url={suggestions.url} 
                                        name={suggestions.name}
                                        request={request}
                                        status={_status}/>
                                </li>
                            )
                        })
                    }
                </ul>
            )
        }
        else{
            suggestionsComponent = (
            <div className="no-suggestions">
                <em>No suggestions, you're on your own!</em>
            </div>
            )
        }
    }
    return suggestionsComponent
}

function DisplaySaggesations(props){
    console.log(props)
    let {url , name , request , status } = props    
    return(
        <div className="view-card">
            <img src={url} alt="invalid" />
            <div className="label">
                <div>{ name }</div> 
                { request ?<Button variant="outline-primary" >{request}</Button>:null}
                { status ?
                    status.code === 3 ?<Button variant="outline-primary" >{status.meaning}</Button> :
                       <h5><Badge pill variant="secondary">{status.meaning}</Badge></h5>
                    :null
                }
            </div>
        </div>
    )
}


const mapStateToProps =(state)=>({
    searchList: state.friendSearchList
})

const mapDispatchToprops=(dispatch)=>({
    actions: bindActionCreators(friensAction, dispatch)
})

export default connect(mapStateToProps,mapDispatchToprops)(SearchBox)
