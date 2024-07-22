import { toHex } from "ethereum-cryptography/utils";
import server from "./server";
import { secp256k1 } from "ethereum-cryptography/secp256k1";
import { useState } from "react";

// window.Buffer = window.Buffer || Buffer;


function Wallet({ privateKey, setPrivateKey, balance, setBalance }) {
  const [addressPub, setAddressPub] = useState("")



  

  async function onChange(evt) {
    const address = evt.target.value;

    setPrivateKey(address);
   
    // const privateKeyBuffer = ArrayBuffer.from(privateKey, 'hex');
    // const publicKeyBuffer = secp256k1.getPublicKey(privateKeyBuffer)
    // const encoder = new TextEncoder()
    // const publicKey = encoder.encode(privateKey)
    // console.log("this is the privatekey")
    // console.log(privateKey)

    const publicKey = await secp256k1.getPublicKey(privateKey);
    setAddressPub(toHex(publicKey))
    
    


    if (addressPub) {
      const {
        data: { balance },
      } = await server.get(`balance/${addressPub}`);
      setBalance(balance);
    } else {
      setBalance(0);
    }
  }

  return (
    <div className="container wallet">
      <h1>Your Wallet</h1>

      <label>
        PrivateKey
        <input placeholder="Type an address, for example: 0x1" value={privateKey} onChange={onChange}></input>
      </label>

      <div className="balance">Balance: {balance}</div>
    </div>
  );
}

export default Wallet;
