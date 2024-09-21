import React from 'react'
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import './Main.css'
import axios from 'axios';


function Main() {

    const handleLoginSuccess = async (credentialResponse) => {
        console.log(credentialResponse);

        fetch('http://127.0.0.1:5000/api/get_emails', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ credential: credentialResponse.credential }),
          })
          .then(response => response.json())
          .then(data => {
            console.log('Emails:', data);
            // Process the emails as needed
          })
          .catch((error) => {
            console.error('Error:', error);
          });
        // window.location.href = '/confirmation';
    };
    
    const handleLoginError = () => {
        console.log('Login Failed');
    };
  return (

    <>

    <div className='main-container'>
             <h1 className='main-heading'>sift!</h1>
             <p className='main-copy'>We help you discover better alternatives for the products you buy, while saving you money.</p>
            <div className='main-btn'>

                <GoogleOAuthProvider clientId='5321516054-qje2dkbjrq4133ke4o18aifipr3n7gvr.apps.googleusercontent.com'>
                <GoogleLogin
                onSuccess={handleLoginSuccess}
                onError={handleLoginError}
                
                />
                {/* <div className='main-btn'>
                    <p className='main-text'>Sign in with Google</p>
                </div> */}
                </GoogleOAuthProvider>
            </div>
    </div>
    </>
  )
}

export default Main