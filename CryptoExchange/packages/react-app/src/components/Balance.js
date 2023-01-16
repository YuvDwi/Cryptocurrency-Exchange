import React from "react";

import styles from "../styles";
import { parseUnits, formatUnits } from "ethers/lib/utils";

const Balance = ({ tokenBalance }) => {
return (
<div className={styles.balance}>
<p className={styles.balanceText}>
{tokenBalance ? (
<>
<span className={styles.balanceBold}>Balance:</span>
{formatUnits(tokenBalance ?? parseUnits("0"))}
</>
) : (
""
)}
</p>
</div>
);
};

export default Balance;



