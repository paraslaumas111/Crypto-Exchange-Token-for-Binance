import React, { useState } from "react";
import { Principal } from "@dfinity/principal";
import { token } from "../../../declarations/token";

function Transfer() {
  const [recipientId, setId] = useState("");
  const [amount, setAmount] = useState("");
  const [isHidden, setHidden] = useState(true);
  const [feedback, setFeedback] = useState("");
  const [isDisabled, setDisable] = useState(false);

  async function handleClick() {
    setHidden(true);
    setDisable(true);
    const recipient = Principal.fromText(recipientId);
    const amountToTransfer = Number(amount);

    const result = await token.transfer(recipient, amountToTransfer);
    setFeedback(result);
    setHidden(false);
    setDisable(false);
  }

  return (
    <div className="window white">
      <div className="transfer">
        <fieldset>
          <legend>To Account:</legend>
          <ul>
            <li>
              <input
                type="text"
                id="transfer-to-id"
                value={recipientId}
                onChange={(e) => setId(e.target.value)}
              />
            </li>
          </ul>
        </fieldset>
        <fieldset>
          <legend>Amount:</legend>
          <ul>
            <li>
              <input
                type="number"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </li>
          </ul>
        </fieldset>
        <p className="trade-buttons">
          <button id="btn-transfer" onClick={handleClick} disabled={isDisabled}>
            Transfer
          </button>
        </p>
        <p hidden={isHidden}>{feedback}</p>
      </div>
    </div>
  );
}

export default Transfer;



// import React, { useState } from "react";
// import {Principal} from '@dfinity/principal';
// import {token, canisterId, createActor} from "../../../declarations/token";
// import { AuthClient } from "@dfinity/auth-client";

// function Transfer() {
  
//   const [recipientID, setID] = useState("");
//   const [transferAmount, setAmount] = useState("");
//   const [isDisabled, setDisable] = useState(false);
//   const [feedback, setFeedback] = useState("");
//   const [isHidden, setHidden] = useState(true);

//   async function handleClick() {
//     setHidden(true);
//     setDisable(true);
//     const RID = Principal.fromText(recipientID);
//     const tAmount = Number(transferAmount);

//     const authClient = await AuthClient.create();
//     const identity = await authClient.getIdentity();

//     const authenciatedCanister = createActor(canisterId,{
//       agentOptions:{
//         identity,
//       },
//     });

//     // const response = await token.transfer(RID, tAmount);
//     const response = await authenciatedCanister.transfer(RID, tAmount); 
//     setHidden(false);
//     setFeedback(response);
//     setDisable(false);
//   }

//   return (
//     <div className="window white">
//       <div className="transfer">
//         <fieldset>
//           <legend>To Account:</legend>
//           <ul>
//             <li>
//               <input
//                 type="text"
//                 id="transfer-to-id"
//                 value ={recipientID}
//                 onChange={(e) => setID(e.target.value)}
//               />
//             </li>
//           </ul>
//         </fieldset>
//         <fieldset>
//           <legend>Amount:</legend>
//           <ul>
//             <li>
//               <input
//                 type="number"
//                 id="amount"
//                 value={transferAmount}
//                 onChange={(e) => setAmount(e.target.value)}
//               />
//             </li>
//           </ul>
//         </fieldset>
//         <p className="trade-buttons">
//           <button id="btn-transfer" disabled={isDisabled} onClick={handleClick} >
//             Transfer
//           </button>
//         </p>
//         <p hidden={isHidden}>{feedback}</p>
//       </div>
//     </div>
//   );
// }

// export default Transfer;
