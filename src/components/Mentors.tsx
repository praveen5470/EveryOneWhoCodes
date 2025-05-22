import React from 'react';

const MentorCard = ({ 
  name,
  role,
  company,
  image,
  bio
}: {
  name: string;
  role: string;
  company: string;
  image: string;
  bio: string;
}) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md transition-all hover:shadow-xl">
      <div className="relative h-72 overflow-hidden flex items-center justify-center p-8 bg-blue-50">
        <img 
          src={image} 
          alt={name} 
          className="w-48 h-48 rounded-full object-cover object-center transition-transform duration-500 hover:scale-105 border-4 border-white shadow-lg"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-1">{name}</h3>
        <p className="text-blue-600 font-medium mb-3">{role} | Ex-{company}</p>
        <p className="text-gray-700 mb-6">{bio}</p>
        <button className="bg-gray-100 hover:bg-gray-200 text-gray-900 px-6 py-2 rounded-md font-medium transition-colors w-full">
          Book a Session
        </button>
      </div>
    </div>
  );
};

const Mentors = () => {
  return (
    <section className="py-20 bg-white" id="mentors">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Mentors
          </h2>
          <p className="text-xl text-gray-700">
            Learn from industry experts with experience at top tech companies
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <MentorCard 
            name="Lakshmi Marikumar"
            role="Technical Recruiter"
            company="Twitter, Amazon"
            image="https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            bio="8+ years of recruiting experience with a track record of hiring hundreds of engineers at top tech companies."
          />
          
          <MentorCard 
            name="David Chen"
            role="Software Engineer"
            company="Google"
            image="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            bio="Senior software engineer with expertise in algorithms and system design. Conducted 500+ technical interviews."
          />
          
          <MentorCard 
            name="Sarah Johnson"
            role="Engineering Manager"
            company="Facebook"
            image="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            bio="Passionate about helping engineers grow. Specialized in coaching on both technical and soft skills for interviews."
          />
        </div>
      </div>
    </section>
  );
};

export default Mentors;