import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import "./Checkout.css"

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentStatus, setPaymentStatus] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      console.error('Stripe.js not loaded');
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.error('[Error]', error);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
      setPaymentStatus('success');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="checkout-form">
      <CardElement />
      <button type="submit" disabled={!stripe} className='pay-button'>
        Pay
      </button>
      {paymentStatus === 'success' && (
        <div style={{ marginTop: '10px', color: 'green' }}>
          Payment successful! Thank you for your purchase.
        </div>
      )}
    </form>
  );
};

export default CheckoutForm;
