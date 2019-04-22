import React from 'react';
import Navbar from './Navbar';
// class Header extends React.Component{
//     render(){
//         console.log(this.props);
//         return (
//
//         );
//     }
// }


const Header = ({name,title}) => {
    return (
        <div className='header'>
            <div className="logo">
                <span className="icon-instagram"></span>
            </div>
            <div className="search">
                <input type="text" placeholder='search'/>
            </div>
            <div className="user">
                <span className="icon-heart"></span>
                <span className="icon-compass2"></span>
                <span className="icon-user"></span>
            </div>
        </div>
    )
}

export default Header;