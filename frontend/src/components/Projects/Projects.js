import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaEye } from 'react-icons/fa';
import FriendlyChat from "../../assets/friendlychat.png";
import kalimati from "../../assets/kalimati.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Friendly Chat',
      description: 'A real-time chat application with user authentication and theme toggle functionality.',
      techStack: ['Flutter', 'Firebase'],
      status: 'Live',
      statusColor: 'bg-green-500',
      buttonText: 'View Live',
      buttonIcon: FaEye,
      buttonAction: 'https://friendlychat-a8bbc.web.app/',
      image: FriendlyChat 

    },
    {
      id: 2,
      title: 'Pneumonia Detection System',
      description: 'An AI-powered system for detecting pneumonia from chest X-rays using deep learning.',
      techStack: ['Python', 'TensorFlow', 'OpenCV'],
      status: 'Completed',
      statusColor: 'bg-green-500',
      buttonText: 'View Project',
      buttonIcon: FaEye,
      buttonAction: 'https://github.com/sumeshshrestha/pneumonia-detection',
      image: '/project-quiz.jpg'  // Placeholder image - would ideally show medical AI visualization
    },
    {
      id: 3,
      title: 'Kalimati Market Monitor',
      description: 'A data visualization platform for monitoring vegetable and fruit prices at Kalimati market in Nepal.',
      techStack: ['Python', 'Streamlit', 'Pandas', 'Plotly'],
      status: 'Live',
      statusColor: 'bg-green-500',
      buttonText: 'View Live',
      buttonIcon: FaEye,
      buttonAction: 'https://kalimatitarkari.streamlit.app/',
      image: kalimati
    },
    {
      id: 4,
      title: 'Recipe Website',
      description: 'A responsive recipe sharing platform with search and filtering capabilities.',
      techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
      status: 'In Development',
      statusColor: 'bg-yellow-500',
      buttonText: 'View Progress',
      buttonIcon: FaEye,
      buttonAction: 'https://github.com/sumeshshrestha/recipe-website',
      image: '/project-quiz.jpg'
    }
  ];

  const handleProjectAction = (action) => {
    if (action.startsWith('http')) {
      window.open(action, '_blank', 'noopener,noreferrer');
    } else {
      // Handle internal actions
      console.log('Project action:', action);
    }
  };

  return (
    <section id="projects" className="py-16 sm:py-20 bg-light-bg dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-light-text dark:text-dark-text mb-4">
            Projects
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                {/* Project Image */}
                <div className="h-48 relative overflow-hidden rounded-t-2xl">
                  {project.image && project.image !== "#" && (
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className={`w-full h-full transition-transform duration-300 group-hover:scale-105 ${
                        project.id === 1 ? 'object-contain bg-transparent' : 'object-cover'
                      }`}
                    />
                  )}
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${project.statusColor}`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-light-text dark:text-dark-text mb-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Action Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleProjectAction(project.buttonAction)}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-light-primary dark:bg-dark-primary text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 group-hover:bg-opacity-90"
                  >
                    <project.buttonIcon className="w-4 h-4" />
                    {project.buttonText}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open('https://github.com/Sumeshstha', '_blank')}
            className="px-8 py-4 border-2 border-light-primary dark:border-dark-primary text-light-primary dark:text-dark-primary rounded-2xl font-semibold text-lg hover:bg-light-primary dark:hover:bg-dark-primary hover:text-white transition-all duration-300 flex items-center gap-2 mx-auto"
          >
            <FaGithub className="w-5 h-5" />
            View More on GitHub
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;