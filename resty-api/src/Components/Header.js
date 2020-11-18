import React from 'react';
import './Header.css';
class Header extends React.Component {
    render() {
        return (
            <div className = "headerContainer">
                <div className="navTitle">
                <div className="stars, twinkling, clouds"></div>
                <div>RESTy-Api</div>
                </div>
                </div>
        )
    } 
}
export default Header;