"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiChevronRight } from 'react-icons/fi';
import Image from 'next/image';

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showAll, setShowAll] = useState(false);
  
  const featuredProjects = [
    {
      title: 'AI Voice Journal & Goal Tracker',
      description: 'Developed a modular voice agent pipeline using Whisper for speech recognition, Gemini LLM for NLP, and gTTS for text-to-speech output.',
      technologies: ['Python', 'Whisper', 'Gemini API', 'MongoDB', 'gTTS', 'Agno'],
      category: 'ai',
      thumbnail: '/images/projects/voice-journal.jpg',
      link: 'https://github.com/sathvik-23/hope',
      github: 'https://github.com/sathvik-23/hope',
      featured: true
    },
    {
      title: 'AI-Powered Video Editor',
      description: 'Created a conversational interface that lets users edit and rearrange video clips using natural language commands, integrating LLMs with MoviePy.',
      technologies: ['Python', 'MoviePy', 'LangChain', 'LLMs'],
      category: 'ai',
      thumbnail: '/images/projects/video-editor.jpg',
      link: 'https://github.com/sathvik-23/ai-video-editor',
      github: 'https://github.com/sathvik-23/ai-video-editor',
      featured: true
    },
    {
      title: 'ATLIQ Store Assistant',
      description: 'Built a chatbot that converts natural language to SQL using LangChain + PALM, enabling instant query responses and reducing user search effort by 40%.',
      technologies: ['LangChain', 'Hugging Face', 'MySQL', 'Chroma'],
      category: 'llm',
      thumbnail: '/images/projects/store-assistant.jpg',
      link: 'https://github.com/sathvik-23',
      github: 'https://github.com/sathvik-23',
      featured: true
    },
    {
      title: 'AI-Driven Equity Research Chatbot',
      description: 'Enabled natural language financial analysis by parsing and synthesizing structured insights from uploaded websites, delivering 30% improvement in research speed.',
      technologies: ['OpenAI', 'LangChain', 'Streamlit'],
      category: 'ai',
      thumbnail: '/images/projects/equity-research.jpg',
      link: 'https://github.com/sathvik-23',
      github: 'https://github.com/sathvik-23',
      featured: true
    },
    {
      title: 'Xencapture',
      description: 'Built a React Native app enabling real-time 3D model capture and visualization, boosting accuracy by 30% and reducing latency by 25%.',
      technologies: ['React Native', 'Firebase', 'Redux Toolkit', 'React Three Fiber'],
      category: 'web',
      thumbnail: '/images/projects/xencapture.jpg',
      link: 'https://github.com/sathvik-23',
      github: 'https://github.com/sathvik-23',
      featured: true
    },
    {
      title: 'Agent with Tools',
      description: 'Developed an advanced AI agent framework leveraging Agno to integrate various tools like web search, calculator, and Python interpreter for solving complex tasks autonomously.',
      technologies: ['Python', 'Agno', 'LLMs', 'Tool Integration'],
      category: 'ai',
      thumbnail: '/images/projects/agent-tools.jpg',
      link: 'https://github.com/sathvik-23/Agent-with-tools',
      github: 'https://github.com/sathvik-23/Agent-with-tools',
      featured: true
    },
  ];
  
  const additionalProjects = [
    {
      title: 'Agents with Knowledge',
      description: 'Created a sophisticated RAG-based agent system using Agno that can process and reason over multiple knowledge sources, enabling contextual understanding and high-quality responses.',
      technologies: ['Python', 'Agno', 'RAG', 'Vector DB'],
      category: 'ai',
      link: 'https://github.com/sathvik-23/Agents-with-knowledge',
      github: 'https://github.com/sathvik-23/Agents-with-knowledge',
      featured: false
    },
    {
      title: 'Basic Agent',
      description: 'Implemented a foundational AI agent using the Agno framework that demonstrates core LLM capabilities like reasoning, task planning, and simple interaction patterns.',
      technologies: ['Python', 'Agno', 'LLM'],
      category: 'ai',
      link: 'https://github.com/sathvik-23/Basic-agent',
      github: 'https://github.com/sathvik-23/Basic-agent',
      featured: false
    },
    {
      title: 'Market Analysis Agent',
      description: 'Built an AI-powered agent that analyzes market trends and financial data to provide insights and recommendations, using Agno for orchestration and API integrations.',
      technologies: ['Python', 'Agno', 'Financial APIs', 'Data Analysis'],
      category: 'ai',
      link: 'https://github.com/sathvik-23/market-analysis-agent',
      github: 'https://github.com/sathvik-23/market-analysis-agent',
      featured: false
    },
    {
      title: 'Pet Listing Platform',
      description: 'Developed a full-stack web application for pet adoption featuring user authentication, pet listings with search/filter capabilities, and a responsive UI.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      category: 'web',
      link: 'https://github.com/sathvik-23/PetListing',
      github: 'https://github.com/sathvik-23/PetListing',
      featured: false
    },
    {
      title: 'Tax Calculator',
      description: 'Created an interactive tax calculation tool with a clean UI that helps users estimate taxes based on income, deductions, and filing status with real-time updates.',
      technologies: ['JavaScript', 'HTML/CSS', 'Tax Algorithms'],
      category: 'web',
      link: 'https://github.com/sathvik-23/Tax-Calculator.hithub.io',
      github: 'https://github.com/sathvik-23/Tax-Calculator.hithub.io',
      featured: false
    },
    {
      title: 'Music Records Web Scraper',
      description: 'Built an automated web scraping tool to collect and analyze music record data from multiple sources, with data cleaning and structured output capabilities.',
      technologies: ['Python', 'BeautifulSoup', 'Pandas', 'Data Visualization'],
      category: 'data',
      link: 'https://github.com/sathvik-23/web-scraping_music_records',
      github: 'https://github.com/sathvik-23/web-scraping_music_records',
      featured: false
    },
    {
      title: 'AI SaaS Platform',
      description: 'Developed a Software-as-a-Service platform that provides AI capabilities including image generation, text completion, and code assistance with subscription-based pricing tiers.',
      technologies: ['Next.js', 'OpenAI API', 'Stripe', 'Prisma'],
      category: 'ai',
      link: 'https://github.com/sathvik-23/aisaas',
      github: 'https://github.com/sathvik-23/aisaas',
      featured: false
    },
    {
      title: 'Simple Todo App',
      description: 'Created a clean, intuitive todo application with features like task categorization, due dates, and progress tracking to improve personal productivity.',
      technologies: ['React', 'Context API', 'LocalStorage'],
      category: 'web',
      link: 'https://github.com/sathvik-23/simple-Todo-app',
      github: 'https://github.com/sathvik-23/simple-Todo-app',
      featured: false
    },
    {
      title: 'YouTube RAG System',
      description: 'Built a Retrieval-Augmented Generation system that indexes YouTube video transcripts and enables natural language querying across video content with accurate, source-attributed responses.',
      technologies: ['Python', 'LangChain', 'YouTube API', 'Vector Database'],
      category: 'ai',
      link: 'https://github.com/sathvik-23/youtube-rag',
      github: 'https://github.com/sathvik-23/youtube-rag',
      featured: false
    }
  ];
  
  // Combine projects based on display mode
  const allProjects = [...featuredProjects, ...additionalProjects];
  const displayProjects = showAll ? allProjects : featuredProjects;
  
  // Filter projects based on selected category
  const filteredProjects = selectedCategory === 'all' 
    ? displayProjects 
    : displayProjects.filter(project => project.category === selectedCategory);

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
          {['all', 'ai', 'llm', 'web', 'data'].map((category) => (
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
                  
                  {project.link && project.link !== project.github && (
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
        
        {/* View More/Less Button */}
        <div className="mt-12 text-center">
          <motion.button
            onClick={() => setShowAll(!showAll)}
            className="cyber-button inline-flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {showAll ? 'Show Featured Projects' : 'View All Projects'} 
            <FiChevronRight className="ml-2" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
