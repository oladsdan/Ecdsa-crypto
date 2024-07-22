## ECDSA Node

This project is an example of using a client and server to facilitate transfers between different addresses. Since there is just a single server on the back-end handling transfers, this is clearly very centralized. We won't worry about distributed consensus for this project.

However, something that we would like to incoporate is Public Key Cryptography. By using Elliptic Curve Digital Signatures we can make it so the server only allows transfers that have been signed for by the person who owns the associated address.

### Video instructions
For an overview of this project as well as getting started instructions, check out the following video:

https://www.loom.com/share/0d3c74890b8e44a5918c4cacb3f646c4
 
### Client

The client folder contains a [react app](https://reactjs.org/) using [vite](https://vitejs.dev/). To get started, follow these steps:

1. Open up a terminal in the `/client` folder
2. Run `npm install` to install all the depedencies
3. Run `npm run dev` to start the application 
4. Now you should be able to visit the app at http://127.0.0.1:5173/

### Server

The server folder contains a node.js server using [express](https://expressjs.com/). To run the server, follow these steps:

1. Open a terminal within the `/server` folder 
2. Run `npm install` to install all the depedencies 
3. Run `node index` to start the server 

The application should connect to the default server port (3042) automatically! 

_Hint_ - Use [nodemon](https://www.npmjs.com/package/nodemon) instead of `node` to automatically restart the server on any changes.

### Private Key/Public Key to use

privateKey: b04d8b65ff4569993c82cebe6e88d64766aafbc37b9ace8aaec86b287279dd37
publickey:  03049fac8bf1741e7a8986c8bd480202524273075d48f632d181c6c2ef925784a4

privateKey: ff7b508460655bfb2e0c3c8734cdc860e1b6085af2963a2e8d47cf72b4b6a614
publickey:  020bf185d11e5b38319f69288ec3ee84df67ff1a0798bde422a1092aacba764da9

privateKey: a67fa584d1d0c1ef3eae6e7a7dc0b1ea4dc8553e43d1732688b6dc5281e7e3c2
publickey:  03308ddd555332f7f3f2abbc1f99ec613ea688ed40255c459b15a3f1e1a4e698cb

