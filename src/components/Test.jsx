import React,{useEffect,useState} from 'react'
import {GoogleLogin,GoogleLogout} from 'react-google-login'
import {gapi} from "gapi-script"

const Test = () => {
    const clientId = "830762272261-4rf6dr10u19limjbdrt8uf2bk5kojbej.apps.googleusercontent.com"
    const [status,setStatus] = useState("")
    const [accessToken,setAccessToken] = useState("")
    const [GoogleAuth,setGoogleAuth] = useState(null)
    const [tokenId,setTokenId] = useState("")

    useEffect(()=>{
        function start(){
            gapi.auth2.init({
                clientId:clientId,
                scope:""
            }).then((obj)=>{
                setGoogleAuth(obj)
            }).catch((err)=>{
                console.log(err)
            })
        }
        gapi.load('client:auth2',start)
    })
    const onSuccessLogin = (res) =>{
        setStatus("Login Success "+JSON.stringify(res.profileObj))
        setAccessToken(gapi.auth.getToken().access_token)
        setGoogleAuth(gapi.auth2.getAuthInstance())
        setTokenId(GoogleAuth.currentUser.le.tokenId)
        console.log(GoogleAuth.currentUser.le.tokenId)
        setTokenId(GoogleAuth.currentUser.le.tokenId)
    }
    const onFailureLogin = (res) =>{
        setStatus("Login Failure " +JSON.stringify(res))
    }
    const onSuccessLogout = () =>{
        GoogleAuth.signOut().then(()=>{
            setStatus("Logout Success")
            setAccessToken("")
            setTokenId("")
        }).catch((err)=>{
            console.log(err)
        })
    }
    return (
    <div style={{
        display:"flex",alignItems:"center",
        flexDirection:"column",marginTop:"20vh"
    }}>
        <div>
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
                    onLogoutSuccess={onSuccessLogout}
                />
            </div>
        </div>
        <div style={{
            alignSelf:"flex-start",display:"flex",
            flexDirection:"column",alignItems:"flex-start",
            margin:"2vmax 2vmax",rowGap:"2vmax"
        }}>
            <div style={{width:"75vw",overflowX:"scroll"}}>
                <h2>Status</h2>
                <p>{status}</p>
            </div>
            <div style={{width:"75vw",overflowX:"scroll"}}>
                <h3>Access Token</h3>
                <button onClick={()=>{navigator.clipboard.writeText(accessToken)}}>Copy</button>
                <p>{accessToken}</p>
            </div>
            <div>
                <h3>TokenId</h3>
                <button onClick={()=>{navigator.clipboard.writeText(tokenId)}}>Copy</button>
                <p style={{width:"70vw",overflowX:"scroll"}}>{tokenId}</p>
            </div>
        </div>
    </div>
  )
}

export default Test