import React from 'react'
import {NavLink} from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignedInLinksStaff = (props) => {
    return (
     <ul className="right">
        <li> <NavLink to='/'>Home</NavLink></li>
         <li> <NavLink to='/create'>Create Announcement</NavLink></li>   
         <li> <NavLink to='/viewschedule'>View Schedule</NavLink></li>
         <li> <a onClick={props.signOut}>Log Out</a></li>
         <li> <NavLink to='/' className="btn btn-floating pink lighten-1">ES</NavLink></li>

     </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinksStaff) 
