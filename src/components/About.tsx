import React from 'react';
import { Bug, CheckCircle, Code2, ShieldCheck } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section 
      id="about" 
      className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-white dark:from-gray-900 dark:via-blue-950 dark:to-gray-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white/90 dark:bg-gray-900/80 rounded-3xl shadow-2xl border border-blue-100 dark:border-blue-900 p-10 flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/3 flex-shrink-0 flex flex-col items-center">
            <div className="rounded-full overflow-hidden border-4 border-blue-600 dark:border-blue-400 w-64 h-64 shadow-lg mb-4">
              <img 
                src="/IMG_7296.jpg" 
                alt="Profile with hat" 
                className="w-full h-full object-cover"
              />
            </div>
            <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs font-semibold px-4 py-1 rounded-full tracking-widest uppercase mb-2 shadow-sm border border-blue-200 dark:border-blue-800">QA Automation Engineer</span>
            <div className="flex gap-3 mt-2">
              <Bug className="text-blue-600 dark:text-blue-400" size={24} />

              <CheckCircle className="text-green-600 dark:text-green-400" size={24} />

              <Code2 className="text-gray-700 dark:text-gray-300" size={24} />

              <ShieldCheck className="text-purple-600 dark:text-purple-400" size={24} />

            </div>
          </div>
          <div className="md:w-2/3">
            <h2 className="text-4xl font-extrabold text-blue-800 dark:text-blue-300 mb-2 text-left font-mono flex items-center gap-2">
              About Me <Bug className="inline-block text-blue-500 dark:text-blue-300" size={32} />
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-green-400 dark:from-blue-400 dark:to-green-300 mb-8 rounded-full"></div>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              As a <span className="font-semibold text-blue-700 dark:text-blue-300">Senior QA Automation Engineer</span> at Maitri Services, I lead test automation initiatives and performance testing to ensure high-quality software delivery. My expertise lies in developing robust automation frameworks and implementing effective testing strategies.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              I specialize in creating and maintaining automated test scripts, conducting performance testing, and collaborating with cross-functional teams to integrate quality assurance practices throughout the software development lifecycle.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              My approach combines technical expertise with strategic thinking to optimize testing processes and enhance product reliability. I'm passionate about staying current with the latest testing methodologies and automation tools to deliver the best possible results.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              I am a dedicated Quality Assurance professional with hands-on experience in both manual and automated testing. My passion lies in ensuring software reliability, optimizing testing processes, and collaborating with teams to deliver high-quality digital solutions. I am committed to continuous learning and leveraging the latest tools, including AI, to drive innovation in QA.
            </p>
            <div className="mt-8">
              <h3 className="text-xl font-bold text-blue-700 dark:text-blue-300 mb-2 font-mono flex items-center gap-2">
                Tools & Technologies <CheckCircle className="inline-block text-green-500 dark:text-green-300" size={20} />
              </h3>
              <div className="flex flex-wrap gap-4">
                <span className="inline-flex items-center gap-1 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-sm font-medium text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700"><Code2 size={16}/> Selenium</span>
                <span className="inline-flex items-center gap-1 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-sm font-medium text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700"><Code2 size={16}/> Cypress</span>
                <span className="inline-flex items-center gap-1 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-sm font-medium text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700"><Code2 size={16}/> Playwright</span>
                <span className="inline-flex items-center gap-1 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-sm font-medium text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700"><ShieldCheck size={16}/> Postman</span>
                <span className="inline-flex items-center gap-1 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-sm font-medium text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700"><Bug size={16}/> JMeter</span>
                <span className="inline-flex items-center gap-1 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-sm font-medium text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700"><CheckCircle size={16}/> Jest</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;