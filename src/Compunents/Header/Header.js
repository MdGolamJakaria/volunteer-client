import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../volunteer-network-main/logos/Group 1329.png';
import './Header.css'

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    console.log(loggedInUser.name)
    return (
        <div className='container'>
            <nav className="navbar navbar-expand-lg navbar-light">
                <Link className="navbar-brand" to="#"><img src={logo} alt="" /></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <Link className="nav-link font-weight-bold" to="/home">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link font-weight-bold" to="/donation">Donation</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link font-weight-bold" to="/event">Event</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link font-weight-bold" to="/blog">Blog</Link>
                        </li>
                        <li className="nav-item">
                            {
                                loggedInUser.isSignedIn ? <Link className="btn btn-primary nav-link text-white px-3 font-weight-bold" to="/profile">{loggedInUser.name}</Link> : <Link className="btn btn-primary nav-link text-white px-3 font-weight-bold" to="/register">Register</Link>
                            }

                        </li>
                        <li className="nav-item ml-2">
                            <Link className="btn btn-dark nav-link text-white px-3 font-weight-bold" to="/admin">Admin</Link>
                        </li>

                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;