import { ethers } from "./eth-5.4.esm.min.js";
import { abi, contractAddress } from "./constants.js";

const connectBtn = document.getElementById("connectBtn");
connectBtn.onclick = connect;
const fundBtn = document.getElementById("fundBtn");
fundBtn.onclick = fund;
const balanceBtn = document.getElementById("balanceBtn");
balanceBtn.onclick = getBalance;
const withdrawBtn = document.getElementById("withdrawBtn");
withdrawBtn.onclick = withdraw;
const ownerBtn = document.getElementById("ownerBtn");
ownerBtn.onclick = getOwner;

async function connect() {
    if (typeof window.ethereum !== undefined) {
        try {
            await ethereum.request({ method: "eth_requestAccounts" });
        } catch (error) {
            console.log(error);
        }

        connectBtn.innerHTML = "Connected";
        const accounts = await ethereum.request({ method: "eth_accounts" });
        console.log(accounts);
    } else {
        connectBtn.innerHTML = "Please intall MetaMask";
    }
}

async function withdraw() {
    console.log("Withdrawing...");
    if (typeof window.ethereum !== undefined) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, abi, signer);
        try {
            const txResponse = await contract.withdraw();
            await listnerForTxMine(txResponse, provider);
        } catch (error) {
            console.log(error);
        }
    }
}

async function fund() {
    const ethAmount = document.getElementById("ethAmount").value;
    console.log(`Funding with ${ethAmount}...`);

    if (typeof window.ethereum !== undefined) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, abi, signer);

        try {
            const txResponse = await contract.fund({
                value: ethers.utils.parseEther(ethAmount),
            });
            await listnerForTxMine(txResponse, provider);
        } catch (error) {
            console.log(error);
        }
    } else {
        fundBtn.innerHTML = "Please Install MetaMask";
    }
}

async function getBalance() {
    if (typeof window.ethereum !== undefined) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        try {
            const balance = await provider.getBalance(contractAddress);
            console.log(ethers.utils.formatEther(balance));
        } catch (error) {
            console.log(error);
        }
    } else {
        balanceBtn.innerHTML = "Please install MetaMask";
    }
}

async function getOwner() {
    if (typeof window.ethereum !== undefined) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, abi, signer);

        try {
            const owner = await contract.getOwner();
            console.log(`Owner of the contract is: ${owner}`);
        } catch (error) {
            console.log(error);
        }
    }
}

function listnerForTxMine(txResponse, provider) {
    console.log(`Mining ${txResponse.hash}...`);
    return new Promise((resolve, reject) => {
        try {
            provider.once(txResponse.hash, (txReceipt) => {
                console.log(`Completed with ${txReceipt.confirmations} confirmations.`);
            });
            resolve();
        } catch (error) {
            reject(error);
        }
    });
}
