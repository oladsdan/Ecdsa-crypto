const {  secp256k1 } = require("ethereum-cryptography/secp256k1");
// const secp = require("@noble/secp256k1");
const { keccak256 } = require("ethereum-cryptography/keccak");
const { utf8ToBytes } = require("ethereum-cryptography/utils")

const recoverPublicKey=  (tx, rBytes, sBytes, recovery) => {

    try {
        const r = BigInt(rBytes);
        const s = BigInt(sBytes);
        const sig = new secp256k1.Signature(r, s, recovery);
        const data = JSON.stringify(tx);
        const hash = keccak256(utf8ToBytes(data));
        const publicKey = sig.recoverPublicKey(hash).toHex();
        return publicKey;

        
    } catch (error) {
        console.log(error)
        
    }
    

}

module.exports= {recoverPublicKey};