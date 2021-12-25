import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <>
            <header className="header">
                <div className="three-dot">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>

                <div className="header-title">
                    <h1 className="lit-16 text-center text-uppercase">Want to discuss your project in detail? <span className="color-blue">schedule a call here</span></h1>
                </div>

                <div className="three-dot">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
            </header>



        </>
    );
};

export default Header;