import "./Donate.scss";
import React from "react";
import Stripe_payment from "../../component/stripe-payment/Stripe-payment";
import { Helmet } from "react-helmet";

function Donate() {
    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content="The Coding School awarded $3 million grant"
                />
                <script>
                    gl=document.createElement('script');gl.src='https://secure.givelively.org/widgets/simple_donation/coding-school.js?show_suggested_amount_buttons=true&show_in_honor_of=true&address_required=false&has_required_custom_question=null&suggested_donation_amounts[]=25&suggested_donation_amounts[]=50&suggested_donation_amounts[]=100&suggested_donation_amounts[]=250';document.getElementsByTagName('head')[0].appendChild(gl);
                </script>
            </Helmet>
            <div id="Donate">
                <div className="Donate-image">
                    <div className="container">
                        <div>
                            <h2 className="title">Donate </h2>
                            <p className="sub-title">
                                Giving the gift of coding not only changes a
                                child’s life; it has the potential to change the
                                world.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="Donate-payment">
                    <div className="Donate-payment-container">
                        <div className="payment-text-col">
                            <img
                                src="/images/TCS_logo-1 copy.png"
                                className="rounded-circle"
                                alt="the code school"
                            />
                            <p className="sub-title">
                                Our mission is to empower students with the
                                skills and confidence necessary to become future
                                leaders, problem solvers and innovators through
                                code.
                            </p>
                        </div>
                        <div className="payment-col">
                            <div
                                id="give-lively-widget"
                                class="gl-simple-donation-widget"
                            ></div>
                            {/* <Stripe_payment></Stripe_payment> */}
                        </div>
                    </div>
                </div>
                <div className="credit-sec">
                    <div className="container">
                        <div className="col-md-12">
                            <p className="sub-title">
                                The Coding School has partnered with Give Lively
                                to securely process your online donation. This
                                transaction will appear on your bank statement
                                as "The Coding School". This transaction is
                                subject to Give Lively's <a>Terms</a> and{" "}
                                <a>Privacy.</a>
                            </p>
                            <p className="sub-title">
                                Need help? Email{" "}
                                <a href="mailto:support@givelively.org">
                                    support@givelively.org
                                </a>
                            </p>
                            <a className="btn powered-btn">
                                <img
                                    src="/images/powered-by-give-lively.png"
                                    alt="powered-by-give-lively"
                                />
                            </a>
                            <p className="sub-title mb-0">
                                © Give Lively LLC 2022. All Rights Reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Donate;
