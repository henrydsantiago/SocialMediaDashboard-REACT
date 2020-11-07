import React from 'react';
import './header.css'

function Header( {children} ) {
    return (
        <header className="header">
            <div className="wraper">
                <div className="header-grid">
                    <div className="header-title">
                        <h1>Social Media Dashboard</h1>
                        <p className="header-total">Total Followers: 23,004</p>
                    </div>
                    { children }
                </div>
            </div>
        </header>
    )
}

export default Header;