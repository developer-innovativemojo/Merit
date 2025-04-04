
import React from 'react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Logo />
            <p className="mt-4 text-white/80 max-w-sm">
              Connecting businesses with government contracting opportunities through our advanced matching platform.
            </p>
          </div>
          <div className="md:ml-auto">
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-white/80 hover:text-white transition-colors">About</a></li>
              <li><a href="#principles" className="text-white/80 hover:text-white transition-colors">Core Principles</a></li>
              <li><a href="#compare" className="text-white/80 hover:text-white transition-colors">How MERIT Compares</a></li>
              <li><a href="/signup" className="text-white/80 hover:text-white transition-colors">Sign Up</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-white/80">1234 Government Ave.</li>
              <li className="text-white/80">Washington, DC 20001</li>
              <li className="text-white/80">info@merit.com</li>
              <li className="text-white/80">(800) 555-0100</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/20 mt-8 pt-6 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} MERIT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
