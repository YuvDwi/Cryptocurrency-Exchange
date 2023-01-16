import { Contract } from "@ethersproject/contracts";
import { abis } from "@my-app/contracts";
import { useCall } from "@usedapp/core";
import { parseUnits } from "ethers/lib/utils";
import { useEffect } from "react";
import { useState } from "react";

import { ROUTER_ADDRESS } from "../config";

export const getAvailableTokens = (pools) =>
  pools.reduce((prev, curr) => {
    prev[curr.token0Address] = curr.token0Name;
    prev[curr.token1Address] = curr.token1Name;
    return prev;
  }, {});

export const getCounterpartTokens = (pools, fromToken) => pools
  .filter((cur) => cur.token0Address === fromToken || cur.token1Address)
  .reduce((prev, curr) => {
    if (curr.token0Address === fromToken) {
      prev[curr.token1Address] = curr.token1Name;
    } else if (curr.token1Address === fromToken) {
      prev[curr.token0Address] = curr.token0Name;
    }
    return prev;
  }, {});


export const findPoolByTokens = (pools, fromToken, toToken) => {
  if (!Array.isArray(pools) || !fromToken || !toToken) return undefined;

  return pools.find((cur) =>
    (cur.token0Address === fromToken && cur.token1Address === toToken) ||
    (cur.token1Address === fromToken && cur.token0Address === toToken)
  );
};

export const isOperationPending = (operationState) => 
  operationState.status === "PendingSignature" || operationState.status === "Mining";
export const isOperationFailed = (operationState) =>
operationState.status === "Fail" || operationState.status === "Exception";
export const isOperationSucceeded = (operationState) =>
operationState.status === "Success";

export const getFailureMessage = (swapApproveState, swapExecuteState) => {
  if (isOperationPending(swapApproveState) || isOperationPending(swapExecuteState)) {
    return undefined;
  }

  if (isOperationFailed(swapApproveState)) {
    return "Approval failed - " + swapApproveState.errorMessage;
  }

  if (isOperationFailed(swapExecuteState)) {
    return "Swap failed - " + swapExecuteState.errorMessage;
  }

  return undefined;
};

export const useSuccessMessage = (swapApproveState, swapExecuteState) => {
  const [successMessage, setSuccessMessage] = useState(null);

  useEffect(() => {
    if (isOperationSucceeded(swapExecuteState)) {
      setSuccessMessage("Swap executed successfully");
    } else if (isOperationSucceeded(swapApproveState)) {
     


export const getSuccessMessage = (swapExecutePending, swapApprovePending) => {
  if (swapExecutePending || swapApprovePending) {
    return "Swap execution or approval in progress";
  }
  
  if (isOperationSucceeded(swapExecutePending)) {
    return "Swap executed successfully";
  }

  if (isOperationSucceeded(swapApprovePending)) {
    return "Approval successful";
  }
};

export const useAmountsOut = (pairAddress, inputAmount, fromToken, toToken) => {
  const isValidInputAmount = inputAmount.gt(parseUnits("0"));
  const areParamsValid = !!(pairAddress && isValidInputAmount && fromToken && toToken);

  if (!areParamsValid) {
    return "Invalid input parameters. Please check pairAddress, inputAmount, fromToken and toToken are valid.";
  }

  const { error, value } =
    useCall(
      {
        contract: new Contract(ROUTER_ADDRESS, abis.router02),
        method: "getAmountsOut",
        args: [inputAmount, [fromToken, toToken]],
      }
    ) ?? {};
  return error ? "Error occured while calculating output amount" : value?.amounts[1];
}

export const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };

    document.addEvent
  }};
