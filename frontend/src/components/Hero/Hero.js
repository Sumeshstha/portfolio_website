import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import profileImage from '../../assets/profile-pic 2.png';
import ResumePreviewModal from '../ResumePreviewModal/ResumePreviewModal';

const Hero = () => {
  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);

  const openPreviewModal = () => {
    setIsPreviewModalOpen(true);
  };

  const closePreviewModal = () => {
    setIsPreviewModalOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/Sumeshstha', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/sumesh-shrestha-838822273/', label: 'LinkedIn' },
    { icon: FaEnvelope, href: 'mailto:sumeshstha94@gmail.com', label: 'Email' },
  ];

  return (
    <>
      <section id="home" className="min-h-screen bg-light-bg dark:bg-dark-bg flex items-center pt-16 overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16 sm:py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 sm:space-y-8"
            >
              {/* Main Heading */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-3 sm:space-y-4"
              >
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-light-text dark:text-dark-text leading-tight break-words">
                  Hi, I'm{' '}
                  <span className="text-light-primary dark:text-dark-primary">
                    Sumesh Shrestha
                  </span>
                  <br />
                  <span className="text-3xl sm:text-4xl lg:text-5xl">Creative Technologist</span>
                </h1>
              </motion.div>

              {/* Subheading */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl break-words"
              >
                Computer Engineering Undergraduate at Kathmandu University | Tech Enthusiast | Problem Solver
              </motion.p>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl break-words"
              >
                Building delightful, performant web experiences with modern tech. I craft interfaces, 
                automate workflows, and ship ideas fast.
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 flex-wrap"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('projects')}
                  className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-light-primary dark:bg-dark-primary text-white rounded-2xl font-semibold text-base md:text-lg hover:shadow-lg transition-all duration-300"
                >
                  View Projects
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('contact')}
                  className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 border-2 border-light-text dark:border-dark-text text-light-text dark:text-dark-text rounded-2xl font-semibold text-base md:text-lg hover:bg-light-text hover:text-light-bg dark:hover:bg-dark-text dark:hover:text-dark-bg transition-all duration-300"
                >
                  Contact Me
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={openPreviewModal} // Open the preview modal
                  className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-transparent border-2 border-light-primary dark:border-dark-primary text-light-primary dark:text-dark-primary rounded-2xl font-semibold text-base md:text-lg hover:bg-light-primary hover:text-white dark:hover:bg-dark-primary dark:hover:text-white transition-all duration-300"
                >
                  Download CV
                </motion.button>
              </motion.div>

              {/* Social Media Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="flex gap-4 sm:gap-6"
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    {...(social.href.startsWith('mailto:') ? {} : { target: "_blank", rel: "noopener noreferrer" })}
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                    className="w-12 h-12 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center text-light-text dark:text-dark-text hover:bg-light-primary dark:hover:bg-dark-primary hover:text-white transition-all duration-300 shadow-lg"
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Side - Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative flex justify-center lg:justify-end overflow-hidden"
            >
              {/* Background Decoration */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 rounded-3xl transform rotate-3 max-w-full"
              />
              
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-3xl transform -rotate-3 max-w-full"
              />

              {/* Profile Image */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 1.0 }}
                className="relative z-10 w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 max-w-full"
              >
                <div className="w-full h-full bg-white dark:bg-gray-800 rounded-3xl p-4 shadow-2xl">
                  <div className="w-full h-full rounded-2xl overflow-hidden">
                    <img 
                      src={profileImage} 
                      alt="Sumesh Shrestha - Profile" 
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-10 left-10 w-12 h-12 sm:w-16 sm:h-16 bg-yellow-400 rounded-full opacity-20 max-w-full"
              />
              <motion.div
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute bottom-10 right-10 w-10 h-10 sm:w-12 sm:h-12 bg-pink-400 rounded-full opacity-20 max-w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <ResumePreviewModal 
        isOpen={isPreviewModalOpen} 
        onClose={closePreviewModal} 
      />
    </>
  );
};

export default Hero;