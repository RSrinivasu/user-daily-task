import React, {Component} from 'react'
import { connect } from 'react-redux'

import { Route , Switch} from 'react-router-dom'
import Login  from './Components/Authentication/Login'
import Main from './Main'

class App extends Component {
  
  render(){
    return (
      <div>
        <Switch>
          {/* <Route exact path="/" render={() => <Redirect to="/"/>}/>  */}
          <Route path="/login" name="login" component={()=><Login/>} />
          <Route path="/" component={() => <Main />} /> }
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) =>({
  user:state.user
})

export default connect(mapStateToProps, null) (App)

