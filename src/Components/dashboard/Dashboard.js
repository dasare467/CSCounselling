import React, { Component } from 'react'
import Announcements from '../projects(or info from staff)/Announcements.js'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'


class Dashboard extends Component {
    render(){
        const { projects, auth } = this.props; // creating props in render method(based on mapStateToProps)
        if (!auth.uid) return <Redirect to= '/signIn' />

        return(
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">      
                    <Announcements projects={projects}/> {/* Displays Announcements components and feeds projects prop from firebase announcement collection */}
                    </div>
                    
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => { 
    console.log(state) 
    return{
        projects: state.firestore.ordered.announcements,
        auth: state.firebase.auth  // creating projects state and assigning it to firebase "announcements collection"
    }
}

export default compose(
    connect(mapStateToProps),  
    firestoreConnect([ // Method that allows announcements collection to be accessed in MapStateToProps
        {
            collection: 'announcements',
            orderBy: ['createdAt', 'desc' ]
        }
    ])
)(Dashboard)