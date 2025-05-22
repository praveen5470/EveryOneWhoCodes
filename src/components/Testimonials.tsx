import React, { useState } from 'react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  content: string;
  rating: number;
}

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-center mb-6">
        <img 
          src={testimonial.image} 
          alt={testimonial.name} 
          className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-blue-100"
        />
        <div>
          <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
          <p className="text-gray-600 text-sm">
            {testimonial.role} at {testimonial.company}
          </p>
        </div>
      </div>
      
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <svg 
            key={i}
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill={i < testimonial.rating ? "currentColor" : "none"}
            stroke={i < testimonial.rating ? "none" : "currentColor"}
            className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
        ))}
      </div>
      
      <p className="text-gray-700 italic">"{testimonial.content}"</p>
    </div>
  );
};

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Ryan Menghani",
      role: "Software Engineer",
      company: "Google",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      content: "Lakshmi helped me immensely to land my current position at Google. She is extremely passionate and genuine, she cares tremendously for each of her candidates.",
      rating: 5
    },
    {
      id: 2,
      name: "Vishal Kumar",
      role: "Full Stack Developer",
      company: "Microsoft",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      content: "I had a great conversation and got valuable insights! She provided a thorough resume review, gave constructive feedback, and was very friendly throughout.",
      rating: 5
    },
    {
      id: 3,
      name: "Siddhesh N",
      role: "Product Engineer",
      company: "Netflix",
      image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      content: "Thanks to your incredible help with my resume & job search, I just landed a role. I couldn't have done it without you!",
      rating: 5
    },
    {
      id: 4,
      name: "Jennifer Lee",
      role: "Frontend Developer",
      company: "Airbnb",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      content: "The mock interviews were incredibly realistic and helped me identify my weak areas. After just 4 sessions, I felt confident enough to ace my interviews.",
      rating: 5
    },
    {
      id: 5,
      name: "Michael Rodriguez",
      role: "Backend Engineer",
      company: "Stripe",
      image: "https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      content: "The Tech Interview Mastery program was worth every penny. Not only did I improve my technical skills, but I also learned how to communicate effectively.",
      rating: 4
    },
  ];

  const [activeTestimonials, setActiveTestimonials] = useState<Testimonial[]>(testimonials.slice(0, 3));

  return (
    <section className="py-20 bg-gray-50" id="testimonials">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <div className="flex justify-center items-center gap-3 mb-6">
            <div className="text-5xl font-bold text-blue-600">4.9</div>
            <div className="flex flex-col items-start">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i}
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                    className="w-5 h-5 text-yellow-400"
                  >
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                  </svg>
                ))}
              </div>
              <span className="text-gray-600">Based on 19 reviews</span>
            </div>
          </div>
          <p className="text-xl text-gray-700">
            Hear from our students who landed their dream jobs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {activeTestimonials.map(testimonial => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button 
            className="bg-white text-blue-600 border border-blue-500 px-6 py-3 rounded-md font-medium transition-all hover:bg-blue-50"
            onClick={() => setActiveTestimonials(
              activeTestimonials.length === 3 ? testimonials : testimonials.slice(0, 3)
            )}
          >
            {activeTestimonials.length === 3 ? "View More Stories" : "View Less"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;