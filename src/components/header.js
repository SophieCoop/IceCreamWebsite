import React from 'react';
import '../assets/style/header.css';

const Header = ({ title }) => {
    return (
        <div className="header-image-container">
            <span>{title}</span>
            <span className="header-btn">{"Cart"}</span>
        </div>
    )

}

export default Header;