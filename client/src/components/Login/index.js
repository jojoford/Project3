import React from 'react';
// import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';

const responseGoogle = (response) => {
    console.log(response);
}

export default function Login() {
    return (
        <div>
            <GoogleLogin
                clientId={"444043567380-mcn6b6kcv673i8j9u8l1tjjbsoqr3qo8.apps.googleusercontent.com"}
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
        </div>
    )
}
  