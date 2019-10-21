import React from 'react';
import './App.scss';
import {Route} from 'react-router-dom'
import PrivateRoute from './util/PrivateRoute'
import PublicMainView from './components/public'
import PrivateMainView from './components/private'
import { connect } from "react-redux";


function App(props) {

  let {loggedIn} = props
  
  return (
    <div className="App">
      {loggedIn ? <PrivateRoute path="/" component={PrivateMainView}  />
      :<Route match path="/" component={PublicMainView} />}
    </div>
  );
}

const mapStateToProps = state =>{
  return{
    ...state.loggedIn
  }
}

export default connect(mapStateToProps,{})(App);



