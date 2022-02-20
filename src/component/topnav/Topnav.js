import "./Topnav.scss";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import DropIcon from "./DropIcon";

function Topnav() {
  const [nav, setNav] = useState(false);
  const [show, setShow] = useState(false);
  const toggleNav = () => setNav(!nav);
  const topLogo = {
    width: "100px",
    // marginLeft: "-50%",
  };
  console.log(show);
  const Items = [
    {
      label: "Home",
      link: "/",
      active: false,
    },
    {
      label: "About us",
      link: "/about_us",
      active: false,
    },
    {
      label: "CodeConnects",
      link: "https://codeconnects.org",
      active: false,
      external: true,
    },
    {
      label: "Donate",
      link: "https://codeconnects.org/donate.html",
      active: false,
      external: true,
    },
  ];

  const dropItems = [
    {
      label: "Qubit by Qubit",
      link: "https://www.qubitbyqubit.org",
      active: false,
      external: true,
    },
    {
      label: "Train",
      link: "/train",
      active: false,
    },
    {
      label: "Get involved",
      link: "/involved",
      active: false,
    },
  ];

  return (
    <nav id="Topnav" className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <Link class="navbar-brand" to="/">
          <img
            src={
              "/images/TCS_logo-1 copy.png" || "https://via.placeholder.com/80"
            }
            style={topLogo}
            className="rounded-circle"
          />
        </Link>
        <button
          onClick={toggleNav}
          className={`btn d-inline-block d-lg-none ml-auto ${
            !nav && "collapsed"
          }`}
          type="button"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div className={`navbar-collapse collapse nav-con ${nav && "show"}`}>
          <ul className="nav navbar-nav ml-auto mr-65">
            {Items.map((item, idx) => (
              <Element
                label={item.label}
                active={item.active}
                link={item.link}
                external={item.external}
              />
            ))}
            <div className={`nav-item px-8 pr-16 text-uppercase`}>
              <li style={{ cursor: "pointer", marginTop: 6 }} onClick={() => setShow(!show)}>
                Programs <DropIcon />
              </li>
              <div className="dropDown">
                {show &&
                  dropItems.map((item, idx) => (
                    <Element
                      label={item.label}
                      active={item.active}
                      link={item.link}
                      external={item.external}
                    />
                  ))}
              </div>
            </div>
            <a
              className={`btn register-btn d-inline-block `}
              href="https://codeconnects.org/register.html"
              style={{ marginRight: "-100px" }}
              target="_blank"
            >
              Register
            </a>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function Element({ link, label, active, external }) {
  return (
    <li className={`nav-item px-8 text-uppercase ${active && "active"}`}>
      {external ? (
        <a href={link} className="nav-link" target="_blank">
          {label}
        </a>
      ) : (
        <Link to={link} className="nav-link">
          {label}
        </Link>
      )}
    </li>
  );
}

export default Topnav;
