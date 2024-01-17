import React from 'react'
import "./Footer2.css";
function Footer2() {
    const year = new Date().getFullYear();
    console.log(year);
    return (
        <footer>
            <div className='footer_container'>
                <div className='footer_details_one'>
                    <h3>Get Know More</h3>
                    <p>About Us</p>
                    <p>Careers</p>
                    <p>Press Releases</p>
                    <p>Amazon Cares</p>
                </div>
                <div className='footer_details_one'>
                    <h3>Connect with Us</h3>
                    <p>Instagram</p>
                    <p>Facebook</p>
                    <p>Twitter</p>
                    <p>Youtube</p>
                </div>
                <div className='footer_details_one forres'>
                    <h3>Make Money With Us</h3>
                    <p>About Us</p>
                    <p>Careers</p>
                    <p>Press Releases</p>
                    <p>Amazon Cares</p>
                </div>
                <div className='footer_details_one forres'>
                    <h3>Get Know More</h3>
                    <p>About Us</p>
                    <p>Careers</p>
                    <p>Press Releases</p>
                    <p>Amazon Cares</p>
                </div>
            </div>
            <div className="lastdetails">
                <img src="./amazon_PNG25.png" alt="logo" />
                <p>Conditions of Use & Sale &nbsp; &nbsp;&nbsp;  Privacy Notice  &nbsp; &nbsp;&nbsp; Interest-Based Ads  &nbsp; &nbsp;&nbsp;  © 1996-{year}, Amazon.com, Inc. or its affiliates</p>
            </div>
        </footer>
    )
}

export default Footer2
