import { GoogleLogout } from 'react-google-login';
import React from 'react';

const responseGoogle = (response) => {
    console.log(response)
    alert("successfully logged out");
}


export default function Logout() {
    return (
        <div><GoogleLogout
            clientId={'444043567380-mcn6b6kcv673i8j9u8l1tjjbsoqr3qo8.apps.googleusercontent.com'}
            buttonText="Logout"
            onLogoutSuccess={responseGoogle}
            
        >
        </GoogleLogout>

        </div>
    )
}
