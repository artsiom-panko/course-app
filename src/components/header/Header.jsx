import React from 'react';

import Logo from '../logo/Logo'
import './header.css'

const Header = () => {
    return (
        <div className="app-header d-flex">
            <Logo/>
            <button 
            type="submit"
            className="btn btn-outline-secondary">
                Daeve</button>
            <button 
            type="submit"
            className="btn btn-outline-secondary">
                Logout</button>
        </div>
    );
}

export default Header;