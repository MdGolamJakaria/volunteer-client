import React, { useContext, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import google from '../../volunteer-network-main/logos/google.png';
import LogoHeader from '../LogoHeader/LogoHeader';
import './Login.css'
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
import { UserContext } from '../../App';

const initializeLogInFrameWork = () => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
}


const Login = () => {

    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        photo: ''
    })

    initializeLogInFrameWork()

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/register" } }





    const loginHandle = () => {

        const googleProvider = new firebase.auth.GoogleAuthProvider();
        return firebase.auth().signInWithPopup(googleProvider)
            .then(res => {
                const { displayName, photoURL, email } = res.user;
                const signedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                    photo: photoURL,
                    success: true,
                };
                return signedInUser;
            })
            .catch(err => {
                console.log(err);
                console.log(err.message);
            })
            .then(res => {
                handleResponse(res, true)
            })
    }





    const handleResponse = (res, redirect) => {
        setUser(res)
        setLoggedInUser(res);
        if (redirect) {
            history.replace(from);
        }

    }

    return (
        <div className='container login'>
            <LogoHeader></LogoHeader>
            <div className="row">
                <div className="col-md-4">
                </div>
                <div className="col-md-4 login-area">
                    <h2 className='d-block m-auto text-center text-uppercase'>Login With</h2>
                    <button className='row d-flex align-items-center login-btn' onClick={loginHandle}>
                        <div className="col-md-4">
                            <img className='google-icon w-50' src={google} alt="" />
                        </div>
                        <div className="col-md-8">
                            <h6>Continue with Google</h6>
                        </div>
                    </button>
                    <p className='m-auto text-center'>Don't have an account? <Link href="#">Create Account</Link></p>
                </div>
                <div className="col-md-4">
                </div>
            </div>
        </div>
    );
};

export default Login;