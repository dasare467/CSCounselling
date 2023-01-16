import React, {useState, Component } from "react";
import Axios from 'axios'



function MyPage() {
    const [imageSelected, setImageSelected] = useState("")

    const uploadImage= () => {
      const formData = new FormData()
      formData.append("file", imageSelected)
      formData.append("upload_preset", "lqwtibod")


      Axios.post("https://api.cloudinary.com/v1_1/dhqkgoyhm/image/upload", formData
      ).then((response) => {
        console.log(response);
        alert("sent")
      });


    };


    return(
      <div className="upload">
                <h4 class="full"> Upload your files here! </h4>
        <main className="buttons">
        <input 
        type="file"
         onChange={(event)=> {
          setImageSelected(event.target.files[0]);
        }}
        />
        <button onClick={uploadImage}>Upload File </button>
        </main>
        </div>

        
    )
}




export default MyPage