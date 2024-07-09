import React, { useState } from "react";
import { token } from "../../../declarations/token";

function Faucet(props) {
  const [isDisabled, setDisable] = useState(false);
  const [buttonText, setText] = useState("Gimme gimme");

  async function handleClick(event) {
    setDisable(true);
    const result = await token.payOut();
    console.log("payout: " + result);
    setText(result);
  }

  return (
    <div className="blue window">
      <h2>
        <span role="img" aria-label="tap emoji">
          🚰
        </span>
        Faucet
      </h2>
      <label>
        Get your free DAngela tokens here! Claim 10,000 DANG tokens to 2vxsx-fae
      </label>
      <p className="trade-buttons">
        <button id="btn-payout" onClick={handleClick} disabled={isDisabled}>
          {buttonText}
        </button>
      </p>
    </div>
  );
}

export default Faucet;



// import React, { useState } from "react";
// import {token, canisterId, createActor} from "../../../declarations/token";
// import { AuthClient } from "@dfinity/auth-client";


// function Faucet(props) {

//   const [isDisabled, setDisable] = useState(false);
//   const [buttonText, setButtonText] = useState("Gimme Gimme");

//   async function handleClick(event) {
//     setDisable(true);

//     const authClient = await AuthClient.create();
//     const identity = await authClient.getIdentity();

//     const authenciatedCanister = createActor(canisterId,{
//       agentOptions:{
//         identity,
//       },
//     });
    
//     // await token.payOut();
//     // setButtonText(await token.payOut());

//     setButtonText(await authenciatedCanister.payOut());

//     // setDisable(false);
//   }

//   return (
//     <div className="blue window">
//       <h2>
//         <span role="img" aria-label="tap emoji">
//           🚰
//         </span>
//         Faucet
//       </h2>
//       <label>Get your free DAngela tokens here! Claim 10,000 DANG tokens to {props.userPrincipal}.</label> 
//       <p className="trade-buttons">
//         <button disabled={isDisabled} id="btn-payout" onClick={handleClick}>
//           {buttonText}
//         </button>
//       </p>
//     </div>
//   );
// }

// export default Faucet;
