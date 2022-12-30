import React,{useEffect,useState} from 'react'
import {GoogleLogin,GoogleLogout} from 'react-google-login'
import {gapi} from "gapi-script"

const Test = () => {
    const clientId = "830762272261-4rf6dr10u19limjbdrt8uf2bk5kojbej.apps.googleusercontent.com"
    const [status,setStatus] = useState("")
    const [accessToken,setAccessToken] = useState("")

    useEffect(()=>{
        function start(){
            gapi.client.init({
                clientId:clientId,
                scope:""
            })
        }
        gapi.load('client:auth2',start)
    })
    const onSuccessLogin = (res) =>{
        setStatus("Login Success "+JSON.stringify(res.profileObj))
        setAccessToken(gapi.auth.getToken().access_token)
    }
    const onFailureLogin = (res) =>{
        setStatus("Login Failure " +JSON.stringify(res))
    }
    const onSuccess = () =>{
        setStatus("Logout Success")
    }
    return (
    <div style={{
        display:"flex",alignItems:"center",
        flexDirection:"column",marginTop:"40vh"
    }}>


        <div id='signInButton' style={{padding:"20px 10px"}}>
            <GoogleLogin
                clientId={clientId}
                buttonText="Submit"
                onSuccess={onSuccessLogin}
                onFailure={onFailureLogin}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        </div>


        <div id='signInButton' style={{padding:"20px 10px"}}>
            <GoogleLogout
                clientId={clientId}
                buttonText="Logout"
                onLogoutSuccess={onSuccess}
            />
        </div>

        
        <div>
            <h2>Status</h2>
            {status}<br/>
            <h3>Access Token</h3>
            {accessToken}
        </div>
    </div>
  )
}

export default Test