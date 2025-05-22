import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import PaymentModal from './PaymentModal';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

interface PaymentButtonProps {
  amount: number;
  programName: string;
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

export const StripePaymentButton: React.FC<PaymentButtonProps> = ({ 
  amount, 
  programName, 
  onSuccess,
  onError
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      if (!stripe) throw new Error('Stripe failed to load');

      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/create-checkout-session`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({
          amount,
          programName,
        }),
      });

      const session = await response.json();

      if (session.error) {
        throw new Error(session.error);
      }

      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        throw new Error(result.error.message);
      }

      onSuccess?.();
    } catch (error) {
      console.error('Payment error:', error);
      onError?.(error as Error);
    }
  };

  return (
    <>
      <button 
        onClick={() => setIsModalOpen(true)}
        className="w-full py-3 rounded-md font-medium transition-colors bg-blue-500 hover:bg-blue-600 text-white"
      >
        Pay ${amount}
      </button>

      <PaymentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        amount={amount}
        programName={programName}
        onProceed={handlePayment}
      />
    </>
  );
};

export const useStripe = () => {
  return {
    stripePromise,
  };
};