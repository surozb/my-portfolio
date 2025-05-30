import React from 'react';
import { Bug, CheckCircle, Code2, ShieldCheck } from 'lucide-react';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-green-50 via-blue-50 to-white dark:from-green-950 dark:via-blue-950 dark:to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white/90 dark:bg-gray-900/80 rounded-3xl shadow-2xl border border-green-100 dark:border-green-900 p-10">
          <h2 className="text-3xl font-extrabold text-green-800 dark:text-green-300 mb-2 text-left font-mono flex items-center gap-2">
            Skills <Code2 className="inline-block text-green-500 dark:text-green-300" size={28} />
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-green-600 to-blue-400 dark:from-green-400 dark:to-blue-300 mb-8 rounded-full"></div>
          <div className="flex flex-wrap gap-4">
            <span className="inline-flex items-center gap-1 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full text-base font-medium text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700">
              <CheckCircle size={18}/> Automated Testing (Playwright, Cypress)
            </span>
            <span className="inline-flex items-center gap-1 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full text-base font-medium text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700">
              <Code2 size={18}/> CI/CD Pipeline Implementation (Jenkins)
            </span>
            <span className="inline-flex items-center gap-1 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full text-base font-medium text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700">
              <Bug size={18}/> Manual Quality Assurance
            </span>
            <span className="inline-flex items-center gap-1 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full text-base font-medium text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700">
              <ShieldCheck size={18}/> Security Testing & Vulnerability Assessment (Burp Suite)
            </span>
            <span className="inline-flex items-center gap-1 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full text-base font-medium text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700">
              <Code2 size={18}/> Performance Testing (JMeter)
            </span>
            <span className="inline-flex items-center gap-1 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full text-base font-medium text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700">
              <ShieldCheck size={18}/> API Testing & Automation (Postman)
            </span>
            <span className="inline-flex items-center gap-1 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full text-base font-medium text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700">
              <CheckCircle size={18}/> Test Case Management & Documentation
            </span>
            <span className="inline-flex items-center gap-1 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full text-base font-medium text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700">
              <Code2 size={18}/> Automation Integration with QASE
            </span>
            <span className="inline-flex items-center gap-1 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full text-base font-medium text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700">
              <CheckCircle size={18}/> Version Control (GitHub)
            </span>
            <span className="inline-flex items-center gap-1 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full text-base font-medium text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700">
              <Code2 size={18}/> AI-Driven Automation & Modern Web Development
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;