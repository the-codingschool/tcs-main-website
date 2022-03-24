import "./Footer.scss";

import React from "react";
import { Link } from "react-router-dom";
// import privacy from "../../assets/privacy.svg"
import PrivacyIcon from "./PrivacyIcon";
import privacyPdf from "../../assets/docs/TheCodingSchool-PrivacyPolicy-March-7-2022.pdf";

function Footer() {
    const footerLinks = [
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
            label: "Get involved",
            link: "/involved",
            active: false,
        },
        {
            label: "Donate",
            link: "https://codeconnects.org/donate.html",
            active: false,
            external: true,
        },
        {
            label: "CodeConnects",
            link: "https://codeconnects.org",
            active: false,
            external: true,
        },
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
    ];

    const socialShare = [
        {
            socialClass: "fa fa-instagram",
            socialLink: "https://www.instagram.com/the_coding_school/?hl=en",
        },
        {
            socialClass: "fa fa-linkedin",
            socialLink: "https://www.linkedin.com/school/3655283/",
        },
        {
            socialClass: "fa fa-facebook",
            socialLink: "https://www.facebook.com/thecodingschool",
        },
        {
            socialClass: "fa fa-twitter",
            socialLink: "https://twitter.com/qubitbyqubit",
        },
    ];

    return (
        <div id="Footer">
            <div className="footer-top">
                <div className="container">
                    <div className="d-flex align-items-center">
                        <img
                            src="/images/TCS_logo-1 copy.png"
                            style={{ width: "14%" }}
                        />
                        <div className="w-75 ml-40">
                            <div className="subscribe-btn">
                                <div className="fs-16 fw-6 text-uppercase">
                                    Subscribe to our newsletter
                                </div>
                                <div id="fd-form-6088a1d675b152316cddc99f"></div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-15">
                        <div className="col-md-4">
                            <p style={{ lineHeight: 2, fontSize: 13 }}>
                                The Coding School is a national 501(c)(3)
                                dedicated to empowering the next generation
                                through code. Our public charitable registration
                                number is 46-5097610.
                            </p>
                            <ul className="social-share">
                                {socialShare.map((e, i) => {
                                    return (
                                        <li>
                                            <a href={e.socialLink}>
                                                <i
                                                    className={e.socialClass}
                                                    aria-hidden="true"
                                                ></i>
                                            </a>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>

                        <div className="offset-md-1 col-md-3">
                            <div className="fs-16 fw-6 text-uppercase mb-10">
                                Useful Links
                            </div>
                            {footerLinks.map((item, index) => (
                                <div className="mt-10 cp" key={index}>
                                    {item.external ? (
                                        <a href={item.link} target="_blank">
                                            {item.label}
                                        </a>
                                    ) : (
                                        <Link to={item.link}>{item.label}</Link>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="col-md-4">
                            <div className="fs-16 fw-6 text-uppercase mb-10">
                                Contact Info
                            </div>
                            <div className="mt-25">
                                <img
                                    className="mr-20"
                                    src="/images/phone.png"
                                />
                                <span>(424) 339 3977</span>
                            </div>
                            <div className="mt-10">
                                <img
                                    className="mr-20"
                                    src="/images/message.png"
                                />
                                <span>info@the-cs.org</span>
                            </div>
                            <div className="mt-10 d-flex align-items-center col-10 px-0">
                                <img
                                    className="mr-20"
                                    src="/images/location.png"
                                />
                                <span className="text-capitalize">
                                    {" "}
                                    3940 laurel canyon blvd. Ste 153 los
                                    angeles, CA 91604
                                </span>
                            </div>
                            <div className="mt-10 d-flex align-items-center col-10 px-0">
                                <PrivacyIcon className="mr-20" />
                                <a href={privacyPdf}> Privacy Policy</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <p>Copyright &copy; 2022. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
