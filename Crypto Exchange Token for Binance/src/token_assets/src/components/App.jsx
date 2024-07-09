import React from "react";
import Header from "./Header";
import Faucet from "./Faucet";
import Balance from "./Balance";
import Transfer from "./Transfer";

function App(props) {
// //Passing PID to Faucet.jsx
  return (
    <div id="screen">
      <Header />
      {/* <Faucet userPrincipal={props.loggedinPrincipal}/>  */}
      <Faucet />
      <Balance />
      <Transfer />
    </div>
  );
}

export default App;
