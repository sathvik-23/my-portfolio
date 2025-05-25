"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import Image from 'next/image';

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const projects = [
    {
      title: 'AI Voice Journal & Goal Tracker',
      description: 'Developed a modular voice agent pipeline using Whisper for speech recognition, Gemini LLM for NLP, and gTTS for text-to-speech output.',
      technologies: ['Python', 'Whisper', 'Gemini API', 'MongoDB', 'gTTS', 'Agno'],
      category: 'ai',
      thumbnail: '/images/projects/voice-journal.jpg',
      link: '',
    },
    {
      title: 'AI-Powered Video Editor',
      description: 'Created a conversational interface that lets users edit and rearrange video clips using natural language commands, integrating LLMs with MoviePy.',
      technologies: ['Python', 'MoviePy', 'LangChain', 'LLMs'],
      category: 'ai',
      thumbnail: '/images/projects/video-editor.jpg',
      link: 'https://github.com/sathvik-23/ai-video-editor',
      github: 'https://github.com/sathvik-23/ai-video-editor',
    },
    {
      title: 'ATLIQ Store Assistant',
      description: 'Built a chatbot that converts natural language to SQL using LangChain + PALM, enabling instant query responses and reducing user search effort by 40%.',
      technologies: ['LangChain', 'Hugging Face', 'MySQL', 'Chroma'],
      category: 'llm',
      thumbnail: '/images/projects/store-assistant.jpg',
      link: '',
    },
    {
      title: 'AI-Driven Equity Research Chatbot',
      description: 'Enabled natural language financial analysis by parsing and synthesizing structured insights from uploaded websites, delivering 30% improvement in research speed.',
      technologies: ['OpenAI', 'LangChain', 'Streamlit'],
      category: 'ai',
      thumbnail: '/images/projects/equity-research.jpg',
      link: '',
    },
    {
      title: 'Xencapture',
      description: 'Built a React Native app enabling real-time 3D model capture and visualization, boosting accuracy by 30% and reducing latency by 25%.',
      technologies: ['React Native', 'Firebase', 'Redux Toolkit', 'React Three Fiber'],
      category: 'web',
      thumbnail: '/images/projects/xencapture.jpg',
      link: '',
    },
  ];
  
  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-space-gray relative">
      {/* Background pattern */}
      <div 
        className="absolute inset-0 bg-cyber-grid bg-[length:40px_40px] opacity-10"
        style={{ backgroundSize: '40px 40px' }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="section-heading">Featured Projects</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore my latest work combining AI, machine learning, and full-stack development
            to create innovative solutions.
          </p>
        </motion.div>
        
        {/* Project category filter */}
        <motion.div 
          className="flex justify-center mb-12 flex-wrap gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {['all', 'ai', 'llm', 'web'].map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full border ${
                selectedCategory === category
                  ? 'bg-light-purple text-white border-light-purple'
                  : 'bg-transparent text-gray-300 border-gray-700 hover:border-light-purple'
              } transition-all`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.toUpperCase()}
            </motion.button>
          ))}
        </motion.div>
        
        {/* Project cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="glassmorphism overflow-hidden group"
            >
              <div className="h-48 bg-gradient-to-br from-dark-purple to-space-gray overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center p-4">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <div className="flex flex-wrap justify-center gap-2 mb-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span 
                          key={tech} 
                          className="text-xs px-2 py-1 bg-dark-purple/50 rounded-md text-cyber-blue"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex justify-end space-x-3">
                  {project.github && (
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-cyber-blue transition-colors"
                    >
                      <FiGithub size={18} />
                    </a>
                  )}
                  
                  {project.link && (
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-cyber-blue transition-colors"
                    >
                      <FiExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
