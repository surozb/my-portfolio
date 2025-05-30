import React, { useState } from 'react';
import { Bug, CheckCircle, Code2, ExternalLink, Github, ShieldCheck } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: 'AI-Powered Portfolio Website',
      description: 'This portfolio website was designed and developed using AI-assisted tools to showcase my skills and experience in software testing and quality assurance.',
      image: 'https://images.pexels.com/photos/11035371/pexels-photo-11035371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['AI', 'React', 'Portfolio', 'Web'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  // Extract unique tags from projects
  const allTags = ['all', ...Array.from(new Set(projects.flatMap(project => project.tags)))];
  
  // Filter projects based on active filter
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.tags.includes(activeFilter));

  return (
    <section 
      id="projects" 
      className="py-20 bg-gradient-to-br from-blue-50 via-green-50 to-white dark:from-blue-950 dark:via-green-950 dark:to-gray-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white/90 dark:bg-gray-900/80 rounded-3xl shadow-2xl border border-blue-100 dark:border-blue-900 p-10">
          <h2 className="text-3xl font-extrabold text-blue-800 dark:text-blue-300 mb-2 text-left font-mono flex items-center gap-2">
            Projects <Bug className="inline-block text-blue-500 dark:text-blue-300" size={28} />
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-green-400 dark:from-blue-400 dark:to-green-300 mb-8 rounded-full"></div>
          
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {allTags.map((tag, index) => (
              <button
                key={index}
                onClick={() => setActiveFilter(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  activeFilter === tag
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {tag.charAt(0).toUpperCase() + tag.slice(1)}
              </button>
            ))}
          </div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow border border-blue-100 dark:border-blue-800 flex flex-col gap-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-700 dark:text-blue-300 mb-1 flex items-center gap-2">
                    <CheckCircle size={18}/> {project.title}
                  </h3>
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-end gap-4">
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl} 
                        className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-200"
                        aria-label={`GitHub repository for ${project.title}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={20} />
                      </a>
                    )}
                    
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl} 
                        className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-200"
                        aria-label={`Live demo for ${project.title}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;