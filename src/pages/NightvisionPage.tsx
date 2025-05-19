
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';

const NightvisionPage = () => {
  const products = [
    {
      id: 'nv1',
      name: 'Gen 3 Night Vision Goggles',
      description: 'Military-grade Gen 3 night vision goggles with auto-gating for superior low-light performance.',
      price: 'From $3,499.99',
      imageUrl: '/images/nightvision1.jpg',
    },
    {
      id: 'nv2',
      name: 'Thermal Imaging Scope',
      description: 'High-resolution thermal imaging scope for detecting heat signatures in complete darkness.',
      price: 'From $2,899.99',
      imageUrl: '/images/nightvision1.jpg',
    },
    {
      id: 'nv3',
      name: 'Digital Night Vision Binoculars',
      description: 'Digital night vision binoculars with 4x magnification and video recording capabilities.',
      price: 'From $1,299.99',
      imageUrl: '/images/nightvision1.jpg',
    },
    {
      id: 'nv4',
      name: 'Helmet-Mounted Night Vision System',
      description: 'Complete helmet-mounted night vision system for hands-free operation in tactical environments.',
      price: 'From $4,299.99',
      imageUrl: '/images/nightvision1.jpg',
    },
    {
      id: 'nv5',
      name: 'IR Illuminator',
      description: 'Powerful infrared illuminator for extended range night vision operations in zero light conditions.',
      price: 'From $499.99',
      imageUrl: '/images/nightvision1.jpg',
    },
    {
      id: 'nv6',
      name: 'Clip-On Night Vision Device',
      description: 'Versatile clip-on night vision device that attaches to existing day optics for nighttime use.',
      price: 'From $2,799.99',
      imageUrl: '/images/nightvision1.jpg',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Banner */}
        <div className="relative bg-tactical-dark text-white">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 opacity-40"
            style={{ backgroundImage: "url('/images/nightVision1.jpg')" }}
          ></div>
          
          <div className="container mx-auto px-4 py-16 relative z-10">
            <h1 className="text-4xl font-bold mb-4">Nightvision & IR Equipment</h1>
            <p className="text-lg max-w-2xl mb-4">
              Advanced night vision and infrared equipment providing superior sight capabilities in low-light and 
              no-light conditions for tactical operations.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <section className="py-12 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Featured Night Vision Products</h2>
              <p className="text-gray-600">
                Our selection includes the latest generation of night vision devices, thermal imagers, and infrared equipment.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  description={product.description}
                  price={product.price}
                  imageUrl={product.imageUrl}
                />
              ))}
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Need Specialized Night Vision Equipment?</h3>
              <p className="mb-4">
                Our team can provide expert guidance on selecting the right night vision equipment for your specific operational needs.
              </p>
              <Button asChild className="bg-tactical-green hover:bg-opacity-90">
                <a href="/contact">Request Consultation</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NightvisionPage;
