import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12 max-w-2xl"
      >
        {/* <p className="text-[#64ffda] font-mono mb-2">03. What's Next?</p> */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#ccd6f6] mb-6">Get In Touch</h2>
        <p className="text-[#8892b0] text-lg">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
          I'll try my best to get back to you!
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full max-w-md"
      >
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-[#8892b0] mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 bg-[#112240] border border-[#233554] rounded-md text-[#ccd6f6] focus:outline-none focus:ring-2 focus:ring-[#64ffda] focus:border-transparent"
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[#8892b0] mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 bg-[#112240] border border-[#233554] rounded-md text-[#ccd6f6] focus:outline-none focus:ring-2 focus:ring-[#64ffda] focus:border-transparent"
              required
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-[#8892b0] mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              className="w-full px-4 py-2 bg-[#112240] border border-[#233554] rounded-md text-[#ccd6f6] focus:outline-none focus:ring-2 focus:ring-[#64ffda] focus:border-transparent"
              required
            ></textarea>
          </div>
          
          <button
            type="submit"
            className="w-full flex items-center justify-center px-6 py-3 border border-[#64ffda] text-[#64ffda] rounded-md font-medium hover:bg-[#64ffda]/10 transition-colors"
          >
            Send Message
            <Send size={16} className="ml-2" />
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;