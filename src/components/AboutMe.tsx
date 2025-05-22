import React from 'react';
import { Code, Youtube, Users } from 'lucide-react';
import laxmi from "./LaxmiImage.jpeg"

const AboutMe = () => {
  return (
    <section className="py-20 bg-gray-50" id="about-me">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/3">
              <div className="relative">
                <img 
                  src={laxmi}
                  alt="Lakshmi Marikumar"
                  className="w-full aspect-square object-cover rounded-full shadow-xl border-4 border-white"
                />
                <div className="absolute -bottom-4 -right-4 bg-blue-500 text-white p-4 rounded-full">
                  <Youtube className="h-6 w-6" />
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-2/3">
              <div className="flex items-center gap-3 mb-4">
                {/* <img 
                  src="/ewc-logo.png"
                  alt="Everyone Who Codes"
                  className="h-8 w-auto"
                /> */}
                <h2 className="text-3xl font-bold text-gray-900">Lakshmi Marikumar</h2>
              </div>
              
              <p className="text-xl text-blue-600 font-semibold mb-6">
                Founder of Everyone Who Codes (EWC) | Ex-Twitter, Amazon | Technical Recruiter
              </p>
              
              <div className="prose prose-lg text-gray-700 mb-8">
                <p>
                  I am Lakshmi, founder of Everyone Who Codes (EWC), YouTuber and a Technical Recruiter at heart. ❤️
                </p>
                
                <p>
                  With 8+ years of experience as a Technical Recruiter and Sourcing Specialist, I excel at building 
                  high-performing teams for top tech companies and startups. My expertise spans executive search, 
                  diversity sourcing, and full cycle recruiting for both technical and non-technical roles.
                </p>
                
                <p>
                  I founded Everyone Who Codes (EWC) in Summer 2024 to guide engineers, create content, host industry 
                  experts on my YouTube channel, and partner with strong engineering professionals. Our mission at EWC 
                  is to empower 100,000 engineers by providing access to top-notch resources and guidance from industry experts.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">LIVE Cohort - May 2024</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500">🔹</span>
                    Live DSA & System design prep (fast track & deep dive)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500">🔹</span>
                    Resume + LinkedIn review
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500">🔹</span>
                    Mock + behavioral interviews
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500">🔹</span>
                    Custom prep roadmap tailored to your goals
                  </li>
                </ul>
                <p className="mt-4 text-green-600 font-semibold">Early bird offer still available!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;