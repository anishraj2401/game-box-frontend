import { useState } from "react";
import { walletContextObj } from "./walletContext";

export default function WalletStore({ children }) {
    const [wallet, setWallet] = useState(0);
    const [lowBalance, setLowBalance] = useState(false);

    return (
        <walletContextObj.Provider value={{ wallet, setWallet, lowBalance, setLowBalance }}>
            {children}
        </walletContextObj.Provider>
    );
}
