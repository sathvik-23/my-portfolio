"use client";

import { motion } from 'framer-motion';
import { FiCpu, FiCode, FiServer, FiCloud, FiDatabase, FiGitBranch } from 'react-icons/fi';

export default function AboutSection() {
  const skills = [
    { 
      category: 'AI/ML', 
      icon: <FiCpu />,
      items: ['LLMs (GPT, Gemini, LLaMA)', 'NLP', 'RAG', 'Transformers', 'Generative AI', 'Prompt Engineering', 'BERT', 'Computer Vision']
    },
    { 
      category: 'Frameworks & Tools', 
      icon: <FiCode />,
      items: ['PyTorch', 'TensorFlow', 'scikit-learn', 'Keras', 'Hugging Face', 'LangChain', 'OpenAI SDK', 'CrewAI', 'Agno (PhiData)', 'MCP']
    },
    { 
      category: 'Programming', 
      icon: <FiServer />,
      items: ['Python (Primary)', 'JavaScript', 'TypeScript', 'SQL', 'Bash', 'HTML', 'CSS']
    },
    { 
      category: 'Cloud & DevOps', 
      icon: <FiCloud />,
      items: ['AWS (EC2, S3, RDS, API Gateway)', 'Microsoft Azure', 'Docker', 'GitHub Actions', 'Fastlane']
    },
    { 
      category: 'Databases', 
      icon: <FiDatabase />,
      items: ['PostgreSQL', 'MySQL', 'MongoDB', 'DynamoDB', 'Supabase', 'Prisma', 'Redis', 'Chroma', 'Pinecone', 'FAISS']
    },
    { 
      category: 'Developer Tools', 
      icon: <FiGitBranch />,
      items: ['VS Code', 'Cursor', 'Jupyter Notebook', 'ESLint', 'Prettier', 'PyTest', 'Agile', 'CI/CD']
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-deep-black to-space-gray">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-heading">About Me</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Bio Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="glassmorphism p-8 h-full">
                <h3 className="text-2xl font-bold mb-4 text-cyber-blue">Who I Am</h3>
                <p className="text-gray-300 mb-4">
                  I'm a results-driven AI Software Engineer with strong expertise in building 
                  production-ready LLM-based systems, multimodal AI agents, and full-stack 
                  applications.
                </p>
                <p className="text-gray-300 mb-4">
                  My passion lies in developing intelligent systems that solve real-world problems 
                  using cutting-edge AI/ML technologies. I specialize in Python development with 
                  a focus on LangChain, OpenAI, and Agno frameworks.
                </p>
                <p className="text-gray-300">
                  I have a proven track record of delivering impactful AI projects and 
                  product-oriented development, integrating AI, cloud infrastructure (AWS, Azure), 
                  and modern DevOps practices.
                </p>
                
                <div className="mt-8">
                  <h4 className="text-xl font-semibold mb-3 text-light-purple">Education</h4>
                  <div className="border-l-2 border-light-purple pl-4">
                    <p className="text-white font-medium">B.Tech - Artificial Intelligence & Machine Learning</p>
                    <p className="text-gray-300">Jyothy Institute of Technology, Bengaluru</p>
                    <p className="text-gray-400 text-sm">Dec 2020 - Apr 2024</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Skills Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="glassmorphism p-8 h-full">
                <h3 className="text-2xl font-bold mb-6 text-cyber-blue">Technical Expertise</h3>
                
                <div className="grid grid-cols-1 gap-6">
                  {skills.map((skillGroup, index) => (
                    <motion.div 
                      key={skillGroup.category}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                      className="border border-light-purple/30 rounded-lg p-4 hover:border-light-purple transition-colors"
                    >
                      <div className="flex items-center mb-3">
                        <span className="text-cyber-blue mr-2">
                          {skillGroup.icon}
                        </span>
                        <h4 className="text-lg font-semibold text-white">{skillGroup.category}</h4>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.items.map((skill) => (
                          <span 
                            key={skill} 
                            className="bg-dark-purple/50 text-xs px-2 py-1 rounded-md text-gray-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
