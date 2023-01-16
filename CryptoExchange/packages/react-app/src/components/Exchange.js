import React, { useEffect, useState } from "react";
import { Contract } from "@ethersproject/contracts";
import { abis } from "@my-app/contracts";
import { ERC20, useContractFunction, useEthers, useTokenAllowance, useTokenBalance } from "@usedapp/core";
import { ethers } from "ethers";
import { parseUnits } from "ethers/lib/utils";

import { getAvailableTokens, getCounterpartTokens, findPoolByTokens, isOperationPending, getFailureMessage, getSuccessMessage } from '../utils';
import { ROUTER_ADDRESS } from "../config";
import AmountIn from "./AmountIn";
import AmountOut from "./AmountOut";
import Balance from "./Balance";
import styles from "../styles";

const Exchange = ({ pools }) => {
const { account } = useEthers();
const [fromValue, setFromValue] = useState("0");
const [fromToken, setFromToken] = useState(pools[0].token0Address); // initialFromToken
const [toToken, setToToken] = useState("");
const [resetState, setResetState] = useState(false)

const fromValueBigNumber = parseUnits(fromValuae || "0"); // converse the string to bigNumber
const availableTokens = getAvailableTokens(pools);
const counterpartTokens = getCounterpartTokens(pools, fromToken);
const pairAddress = findPoolByTokens(pools, fromToken, toToken)?.address ?? "";

const routerContract = new Contract(ROUTER_ADDRESS, abis.router02);
const fromTokenContract = new Contract(fromToken, ERC20.abi);
const fromTokenBalance = useTokenBalance(fromToken, account);
const toTokenBalance = useTokenBalance(toToken, account);
const tokenAllowance = useTokenAllowance(fromToken, account, ROUTER_ADDRESS) || parseUnits("0");
const approvedNeeded = fromValueBigNumber.gt(tokenAllowance);
const formValueIsGreaterThan0 = fromValueBigNumber.gt(parseUnits("0"));
const hasEnoughBalance = fromValueBigNumber.lte(fromTokenBalance ?? parseUnits("0"));

// approve initiating a contract call (similar to use state) -> gives the state and the sender...
const { state: swapApproveState, send: swapApproveSend } =
useContractFunction(fromTokenContract, "approve";}

export default Exchange;
