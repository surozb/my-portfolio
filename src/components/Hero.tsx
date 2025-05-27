import React from 'react';
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 pb-20 bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            <span className="block animate-fade-in-1">Suraj Maharjan</span>
            <span className="block text-blue-600 dark:text-blue-400 animate-fade-in-2">Senior QA Automation Engineer</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-10 leading-relaxed animate-fade-in-3">
            Spearheading test automation initiatives and ensuring high-quality software delivery through innovative QA strategies.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-4">
            <a 
              href="#contact" 
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl flex items-center"
            >
              <Mail size={20} className="mr-2" /> Contact Me
            </a>
            <a 
              href="#" 
              className="px-8 py-3 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-medium rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl flex items-center"
            >
              <Download size={20} className="mr-2" /> Download Resume
            </a>
          </div>
          
          <div className="flex justify-center gap-6 mb-16 animate-fade-in-5">
            <a 
              href="https://www.linkedin.com/in/suraj-maharjan-a94122195/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://github.com/surajmaharjan8" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a 
              href="mailto:surajmaharjan8@gmail.com" 
              className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-200"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a 
            href="#about" 
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            aria-label="Scroll down"
          >
            <ArrowDown size={32} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;