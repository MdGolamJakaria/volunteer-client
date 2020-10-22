import React from 'react';
import logo from '../../volunteer-network-main/logos/Group 1329.png'
const LogoHeader = () => {
    return (
        <div className='container'>
            <div className="row ">
                <div className="col-md-4"></div>
                <div className="col-md-4 d-flex justify-content-center">
                    <img src={logo} alt="" />
                </div>
                <div className="col-md-4"></div>
            </div>
        </div>
    );
};

export default LogoHeader;