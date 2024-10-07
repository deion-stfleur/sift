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
      alert("User Data: ", credentialResponse + "token:" + credentialResponse.credential);
      // alert("Access Token: ", credentialResponse.credential);
      // const accessToken = credentialResponse.credential;
      // console.log("Access Token: ", accessToken);
      // try {
      //   const response = await axios.post('https://email-backend-project-6e9ab27b2095.herokuapp.com/api/get_emails', { token: accessToken });
      //   console.log(response.data);
      //   window.location.href = '/confirmation';
      // } catch (error) {
      //   console.log(error);
      // }
      // window.location.href = '/confirmation';

      try {
        console.log("test worked");
        window.location.href = '/confirmation';
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
             <h1 id="get-started" className='main-heading'>sift!</h1>
             <p className='main-copy'>We help you discover better alternatives for the products you buy, while saving you money.</p>
            <div className='main-btn'>

                <GoogleOAuthProvider  style={{backgroundColor: 'white', color: 'black', width: '220px', borderRadius: '200px'}} clientId='5321516054-qje2dkbjrq4133ke4o18aifipr3n7gvr.apps.googleusercontent.com'>
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



        <div className='second-section'>
            {/* <div style={{height: .04,backgroundColor: 'transparent', width: '100%'}}></div> */}
{/* 
             <div className='btn-container'>
            <p className='btn-container-text'>How it works!</p>
            </div> */}
            {/* <p className='main-sec2-h1'>Let us handle the hard work, so you can reap the benefits.</p> */}
           
           {/* <a style={{textDecoration: 'unset !important', color: 'black'}} href="/#get-started">
            <div className='btn-container-2'>
            <p className='btn-container-text-2'>Sign up now- it's free</p>
            </div>
           </a> */}

           {/* <div className='sec-width'>

            <div className='gray-box'>
                <p>Step 1 - Sign Up</p>
            </div>
            <div className='gray-box'>
                <p>Step 2 - We track all recent and current order history</p>
            </div>
            <div className='gray-box'>
                <p>Step 3 - We will notify you once we find the right products for you</p>
            </div>

           </div> */}

        </div>
    </div>
    </>
  )
}

export default Main