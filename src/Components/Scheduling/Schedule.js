import React from "react"
import { useForm } from "react-hook-form"
import {db} from "../../config/fbConfig"
import "../../index.css"
import Select, { components } from "react-select";
import firebase from "firebase"




function Schedule() {

    const { register, handleSubmit, getValues } = useForm();
    const students = firebase.database().ref()


    let time = getValues("Time")
    let name = getValues("firstName")
    console.log(name)
    console.log(time)

    
    students
    .orderByChild("name")
    .equalTo('Dwayne')
    .once('value')
    .then(snapshot => {
        if(snapshot.exists()){
            let playerData = snapshot.val();
            console.log("its not coming")
            console.log(playerData)
            return playerData
        } else {
            console.log('Settlement name not found');
        }
    })


    const onSubmit = (data) => {
        console.log(data);

        let time = getValues("Time")
        let name = getValues("firstName")
        
        db.collection("Scheduling")
        .add({
            Time: time,
            name: name
     }).then(() => {
         alert("Sent")
     }).catch((error) => {
         alert(error.message)
     })


    };

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ];

     


  return( 
      <div>
        <h4 class="full"> Please Type Your Full Name </h4>
      
        <form onSubmit={handleSubmit(onSubmit)} className="input-field col s12">
    <select 
    hideSelectedOptions={false} 
    className="browser-default" {...register("Time")} 
    > 
            <option value=""> Please Select Meeting Time </option>  
            <option  value="Tuesday 8:00AM"> Tuesday 8:00AM  </option>    
            <option  value="Tuesday 8:30AM"> Tuesday 8:30AM   </option> 
            <option value="Tuesday 9:00AM "> Tuesday 9:00AM  </option> 
            <option value="Tuesday 9:30AM"> Tuesday 9:30AM  </option> 
            <option value="Tuesday 10:00AM"> Tuesday 10:00AM  </option> 
            <option value="Tuesday 10:30AM "> Tuesday 10:30AM  </option> 
            <option value="Tuesday 11:00AM"> Tuesday 11:00AM  </option> 
            <option value="Tuesday 11:30AM"> Tuesday 11:30AM  </option> 
            <option value="Wednesday 8:00AM"> Wednesday 8:00AM  </option>    
            <option value="Wednesday 8:30AM "> Wednesday 8:30AM   </option> 
            <option value="Wednesday 9:00AM"> Wednesday 9:00AM  </option> 
            <option value="Wednesday 9:30AM "> Wednesday 9:30AM  </option> 
            <option value="Wednesday 10:00AM"> Wednesday 10:00AM  </option> 
            <option value="Wednesday 10:30AM"> Wednesday 10:30AM  </option> 
            <option value="Wednesday 11:00AM"> Wednesday 11:00AM  </option> 
            <option value="Wednesday 11:30AM "> Wednesday 11:30AM  </option> 
            <option value="Thursday 8:00AM"> Thursday 8:00AM  </option>    
            <option value="Thursday 8:30AM"> Thursday 8:30AM   </option> 
            <option value="Thursday 9:00AM"> Thursday 9:00AM  </option> 
            <option value="Thursday 9:30AM"> Thursday 9:30AM  </option> 
            <option value="Thursday 10:00AM"> Thursday 10:00AM  </option> 
            <option value="Thursday 10:30AM"> Thursday 10:30AM  </option> 
            <option value="Thursday 11:00AM "> Thursday 11:00AM  </option> 
            <option value="Thursday 11:30AM"> Thursday 11:30AM  </option> 

    </select>
         <input {...register("firstName")}/>
                    
          
            <input type="submit" />
        </form>
        </div>
    );
}


export default Schedule