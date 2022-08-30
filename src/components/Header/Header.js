import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    const [loggedInUser , setLoggedInUser] = useContext(userContext)
    return (
        <div className='header'>
           <img src={logo} alt="logo" />

            <nav>
                <Link to="/shop">Shop</Link>
                <Link to="/review">Order review</Link>
                <Link to="/inventory">Manage Inventory</Link>
                <button style={{background:'none',border:'none',color:'#ffff',fontSize:'20px'}} onClick={()=>setLoggedInUser({})}>Sign Out</button>
            </nav>
        </div>
    );
};

export default Header;