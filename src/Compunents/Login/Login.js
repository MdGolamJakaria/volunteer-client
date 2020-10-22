import React from 'react';
import { Link } from 'react-router-dom';
import google from '../../volunteer-network-main/logos/google.png';
import LogoHeader from '../LogoHeader/LogoHeader';
import './Login.css'
const Login = () => {
    return (
        <div className='container login'>
            <LogoHeader></LogoHeader>
            <div className="row">
                <div className="col-md-4">
                </div>
                <div className="col-md-4 login-area">
                    <h2 className='d-block m-auto text-center text-uppercase'>Login With</h2>
                    <Link className='row d-flex align-items-center login-btn' to='#'>
                        <div className="col-md-4">
                            <img className='google-icon w-50' src={google} alt="" />
                        </div>
                        <div className="col-md-8">
                            <h6>Continue with Google</h6>
                        </div>
                    </Link>
                    <p className='m-auto text-center'>Don't have an account? <Link href="#">Create Account</Link></p>
                </div>
                <div className="col-md-4">
                </div>
            </div>
        </div>
    );
};

export default Login;