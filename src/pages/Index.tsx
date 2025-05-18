
import React from 'react';
import Hero from '@/components/Hero';
import FeaturedCategories from '@/components/FeaturedCategories';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <FeaturedCategories />
        
        {/* Testimonials Section */}
        <section className="py-16 bg-tactical-dark text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-10">Trusted by Professionals</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-tactical-gray p-6 rounded-lg">
                <p className="italic mb-4">
                  "The body armor I purchased exceeded my expectations. Lightweight yet provides excellent protection."
                </p>
                <p className="font-bold">- John D., Law Enforcement Officer</p>
              </div>
              <div className="bg-tactical-gray p-6 rounded-lg">
                <p className="italic mb-4">
                  "The night vision equipment is outstanding. Crystal clear visibility in complete darkness."
                </p>
                <p className="font-bold">- Michael T., Military Contractor</p>
              </div>
              <div className="bg-tactical-gray p-6 rounded-lg">
                <p className="italic mb-4">
                  "Quick shipping and excellent customer service. The tactical lighting solutions are top-notch."
                </p>
                <p className="font-bold">- Sarah K., Security Specialist</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-12 bg-tactical-green text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Need Expert Advice?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Our specialists are ready to help you find the right tactical gear for your specific requirements.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-white text-tactical-green px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Us Today
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
