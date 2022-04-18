import React from 'react';
import './Footer.css'
import facebook from '../../../images/icons/facebook-brands.png'
import instagram from '../../../images/icons/instagram-brands.png'
import linkedin from '../../../images/icons/linkedin-in-brands.png'
import mail from '../../../images/icons/envelope-solid.png'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-dark text-light'>
            <div className='container footer-content'>
                <div className='w-75 text-start py-3 ps-5'>
                    <h5>Useful Links</h5>
                    <a href="home#service">Services</a>
                    <a href="/about">About Me</a>
                    <a href="/blog">Blog</a>
                </div>
                <div className='footer-icons px-5 my-auto'>
                    <h5>Contacts</h5>
                    <img src={facebook} alt="" />
                    <img src={instagram} alt="" />
                    <img src={linkedin} alt="" />
                    <img src={mail} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Footer;