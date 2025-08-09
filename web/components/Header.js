import React from 'react';

const Header = () => {
    return (
        <header>
            <h1>Trading Agent</h1>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/strategies">Strategies</a></li>
                    <li><a href="/trades">Trades</a></li>
                    <li><a href="/backtest">Backtest</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
