import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="text-3xl font-bold mb-4">
              <span className="text-yellow-600">Luxe</span>Interiors
            </div>
            <p className="text-neutral-400 leading-relaxed max-w-md">
              Creating exceptional interior spaces that inspire and transform. 
              Award-winning design solutions for residential and commercial projects.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors duration-300">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors duration-300">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors duration-300">
                <Twitter size={16} />
              </a>
              <a href="#" className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors duration-300">
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-neutral-400">
              <li><a href="#" className="hover:text-yellow-600 transition-colors duration-300">Home</a></li>
              <li><a href="#" className="hover:text-yellow-600 transition-colors duration-300">Portfolio</a></li>
              <li><a href="#" className="hover:text-yellow-600 transition-colors duration-300">Services</a></li>
              <li><a href="#" className="hover:text-yellow-600 transition-colors duration-300">About</a></li>
              <li><a href="#" className="hover:text-yellow-600 transition-colors duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-neutral-400">
              <li><a href="#" className="hover:text-yellow-600 transition-colors duration-300">Residential Design</a></li>
              <li><a href="#" className="hover:text-yellow-600 transition-colors duration-300">Commercial Spaces</a></li>
              <li><a href="#" className="hover:text-yellow-600 transition-colors duration-300">Consultation</a></li>
              <li><a href="#" className="hover:text-yellow-600 transition-colors duration-300">Project Management</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-400 text-sm">
            © 2025 LuxInteriors. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-neutral-400 hover:text-yellow-600 text-sm transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-neutral-400 hover:text-yellow-600 text-sm transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;