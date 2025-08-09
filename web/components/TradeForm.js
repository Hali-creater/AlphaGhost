import React, { useState } from 'react';

const TradeForm = () => {
    const [tradeData, setTradeData] = useState({});

    const handleChange = (e) => {
        setTradeData({ ...tradeData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Logic to trigger trade via API
        const response = await fetch('/api/trades', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(tradeData),
        });
        const result = await response.json();
        console.log(result);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="symbol" placeholder="Symbol" onChange={handleChange} required />
            <input type="number" name="amount" placeholder="Amount" onChange={handleChange} required />
            <button type="submit">Execute Trade</button>
        </form>
    );
};

export default TradeForm;
