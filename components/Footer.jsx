import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0a192f] py-8 border-t border-[#1d2d50]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-4">
            <a 
              href="https://github.com/subbaraokanamarlapudi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#64ffda] transition-colors"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/subbarao-kanamarlapudi/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#64ffda] transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:subbaraov446@gmail.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#64ffda] transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
          <p className="text-gray-400 text-sm">
            Designed & Built by <span className="text-[#64ffda]">Venkata Subbarao</span>
          </p>
          <p className="text-gray-500 text-xs mt-2">
            © {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;