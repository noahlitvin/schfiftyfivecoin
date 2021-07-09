const Web3 = require('web3');
let web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");

const sfcInterface = [
  {
    "inputs": [],
    "name": "totalSupply",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "decimals",
    "outputs": [
      {
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
];
const sfcAddress = "0xdd6FDBD6EdDE62C30aFB599A12C72B64c1DB495e"
const sfcContract = new web3.eth.Contract(sfcInterface, sfcAddress);

function getTotalSupply(e){
  e.preventDefault();
  sfcContract.methods.decimals().call((err, decimals) => { 
    sfcContract.methods.totalSupply().call((err, totalSupply) => { 
      const message = decimals && totalSupply ? (totalSupply / 10 ** decimals) : "Didn't work... Is MetaMask set up?"
      alert(message);
    })
  })

}

function App() {
  return (
    <div className="App">

      <h1>SCHFIFTYFIVECOIN</h1>

      <div className="links">
        {/* eslint-disable-next-line */}
        <a href="#" onClick={getTotalSupply}>ow shmany exisht?</a>
        <a href={"https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=" + sfcAddress}>
          get shwam
          <span className="alert">Will create liquidity pool once gas fees drop</span>
        </a>
      </div>
      <div className="video">
      <iframe
        height="100%"
        width="100%"
        src="https://www.youtube.com/embed/-XccUMOQ978?autoplay=1&controls=0&modestbranding&rel=0&loop=1"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="video"
      />
      </div>
      <a className="github" href="https://github.com/noahlitvin/schfiftyfivecoin">github</a>
    </div>
  );
}

export default App;
