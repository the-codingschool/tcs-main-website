import './Footer.scss'

import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    
    const footerLinks = [
        {
            label  : 'Home',
            link   : '/',
            active : false
        },
        {
            label  : 'About us',
            link   : '/about_us',
            active : false
        },
        {
            label  : 'Get involved',
            link   : '/involved',
            active : false
        },
        {
            label  : 'Donate',
            link   : 'https://codeconnects.org/donate.html',
            active : false,
            external: true
        },
        {
            label  : 'CodeConnects',
            link   : "https://codeconnects.org",
            active : false,
            external: true
        },
        {
            label  : 'Qubit by Qubit',
            link   : 'https://www.qubitbyqubit.org',
            active : false,
            external: true
        },
        {
            label  : 'Train',
            link   : '/train',
            active : false
        }
    ]

    return (
        <div id='Footer'>
            <div className='container'>
                <div className='d-flex align-items-center'>
                    <img src="/images/TCS_logo-1 copy.png" style={{ width: '14%' }} />
                    <div className='w-75 ml-40'>
                    <div className="subscribe-btn">                        
                        <div className='fs-16 fw-6 text-uppercase'>Subscribe to our newsletter</div>
                        <div id="fd-form-6088a1d675b152316cddc99f"></div>
                    </div>
                    </div>
                </div>

                <div className='row mt-15'>
                    <div className='col-md-4' style={{ lineHeight: 2, fontSize: 13 }}>
                        The Coding School is a national 501(c)(3) dedicated to empowering the next generation through code. Our public charitable registration number is 46-5097610.

                    </div>

                    <div className='offset-md-1 col-md-3'>
                        <div className='fs-16 fw-6 text-uppercase mb-10'>Useful Links</div>
                        {footerLinks.map((item) => <div className='mt-10 cp'>
                            {item.external ? <a href={item.link}>{item.label}</a> : <Link to={item.link}>{item.label}</Link>}
                        </div>)}
                        
                    </div>

                    <div className='col-md-4'>
                        <div className='fs-16 fw-6 text-uppercase mb-10'>Contact Info</div>
                        <div className='mt-25'>
                            <img className='mr-20' src='/images/phone.png' />
                            <span>(424) 339 3977</span>
                        </div>
                        <div className='mt-10'>
                            <img className='mr-20' src='/images/message.png' />
                            <span>info@the-cs.org</span>
                        </div>
                        <div className='mt-10 d-flex align-items-center col-10 px-0'>
                            <img className='mr-20' src='/images/location.png' />
                            <span className='text-capitalize'> 3940 laurel canyon blvd. Ste 153 los angeles, CA 91604</span>
                        </div>
                        <div className='mt-10 d-flex align-items-center col-10 px-0'>
                            <img className='mr-20' src='/images/noun_textbook_3524915.png' />
                            <a href="https://codeconnects.org/TCS_Privacy_Policy.pdf" > Privacy Policy</a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
