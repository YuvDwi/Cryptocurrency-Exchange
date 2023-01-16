import { abis } from "@my-app/contracts";

export async function getPairsInfo(pairAddresses, web3) {
const pairs = [];
const pairABI = abis.pair;
const tokenABI = abis.erc20.abi;

for (let i = 0; i < pairAddresses.length; i++) {
const address = pairAddresses[i];
const pair = new web3.eth.Contract(pairABI, address)}}

const token0 = await pair.methods.token0().call();
const token1 = await pair.methods.token1().call();
const token0contract = new web3.eth.Contract(tokenABI, token0);
const token1contract = new web3.eth.Contract(tokenABI, token1);
const token0name = await token0contract.methods.name().call();
const token1name = await token1contract.methods.name().call();

pairs.push({
  address,
  token0: {
    address: token0,
    name: token0name,
  },
  token1: {
    address: token1,
    name: token1name,
  },
});
