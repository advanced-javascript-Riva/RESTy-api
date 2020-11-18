import React from 'react';
import './Header.css';
class Header extends React.Component {
    render() {
        return (
            <div className = "headerContainer">
                <div className="navTitle">
                <a className="link link--kukuri" href="#" data-letters="RESTy-Api">RESTy-Api</a>
                </div>
                </div>
        )
    } 
}
export default Header;