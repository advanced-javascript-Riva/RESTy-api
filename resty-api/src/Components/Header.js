import React from 'react';

export default function Header() {
    return (
        <Header>
            <div className="nav" id="mynav">
                <a href="#home" class="active">Home</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
            </div>
            <div className="burger-bar">
                <i class="FaBars"></i>
            </div>
        </Header>
    )
}
