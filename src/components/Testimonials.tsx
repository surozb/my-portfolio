import React, { useState, useEffect } from 'react';
import { CheckCircle, Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Aleeza Shahi',
      role: 'Business Analyst',
      feedback: 'Suraj is fun to work with and has great knowledge in both manual and automation testing.',
      photo: '/20250530_124821.jpg'
    },
    {
      name: 'Bibash Bogati',
      role: 'Backend Developer',
      feedback: 'Whenever changes are needed, I trust Suraj to handle them rather than relying on the BA. His technical insight and attention to detail are invaluable.',
      photo: '/dummy-profile-pic-300x300.jpg'
    },
    {
      name: 'Sujan Rai',
      role: 'Frontend Developer',
      feedback: 'Suraj’s approach to collaboration and problem-solving makes him a go-to person for implementing changes. His understanding of both frontend and backend requirements is impressive.',
      photo: '/dummy-profile-pic-300x300.jpg'
    },
    {
      name: 'Project Manager',
      role: 'Project Manager',
      feedback: 'Suraj is a fast learner who handles clients professionally. He thoroughly investigates issues, identifies root causes, and provides genuine solutions that keep clients satisfied.',
      photo: '/dummy-profile-pic-300x300.jpg'
    }
  ];

  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => setCurrent((current + 1) % testimonials.length);
  const prevTestimonial = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-green-50 via-blue-50 to-white dark:from-green-950 dark:via-blue-950 dark:to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white/90 dark:bg-gray-900/80 rounded-3xl shadow-2xl border border-green-100 dark:border-green-900 p-10">
          <h2 className="text-3xl font-extrabold text-green-800 dark:text-green-300 mb-2 text-left font-mono flex items-center gap-2">
            Testimonials <CheckCircle className="inline-block text-green-500 dark:text-green-300" size={28} />
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-green-600 to-blue-400 dark:from-green-400 dark:to-blue-300 mb-8 rounded-full"></div>
          <div className="flex justify-center items-center min-h-[350px]">
            <div className="relative w-full max-w-2xl bg-gradient-to-br from-blue-100 via-green-100 to-white dark:from-blue-900 dark:via-green-900 dark:to-gray-900 rounded-3xl shadow-2xl border-4 border-white dark:border-gray-800 p-8 flex flex-col md:flex-row items-center gap-8 overflow-hidden">
              {/* Placeholder for user image */}
              {testimonials[current].photo ? (
                <img
                  src={testimonials[current].photo}
                  alt={testimonials[current].name}
                  className="w-32 h-32 rounded-full object-cover bg-gray-200 dark:bg-gray-700 flex-shrink-0 mb-4 md:mb-0 md:mr-8 border-4 border-white dark:border-gray-800"
                />
              ) : (
                <div className="w-32 h-32 rounded-full bg-gray-200 dark:bg-gray-700 flex-shrink-0 mb-4 md:mb-0 md:mr-8 border-4 border-white dark:border-gray-800"></div>
              )}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl text-teal-400">“</span>
                  <span className="font-bold text-blue-800 dark:text-blue-200 text-lg">{testimonials[current].name}</span>
                  <span className="text-blue-600/70 dark:text-blue-300/70 text-base">- {testimonials[current].role}</span>
                  <span className="flex ml-auto text-yellow-400">
                    {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                  </span>
                </div>
                <h3 className="text-2xl font-extrabold text-blue-800 dark:text-blue-200 mb-2">AMAZING EXPERIENCE</h3>
                <p className="text-blue-900 dark:text-blue-100 text-base mb-4">{testimonials[current].feedback}</p>
                <div className="flex gap-2 justify-center mt-4">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      className={`w-8 h-2 rounded-full transition-all duration-300 ${current === idx ? 'bg-blue-600' : 'bg-blue-200 dark:bg-blue-800'}`}
                      onClick={() => setCurrent(idx)}
                      aria-label={`Go to testimonial ${idx + 1}`}
                    />
                  ))}
                </div>
                <span className="absolute bottom-6 right-8 text-4xl text-teal-400 opacity-80">”</span>
                <div className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col gap-2">
                  <button onClick={prevTestimonial} aria-label="Previous testimonial" className="text-blue-600 dark:text-blue-300 hover:scale-125 transition-transform duration-200">&#8592;</button>
                </div>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2">
                  <button onClick={nextTestimonial} aria-label="Next testimonial" className="text-blue-600 dark:text-blue-300 hover:scale-125 transition-transform duration-200">&#8594;</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;