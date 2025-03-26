import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const featuredProjects = [
    {
      title: 'Portfolio Website',
      description: 'A minimal, dark themed portfolio website built with React and TailwindCSS. Features smooth animations and responsive design.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      tech: ['React', 'TailwindCSS', 'Framer Motion'],
      github: 'https://github.com/abhikatta/portfolio',
      external: 'https://abhikatta.vercel.app',
      reverse: false,
    }
    // {
    //   title: 'E-Commerce Platform',
    //   description: 'A full-stack e-commerce application with user authentication, product catalog, cart functionality, and payment processing.',
    //   image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80',
    //   tech: ['Next.js', 'MongoDB', 'Stripe', 'TailwindCSS'],
    //   github: 'https://github.com/abhikatta/ecommerce',
    //   external: 'https://ecommerce-demo.vercel.app',
    //   reverse: true,
    // },
    // {
    //   title: 'Weather Dashboard',
    //   description: 'A weather application that displays current weather and forecasts for any location. Features a clean UI and data visualization.',
    //   image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1665&q=80',
    //   tech: ['React', 'OpenWeather API', 'Chart.js', 'TailwindCSS'],
    //   github: 'https://github.com/abhikatta/weather-app',
    //   external: 'https://weather-dashboard-demo.vercel.app',
    //   reverse: false,
    // },
  ];

  const otherProjects = [
    {
      title: 'GitHub User Search',
      description: 'A web application that allows users to search for GitHub users and view their profile information.',
      tech: ['React', 'CSS'],
      github: 'https://github.com/subbaraokanamarlapudi/github-user-finder',
      external: 'https://github-user-finder-lac.vercel.app/',
    },
    {
      title: 'Generating QR Code',
      description: 'A web application that allows users to generate QR codes for any text or URL.',
      tech: ['React', 'TailwindCSS', 'react-qr-code'],
      github: 'https://github.com/subbaraokanamarlapudi/Generating-QR',
      external: 'https://generating-qr.vercel.app/',
    },
    // {
    //   title: 'Movie Database',
    //   description: 'A movie database application that allows users to search for movies and view details.',
    //   tech: ['React', 'TMDB API', 'TailwindCSS'],
    //   github: 'https://github.com/abhikatta/movie-database',
    //   external: 'https://movie-db-demo.vercel.app',
    // },
    // {
    //   title: 'Chat Application',
    //   description: 'A real-time chat application with private and group messaging functionality.',
    //   tech: ['React', 'Socket.io', 'Express', 'MongoDB'],
    //   github: 'https://github.com/abhikatta/chat-app',
    //   external: 'https://chat-app-demo.vercel.app',
    // },
    // {
    //   title: 'URL Shortener',
    //   description: 'A URL shortening service with analytics for tracking link clicks.',
    //   tech: ['Node.js', 'Express', 'MongoDB', 'React'],
    //   github: 'https://github.com/abhikatta/url-shortener',
    //   external: 'https://url-shortener-demo.vercel.app',
    // },
    // {
    //   title: 'Blog Platform',
    //   description: 'A full-stack blog platform with user authentication and markdown support.',
    //   tech: ['Next.js', 'MongoDB', 'TailwindCSS'],
    //   github: 'https://github.com/abhikatta/blog-platform',
    //   external: 'https://blog-platform-demo.vercel.app',
    // },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-[#ccd6f6] flex items-center">
          <span className="text-[#64ffda] font-mono mr-2"></span> Some Things I've Built
          <span className="ml-4 h-px bg-[#233554] flex-grow"></span>
        </h2>
      </motion.div>

      {/* Featured Projects */}
      <div className="space-y-24 mb-24">
        {featuredProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 * index }}
            className={`relative grid grid-cols-12 gap-4 items-center ${project.reverse ? 'md:text-right' : ''}`}
          >
            {/* Project Image */}
            <div className={`col-span-12 md:col-span-7 ${project.reverse ? 'md:col-start-6' : 'md:col-start-1'} relative z-10`}>
              <a href={project.external} target="_blank" rel="noopener noreferrer" className="block">
                <div className="relative group">
                  <div className="overflow-hidden rounded-md">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-auto object-cover transition-all duration-300 group-hover:scale-105 filter brightness-50 group-hover:brightness-75"
                    />
                  </div>
                  <div className="absolute inset-0 bg-[#64ffda]/20 mix-blend-multiply rounded-md"></div>
                </div>
              </a>
            </div>

            {/* Project Content */}
            <div className={`col-span-12 md:col-span-6 ${project.reverse ? 'md:col-start-1' : 'md:col-start-7'} relative z-20`}>
              <div className={`p-6 ${project.reverse ? 'md:text-right' : ''}`}>
                <p className="text-[#64ffda] font-mono text-sm mb-1">Featured Project</p>
                <h3 className="text-2xl font-bold text-[#ccd6f6] mb-4">
                  <a href={project.external} target="_blank" rel="noopener noreferrer" className="hover:text-[#64ffda] transition-colors">
                    {project.title}
                  </a>
                </h3>
                <div className="bg-[#112240] p-6 rounded-md shadow-xl mb-4">
                  <p className="text-[#8892b0]">{project.description}</p>
                </div>
                <ul className={`flex flex-wrap gap-3 mb-4 text-sm text-[#8892b0] ${project.reverse ? 'md:justify-end' : ''}`}>
                  {project.tech.map((tech, techIndex) => (
                    <li key={techIndex} className="font-mono">{tech}</li>
                  ))}
                </ul>
                <div className={`flex gap-4 ${project.reverse ? 'md:justify-end' : ''}`}>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  {project.external && (
                    <a 
                      href={project.external} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Other Projects */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mb-12"
      >
        <h3 className="text-2xl font-bold text-center text-[#ccd6f6] mb-12">Other Projects</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {otherProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.8 + (index * 0.1) }}
              className="bg-[#112240] rounded-md p-6 flex flex-col h-full hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="flex justify-between items-center mb-6">
                <div className="text-[#64ffda]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
                <div className="flex gap-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors"
                  >
                    <Github size={18} />
                  </a>
                  {project.external && (
                    <a 
                      href={project.external} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>
              <h4 className="text-xl font-bold text-[#ccd6f6] mb-2">{project.title}</h4>
              <p className="text-[#8892b0] mb-6 flex-grow">{project.description}</p>
              <ul className="flex flex-wrap gap-2 text-xs text-[#8892b0]">
                {project.tech.map((tech, techIndex) => (
                  <li key={techIndex} className="font-mono">{tech}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;