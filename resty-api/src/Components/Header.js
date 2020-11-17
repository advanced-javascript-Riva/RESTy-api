import React from 'react';
import './Header.css';
class Header extends React.Component {
    render() {
        return (
            <div>
                <div className="nav" id="mynav">
                    <a href="#home" class="active">Home</a>
                    <a href="#contact">Contact</a>
                    <a href="#about">About</a>
                </div>
                <div className="burger-bar">
                    <i class="FaBars"></i>
                </div>
            </div>
        )
    } 
}
export default Header;