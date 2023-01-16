import React from 'react'
import {NavLink} from 'react-router-dom'

const SignedOutLinks = () => {
    return (
     <ul className="right">
         <li> <NavLink to='/SignIn'>Log In</NavLink></li>
         <li> <NavLink to='/SignUp'>Sign Up</NavLink></li>


     </ul>
    )
}


export default SignedOutLinks