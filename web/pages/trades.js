import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TradeForm from '../components/TradeForm';

const Trades = () => {
    return (
        <div>
            <Header />
            <h2>Execute a Trade</h2>
            <TradeForm />
            <Footer />
        </div>
    );
};

export default Trades;
