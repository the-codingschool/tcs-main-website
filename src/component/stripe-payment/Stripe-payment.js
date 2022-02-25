import './stripe-payment.scss'
import React from 'react';

/**import {loadStripe} from '@stripe/react-stripe-js';
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';**/
import { useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faLink } from '@fortawesome/free-solid-svg-icons'
import {  faFacebookF , faTwitter } from '@fortawesome/free-brands-svg-icons';

//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//import '@fortawesome/css/font-awesome.min.css'


import StripeCheckout from 'react-stripe-checkout';
import $ from 'jquery';



const stripePromise = "pk_test_6pRNASCoBOKtIshFeQd4XMUh";
/**
const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      if (elements == null) {
        return;
      }
  
      const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardElement),
      });
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <CardElement />
        <button type="submit" disabled={!stripe || !elements}>
          Pay
        </button>
      </form>
    );
  };**/

function Stripe_payment() {
    // const onToken = (token) => {
    //     fetch('/save-stripe-token', {
    //       method: 'POST',
    //       body: JSON.stringify(token),
    //     }).then(response => {
    //       response.json().then(data => {
    //         alert(`We are in business, ${data.email}`);
    //       });
    //     });
    //   }

    const [ amount, setAmount ] = useState('0');

    const [clicked, setClicked] = useState('');
    const [amountError, amountErrorCheck] = useState('');
    const [recurring, recurringCheck] = useState('');
    const [recurringPayment, recurringPaymentSet] = useState('');

  const handleToken = (token) => {
    fetch("/payment/donate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token, amount }),
    })
    .then(res => res.json())
    .then(_ => {
      window.alert("Transaction Successful.");
    }).catch(_ => window.alert("Transaction Failed."))
  }

  
  const handleRecurring = (e) => {
   const value = e.target.value;
   recurringPaymentSet(value);
   $('.custom-donatable-font-recurring').removeClass('selected-amount');
   const classs = e.target.classList.add('selected-amount');

}
  const handleAmountChange = (e) => {
    const value = e.target.value;

    if( value > 100000 ){
      amountError ? amountErrorCheck('d-block') : amountErrorCheck('');
      value = 100000;
    }
    
    console.log(e.target);
    //const donate_BTN = document.getElementsByClassName("custom-donatable-font").classList.remove("selected-amount");
    //clicked ? setClicked('') : setClicked('base-state click-state');
    
    $('.custom-donatable-font').removeClass('selected-amount');

    //$(this).addClass("abc");
    const classs = e.target.classList.add('selected-amount');
    setAmount(value);
    $('#custom-input-element').val(value);
  };
  

  return (
      <div id='Stripe_payment'>
        
        {/* <Elements stripe={stripePromise}>
            <CheckoutForm />
        </Elements> */}
        {/* <br></br>
        <input 
            id="outlined-adornment-amount"
            value={amount}
            onChange={handleAmountChange} /> */}
<div className="mx-auto pb-3 pb-md-5 sd-wrapper-max" id="donation-list">
   <div data-react-className="DefaultTemplateDonationContainer" data-react-cache-id="DefaultTemplateDonationContainer-0">
      <div className="MakeADonationHeaderstyled__StyledLogoutLinkContainer-sc-1vyxb2f-1 ceIFQU"></div>
      <div className="MakeADonationHeaderstyled__StyledDonationTextContainer-sc-1vyxb2f-3 jzFFBS">
         <h3>Make a Donation</h3>
         <h1>The Coding School</h1>
      </div>
      <div>
         <div>
            <div>
               <div id="amount-selection-container">
                  <div>
                     <div className="row">
                        <div className="amount-option col-4 pr-5">
                        <button onClick={handleAmountChange}  className={`custom-donatable-font btn btn-lg btn-block btn-radius-1 btn-outline-secondary ${clicked || 'base-state' }`}  value="25" >$25</button>
                            </div>
                        <div className="amount-option col-4 pl-1 pr-10">
                            <button onClick={handleAmountChange}  className={`custom-donatable-font btn btn-lg btn-block btn-radius-1 btn-outline-secondary ${clicked || 'base-state' }`}  value="50" >$50</button>
                            </div>
                        <div className="amount-option col-4 pl-0">
                            <button onClick={handleAmountChange} className={`custom-donatable-font btn btn-lg btn-block btn-radius-1 btn-outline-secondary ${clicked || 'base-state' } `} value="100">$100</button>
                        </div>
                     </div>
                     <div className="row mt-8">
                        <div className="amount-option col-4 pr-5"><button onClick={handleAmountChange} className="custom-donatable-font btn btn-lg btn-block btn-radius-1 btn-outline-secondary" value="250">$250</button></div>
                        <div className="col-8 pl-1">
                           <div className="custom-option-wrapper input-group input-group-lg amount-option h-100">
                              <div className="input-group-prepend"><span className="input-group-text left-rounded" id="inputGroup">$</span></div>
                              <label for="custom-input-element" className="HiddenLabel-sc-13j791q-0 fgKfsC">Custom Amount</label>
                              <input onChange={handleAmountChange} name="custom-amount" type="number" step="1" min="0" max="100000" maxlength="6" id="custom-input-element" pattern="[0-9]"     className="form-control form-control-lg h-100" />
                                <div className="input-group-append">
                                  <span className="input-group-text right-rounded">USD</span>
                                </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div id="toggle-frequency-container" className='mt-8'>
                     <div className="col-12">
                        <div className="row pt-3 frequency-btn-group">
                            <div className="col-6 pr-5 pl-0">
                               <button onClick={handleRecurring} className={` selected-amount btn custom-donatable-font-recurring btn-outline-secondary gl-selected-frequency btn-block ${recurring || '' }  `} value="monthly" data-testid="toggle-monthly-frequency">Monthly</button>
                            </div>
                            <div className="col-6 pl-1 pr-0">
                               <button onClick={handleRecurring} className={` btn custom-donatable-font-recurring btn-outline-secondary gl-selected-frequency btn-block ${recurring || '' }  `} value="one-time" data-testid="toggle-one-time-frequency">One Time</button>
                            </div>
                        </div>
                     </div>
                  </div>
                  <div id="card-errors" role="alert" className={`smart-donations-error mt-2 hide ${amountError || 'd-none' } `} ><small>Please enter an amount between $1-$100,000.</small></div>
                  <div className="row mx-auto justify-content-center mt-12">
                     {/* <button type="button" className=" dedicate-btn btn btn-outline-primary btn-block mt-2 mb-3 popup-card__link d-flex align-items-center justify-content-center">
                         
                        Dedicate This Gift
                     </button> */}
                     {/* <div className="invisible "></div>
                     <div className="invisible ">
                         <a className="choose-another-payment-link float-left text-muted mt-2">or choose another payment method</a>
                    </div> */}
                     <div className="col-12 px-0">
                        <div className="payment-options">
                        <StripeCheckout
            stripeKey={stripePromise}
            token={handleToken}
            name=""
            email=""
            panelLabel={`Donate`}
            currency="USD"
            recurring="monthly"
            amount={amount * 100}
         >
            
         </StripeCheckout>

                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div className="CommonDividerstyled__StyledCommonDivider-sc-1dgvk8l-0 FQXoR hr">
         
      </div>
      
      
      
      
      
      

      <div className="MiniShareButtonsstyled__StyledMiniShareButtons-sc-onslje-0 cwxqQN">
         <div className="ShareButtonstyled__StyledShareButton-sc-1u1eu2f-0 ePaCCp">
            <a href="https://www.facebook.com/dialog/share?app_id=181216015739424&amp;display=popup&amp;href=https://secure.givelively.org/donate/coding-school&amp;redirect_uri=https://secure.givelively.org/donate/coding-school" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a></div>
         <div className="ShareButtonstyled__StyledShareButton-sc-1u1eu2f-0 ePaCCp">
            <a href="https://twitter.com/intent/tweet?url=https://secure.givelively.org/donate/coding-school&amp;text=Join%20me:%20I'm%20raising%20funds%20to%20help%20The%20Coding%20School" target="_blank" rel="noopener noreferrer" data-testid="twitter-btn"><FontAwesomeIcon icon={faTwitter} /></a></div>
         <div className="ShareButtonstyled__StyledShareButton-sc-1u1eu2f-0 ixdDjw ePaCCp">
            <a href="mailto:?subject=Join me: I'm raising funds to help The Coding School&amp;body=I'm raising funds for The Coding School. Join me in supporting this great cause with a donation here:%0A%0Ahttps://secure.givelively.org/donate/coding-school" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faEnvelope} /></a></div>
         <div className="ShareButtonstyled__StyledShareButton-sc-1u1eu2f-0 ixdDjw ePaCCp">
            <a target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLink} /></a></div>
      </div>
      <div className="DefaultTemplateDonationContainerstyled__StyledSectionContainer-sc-kan5cd-0 fYIuqc">
         <div className="no-gutters">
            <div className="col-12 mt-12 mb-2">
               <a target="_top" className="fund-raise btn btn-lg btn-outline-secondary btn-block radius-50 custom-donatable-font default-link" href="https://secure.givelively.org/donate/coding-school/fundraisers/new">🙋🏽 I Want To Fundraise For This</a></div>
            <a className="d-block mt-8 mb-4 login-link" href="https://secure.givelively.org/donate/coding-school">or log into your fundraising page »</a>
         </div>
      </div>
      <div className="NonprofitDescriptionstyled__StyledNonprofitDescriptionContainer-sc-1mcox2l-0 gyJZCV">
         <div className="CommonDividerstyled__StyledCommonDivider-sc-1dgvk8l-0 jpFale">
            
         </div>
         {/* <div className="NonprofitDescriptionstyled__StyledNonprofitDescription-sc-1mcox2l-1 bqrEMr">
            <p>Our mission is to empower students with the skills and confidence necessary to become future leaders, problem solvers and innovators through code.</p>
         </div> */}
      </div>
      <div className="DefaultTemplateDonationContainerstyled__StyledSectionContainer-sc-kan5cd-0 fYIuqc hr d-block d-lg-none"></div>
   </div>
</div>





















      </div>
  )
}

export default Stripe_payment;
