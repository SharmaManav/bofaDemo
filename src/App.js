import React from 'react';
import './App.css';

const head = require('./img/loan_app_status.png')
const cont_button = require('./img/continue.png')
const dev_token = 'bTb5J6BimTcx6AO6ideFb8dlXy0FjiCm'

 function boxUpload () {
   //Append the file and folder ID to the FormData object to pass as the body parameter to Box

   let form = new FormData();
   form.append('file', document.getElementById('myFile').files[0])
   form.append('parent_id', '89298802436')

   // Using fetch API to make a POST request to Box's file upload endpoint
   // Passes the developer token through an authorization header

   fetch('https://upload.box.com/api/2.0/files/content', {
    method: 'POST',
    headers: new Headers({
      'Authorization': 'Bearer ' + dev_token
    }),
    body: form
   }).then((response) => {
    document.getElementById("thanks").style.display="block"
    document.getElementById("continue").style.display="block"
   })
 }

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={head} className="App-logo" alt="head"/>
      </header>

      <div className="Body">
        <h1>Your Loan Request</h1>
        <h3>To give you the most accurate loan information, please upload your application form here.</h3>
        <div className="uploadForm">  
          <input type="file" id="myFile" onChange={() => boxUpload()}/>
          <h3 id="thanks">Thank you! Your application is being securely stored with Box!</h3>
          <img id="continue" a="_blank" src={cont_button}/>
        </div>
      </div>
    </div>
  );
}

export default App;