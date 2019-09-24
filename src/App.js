import React, {Component} from 'react'
import { connect } from 'react-redux'

import { Route , Switch, Redirect} from 'react-router-dom'
import Login  from './Components/Authentication/Login'
import Main from './Main'

class App extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/user-dialy-task"/>}/> 
          <Route path="/login" name="login" component={()=><Login/>} />
          <Route path="/user-dialy-task" component={() => <Main />} /> */}
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) =>({
  user:state.user
})

export default connect(mapStateToProps, null) (App)

