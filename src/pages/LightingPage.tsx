
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';

const LightingPage = () => {
  const products = [
    {
      id: 'l1',
      name: 'Tactical Weapon Light',
      description: 'High-output weapon-mounted light with 1,500 lumens and strobe function for tactical applications.',
      price: 'From $299.99',
      imageUrl: '/public/images/0-1001-streamlight-tlr-7-sub-1913-black.webp',
    },
    {
      id: 'l2',
      name: 'EDC Tactical Flashlight',
      description: 'Compact everyday carry tactical flashlight with multiple modes and aircraft-grade aluminum construction.',
      price: 'From $149.99',
      imageUrl: '/public/images/0-1001-streamlight-tlr-7-sub-1913-black.webp',
    },
    {
      id: 'l3',
      name: 'Helmet-Mounted Light',
      description: 'Versatile helmet-mounted light with white, red, blue, and IR output for various tactical scenarios.',
      price: 'From $249.99',
      imageUrl: '/public/images/0-1001-streamlight-tlr-7-sub-1913-black.webp',
    },
    {
      id: 'l4',
      name: 'Handheld Search Light',
      description: 'High-powered handheld searchlight with 4,000 lumen output and extended runtime for search operations.',
      price: 'From $399.99',
      imageUrl: '/public/images/0-1001-streamlight-tlr-7-sub-1913-black.webp',
    },
    {
      id: 'l5',
      name: 'IR Illuminator',
      description: 'Dedicated infrared illuminator for enhanced night vision performance in zero-light conditions.',
      price: 'From $349.99',
      imageUrl: '/public/images/0-1001-streamlight-tlr-7-sub-1913-black.webp',
    },
    {
      id: 'l6',
      name: 'Tactical Area Light',
      description: 'Deployable tactical area light for illuminating operational zones with 360° coverage and multiple power options.',
      price: 'From $599.99',
      imageUrl: '/public/images/0-1001-streamlight-tlr-7-sub-1913-black.webp',
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
            style={{ backgroundImage: "url('/public/images/0-1001-streamlight-tlr-7-sub-1913-black.webp')" }}
          ></div>
          
          <div className="container mx-auto px-4 py-16 relative z-10">
            <h1 className="text-4xl font-bold mb-4">Tactical Lighting</h1>
            <p className="text-lg max-w-2xl mb-4">
              Professional-grade tactical lighting solutions designed for law enforcement, military, and emergency response applications.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <section className="py-12 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Featured Lighting Products</h2>
              <p className="text-gray-600">
                Our tactical lighting solutions provide reliable illumination for any mission or environment.
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
              <h3 className="text-xl font-bold mb-3">Need Specialized Lighting Solutions?</h3>
              <p className="mb-4">
                Contact our team for bulk orders, specialized tactical lighting requirements, or custom solutions for your organization.
              </p>
              <Button asChild className="bg-tactical-green hover:bg-opacity-90">
                <a href="/contact">Request Custom Quote</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LightingPage;
