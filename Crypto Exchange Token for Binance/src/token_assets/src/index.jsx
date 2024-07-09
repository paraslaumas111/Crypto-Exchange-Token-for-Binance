import ReactDOM from "react-dom";
import React from "react";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));



// import ReactDOM from 'react-dom'
// import React from 'react'
// import App from "./components/App";
// import { AuthClient } from "@dfinity/auth-client";

// const init = async () => { 

//   const authClient = await AuthClient.create();

//   if(await authClient.isAuthenticated()){
//     handleAuthenticated(authClient);
//   } else {
//     await authClient.login({
//       identityProvider: "https://identity.ic0.app/#authorize",
//       onSuccess: () => {
//         handleAuthenticated(authClient);
//       }
//     });
//   };

//   async function handleAuthenticated(authClient){
//     console.log(await authClient.getIdentity());  //To get the Internet Identity of the user
//     const identity = await authClient.getIdentity(); //To get II of user
//     const userPrincipal = identity._principal.toString(); //To convert II i.e. the Principal ID of user into a string
//     console.log(userPrincipal);
//     ReactDOM.render(<App loggedinPrincipal={userPrincipal}/>, document.getElementById("root")); //Using Props functionality of React to send PID of user
//   };

// }

// init();


