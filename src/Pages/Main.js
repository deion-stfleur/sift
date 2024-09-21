import React, {useState} from 'react'
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import './Main.css'
import axios from 'axios';


function Main() {

    const [tokenResponse, setTokenResponse] = useState(null);
    const handleLoginSuccess = async (credentialResponse) => {
        const token = credentialResponse.credential;
        const response = await fetch('https://openidconnect.googleapis.com/v1/userinfo?access_token=' + token);
        const userData = await response.json();
        console.log("Login Successful with user data:", userData);
        console.log(token);
        setTokenResponse(token);
        alert(`Signed in as ${userData.email} and ${token}`);
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
                <p>{tokenResponse}</p>
            </div>
    </div>
    </>
  )
}

export default Main