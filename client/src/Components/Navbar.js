import React from 'react';
import { Link } from 'react-router-dom';
//import AppBar from '@mui/material/AppBar';
//import Toolbar from '@mui/material/Toolbar';
//import Typography from '@mui/material/Typography';
//import Button from '@mui/material/Button';
import Logout from './Logout';
import './A1.css'

export const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
    //const button={marginRight:'20px', fontSize:'1.2rem', fontWeight:'700', padding:'0.3rem 1.4rem'}
    return (
            <nav className='nav-header'>
                <div className='nav-content'>
                    <div >
                        <Link to='/home'>
                    <img src='https://img.freepik.com/premium-photo/celtic-tree-life-death-symbol-vivid-emerald-colors-dark-background_812426-31172.jpg' alt='logo' className='website-logo'/>
                        </Link>
                    </div>
                    {!isLoggedIn ? (
                        <div>
                            <Link to='/login'>
                            <button variant="contained" className='bt3' color="error" component={Link} to="/login">
                                Login 
                            </button>
                            </Link>
                            <Link to='/signup'>
                            <button variant="contained" className='bt4' color="success" component={Link} to="/signup">
                                Signup
                            </button>
                            </Link>
                        </div>
                    ) : (
                        <div className='jo1'>
                        <Link to='/user'>
                        <button className='bot1'>User</button>
                        </Link>
                        <Logout setIsLoggedIn={setIsLoggedIn} />
                        </div>


                    )}
                </div>
            </nav>
    );
};
