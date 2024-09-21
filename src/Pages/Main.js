import React from 'react'
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import './Main.css'
import axios from 'axios';


function Main() {

    // const handleLoginSuccess = async (credentialResponse) => {
    //     console.log(credentialResponse);
    //     try {
    //         // Send the ID token to your backend
    //         const response = await axios.post('http://localhost:3001/scrape-emails', {
    //           token: credentialResponse.credential
    //         });
            
    //         // Handle the response from your backend
    //         console.log('Emails scraped:', response.data);
            
    //         // Navigate to the confirmation page
    //         window.location.href = '/confirmation';
    //       } catch (error) {
    //         console.error('Error sending token to backend:', error);
    //         // Handle error (e.g., show an error message to the user)
    //       }
    //   };

    const handleLoginSuccess = async (credentialResponse) => {
        console.log(credentialResponse);
        try {
            const response = await axios.post('http://127.0.0.1:5000/get_emails', {
              token: credentialResponse.access_token 
            });
            
          
            console.log('Emails scraped:', response.data);
            

            window.location.href = '/confirmation';
        } catch (error) {
            console.error('Error sending token to backend:', error);
          
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
            </div>
    </div>
    </>
  )
}

export default Main