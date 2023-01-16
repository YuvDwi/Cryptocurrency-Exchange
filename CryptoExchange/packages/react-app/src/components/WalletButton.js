import React, { useEffect, useState } from "react";
import { shortenAddress, useEthers, useLookupAddress } from "@usedapp/core";
import styles from "../styles";

const WalletButton = () => {
const { account, activateBrowserWallet, deactivate } = useEthers();
const { ens } = useLookupAddress();
const [rendered, setRendered] = useState("");

useEffect(() => {
if (account) {
setRendered(shortenAddress(account));
} else if (ens) {
setRendered(ens);
} else {
setRendered("");
}
}, [account, ens, setRendered]);

return (
<button
onClick={() => {
if (!account) {
activateBrowserWallet();
} else {
deactivate();
}
}}
className={styles.walletButton}
>
{rendered === "" && "Connect Wallet"}
{rendered !== "" && rendered}
</button>
);
};

export default WalletButton;