const express = require("express");
const app = express();
const cors = require("cors");
const { recoverPublicKey } = require("./scripts/recoverPublicKey");
const port = 3042;

app.use(cors());
app.use(express.json());

// this are privateKey
const balances = {
  "03049fac8bf1741e7a8986c8bd480202524273075d48f632d181c6c2ef925784a4": 100,
  "020bf185d11e5b38319f69288ec3ee84df67ff1a0798bde422a1092aacba764da9": 50,
  "03308ddd555332f7f3f2abbc1f99ec613ea688ed40255c459b15a3f1e1a4e698cb": 75,

};

// public key for each privatekeys


app.get("/balance/:address", (req, res) => {
  const { address } = req.params;
  console.log("this is the address", address )
  const balance = balances[address] || 0;
  res.send({ balance });
});

app.post("/send", async (req, res) => {
  const { sender, recipient, amount, rBytes, sBytes, recovery } = req.body;
  

  const tx = {
    amount,
    recipient
  }
  
  const recoveredPublicKey = await recoverPublicKey(tx, rBytes, sBytes, recovery);

  //we want to stringify the balances obj to search for the publickey gencrated
  const JsonBalances = JSON.stringify(balances);


  
  if(JsonBalances.includes(recoveredPublicKey)){

    setInitialBalance(recoveredPublicKey);
    setInitialBalance(recipient);
  
    if (balances[recoveredPublicKey] < amount) {
      res.status(400).send({ message: "Not enough funds!" });
    } else {
      balances[recoveredPublicKey] -= amount;
      balances[recipient] += amount;
      res.send({ balance: balances[recoveredPublicKey], message: "Funds sent successfully" });
    }
  }else{
    res.status(400).send({ message: "Not Authorized"});
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});

function setInitialBalance(address) {
  if (!balances[address]) {
    balances[address] = 0;
  }
}
