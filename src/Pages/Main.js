import React from 'react'
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import './Main.css'

function Main() {

    const handleLoginSuccess = async (credentialResponse) => {
        console.log(credentialResponse);
      };
    
      const handleLoginError = () => {
        console.log('Login Failed');
      };
  return (
    <div>

        <GoogleOAuthProvider clientId='5321516054-qje2dkbjrq4133ke4o18aifipr3n7gvr.apps.googleusercontent.com'>
        <GoogleLogin
          onSuccess={handleLoginSuccess}
          onError={handleLoginError}
        />
        <div className='main-btn'>
            <p className='main-text'>Sign in with Google</p>
        </div>
        </GoogleOAuthProvider>
    </div>
  )
}

export default Main