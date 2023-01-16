import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../store/actions/projectActions'
import { Redirect } from 'react-router-dom'

class createAnnouncement extends Component {
    state = {
        title: '',
        content: '',
    }

    handleChange = (e) => {
        this.setState({
           [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
      //  console.log(this.state)
        this.props.createProject(this.state)
        this.setState({
            title: '',
            content: '',
        })
        alert("sent")
    }



    render() {
        const { auth, notuploaded } = this.props;
          if (auth.email == "guidancecounsellinghgic@gmail.com") // Page is only rendered if user's email equivalent to what is defined
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Create Announcement</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" value={this.state.title} onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="content" >Content</label>
                        <textarea name="" id="content" cols="30" rows="10" className="materialize-textarea" onChange={this.handleChange} value={this.state.content}></textarea>
                    </div>
                    <div className="input-field">
                        <button className="btn pink ligthen-1 z-depth-0">Create</button>
                        { notuploaded ? <p className="fail"> {notuploaded} </p> : null }
                    </div>
                    
                </form>
            </div>
            )
            else return(
                 <Redirect to='/signIn' />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        notuploaded : state.upload
    }
}


const mapDispatchToProps = (dispatch) => {
    return{
         createProject: (project) => dispatch(createProject(project))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(createAnnouncement)
