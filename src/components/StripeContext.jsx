import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51PMWFI2MXkoT31HrexFGxEJcUZIwdvjAiJanR7K3hC9zVU0yAgUI0rJ1Ut1kyrpyiaq520C9GVPU6uHGOyHqy2mq00ogMlNHWx');

const StripeProvider = ({ children }) => {
    return <Elements stripe={stripePromise}>{children}</Elements>;
};

export default StripeProvider;
