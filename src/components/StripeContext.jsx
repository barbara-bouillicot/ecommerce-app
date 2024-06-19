import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_API_KEY);

const StripeProvider = ({ children }) => {
    return <Elements stripe={stripePromise}>{children}</Elements>;
};

export default StripeProvider;
