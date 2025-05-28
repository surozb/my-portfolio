import React from 'react';
import { Bug, Calendar, CheckCircle, Code2, MapPin, ShieldCheck } from 'lucide-react';

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
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-white dark:from-gray-900 dark:via-blue-950 dark:to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white/90 dark:bg-gray-900/80 rounded-3xl shadow-2xl border border-blue-100 dark:border-blue-900 p-10">
          <h2 className="text-3xl font-extrabold text-blue-800 dark:text-blue-300 mb-2 text-left font-mono flex items-center gap-2">
            Experience <ShieldCheck className="inline-block text-blue-500 dark:text-blue-300" size={28} />
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-green-400 dark:from-blue-400 dark:to-green-300 mb-8 rounded-full"></div>
          <ul className="space-y-8">
            {jobs.map((job, index) => (
              <li key={job.id} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow border border-blue-100 dark:border-blue-800 flex flex-col md:flex-row gap-4 items-center">
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  <img 
                    src={job.logo} 
                    alt={job.company} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-blue-700 dark:text-blue-300 mb-1">{job.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-1">{job.company}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{job.startDate} - {job.endDate}</p>
                  <div className="flex items-center gap-2 mb-2 text-gray-600 dark:text-gray-400 text-sm">
                    <MapPin size={16} />
                    <span>{job.location}</span>
                  </div>
                  <ul className="list-disc ml-5 mt-2 text-gray-700 dark:text-gray-300 text-base">
                    {job.description.map((item, i) => (
                      <li key={i} className="md:list-none">{item}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;