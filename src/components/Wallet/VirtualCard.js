

import React from 'react';
import './BuyVirtualCard.css';

const VirtualCard = ({ balance, currency, cardNumber, expirationDate, cvv }) => {
    const formattedBalance = typeof balance === 'number' ? balance.toFixed(2) : '50.00';
    const currencySymbols = { INR: '₹', USD: '$', EUR: '€', GBP: '£' };


    return (
        <div className="wallet-card">
            <div className="cardheader">
                <img src="path/to/your/logo.png" alt="logo" className="card-logo" />
                <h6 className="card-subtitle">Virtual Card</h6>
            </div>
            <div className="card-title">
                <h1>Balance: {currencySymbols[currency]}{formattedBalance}</h1>
            </div>
            <div className="cardbody pt-5">
                <p className="card-number">Card Number: {cardNumber}</p>
                <div className="card-details">
                    <p className="card-text">EXP: {expirationDate}</p>
                    <p className="card-text">CVV: {cvv}</p>
                </div>
            </div>

        </div>
    );
};

export default VirtualCard;
