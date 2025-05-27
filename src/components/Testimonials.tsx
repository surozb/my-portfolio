import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  image: string;
  text: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'Product Manager',
      company: 'Tech Innovators Inc.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      text: 'Working with this professional was an absolute pleasure. Their technical expertise and problem-solving skills significantly contributed to the success of our project. They consistently delivered high-quality work ahead of deadlines and effectively communicated complex technical concepts to non-technical stakeholders.'
    },
    {
      id: 2,
      name: 'David Martinez',
      position: 'CTO',
      company: 'Innovative Solutions',
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      text: 'An exceptional talent who brings both technical prowess and creative thinking to every project. Their ability to anticipate challenges and proactively address them saved us countless hours and resources. Beyond their technical contributions, they fostered a collaborative environment that elevated our entire team\'s performance.'
    },
    {
      id: 3,
      name: 'Emily Chen',
      position: 'Design Director',
      company: 'Creative Studios',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      text: 'I\'ve collaborated with many professionals throughout my career, but few have impressed me as much as this individual. Their deep understanding of both design principles and technical implementation created a seamless workflow between our design and development teams. The result was a product that not only looked beautiful but functioned flawlessly.'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section 
      id="testimonials" 
      className="py-20 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 text-center">
            Testimonials
          </h2>
          <div className="w-16 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-16"></div>
          
          <div className="relative">
            <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 text-blue-600 dark:text-blue-400 opacity-30">
              <Quote size={80} />
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 md:p-12 shadow-lg">
              <div className="flex flex-col md:flex-row items-center md:space-x-8">
                <div className="mb-6 md:mb-0 flex-shrink-0">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-blue-600 dark:border-blue-400">
                    <img 
                      src={testimonials[currentIndex].image} 
                      alt={testimonials[currentIndex].name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div>
                  <p className="text-gray-700 dark:text-gray-300 mb-6 italic leading-relaxed">
                    "{testimonials[currentIndex].text}"
                  </p>
                  
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-blue-600 dark:text-blue-400">
                      {testimonials[currentIndex].position}, {testimonials[currentIndex].company}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center mt-8 space-x-4">
                <button 
                  onClick={prevTestimonial}
                  className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={24} />
                </button>
                <button 
                  onClick={nextTestimonial}
                  className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
              
              <div className="flex justify-center mt-4">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full mx-1 ${
                      currentIndex === index
                        ? 'bg-blue-600 dark:bg-blue-500'
                        : 'bg-gray-300 dark:bg-gray-600'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;