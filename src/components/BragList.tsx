import React from 'react';
import { Award, TrendingUp, Zap, CheckCircle } from 'lucide-react';

const BragList: React.FC = () => (
  <section id="braglist" className="py-20 bg-gradient-to-br from-yellow-50 via-blue-50 to-white dark:from-yellow-900 dark:via-blue-950 dark:to-gray-900">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white/90 dark:bg-gray-900/80 rounded-3xl shadow-2xl border border-yellow-100 dark:border-yellow-900 p-10">
        <h2 className="text-3xl font-extrabold text-yellow-800 dark:text-yellow-300 font-mono flex items-center gap-2 mb-4">
          <Award className="inline-block text-yellow-500 dark:text-yellow-300" size={28} /> Brag List
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-yellow-600 to-blue-400 dark:from-yellow-400 dark:to-blue-300 mb-8 rounded-full"></div>
        <ul className="space-y-8 text-lg">
          <li className="flex items-start gap-4">
            <TrendingUp className="text-blue-500 mt-1" size={24} />
            <span>
              <b>Learned QA from Scratch at InfoDevelopers:</b> Mastered manual testing, test case creation, and bug reporting. Developed skills in load testing using JMeter, generated VAPT reports with Burp Suite, and started automation with Cypress.
            </span>
          </li>
          <li className="flex items-start gap-4">
            <Zap className="text-green-500 mt-1" size={24} />
            <span>
              <b>Automation Pipeline Implementation at Yenya Soft:</b> Set up a CI/CD automation pipeline with GitLab, enforced quality gates, and advanced Cypress automation for robust test coverage.
            </span>
          </li>
          <li className="flex items-start gap-4">
            <CheckCircle className="text-yellow-600 mt-1" size={24} />
            <span>
              <b>Advanced Automation & Test Management at Maitri Services:</b> Switched to Playwright, wrote clean automation code using POM, integrated with Jenkins, implemented QASE for test management, and set up email notifications for Jenkins build results.
            </span>
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default BragList;
