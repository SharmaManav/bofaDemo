import React from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery';

const head = require('./img/loan_app_status.png');
const dev_token = 'XiCoH70Q2tJ6Z48EVhDXnAiuqH6dzL9U'

 function boxUpload () {
   //Append the file and folder ID to the FormData object to pass as the body parameter to Box

   let form = new FormData();
   form.append('name', document.getElementById('myFile').files[0])
   form.append('id', '89298802436')

   //Using fetch API to make a POST request to Box's file upload endpoint
   //Passes the developer token through an authorization header

   fetch('https://upload.box.com/api/2.0/files/content', {
    method: 'POST',
    headers: new Headers({
      'Authorization': 'Bearer ' + dev_token
    }),
    body: form
   }).then((response) => {
    console.log(response);
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

        <label for="userUpload">Upload your loan application here.</label>
        <input type="file" id="myFile" onChange={() => boxUpload()}/>
      </div>
    </div>
  );
}

export default App;