import React from 'react';
import { Calendar, CheckCircle } from 'lucide-react';
import { StripePaymentButton } from './utils/PaymentUtils';

const ProgramCard = ({ 
  title, 
  description, 
  price, 
  features, 
  duration, 
  popular = false 
}: {
  title: string;
  description: string;
  price: string;
  features: string[];
  duration: string;
  popular?: boolean;
}) => {
  const handlePaymentSuccess = () => {
    console.log('Payment successful for:', title);
  };

  const handlePaymentError = (error: Error) => {
    console.error('Payment failed:', error);
  };

  const priceNumber = parseInt(price.replace(/[^0-9]/g, ''));

  return (
    <div className={`
      bg-white rounded-xl p-8 border
      ${popular ? 'border-blue-500 shadow-lg relative' : 'border-gray-200 shadow-md'}
      transition-all hover:shadow-xl
    `}>
      {popular && (
        <div className="absolute top-0 right-0 bg-blue-500 text-white text-sm font-semibold py-1 px-3 rounded-bl-lg rounded-tr-lg">
          Most Popular
        </div>
      )}
      
      <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-700 mb-6">{description}</p>
      
      <div className="mb-6 flex items-center">
        <Calendar className="h-5 w-5 text-blue-500 mr-2" />
        <span className="text-gray-700">{duration}</span>
      </div>
      
      <div className="mb-8">
        <span className="text-4xl font-bold text-gray-900">{price}</span>
      </div>
      
      <ul className="mb-8 space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      
      <StripePaymentButton
        amount={priceNumber}
        programName={title}
        onSuccess={handlePaymentSuccess}
        onError={handlePaymentError}
      />
    </div>
  );
};

const Programs = () => {
  return (
    <section className="py-20 bg-gray-50" id="programs">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Programs
          </h2>
          <p className="text-xl text-gray-700">
            Tailored solutions to help you land your dream tech job
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <ProgramCard 
            title="Mock Interview" 
            description="Practice with industry experts and get actionable feedback."
            price="$99"
            duration="1 hour session"
            features={[
              "One-on-one mock interview",
              "Detailed performance feedback",
              "Personalized improvement plan",
              "Recording of your session"
            ]}
          />
          
          <ProgramCard 
            title="Tech Interview Mastery" 
            description="End-to-end interview prep for tech roles with real-world scenarios."
            price="$499"
            duration="4 weeks"
            popular={true}
            features={[
              "4 mock interviews & feedback",
              "Personalized learning path",
              "Weekly 1:1 mentorship",
              "Resume & LinkedIn review",
              "Access to private community"
            ]}
          />
          
          <ProgramCard 
            title="1:1 Mentorship" 
            description="Get personal guidance from ex-tech recruiters to ace your interviews."
            price="$199"
            duration="3 hour-long sessions"
            features={[
              "Career strategy planning",
              "Interview techniques coaching",
              "Salary negotiation advice",
              "Job search optimization",
              "30-day email support"
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Programs;