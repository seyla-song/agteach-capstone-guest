import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import React, { useState } from 'react';
import { useStripe } from '@stripe/react-stripe-js';

const stripePromise = loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY);

const CheckoutPage = () => {
  return (
    <Elements stripe={stripePromise}>
      <Checkout />
    </Elements>
  );
};

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const stripe = useStripe();

  const handleCheckout = async () => {
    setLoading(true);
    try {
      // Call the backend to create a Checkout Session
      const response = await fetch(
        'https://api.agteach.site/api/enrollment/checkout-session',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ courseId: 336, amount: 50 }), // sample data
        }
      );

      const data = await response.json();

      console.log(data);
      if (data.id) {
        // Redirect to Stripe's checkout page using the session ID
        const result = await stripe.redirectToCheckout({ sessionId: data.id });

        if (result.error) {
          console.error('Stripe checkout error', result.error);
        }
      } else {
        console.error('Failed to create checkout session');
      }
    } catch (error) {
      console.error('Error during checkout', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={handleCheckout} disabled={!stripe || loading}>
        {loading ? 'Processing...' : 'Checkout'}
      </button>
    </div>
  );
};

export default CheckoutPage;
