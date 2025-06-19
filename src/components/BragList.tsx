import React, { useState } from 'react';
import { Award, TrendingUp, Zap, CheckCircle, BarChart, Users, FileText, ArrowRight } from 'lucide-react';

const BragList: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Achievements' },
    { id: 'projects', name: 'Key Projects' },
    { id: 'impact', name: 'Business Impact' },
    { id: 'skills', name: 'Skills & Growth' }
  ];

  return (
  <section id="braglist" className="py-20 bg-gradient-to-br from-yellow-50 via-blue-50 to-white dark:from-yellow-900 dark:via-blue-950 dark:to-gray-900">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white/90 dark:bg-gray-900/80 rounded-3xl shadow-2xl border border-yellow-100 dark:border-yellow-900 p-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div>
            <h2 className="text-3xl font-extrabold text-yellow-800 dark:text-yellow-300 font-mono flex items-center gap-2 mb-2">
              <Award className="inline-block text-yellow-500 dark:text-yellow-300" size={28} /> Brag Document
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Inspired by <a href="https://jvns.ca/blog/brag-documents/" target="_blank" rel="noopener noreferrer" className="underline text-blue-600 dark:text-blue-400">Julia Evans' Brag Documents</a></p>
          </div>
        </div>
        <div className="w-16 h-1 bg-gradient-to-r from-yellow-600 to-blue-400 dark:from-yellow-400 dark:to-blue-300 mb-6 rounded-full"></div>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map(category => (
            <button 
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-3 py-1 rounded-full text-sm transition-colors ${
                activeCategory === category.id 
                  ? 'bg-yellow-500 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {(activeCategory === 'all' || activeCategory === 'skills') && (
          <div className="mb-10">
            <h3 className="text-xl font-bold text-yellow-700 dark:text-yellow-400 mb-4 flex items-center">
              <CheckCircle className="mr-2" size={20} /> Skills & Professional Growth
            </h3>
            <ul className="space-y-6 text-lg pl-3">              <li className="flex items-start gap-3 bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                <TrendingUp className="text-blue-500 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold">InfoDevelopers: QA Foundation</h4>
                  <ul className="list-disc pl-6 text-base mt-2 space-y-2">
                    <li>Created numerous detailed test cases for banking applications, significantly improving test coverage</li>
                    <li>Generated comprehensive VAPT reports using Burp Suite, identifying and helping resolve multiple critical security vulnerabilities</li>
                    <li>Performed load testing with JMeter that identified bottlenecks, substantially improving system performance under load</li>
                  </ul>
                </div>
              </li>
              
              <li className="flex items-start gap-3 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <Zap className="text-green-500 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold">Yenya Soft: Automation Excellence</h4>
                  <ul className="list-disc pl-6 text-base mt-2 space-y-2">
                    <li>Architected a CI/CD pipeline that dramatically reduced regression testing time</li>
                    <li>Led the transition from manual to automated testing, cutting release validation time from days to hours</li>
                    <li>Mentored junior QA engineers on automation best practices and Cypress implementation</li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        )}
        
        {(activeCategory === 'all' || activeCategory === 'projects') && (
          <div className="mb-10">
            <h3 className="text-xl font-bold text-yellow-700 dark:text-yellow-400 mb-4 flex items-center">
              <FileText className="mr-2" size={20} /> Key Projects & Achievements
            </h3>
            <ul className="space-y-6 text-lg pl-3">              <li className="flex items-start gap-3 bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                <CheckCircle className="text-yellow-600 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold">Maitri Services: End-to-End Testing Framework</h4>
                  <ul className="list-disc pl-6 text-base mt-2 space-y-2">
                    <li>Developed a Playwright automation framework with Page Object Model that achieved excellent test coverage</li> 
                    <li>Integrated test results with QASE, providing real-time visibility into test status and metrics</li>
                    <li>Implemented Jenkins email notifications that improved team communication and significantly reduced issue response time</li>
                  </ul>
                </div>
              </li>
              
              <li className="flex items-start gap-3 bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                <Users className="text-purple-600 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold">Cross-Team Collaboration</h4>
                  <ul className="list-disc pl-6 text-base mt-2 space-y-2">
                    <li>Collaborated with development teams to implement shift-left testing, catching many more bugs in early development</li>
                    <li>Consulted with UX team to improve accessibility testing, helping achieve WCAG compliance</li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        )}
        
        {(activeCategory === 'all' || activeCategory === 'impact') && (
          <div>
            <h3 className="text-xl font-bold text-yellow-700 dark:text-yellow-400 mb-4 flex items-center">
              <BarChart className="mr-2" size={20} /> Business Impact
            </h3>
            <ul className="space-y-6 text-lg pl-3">              <li className="flex items-start gap-3 bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg">
                <ArrowRight className="text-indigo-600 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold">Quality Improvements</h4>
                  <ul className="list-disc pl-6 text-base mt-2 space-y-2">
                    <li>Significantly reduced post-release defects through improved automated test coverage</li>
                    <li>Shortened release cycles from bi-weekly to weekly by optimizing QA processes</li>
                    <li>Improved customer satisfaction by delivering more stable software with fewer bugs</li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  </section>
  );
};

export default BragList;
