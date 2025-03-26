// import React from 'react';
// import { motion } from 'framer-motion';
// import profileImg from '../assets/profile.jpg';

// const About = () => {
//   const skills = [
//     'Python', 'Django', 'HTML', 'CSS', 'JavaScript', 'ReactJS', 
//     'MySQL', 'MongoDB', 'Git', 'GitHub', 'VS Code', 'Google Colab'
//   ];

//   return (
//     <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
//       {/* Section Heading */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="mb-12"
//       >
//         <h2 className="text-3xl font-bold text-[#ccd6f6] flex items-center">
//           <span className="text-[#64ffda] font-mono mr-2">01.</span> About Me
//           <span className="ml-4 h-px bg-[#233554] flex-grow"></span>
//         </h2>
//       </motion.div>

//       <div className="flex flex-col md:flex-row items-center justify-between gap-12">
//         {/* Text Section */}
//         <motion.div 
//           initial={{ opacity: 0, x: -20 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//           className="md:w-3/5"
//         >
//           <div className="space-y-4 text-[#8892b0]">
//             <p>
//               Hello, I'm <strong>K.V. Subbarao</strong>. I recently completed my 
//               <strong> B.Tech in CSE-AI from Parul University, Vadodara (2024)</strong>.
//             </p>
//             <p>
//               I am a passionate software developer with strong knowledge of <strong>Python and Web Development</strong>. 
//               My expertise includes <strong>Frontend Development with React.js</strong> and backend development using 
//               <strong> Django</strong>.
//             </p>
//             <p>
//               Currently, I'm exploring more in <strong>Full-Stack Development</strong> and seeking opportunities to work 
//               on impactful projects.
//             </p>
//             <p>Here are some technologies I have been working with:</p>
//           </div>

//           {/* Skills List */}
//           <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
//             {skills.map((skill, index) => (
//               <motion.div 
//                 key={index}
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.3, delay: 0.3 + (index * 0.05) }}
//                 className="flex items-center"
//               >
//                 <span className="text-[#64ffda] mr-2">▹</span>
//                 <span className="text-[#8892b0] text-sm">{skill}</span>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>

//         {/* Profile Image Section (Aligned Right) */}
//         <motion.div 
//           initial={{ opacity: 0, x: 20 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5, delay: 0.4 }}
//           className="md:w-2/5 flex justify-end"
//         >
//           <div className="relative group w-60 h-72">
//             <img 
//               src={profileImg} 
//               alt="Subbarao" 
//               className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
//             />
//             <div className="absolute inset-0 border-2 border-[#64ffda] rounded-lg -z-10 
//                 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300">
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default About;



// import '../styles/About.css';
// import profileImg from '../assets/profile.jpg'; // Ensure this path is correct

// const About = () => {
//   return (
//     <section className="about">
//       <div className="about-content">
//         <h2 className="about-title">About Me</h2>
//         <p>
//           Hello, I'm <b>K.V. Subbarao</b>. I recently completed my <b>B.Tech in CSE-AI from Parul University, Vadodara (2024)</b>. I am a passionate and dedicated software developer with strong knowledge of <b>Python and Web Development</b>.
//         </p>
//         <p>
//           I have a genuine passion for <b>Python and Frontend Development</b>, especially using <b>React.js</b> for web projects.
//         </p>
//         <p>
//           I am currently learning <b>Frontend Development with React.js</b> and looking for opportunities to grow and contribute to impactful projects.
//         </p>
//         <p>Here are a few technologies I've been working with recently:</p>
//         <div className="tech-list">
//           <ul>
//             <li>Python</li>
//             <li>CSS</li>
//             <li>MySQL</li>
//             <li>GitHub</li>
//           </ul>
//           <ul>
//             <li>Django</li>
//             <li>JavaScript</li>
//             <li>MongoDB</li>
//             <li>VS Code</li>
//           </ul>
//           <ul>
//             <li>HTML</li>
//             <li>ReactJS</li>
//             <li>Git</li>
//             <li>Google Colab</li>
//           </ul>
//         </div>
//       </div>
//       <div className="about-image">
//         <img src={profileImg} alt="K.V. Subbarao" />
//       </div>
//     </section>
//   );
// };

// export default About;


import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/profile.jpg'; // Adjust the path as needed

const About = () => {
  const skills = [
    'Python', 
    'Django', 
    'HTML', 
    'CSS', 
    'JavaScript', 
    'ReactJS', 
    'MySQL', 
    'MongoDB', 
    'Git', 
    'GitHub', 
    'VS Code', 
    'Google Colab'
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-3xl font-bold text-[#ccd6f6] flex items-center">
          <span className="text-[#64ffda] font-mono mr-2"></span> About Me
          <span className="ml-4 h-px bg-[#233554] flex-grow"></span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:col-span-3"
        >
          <div className="space-y-4 text-[#8892b0]">
            <p>
              Hello, I'm K.V. Subbarao. I recently completed my <strong>B.Tech in CSE-AI from Parul University, Vadodara (2024)</strong>.  
              I am a passionate and dedicated software developer with strong knowledge of <strong>Python and Web Development</strong>.  
            </p>
            <p>
              I have a genuine passion for <strong>Python and Frontend Development</strong>, especially using <strong>React.js</strong> for web projects.
            </p>
            <p>
              I am currently learning <strong>Frontend Development with React.js</strong> and looking for opportunities to grow and contribute to impactful projects.
            </p>
            <p>
              Here are a few technologies I've been working with recently:
            </p>
          </div>

          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-2">
            {skills.map((skill, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 + (index * 0.1) }}
                className="flex items-center"
              >
                <span className="text-[#64ffda] mr-2">▹</span>
                <span className="text-[#8892b0] text-sm">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Profile Image Section with Hover Zoom Effect */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="md:col-span-2 flex justify-center"
        >
          <div className="relative group">
            <div className="relative z-10 rounded-md overflow-hidden">
              <img 
                src={profileImg} 
                alt="Subbarao" 
                // className="w-90 h-80 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                className="w-90 h-80 hover:grayscale-0 transition-all duration-300 mix-blend-multiply hover:mix-blend-normal"
              />
            </div>
            <div className="absolute -inset-2.5 border-2 border-[#64ffda] rounded-md -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
