import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = ()=>{
    return (
        <div>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/blog">BLog</Link></li>
                <li><Link to="/contact">contact</Link></li>
            </ul>
        </div>
    )
}

export default Navbar;