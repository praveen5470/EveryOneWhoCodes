import React from 'react';
import { BookOpen, Code, Users } from 'lucide-react';

const About = () => {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What We Do
          </h2>
          <p className="text-xl text-gray-700">
            We help students and professionals master technical interviews with personalized mentorship 
            and practice mock interviews tailored to top tech companies like Google, Amazon, and Facebook.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-blue-50 rounded-xl p-8 text-center transform transition-all hover:scale-105 hover:shadow-lg">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Code className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Technical Interview Prep</h3>
            <p className="text-gray-700">
              Master algorithms, data structures, and system design with structured learning paths.
            </p>
          </div>
          
          <div className="bg-blue-50 rounded-xl p-8 text-center transform transition-all hover:scale-105 hover:shadow-lg">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Mock Interviews</h3>
            <p className="text-gray-700">
              Practice with industry experts and get actionable feedback to improve your performance.
            </p>
          </div>
          
          <div className="bg-blue-50 rounded-xl p-8 text-center transform transition-all hover:scale-105 hover:shadow-lg">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <BookOpen className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">1:1 Mentorship</h3>
            <p className="text-gray-700">
              Get personal guidance from ex-tech recruiters to ace your interviews and land your dream job.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;