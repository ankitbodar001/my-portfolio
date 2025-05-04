
import React from 'react';
import SkillBadge from './SkillBadge';
import AnimatedNumber from './AnimatedNumber';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';

const About = () => {
  const skills = [
    { name: 'SQL', level: 5 },
    { name: 'Python', level: 4 },
    { name: 'BigQuery', level: 3.5 },
    { name: 'Excel', level: 5 },
    { name: 'Tableau', level: 4 },
    { name: 'Power BI', level: 4 },
    { name: 'SnowFlake', level: 4 },
    { name: 'Data Visualization', level: 5 },
    { name: 'Statistical Analysis', level: 4 },
    { name: 'Data Modeling', level: 4 },
    { name: 'Data Cleaning', level: 5 },
    { name: 'Database Management', level: 4 },
    { name: 'Big Data', level: 3 },
    { name: 'AWS', level: 3.5 },
    { name: 'Azure', level: 3.5 },
  ];

  const stats = [
    { label: 'Data Points Analyzed', value: 15000000 },
    { label: 'Visualizations Created', value: 250 },
    { label: 'Reports Delivered', value: 60 },
    { label: 'Business Processes Improved', value: 25 },
  ];

  return (
    <section id="about" className="py-20 px-4 relative">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute bottom-1/3 right-0 w-72 h-72 bg-data-chart-2/5 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-data-accent/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-16 opacity-0 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 inline-block text-gradient">About Me</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-data-accent to-data-accent-light mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="opacity-0 animate-fade-in">
            <div className="flex flex-col items-center md:items-start mb-6">
              <div className="mb-6">
                <Avatar className="w-40 h-40 border-2 border-data-accent">
                  <AvatarImage 
                    src="https://images.unsplash.com/photo-1746343766861-1ad096eee807?q=80&w=2338&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Ankit Bodar" 
                    className="object-cover" 
                  />
                  <AvatarFallback className="text-4xl">AB</AvatarFallback>
                </Avatar>
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-data-accent-light">Who I Am</h3>
              <p className="text-gray-300 mb-4">
                I'm a passionate data analyst with expertise in transforming raw data into valuable insights. 
                With a keen eye for patterns and a detail-oriented approach, I help organizations make data-driven decisions.
              </p>
              <p className="text-gray-300 mb-6">
                My journey in data analytics began 4 years ago, and since then, I've worked on projects across various industries,
                including finance, healthcare, retail, and technology. I'm dedicated to continuous learning and staying updated with
                the latest tools and methodologies in data analysis.
              </p>
              
              <h3 className="text-xl font-bold mb-4 text-data-accent-light">My Approach</h3>
              <p className="text-gray-300 mb-6">
                I believe in a holistic approach to data analysis that combines technical expertise with business acumen. 
                I don't just analyze numbers; I derive actionable insights that drive strategic decisions and create business value.
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-data-accent-light opacity-0 animate-fade-in animate-delay-200">My Skills</h3>
            <div className="flex flex-wrap gap-3 mb-10 opacity-0 animate-fade-in animate-delay-300">
              {skills.map((skill) => (
                <SkillBadge
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                />
              ))}
            </div>
            
            <h3 className="text-xl font-bold mb-4 text-data-accent-light opacity-0 animate-fade-in animate-delay-400">By The Numbers</h3>
            <div className="grid grid-cols-2 gap-4 opacity-0 animate-fade-in animate-delay-500">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label} 
                  className="glass-card p-4 rounded-lg"
                >
                  <div className="text-2xl font-bold text-data-accent-light mb-2">
                    <AnimatedNumber 
                      value={stat.value} 
                      formatValue={(value) => 
                        value > 1000 
                          ? `${(value / 1000).toFixed(0)}k+`
                          : `${Math.floor(value)}+`
                      }
                      duration={2000}
                    />
                  </div>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
