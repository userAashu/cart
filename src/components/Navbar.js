import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';



const Navbar = () => {
    const auth = localStorage.getItem("users");
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate('/SignUp');
    }
    return (
        <div>
            {auth ?
                <ul className="nav-ul">
                    <li><Link to="/" >Home</Link></li>
                    <li><Link to="/product" >Product</Link></li>
                    <li><Link to="/about" >About</Link></li>
                    <li><Link to="/contect" >Contect</Link></li>
                    <li><Link to="/profile" >Profile</Link></li>
                    <li><Link onClick={logout} to="/SignUp" >Logout({JSON.parse(auth).name}) </Link></li>
                </ul> :
                <ul className='nav-ul extra-nav'>
                    <li><Link to="/SignUp" >Sign up</Link></li>
                    <li><Link to="/Login" >Login</Link></li>
                </ul>
            }
        </div>
    )
}

export default Navbar;