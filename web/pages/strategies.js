import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Strategies = () => {
    return (
        <div>
            <Header />
            <h2>Available Strategies</h2>
            <ul>
                <li>Momentum</li>
                <li>Mean-Reversion</li>
                <li>Arbitrage</li>
            </ul>
            <Footer />
        </div>
    );
};

export default Strategies;
