import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    // { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
    
  ];

  const socialLinks = [
    { url: 'https://github.com/subbaraokanamarlapudi', icon: <Github size={24} /> },
    { url: 'https://www.linkedin.com/in/subbarao-kanamarlapudi/', icon: <Linkedin size={24} /> },
    { url: 'mailto:subbaraov446@gmail.com', icon: <Mail size={24} /> },
  ];
   	

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a192f]/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-[#64ffda]">KVSR</Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <Link 
                key={index} 
                to={link.path}
                className={`text-sm font-medium hover:text-[#64ffda] transition-colors ${location.pathname === link.path ? 'text-[#64ffda]' : 'text-gray-300'}`}
              >
                <span className="text-[#64ffda] mr-5"></span> {link.name}
              </Link>
            ))}
          </div>
          
          {/* Social Links - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            {socialLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#64ffda] transition-colors"
              >
                {link.icon}
              </a>
            ))}
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[#112240] shadow-xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === link.path ? 'text-[#64ffda] bg-[#172a45]' : 'text-gray-300 hover:bg-[#172a45] hover:text-[#64ffda]'
                }`}
                onClick={() => setIsOpen(false)}
              >
                <span className="text-[#64ffda] mr-1">{`0${index + 1}.`}</span> {link.name}
              </Link>
            ))}
            
            {/* Social Links - Mobile */}
            <div className="flex space-x-4 px-3 py-2">
              {socialLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#64ffda] transition-colors"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;