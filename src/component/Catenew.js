import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Catenew extends Component {
    render() {
        return (
            <div>
                danh muc tin tuc

                <ul>
                    <li><Link to='/detailnew'> tin tuc 1</Link></li>
                    <li><Link to='/detailnew'> tin tuc 1</Link></li>
                    <li><Link to='/detailnew'> tin tuc 1</Link></li>
                </ul>
            </div>
        );
    }
}

export default Catenew;
