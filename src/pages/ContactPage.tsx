
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Banner */}
        <div className="bg-tactical-dark text-white py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg max-w-2xl mx-auto">
              Request a quote, ask about bulk pricing, or get expert advice on the right 
              tactical equipment for your specific needs.
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <section className="py-12 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div>
                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                <p className="text-gray-600 mb-8">
                  Our tactical gear specialists are ready to assist you with product information, 
                  custom orders, or any questions you might have about our tactical equipment.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-tactical-green p-3 rounded-full text-white mr-4">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Call Us</h3>
                      <p className="text-gray-600">(555) 123-4567</p>
                      <p className="text-sm text-gray-500 mt-1">Monday-Friday: 9AM-5PM EST</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-tactical-green p-3 rounded-full text-white mr-4">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Email Us</h3>
                      <p className="text-gray-600">info@tacticalgear.example</p>
                      <p className="text-sm text-gray-500 mt-1">We respond within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-tactical-green p-3 rounded-full text-white mr-4">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Visit Our Showroom</h3>
                      <p className="text-gray-600">123 Tactical Way, Suite 101</p>
                      <p className="text-gray-600">Phoenix, AZ 85001</p>
                      <p className="text-sm text-gray-500 mt-1">By appointment only</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-6">Request a Quote</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-bold text-lg mb-2">Do you offer military/law enforcement discounts?</h3>
                <p className="text-gray-600">
                  Yes, we offer special pricing for verified military personnel, law enforcement officers, 
                  and government agencies. Contact us for details.
                </p>
              </div>
              
              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-bold text-lg mb-2">What body armor certification standards do your products meet?</h3>
                <p className="text-gray-600">
                  Our body armor products meet NIJ certification standards appropriate for their rated protection level. 
                  Specific certification information is available for each product.
                </p>
              </div>
              
              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-bold text-lg mb-2">Do you ship internationally?</h3>
                <p className="text-gray-600">
                  We ship to select international locations in compliance with ITAR and other export regulations. 
                  Contact us to verify if we can ship to your location.
                </p>
              </div>
              
              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-bold text-lg mb-2">What warranty do you offer on your products?</h3>
                <p className="text-gray-600">
                  Our products come with manufacturer warranties ranging from 1-5 years depending on the item. 
                  Extended warranty options are available for select products.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
