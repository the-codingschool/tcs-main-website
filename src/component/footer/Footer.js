import './Footer.scss'

import React from 'react';
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div id='Footer'>


            <div className='mainRow'>

                <div className='div1'>
                    <img src="/images/TCS_logo-1 copy.png" style={{ width: '35%', marginBottom: '10px' }} />
                    <div>The Coding School is a national 501(c)(3) dedicated to empowering the next generation through code.
                        Our public charitable registration number is 46-5097610.
                    </div>
                </div>

                <div className='imgDiv'>
                    <div className='fs-16 fw-6 text-uppercase mb-10'>Useful Links</div>
                    <Link to="/" className='mt-25 cp footerText' >Home</Link>
                    <Link to="/about_us" className='mt-10 cp footerText' style={{ color: 'white', textDecoration: 'none' }}>About</Link>
                    <Link to="/involved" className='mt-10 cp footerText'>Get Involved</Link>
                    <Link to="https://codeconnects.org/donate.html" className='mt-10 cp footerText'>Donate</Link>
                    <Link to="https://codeconnects.org" className='mt-10 cp footerText'>CodeConnects</Link>
                    <Link to="https://www.qubitbyqubit.org" className='mt-10 cp footerText'>Qubit by Qubit</Link>
                    <Link to="/train" className='mt-10 cp footerText'>TRAIN</Link>
                </div>

                <div className='imgDiv'>
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
                </div>

                <div className='container2'>
                    <div className='fs-16 fw-6 text-uppercase mb-10'>Subscribe to our newsletter</div>
                    <div className='subscriber-input'>
                        <input value='Enter Email Address...' className='form-control' />
                        <button>Subscribe</button>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default Footer;
