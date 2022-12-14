import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    return (
        <div className="navbar mb-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link className='rounded-md' to='/'>Home</Link></li>
                        <li><Link className='rounded-md' to='/shop'>Shop</Link></li>
                        <li><Link className='rounded-md' to='/about'>About</Link></li>
                    </ul>
                </div>
                <Link className='btn btn-ghost normal-case text-xl' to='/'>Website</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link className='rounded-md' to='/'>Home</Link></li>
                    <li><Link className='rounded-md' to='/shop'>Shop</Link></li>
                    <li><Link className='rounded-md' to='/about'>About</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.uid || user?.email
                        ?
                        <Link className='rounded-md mr-2' onClick={logOut}>Sign Out</Link>
                        :
                        <>
                            <Link className='rounded-md mr-2' to='/login'>Login</Link>
                            <Link className='rounded-md' to='/signup'>Sign Up</Link>
                        </>
                }
            </div>
        </div>
    );
};

export default Header;