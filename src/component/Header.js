import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">TinNhanh</a>
                    </div>
                    <ul className="nav navbar-nav">
                        <li className="active"><Link to='/'>Trang chủ</Link></li>
                        <li><Link to='/category'>Thể thao</Link></li>
                        <li><Link to='/category'>Văn hóa</Link></li>
                        <li><Link to='/category'>Bóng đá</Link></li>
                    </ul>
                </div>
            </nav>

        );
    }
}

export default Header;
