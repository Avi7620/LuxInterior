import React, { useEffect, useRef } from 'react';

const Portfolio: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const portfolioItems = sectionRef.current?.querySelectorAll('.portfolio-item');
    portfolioItems?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const portfolioItems = [
    {
      id: 1,
      image: '/images/l1.jpeg',
      title: 'Modern Living Room',
      category: 'Residential',
    },
    {
      id: 2,
      image: '/images/l2.webp',
      title: 'Luxury Kitchen',
      category: 'Residential',
    },
    {
      id: 3,
      image: '/images/l3.jpeg',
      title: 'Executive Office',
      category: 'Commercial',
    },
    {
      id: 4,
      image: '/images/l4.jpeg',
      title: 'Master Bedroom',
      category: 'Residential',
    },
    {
      id: 5,
      image: '/images/l5.webp',
      title: 'Boutique Hotel Lobby',
      category: 'Hospitality',
    },
    {
      id: 6,
      image: '/images/l6.jpeg',
      title: 'Minimalist Dining',
      category: 'Residential',
    },
  ];

  return (
    <section id="portfolio" ref={sectionRef} className="py-20 bg-neutral-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
            Our Portfolio
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Discover our collection of thoughtfully designed spaces that blend functionality with aesthetic excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <div 
              key={item.id}
              className="portfolio-item group cursor-pointer opacity-0 transform translate-y-8"
            >
              <div className="relative overflow-hidden rounded-none shadow-lg">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-yellow-400 font-medium">{item.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        @keyframes fadeIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Portfolio;