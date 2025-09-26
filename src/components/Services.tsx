import React from 'react';
import { Home, Building, Palette, Lightbulb } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      id: 1,
      icon: Home,
      title: 'Residential Design',
      description: 'Transform your home into a personalized sanctuary that reflects your lifestyle and taste.',
      features: ['Space Planning', 'Color Consultation', 'Furniture Selection', 'Lighting Design'],
    },
    {
      id: 2,
      icon: Building,
      title: 'Commercial Spaces',
      description: 'Create inspiring work environments that boost productivity and reflect your brand identity.',
      features: ['Office Design', 'Retail Spaces', 'Restaurant Design', 'Hotel Interiors'],
    },
    {
      id: 3,
      icon: Palette,
      title: 'Design Consultation',
      description: 'Expert guidance to help you make informed decisions about your interior design project.',
      features: ['Style Assessment', 'Color Schemes', 'Material Selection', 'Budget Planning'],
    },
    {
      id: 4,
      icon: Lightbulb,
      title: 'Project Management',
      description: 'Full-service project coordination from concept to completion with attention to every detail.',
      features: ['Timeline Planning', 'Vendor Coordination', 'Quality Control', 'Installation Management'],
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive interior design solutions tailored to your unique needs and vision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={service.id}
                className="group bg-neutral-50 p-8 rounded-none hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2"
              >
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-600 text-white rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-800 mb-3">{service.title}</h3>
                  <p className="text-neutral-600 leading-relaxed">{service.description}</p>
                </div>
                
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-neutral-700">
                      <div className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <button className="px-8 py-4 bg-neutral-800 text-white font-semibold hover:bg-neutral-700 transition-colors duration-300">
            Schedule Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;