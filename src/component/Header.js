import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">WebSiteName</a>
                    </div>
                    <ul className="nav navbar-nav">
                        <li className="active"><Link to='/'>Home</Link></li>
                        <li><Link to='/category'>category</Link></li>
                        <li><Link to='/detailnew'>detailnew</Link></li>

                    </ul>
                </div>
            </nav>

        );
    }
}

export default Header;
