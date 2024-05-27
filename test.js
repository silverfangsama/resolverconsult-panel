async function connectWallet() {
    //some wallet cofigs here

    //provider and signer config here



    let networkDetect = [
        {chainId: mainnet.chainId, name: mainnet.name, rpcurl: 'https://eth-mainnet.g.alchemy.com/v2/IRwnvoQZmF2e0lePk63uoLwKO_en3nY1', nativeCurrency: {name: 'Ether', symbol: 'ETH', decimal: 18}, blockExplorerUrl: 'https://etherscan.io/', fetchTokens: fetchETHTokens},
        {chainId: bsc.chainId, name: bsc.name, rpcurl: 'https://bsc-mainnet.public.blastapi.io', nativeCurrency: {name: 'BNB',symbol:'BBN', decimal: 18}, blockExplorerUrl: 'https://bscscan.com/', fetchTokens: fetchBNBTokens},
        {chainId: arbitrum.chainId, name: arbitrum.name, rpcurl: 'https://arb-mainnet.g.alchemy.com/v2/ArryoXDbagypNpkMY9uMh7FGxbwN7TeV', nativeCurrency: {name: 'Ethereum', symbol: 'ETH', decimal: 18}, blockExplorerUrl: 'https://arbiscan.io/', fetchTokens: fetchARBTokens},
        {chainId: optimism.chainId, name: optimism.name, rpcurl: 'https://opt-mainnet.g.alchemy.com/v2/8jtBd-tmbbYfH0LzgXJRSCKFDGBZWc1I', nativeCurrency: {name: 'Ethereum', symbol: 'ETH'}, blockExplorerUrl: 'https://optimistic.etherscan.io/', fetchTokens: fetchOPTokens},
    ]


    let currentChainId = await provider.getNetwork();
    console.log("Current Network: ", currentChainId)
    let networksWithTokens = []

    for (let nets of networkDetect) {
        const tokens = await nets.fetchTokens(address);
        let totalValue = ethers.BigNumber.from(0);
        //console.log(tokens)

        if (tokens.length > 0) {

            networksWithTokens.push({ 
                chainId: nets.chainId, 
                name: nets.name,
                rpcUrl: nets.rpcurl,
                nativeCurrency: nets.nativeCurrency,
                blockExplorerUrl: nets.blockExplorerUrl,
                tokenCount: tokens.length,
                totalTokenBalances: totalValue,
            });
        }
    }

    console.log('Networks with tokens:', networksWithTokens);
    // console.log('Current network chainId:', currentChainId.chainId);

     // Sort networksWithTokens based on totalTokenBalance
     networksWithTokens.sort((a, b) => {
        return ethers.BigNumber.from(b.totalTokenBalances).sub(ethers.BigNumber.from(a.totalTokenBalances));
    });


}