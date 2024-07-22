import {secp256k1 as secp} from  "ethereum-cryptography/secp256k1";
import { keccak256 } from "ethereum-cryptography/keccak";
import { utf8ToBytes } from "ethereum-cryptography/utils";


function hashMessage(message) {
    return keccak256(utf8ToBytes(message));
}


async function signMessage(msg, privatekey) {
    const messageHash = hashMessage(msg);
    return secp.sign(messageHash, privatekey);
}





export default signMessage


