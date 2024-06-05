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

// console.log('Networks with tokens sorted by highest single token balance:', networksWithTokens.map(net => ({
//     name: net.name,
//     highestSingleTokenBalance: net.highestSingleTokenBalance
// })));

const maxSingleTokenBalance = Math.max(...networksWithTokens.map(net => parseFloat(net.highestSingleTokenBalance)));

console.log(`Maximum single token balance: ${maxSingleTokenBalance}`);