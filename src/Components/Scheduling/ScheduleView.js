import React from "react"
import { useForm } from "react-hook-form"
import {db} from "../../config/fbConfig"
import firebase from "firebase"
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'





class ScheduleView extends React.Component {
    
    state = {
        students: null
    }

  


    


    componentDidMount(){
        console.log("mounted")
        db.collection('Scheduling')
        .get()
        .then( snapshot => {
            const students = []
            snapshot.forEach( doc => {
                const data = doc.data()
                students.push(data)
            }) 
            this.setState( {students : students})
        }) 
        .catch( error => console.log(error))
    }
    
    render() {
        const { auth, notuploaded } = this.props;
        if (auth.email == "guidancecounsellinghgic@gmail.com") // Page is only rendered if user's email equivalent to what is defined

        return(
            <div>
             
             <table>


             <thead>
                                <tr>
                                    <th> Name</th>
                                    <th> Time</th>
                                </tr>
                                </thead>
                { 
                this.state.students && this.state.students.map (student => {
                    return (
                        <tbody>

                                 
                                 <td> {student.name}</td>
                                 <td> {student.Time} </td>
                                
        
                              

                            </tbody>
                    )
                })}
            
               
            </table>
            </div> 
        )
     else return(
                 <Redirect to='/signIn' />
        )
    }

}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth    }
}


export default connect(mapStateToProps, )(ScheduleView)