import React from 'react';
import { Award, Users, Clock, Heart } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: Award, value: '70+', label: 'Projects Completed' },
    { icon: Users, value: '100+', label: 'Happy Clients' },
    { icon: Clock, value: '6+', label: 'Years Experience' },
    { icon: Heart, value: '98%', label: 'Client Satisfaction' },
  ];

  return (
    <section id="about" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
              About LuxInteriors
            </h2>
            <p className="text-xl text-neutral-600 leading-relaxed mb-8">
              With over a decade of experience in luxury interior design, we specialize in creating spaces that tell your unique story. Our award-winning team combines timeless elegance with contemporary innovation.
            </p>
            <p className="text-lg text-neutral-600 leading-relaxed mb-8">
              From intimate residential projects to large-scale commercial developments, we approach each design with meticulous attention to detail and a deep understanding of our clients' vision.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-yellow-600 text-white rounded-full mb-3">
                      <IconComponent size={20} />
                    </div>
                    <div className="text-2xl font-bold text-neutral-800">{stat.value}</div>
                    <div className="text-neutral-600">{stat.label}</div>
                  </div>
                );
              })}
            </div>

            {/* <button className="px-8 py-4 border-2 border-neutral-800 text-neutral-800 font-semibold hover:bg-neutral-800 hover:text-white transition-all duration-300">
              Learn More About Us
            </button> */}
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-none shadow-2xl">
              <img 
                src="/images/l7.jpeg"
                alt="Our Design Process"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-yellow-600 text-white p-6 shadow-xl">
              <div className="text-2xl font-bold">Award</div>
              <div className="text-sm">Winning Design</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;