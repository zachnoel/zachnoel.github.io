import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';

const WeaponSitesPage = () => {
  const products = [
    {
      id: 'ws1',
      name: 'Holographic Weapon Sight',
      description: 'Military-grade holographic weapon sight with unlimited eye relief and multi-coated optics for rapid target acquisition.',
      price: 'From $599.99',
      imageUrl: '/images/redDot.jpg',
    },
    {
      id: 'ws2',
      name: 'Red Dot Sight',
      description: 'Compact and lightweight red dot sight with multiple brightness settings for all lighting conditions.',
      price: 'From $299.99',
      imageUrl: '/images/redDot.jpg',
    },
    {
      id: 'ws3',
      name: 'Variable Power Combat Scope',
      description: '1-6x variable power scope with illuminated reticle, ideal for both close quarters and mid-range engagements.',
      price: 'From $899.99',
      imageUrl: '/images/redDot.jpg',
    },
    {
      id: 'ws4',
      name: 'Long Range Precision Scope',
      description: 'High-magnification scope with mil-dot reticle for long-range precision shooting and target identification.',
      price: 'From $1,299.99',
      imageUrl: '/images/redDot.jpg',
    },
    {
      id: 'ws5',
      name: 'Thermal Weapon Sight',
      description: 'Advanced thermal imaging weapon sight for detecting heat signatures in all weather and lighting conditions.',
      price: 'From $3,499.99',
      imageUrl: '/images/redDot.jpg',
    },
    {
      id: 'ws6',
      name: 'Laser Sight System',
      description: 'Visible and IR laser aiming system for rapid target acquisition in daylight and night operations.',
      price: 'From $799.99',
      imageUrl: '/images/redDot.jpg',
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
            style={{ backgroundImage: "url('/images/redDot.jpg')" }}
          ></div>
          
          <div className="container mx-auto px-4 py-16 relative z-10">
            <h1 className="text-4xl font-bold mb-4">Weapon Sites</h1>
            <p className="text-lg max-w-2xl mb-4">
              Premium optics and sighting systems designed to enhance accuracy and target acquisition in any environment.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <section className="py-12 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Featured Weapon Sites</h2>
              <p className="text-gray-600">
                Our selection includes holographic sights, red dots, variable power optics, and specialized tactical sighting systems.
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
              <h3 className="text-xl font-bold mb-3">Need Custom Optics Solutions?</h3>
              <p className="mb-4">
                Our specialists can help you select the right optic for your specific weapon system and operational requirements.
              </p>
              <Button asChild className="bg-tactical-green hover:bg-opacity-90">
                <a href="/contact">Request Expert Advice</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WeaponSitesPage;
