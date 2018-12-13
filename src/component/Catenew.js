import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Catenew extends Component {
    render() {
        return (
            <div>
                danh muc thể thao

                <ul>
                    <li><Link to='/detailnew/1'> tin thể thao 1 tuc 1</Link></li>
                    <li><Link to='/detailnew/2'> tin thể thao 2</Link></li>
                    <li><Link to='/detailnew/3'> tin thể thao 3</Link></li>
                </ul>
            </div>
        );
    }
}

export default Catenew;
