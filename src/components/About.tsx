import React from 'react';

const About: React.FC = () => {
  return (
    <section 
      id="about" 
      className="py-20 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 text-center">
            About Me
          </h2>
          <div className="w-16 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-10"></div>
          
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/3 flex-shrink-0">
              <div className="rounded-full overflow-hidden border-4 border-blue-600 dark:border-blue-400 w-64 h-64 mx-auto">
                <img 
                  src="/src/assets/IMG_7296.jpg" 
                  alt="Profile with hat" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="md:w-2/3">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                As a Senior QA Automation Engineer at Maitri Services, I lead test automation initiatives 
                and performance testing to ensure high-quality software delivery. My expertise lies in 
                developing robust automation frameworks and implementing effective testing strategies.
              </p>
              
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                I specialize in creating and maintaining automated test scripts, conducting performance testing, 
                and collaborating with cross-functional teams to integrate quality assurance practices throughout 
                the software development lifecycle.
              </p>
              
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                My approach combines technical expertise with strategic thinking to optimize testing processes 
                and enhance product reliability. I'm passionate about staying current with the latest testing 
                methodologies and automation tools to deliver the best possible results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;