import React, { useContext, useState } from 'react';
import TopUpForm from './TopUpForm';
import VirtualCard from './VirtualCard';
import './BuyVirtualCard.css';
import { walletContextObj } from '../../context/wallet/walletContext';

const BuyVirtualCard = () => {
    const { setWallet } = useContext(walletContextObj);

    const [walletData, setWalletData] = useState({
        playerName: '',
        cardNumber: '**** **** **** 1234',
        expirationDate: '00/00',
        cvv: '999',
        balance: 0,
        currency: '--Select currency--',
    });

    const handleTopUp = (formData) => {
        const cardNumber = formData.cardNumber ? `**** **** **** ${formData.cardNumber.slice(-4)}` : '';
        setWalletData((prevWalletData) => ({
            ...prevWalletData,
            playerName: formData.name,
            cardNumber,
            expirationDate: formData.expirationDate,
            cvv: formData.cvv,
            balance: prevWalletData.balance + parseFloat(formData.amount),
            currency: formData.currency,
        }));
        setWallet(cur => cur + parseFloat(formData.amount));
    };

    return (
        <div className="app-container row">
            <div className="col-6 mt-5 pl-5">
                <TopUpForm onTopUp={handleTopUp} />
            </div>
            <div className="col-6 mt-5 pt-5">
                <VirtualCard {...walletData} />
            </div>
        </div>
    );
};

export default BuyVirtualCard;