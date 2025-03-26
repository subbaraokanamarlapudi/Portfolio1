import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-4"
      >
        <p className="text-[#64ffda] font-mono">Hi, my name is</p>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mb-4"
      >
        <h3 className="text-4xl sm:text-6xl md:text-7xl font-bold text-[#ccd6f6]">
          Kanamarlapudi Venkata Subbarao.
        </h3>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mb-6"
      >
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-[#8892b0]">
          I build things for the web.
        </h2>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mb-8 max-w-xl"
      >
        <p className="text-[#8892b0] text-lg">
        Highly motivated entry-level software developer eager to apply technical skills and contribute to company growth.
        Seeking a challenging role where I can learn new technologies and gain valuable experience.
        </p>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <Link 
          to="/projects"
          className="inline-flex items-center px-6 py-3 border border-[#64ffda] text-[#64ffda] rounded-md font-medium hover:bg-[#64ffda]/10 transition-colors"
        >
          Check out my work
          <ArrowRight size={16} className="ml-2" />
        </Link>
      </motion.div>
    </div>
  );
};

export default Home;