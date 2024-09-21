import React, {useState,  useEffect} from 'react'
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import './Main.css'
import axios from 'axios';
import { gapi } from 'gapi-script';

const clientID = "5321516054-qje2dkbjrq4133ke4o18aifipr3n7gvr.apps.googleusercontent.com"

function Main() {

    const [tokenResponse, setTokenResponse] = useState(null);
    const handleLoginSuccess = async (credentialResponse) => {
      console.log("User Data: ", credentialResponse);
      const accessToken = credentialResponse.credential;
      console.log("Access Token: ", accessToken);
      try {
        const response = await axios.post('http://127.0.0.1:5000/api/get_emails', { token: accessToken });
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
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
                <p>{tokenResponse}</p>
            </div>
    </div>
    </>
  )
}

export default Main