import React from 'react';

interface Skill {
  name: string;
  level: number;
  category: 'technical' | 'soft' | 'tools';
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    // Technical skills
    { name: 'Test Automation', level: 95, category: 'technical' },
    { name: 'Performance Testing', level: 90, category: 'technical' },
    { name: 'Selenium', level: 90, category: 'technical' },
    { name: 'Python', level: 85, category: 'technical' },
    { name: 'Java', level: 85, category: 'technical' },
    { name: 'API Testing', level: 90, category: 'technical' },
    
    // Soft skills
    { name: 'Leadership', level: 90, category: 'soft' },
    { name: 'Problem Solving', level: 90, category: 'soft' },
    { name: 'Communication', level: 85, category: 'soft' },
    { name: 'Team Collaboration', level: 90, category: 'soft' },
    
    // Tools
    { name: 'Jenkins', level: 90, category: 'tools' },
    { name: 'JMeter', level: 85, category: 'tools' },
    { name: 'Git', level: 90, category: 'tools' },
    { name: 'JIRA', level: 85, category: 'tools' },
  ];

  const technicalSkills = skills.filter(skill => skill.category === 'technical');
  const softSkills = skills.filter(skill => skill.category === 'soft');
  const toolsSkills = skills.filter(skill => skill.category === 'tools');

  const SkillBar: React.FC<{ skill: Skill }> = ({ skill }) => (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-gray-900 dark:text-white">{skill.name}</span>
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <div 
          className="bg-blue-600 dark:bg-blue-500 h-2.5 rounded-full transition-all duration-1000 ease-out" 
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <section 
      id="skills" 
      className="py-20 bg-gray-50 dark:bg-gray-800"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 text-center">
            My Skills
          </h2>
          <div className="w-16 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-10"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 transition-transform hover:scale-105 duration-300">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center">Technical Skills</h3>
              {technicalSkills.map((skill, index) => (
                <SkillBar key={index} skill={skill} />
              ))}
            </div>
            
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 transition-transform hover:scale-105 duration-300">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center">Soft Skills</h3>
              {softSkills.map((skill, index) => (
                <SkillBar key={index} skill={skill} />
              ))}
            </div>
            
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 transition-transform hover:scale-105 duration-300 md:col-span-2 lg:col-span-1">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center">Tools & Technologies</h3>
              {toolsSkills.map((skill, index) => (
                <SkillBar key={index} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;