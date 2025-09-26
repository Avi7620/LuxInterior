import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-neutral-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Create Something Beautiful Together
          </h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your space? Get in touch with us today for a consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Get In Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center mr-4">
                  <Phone size={20} className="text-white" />
                </div>
                <div>
                  <div className="text-white font-medium">Phone</div>
                  <div className="text-neutral-300">97679 15193</div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center mr-4">
                  <Mail size={20} className="text-white" />
                </div>
                <div>
                  <div className="text-white font-medium">Email</div>
                  <div className="text-neutral-300">LuxInteriors@gmail.com</div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center mr-4">
                  <MapPin size={20} className="text-white" />
                </div>
                <div>
                  <div className="text-white font-medium">Address</div>
                  <div className="text-neutral-300">Loni , Ahmednagar</div>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h4 className="text-xl font-semibold text-white mb-4">Office Hours</h4>
              <div className="text-neutral-300 space-y-2">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>By Appointment</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-neutral-700 text-white placeholder-neutral-400 border border-neutral-600 focus:border-yellow-600 focus:outline-none transition-colors duration-300"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-neutral-700 text-white placeholder-neutral-400 border border-neutral-600 focus:border-yellow-600 focus:outline-none transition-colors duration-300"
                  />
                </div>
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-neutral-700 text-white placeholder-neutral-400 border border-neutral-600 focus:border-yellow-600 focus:outline-none transition-colors duration-300"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Tell us about your project..."
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-neutral-700 text-white placeholder-neutral-400 border border-neutral-600 focus:border-yellow-600 focus:outline-none transition-colors duration-300 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-yellow-600 text-white font-semibold hover:bg-yellow-700 transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;