import './Footer.scss'

import React from 'react';

function Footer() {
    return (
        <div id='Footer'>
            <div className='container'>
                <div className='d-flex align-items-center'>
                    <img src="/images/TCS_logo-1 copy.png" style={{ width: '14%' }} />
                    <div className='w-75 ml-40'>
                        <div className='fs-16 fw-6 text-uppercase mb-10'>Subscribe to our newsletter</div>
                        <div className='subscriber-input'>
                            <input value='Enter Email Address...' className='form-control' />
                            <button>Subscribe Now</button>
                        </div>
                    </div>
                </div>

                <div className='row mt-15'>
                    <div className='col-md-4' style={{ lineHeight: 2, fontSize: 13 }}>
                        The Coding School is a national 501(c)(3) dedicated to empowering the next generation through code. Our public charitable registration number is 46-5097610.

                    </div>

                    <div className='offset-md-1 col-md-3'>
                        <div className='fs-16 fw-6 text-uppercase mb-10'>Useful Links</div>
                        <div className='mt-25 cp'>Home</div>
                        <div className='mt-10 cp'>About</div>
                        <div className='mt-10 cp'>Get Involved</div>
                        <div className='mt-10 cp'>Donate</div>
                        <div className='mt-10 cp'>CodeConnects</div>
                        <div className='mt-10 cp'>Qubit by Qubit</div>
                        <div className='mt-10 cp'>TRAIN</div>
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

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
