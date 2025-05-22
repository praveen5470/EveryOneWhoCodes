import React from 'react';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Master Technical Interviews with Expert Mentorship
          </h1>
          
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Ready to land your dream job? We help you prepare with tailored mock interviews, 
            technical prep, and personalized mentorship from top recruiters.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#programs" 
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-md font-medium text-lg transition-all transform hover:-translate-y-1 hover:shadow-lg"
            >
              Get Started
            </a>
            <a 
              href="#testimonials" 
              className="bg-white text-blue-600 border border-blue-500 px-8 py-3 rounded-md font-medium text-lg transition-all hover:bg-blue-50"
            >
              See Success Stories
            </a>
          </div>
          
          <div className="mt-16 flex flex-wrap justify-center gap-6 text-gray-600">
            <div className="flex items-center">
              <div className="bg-blue-100 p-2 rounded-full mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span>Ex-FAANG mentors</span>
            </div>
            <div className="flex items-center">
              <div className="bg-blue-100 p-2 rounded-full mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span>Personalized feedback</span>
            </div>
            <div className="flex items-center">
              <div className="bg-blue-100 p-2 rounded-full mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span>Real-world scenarios</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;