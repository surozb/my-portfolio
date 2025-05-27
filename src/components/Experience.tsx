import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  logo: string;
}

const Experience: React.FC = () => {
  const jobs: Job[] = [
    {
      id: 1,
      title: 'Senior QA Automation Engineer',
      company: 'Maitri Services',
      location: 'Lalitpur District, Nepal',
      startDate: 'Feb 2025',
      endDate: 'Present',
      description: [
        'Lead the development and implementation of automated testing frameworks',
        'Conduct performance testing to identify and address system bottlenecks',
        'Collaborate with development and product teams to integrate QA practices',
        'Optimize testing processes and enhance application scalability',
        'Spearhead automation strategies to improve testing efficiency'
      ],
      logo: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 2,
      title: 'Senior Quality Analyst',
      company: 'Yenya Soft Private Limited',
      location: 'Nepal',
      startDate: 'Jul 2024',
      endDate: 'Jan 2025',
      description: [
        'Conducted test case writing and automation using Cypress',
        'Performed performance testing with JMeter and vulnerability testing with Burp Suite',
        'Analyzed requirements and planned tasks to ensure efficient quality assurance processes',
        'Collaborated with cross-functional teams to ensure high-quality software delivery',
        'Developed skills in test automation, performance testing, and requirement analysis'
      ],
      logo: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 3,
      title: 'Quality Assurance Analyst',
      company: 'InfoDevelopers Pvt. Ltd.',
      location: 'Nepal',
      startDate: 'Jul 2019',
      endDate: 'Sep 2024',
      description: [
        'Led quality assurance initiatives and testing strategies',
        'Implemented automated testing solutions to improve efficiency',
        'Conducted thorough testing using various tools including Burp Suite',
        'Collaborated with development teams to ensure software quality',
        'Maintained and improved quality assurance processes'
      ],
      logo: 'https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ];

  return (
    <section 
      id="experience" 
      className="py-20 bg-gray-50 dark:bg-gray-800"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 text-center">
            Work Experience
          </h2>
          <div className="w-16 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-16"></div>
          
          <div className="relative">
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gray-300 dark:bg-gray-700"></div>
            
            <div className="space-y-12">
              {jobs.map((job, index) => (
                <div 
                  key={job.id} 
                  className={`relative flex flex-col md:flex-row ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-blue-600 dark:bg-blue-500 z-10 mt-6"></div>
                  
                  <div className="md:w-1/2 pl-8 md:pl-0 md:pr-12 md:text-right space-y-4">
                    <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg transition-transform hover:scale-105 duration-300">
                      <div className="flex items-center justify-between md:flex-row-reverse mb-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                          <img 
                            src={job.logo} 
                            alt={job.company} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="ml-4 md:ml-0 md:mr-4">
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{job.title}</h3>
                          <p className="text-blue-600 dark:text-blue-400 font-medium">{job.company}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 mb-2 md:justify-end text-gray-600 dark:text-gray-400 text-sm">
                        <Calendar size={16} />
                        <span>{job.startDate} - {job.endDate}</span>
                      </div>
                      
                      <div className="flex items-center gap-2 mb-4 md:justify-end text-gray-600 dark:text-gray-400 text-sm">
                        <MapPin size={16} />
                        <span>{job.location}</span>
                      </div>
                      
                      <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 md:text-right">
                        {job.description.map((item, i) => (
                          <li key={i} className="md:list-none">{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="hidden md:block md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;