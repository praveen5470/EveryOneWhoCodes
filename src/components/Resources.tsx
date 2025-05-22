import React from 'react';
import { BookOpen, Code, Link, Youtube, FileText, Users } from 'lucide-react';

interface Resource {
  id: number;
  title: string;
  description: string;
  url: string;
  icon: React.ReactNode;
  featured?: boolean;
}

const ResourceCard = ({ resource }: { resource: Resource }) => {
  return (
    <a 
      href={resource.url} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`
        bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all border
        ${resource.featured ? 'border-blue-500 relative' : 'border-gray-100'}
      `}
    >
      {resource.featured && (
        <div className="absolute top-0 right-0 bg-blue-500 text-white text-sm font-semibold py-1 px-3 rounded-bl-lg rounded-tr-lg">
          Featured
        </div>
      )}
      <div className="flex items-start">
        <div className="bg-blue-100 p-3 rounded-lg mr-4 text-blue-600">
          {resource.icon}
        </div>
        <div>
          <h4 className="font-bold text-gray-900 mb-1">{resource.title}</h4>
          <p className="text-gray-700 text-sm">{resource.description}</p>
        </div>
      </div>
    </a>
  );
};

const Resources = () => {
  const resources: Resource[] = [
    {
      id: 1,
      title: "A Real Resume That Landed MAANG Interviews",
      description: "Get access to a proven resume template that helped candidates secure interviews at top tech companies.",
      url: "#",
      icon: <FileText className="h-6 w-6" />,
      featured: true
    },
    {
      id: 2,
      title: "Career Guidance",
      description: "Personalized career guidance to help you navigate your tech career journey.",
      url: "#",
      icon: <Users className="h-6 w-6" />,
      featured: true
    },
    {
      id: 3,
      title: "System Design Interview Handbook",
      description: "Learn how to approach system design questions in tech interviews.",
      url: "#",
      icon: <BookOpen className="h-6 w-6" />
    },
    {
      id: 4,
      title: "Technical Interview YouTube Channel",
      description: "Watch tutorials and mock interviews on our YouTube channel.",
      url: "#",
      icon: <Youtube className="h-6 w-6" />
    },
    {
      id: 5,
      title: "Behavioral Interview Questions",
      description: "Practice answers to common behavioral questions in tech interviews.",
      url: "#",
      icon: <BookOpen className="h-6 w-6" />
    },
    {
      id: 6,
      title: "Coding Interview Cheat Sheet",
      description: "Quick reference guide for common algorithms and data structures.",
      url: "#",
      icon: <Code className="h-6 w-6" />
    }
  ];

  return (
    <section className="py-20 bg-white" id="resources">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Free Resources
          </h2>
          <p className="text-xl text-gray-700">
            Level up your interview skills with these free resources
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {resources.map(resource => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="#"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md font-medium transition-colors"
          >
            Get More Resources
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resources;