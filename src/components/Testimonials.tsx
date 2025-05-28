import React from 'react';
import { Bug, CheckCircle, Code2, ShieldCheck } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-green-50 via-blue-50 to-white dark:from-green-950 dark:via-blue-950 dark:to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white/90 dark:bg-gray-900/80 rounded-3xl shadow-2xl border border-green-100 dark:border-green-900 p-10">
          <h2 className="text-3xl font-extrabold text-green-800 dark:text-green-300 mb-2 text-left font-mono flex items-center gap-2">
            Testimonials <CheckCircle className="inline-block text-green-500 dark:text-green-300" size={28} />
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-green-600 to-blue-400 dark:from-green-400 dark:to-blue-300 mb-8 rounded-full"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow border border-green-100 dark:border-green-800 flex flex-col gap-2">
              <p className="text-gray-700 dark:text-gray-300 mb-2">“A true QA professional! Their automation skills and attention to detail improved our product quality immensely.”</p>
              <span className="text-sm font-semibold text-green-700 dark:text-green-300 flex items-center gap-1"><ShieldCheck size={16}/> Project Manager</span>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow border border-green-100 dark:border-green-800 flex flex-col gap-2">
              <p className="text-gray-700 dark:text-gray-300 mb-2">“Excellent at finding edge cases and ensuring robust test coverage.”</p>
              <span className="text-sm font-semibold text-green-700 dark:text-green-300 flex items-center gap-1"><Bug size={16}/> Lead Developer</span>
            </div>
            {/* Add more testimonial cards as needed */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;