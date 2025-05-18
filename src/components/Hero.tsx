
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="relative bg-tactical-dark text-white">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 opacity-40"
        style={{ backgroundImage: "url('/images/tacGear1.jpg')" }}
      >
      </div>
      
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Professional Grade Tactical Gear
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Equip yourself with premium body armor, night vision, weapon sites, and lighting solutions 
            trusted by military and law enforcement professionals.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button asChild className="bg-tactical-green hover:bg-opacity-90 text-white">
              <Link to="/contact">Request a Quote</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
