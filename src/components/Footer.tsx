
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Shield } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-tactical-dark text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Tactical Gear Supply</h3>
            <p className="text-gray-300 mb-3">
              Providing premium tactical equipment for professionals and enthusiasts.
            </p>
            <div className="flex items-center mt-4">
              <Mail size={18} className="mr-2" />
              <span>info@tacticalgear.example</span>
            </div>
            <div className="flex items-center mt-2">
              <Phone size={18} className="mr-2" />
              <span>(555) 123-4567</span>
            </div>
          </div>

          {/* Product Categories */}
          <div>
            <h3 className="text-xl font-bold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/body-armor" className="text-gray-300 hover:text-tactical-tan">
                  Body Armor
                </Link>
              </li>
              <li>
                <Link to="/nightvision" className="text-gray-300 hover:text-tactical-tan">
                  Nightvision / IR
                </Link>
              </li>
              <li>
                <Link to="/weapon-sites" className="text-gray-300 hover:text-tactical-tan">
                  Weapon Sites
                </Link>
              </li>
              <li>
                <Link to="/lighting" className="text-gray-300 hover:text-tactical-tan">
                  Lighting
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-tactical-tan">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-tactical-tan">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-tactical-tan">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-tactical-tan">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-3">
              Subscribe to receive updates on new products and special offers.
            </p>
            <div className="flex mt-3">
              <input
                type="email"
                placeholder="Your email"
                className="px-3 py-2 bg-tactical-gray text-white rounded-l-md focus:outline-none w-full"
              />
              <button className="bg-tactical-green text-white px-4 py-2 rounded-r-md hover:bg-opacity-90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-tactical-gray mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Tactical Gear Supply. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-tactical-tan">
              <Shield size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-tactical-tan">
              <Mail size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-tactical-tan">
              <Phone size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
