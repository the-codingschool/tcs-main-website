import "./Donate.scss";
import React, { useEffect } from "react";
import Marquee from "react-fast-marquee";

import Fade from "react-reveal/Fade";
import Stripe_payment from "../../component/stripe-payment/Stripe-payment";
import { Helmet } from "react-helmet";

// import {loadStripe} from '@stripe/react-stripe-js';
// import {
//   CardElement,
//   Elements,
//   useStripe,
//   useElements,
// } from '@stripe/react-stripe-js';

//import StripeCheckout from 'react-stripe-checkout';
// const onToken = (token) => {
//     fetch('/save-stripe-token', {
//       method: 'POST',
//       body: JSON.stringify(token),
//     }).then(response => {
//       response.json().then(data => {
//         alert(`We are in business, ${data.email}`);
//       });
//     });
// }

function Donate() {
    // const CheckoutForm = () => {
    //     const stripe = useStripe();
    //     const elements = useElements();

    //     const handleSubmit = async (event) => {
    //       event.preventDefault();

    //       if (elements == null) {
    //         return;
    //       }

    //       const {error, paymentMethod} = await stripe.createPaymentMethod({
    //         type: 'card',
    //         card: elements.getElement(CardElement),
    //       });
    //     };
    //     return (
    //         <form onSubmit={handleSubmit}>
    //           <CardElement />
    //           <button type="submit" disabled={!stripe || !elements}>
    //             Pay
    //           </button>
    //         </form>
    //       );
    // };
    // const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');

    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content="The Coding School awarded $3 million grant"
                />
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
                            {/* <Elements stripe={stripePromise}>
                        <CheckoutForm />
                    </Elements> */}

                            <Stripe_payment></Stripe_payment>
                            {/* <StripeCheckout
                        //token={this.onToken}
                        stripeKey="my_PUBLISHABLE_stripekey"
                    /> */}
                            {/* <StripeCheckout
                        name="Three Comma Co." // the pop-in header title
                        description="Big Data Stuff" // the pop-in header subtitle
                        image="https://www.vidhub.co/assets/logos/vidhub-icon-2e5c629f64ced5598a56387d4e3d0c7c.png" // the pop-in header image (default none)
                        ComponentClass="div"
                        panelLabel="Give Money" // prepended to the amount in the bottom pay button
                        amount={1000000} // cents
                        currency="USD"
                        stripeKey="..."
                        locale="zh"
                        email="info@vidhub.co"
                        // Note: Enabling either address option will give the user the ability to
                        // fill out both. Addresses are sent as a second parameter in the token callback.
                        shippingAddress
                        billingAddress={false}
                        // Note: enabling both zipCode checks and billing or shipping address will
                        // cause zipCheck to be pulled from billing address (set to shipping if none provided).
                        zipCode={false}
                        alipay // accept Alipay (default false)
                        bitcoin // accept Bitcoins (default false)
                        allowRememberMe // "Remember Me" option (default true)
                        token={this.onToken} // submit callback
                        //opened={this.onOpened} // called when the checkout popin is opened (no IE6/7)
                        //closed={this.onClosed} // called when the checkout popin is closed (no IE6/7)
                        // Note: `reconfigureOnUpdate` should be set to true IFF, for some reason
                        // you are using multiple stripe keys
                        reconfigureOnUpdate={false}
                        // Note: you can change the event to `onTouchTap`, `onClick`, `onTouchStart`
                        // useful if you're using React-Tap-Event-Plugin
                        triggerEvent="onTouchTap"
                        >
                        <button className="btn btn-primary">
                            Use your own child component, which gets wrapped in whatever
                            component you pass into as "ComponentClass" (defaults to span)
                        </button>
                    </StripeCheckout> */}
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
