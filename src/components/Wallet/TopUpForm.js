import React, { useState } from 'react';

const TopUpForm = ({ onTopUp }) => {
    const [formData, setFormData] = useState({
        name: '',
        amount: '',
        currency: '--Select currency--',
        cardNumber: '**** **** **** 1234',
        expirationDate: '00/00',
        cvv: '999',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onTopUp(formData);
    };

    return (
        <div className="top-up-form-container ">
            <form onSubmit={handleSubmit} className="payment-form">
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" name="name" value={formData.name} placeholder='Enter your name' onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Amount</label>
                    <input type="number" name="amount" value={formData.amount} placeholder='Enter the amount' onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Currency</label>
                    <select name="currency" value={formData.currency} placeholder='--Select currency--' onChange={handleChange} required>
                        <option value="--Select currency--"> --Select currency-- </option>
                        <option value="INR">INR (₹)</option>
                        <option value="USD">USD ($)</option>
                        <option value="EUR">EUR (€)</option>
                        <option value="GBP">GBP (£)</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Card Number</label>
                    <input type="text" name="cardNumber" value={formData.cardNumber} onChange={handleChange} maxLength="16" required />
                </div>
                <div className="form-group">
                    <label>Expiration Date</label>
                    <input type="text" name="expirationDate" value={formData.expirationDate} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>CVV</label>
                    <input type="text" name="cvv" value={formData.cvv} onChange={handleChange} required />
                </div>
                <button type="submit">Top Up</button>
            </form>
        </div>
    );
};

export default TopUpForm;

