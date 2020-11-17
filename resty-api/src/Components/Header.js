import React from 'react';
import '../Pages/Header.scss';
class Header extends React.Component {
    render() {
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
}
export default Header;