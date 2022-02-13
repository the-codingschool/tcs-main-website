import './Topnav.scss'

import React, { useState } from 'react';
import { Link } from "react-router-dom"


function Topnav() {
    const [nav, setNav] = useState(false)
    const toggleNav = () => setNav(!nav)
    const topLogo = {
      width: '100px',
      marginLeft: '-50%'
    }

    const Items = [
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
            label  : 'CodeConnects',
            link   : 'https://codeconnects.org',
            active : false
        },
        {
            label  : 'QubitxQubit',
            link   : 'https://www.qubitbyqubit.org',
            active : false
        },
        {
            label  : 'Train',
            link   : '/train',
            active : false
        }
    ]

    return (
        <nav id="Topnav" className="navbar navbar-expand-lg navbar-light">
            <div className="container">
                <Link class="navbar-brand" href="#">
                    <img src={"/images/TCS_logo-1 copy.png" || "https://via.placeholder.com/80"} style={topLogo} className='rounded-circle' />
                </Link>
                <button onClick={toggleNav} className={`btn d-inline-block d-lg-none ml-auto ${!nav && 'collapsed'}`} type="button">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div className={`navbar-collapse collapse ${nav && 'show'}`}>
                    <ul className="nav navbar-nav ml-auto">
                        {Items.map((item, idx)=><Element label={item.label} active={item.active} link={item.link} />)}
                    </ul>
                </div>

                <button className={`btn register-btn d-inline-block ml-16`} type="button">
                    Register
                </button>
            </div>
        </nav>
    )
}

function Element({link, label, active}) {
    return (
        <li className={`nav-item px-8 text-uppercase ${active && 'active'}`}>
            <Link to={link} className="nav-link" >{label}</Link>
        </li>
    )
}

export default Topnav;
