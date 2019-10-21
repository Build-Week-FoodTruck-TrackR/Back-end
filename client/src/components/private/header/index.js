import React from 'react'
import {connect} from 'react-redux'
import {logOut} from '../../../store/actions'
const Header = (props) =>{
    return(
        <header className="mainHeader" >
            <p>I am a Protected Header</p>
            <button onClick={props.logOut}>Log Out</button>
        </header>

    )
}

const mapStateToProps = state =>{
    return {
        ...state.loggedIn
    }
}

export default connect(mapStateToProps,{logOut})(Header);