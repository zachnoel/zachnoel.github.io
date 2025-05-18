
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-tactical-dark text-white py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">Tactical Gear Supply</Link>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMenu}
              className="text-white hover:bg-tactical-gray"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link to="/" className="hover:text-tactical-tan transition-colors">Home</Link>
            <Link to="/body-armor" className="hover:text-tactical-tan transition-colors">Body Armor</Link>
            <Link to="/nightvision" className="hover:text-tactical-tan transition-colors">Nightvision / IR</Link>
            <Link to="/weapon-sites" className="hover:text-tactical-tan transition-colors">Weapon Sites</Link>
            <Link to="/lighting" className="hover:text-tactical-tan transition-colors">Lighting</Link>
            <Link to="/contact" className="hover:text-tactical-tan transition-colors">Contact</Link>
            <Button variant="ghost" size="icon" className="ml-2 text-white hover:bg-tactical-gray">
              <ShoppingCart size={20} />
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2 border-t border-tactical-gray mt-3">
            <div className="flex flex-col space-y-3">
              <Link to="/" className="py-2 hover:text-tactical-tan" onClick={toggleMenu}>Home</Link>
              <Link to="/body-armor" className="py-2 hover:text-tactical-tan" onClick={toggleMenu}>Body Armor</Link>
              <Link to="/nightvision" className="py-2 hover:text-tactical-tan" onClick={toggleMenu}>Nightvision / IR</Link>
              <Link to="/weapon-sites" className="py-2 hover:text-tactical-tan" onClick={toggleMenu}>Weapon Sites</Link>
              <Link to="/lighting" className="py-2 hover:text-tactical-tan" onClick={toggleMenu}>Lighting</Link>
              <Link to="/contact" className="py-2 hover:text-tactical-tan" onClick={toggleMenu}>Contact</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
