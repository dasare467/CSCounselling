import React from 'react'
import {Link} from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import SignedInLinksStaff from './SignInLinksStaff'
import { connect } from 'react-redux'

const Navbar = (props) => {
  const { auth, profile } = props;
   const links = auth.uid ? <SignedInLinks profile = {profile}/> : <SignedOutLinks />
  const LoadedNavBar = auth.isLoaded ? links : <p class="white-text right">Loading Nav...</p>
  
  const linkstaff = auth.uid ? <SignedInLinksStaff profile = {profile}/> : <SignedOutLinks />
  const LoadedNavBarstaff = auth.isLoaded ? linkstaff : <p class="white-text right">Loading Nav...</p>

    // console.log(auth)
    if (auth.email == "guidancecounsellinghgic@gmail.com")
return (
    <nav className="nav-wrapper blue darken-3">
      <div className="container">
      <Link to='/' className="brand-logo"><img src='https://www.soshgic.edu.gh/wp-content/uploads/2018/03/sos-logo-3.png' alt="hey">
       </img></Link>
        { LoadedNavBarstaff }
      </div>
    </nav>
  
      
)
 else return(
  <nav className="nav-wrapper blue darken-3">
  <div className="container">
  <Link to='/' className="brand-logo"><img src='https://www.soshgic.edu.gh/wp-content/uploads/2018/03/sos-logo-3.png' alt="hey">
   </img></Link>
    { LoadedNavBar }
  </div>
</nav>
)


} 

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}


export default connect(mapStateToProps)(Navbar)