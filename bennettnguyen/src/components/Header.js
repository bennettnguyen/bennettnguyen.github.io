import React from 'react';

const Header = ({ title, subtitle, backgroundImage }) => {
    const headerStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        padding: '150px 0px',
        textAlign: 'center',
    };

    return (
        <header style={headerStyle} className="header">
            <h1 classname="header-title">{title}</h1>
            {subtitle && <p className="header-subtitle">{subtitle}</p>}
        </header>
    );
};

export default Header;