
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';

const BodyArmorPage = () => {
  const products = [
    {
      id: 'ba1',
      name: 'Level IIIA Concealable Vest',
      description: 'Lightweight, concealable body armor providing NIJ Level IIIA protection against handgun threats.',
      price: 'From $899.99',
      imageUrl: '/public/images/0-650-shellback-tactical-banshee-elite-2-0-plate-carrier-gen-2-black.jpg',
    },
    {
      id: 'ba2',
      name: 'Level IV Tactical Plate Carrier',
      description: 'Complete plate carrier system with Level IV ceramic plates for maximum protection against rifle threats.',
      price: 'From $1,499.99',
      imageUrl: '/public/images/0-650-shellback-tactical-banshee-elite-2-0-plate-carrier-gen-2-black.jpg',
    },
    {
      id: 'ba3',
      name: 'Special Forces Plate Carrier',
      description: 'Military-grade modular plate carrier designed for special operations with multiple attachment points.',
      price: 'From $1,299.99',
      imageUrl: '/public/images/0-650-shellback-tactical-banshee-elite-2-0-plate-carrier-gen-2-black.jpg',
    },
    {
      id: 'ba4',
      name: 'Level III+ Lightweight Plates',
      description: 'Lightweight polyethylene Level III+ armor plates providing protection against most rifle threats.',
      price: 'From $649.99',
      imageUrl: '/public/images/0-650-shellback-tactical-banshee-elite-2-0-plate-carrier-gen-2-black.jpg',
    },
    {
      id: 'ba5',
      name: 'Tactical Vest with Integrated Pouches',
      description: 'Full tactical vest with integrated pouches for magazines, equipment, and armor plates.',
      price: 'From $899.99',
      imageUrl: '/public/images/0-650-shellback-tactical-banshee-elite-2-0-plate-carrier-gen-2-black.jpg',
    },
    {
      id: 'ba6',
      name: 'Covert Body Armor Shirt',
      description: 'Concealable body armor integrated into a moisture-wicking compression shirt for maximum comfort.',
      price: 'From $799.99',
      imageUrl: '/public/images/0-650-shellback-tactical-banshee-elite-2-0-plate-carrier-gen-2-black.jpg',
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
            style={{ backgroundImage: "url('/public/images/0-650-shellback-tactical-banshee-elite-2-0-plate-carrier-gen-2-black.jpg')" }}
          ></div>
          
          <div className="container mx-auto px-4 py-16 relative z-10">
            <h1 className="text-4xl font-bold mb-4">Body Armor</h1>
            <p className="text-lg max-w-2xl mb-4">
              Professional-grade body armor solutions providing reliable protection for law enforcement, 
              military personnel, and security professionals.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <section className="py-12 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Featured Body Armor Products</h2>
              <p className="text-gray-600">
                We offer a wide range of NIJ certified body armor products for various threat levels and applications.
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
              <h3 className="text-xl font-bold mb-3">Need Custom Body Armor Solutions?</h3>
              <p className="mb-4">
                Contact our specialists for custom orders, bulk purchasing, or to discuss specific requirements for your organization.
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

export default BodyArmorPage;
