import React from 'react';
import './Header.css';
import {Link} from "react-router-dom";
class Header extends React.Component {
    render() {
        return (
            <div className = "headerContainer">
                <div className="navLinks">
                    <Link to="/">Home</Link>
                    <Link to="/history">History</Link>
                    <Link to="/help">Help</Link>
                </div>
                <div className="navTitle">
                    <a className="link link--kukuri" href="#" data-letters="RESTy-Api">RESTy-Api</a>
                </div>
                </div>
        )
    } 
}
export default Header;