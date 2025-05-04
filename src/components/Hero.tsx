
import React from 'react';
import AnimatedText from './AnimatedText';
import { cn } from '@/lib/utils';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-data-accent/10 rounded-full filter blur-3xl opacity-30 animate-pulse-light"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-data-chart-1/10 rounded-full filter blur-3xl opacity-30 animate-pulse-light" style={{ animationDelay: "1s" }}></div>
      </div>

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-data-darker z-10"></div>

      {/* Hero content */}
      <div className="container mx-auto max-w-4xl z-20 py-20">
        <div className="text-center md:text-left">
          <p className="text-data-accent-light mb-4 opacity-0 animate-fade-in">
            <AnimatedText text="Hello, I'm a" speed={0.08} /> 
          </p>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="block opacity-0 animate-fade-in animate-delay-100">
              <AnimatedText text="Data Analyst" className="text-gradient-purple font-extrabold" speed={0.08} delay={0.3} />
            </span>
            <span className="block text-2xl md:text-3xl lg:text-4xl mt-2 text-gray-300 opacity-0 animate-fade-in animate-delay-200">
              <AnimatedText text="Turning data into actionable insights" speed={0.05} delay={0.8} />
            </span>
          </h1>
          
          <p className="text-gray-400 max-w-xl mx-auto md:mx-0 mb-8 opacity-0 animate-fade-in animate-delay-300">
            <AnimatedText 
              text="I specialize in data analysis, visualization, and deriving meaningful insights from complex datasets to help businesses make data-driven decisions." 
              speed={0.01} 
              delay={1.4}
            />
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 opacity-0 animate-fade-in animate-delay-400">
            <a
              href="#projects"
              className={cn(
                'px-8 py-3 rounded-lg bg-data-accent text-white font-medium',
                'hover:bg-data-accent-light transition-all duration-300',
                'transform hover:translate-y-[-2px] hover:shadow-lg hover:shadow-data-accent/20'
              )}
            >
              View Projects
            </a>
            <a
              href="#contact"
              className={cn(
                'px-8 py-3 rounded-lg bg-transparent text-white border border-gray-600',
                'hover:border-data-accent hover:text-data-accent-light transition-all duration-300'
              )}
            >
              Contact Me
            </a>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-8 text-center opacity-0 animate-fade-in animate-delay-500">
            <div className="glass-card p-5 rounded-xl">
              <p className="text-3xl font-bold text-data-accent mb-1">
                <AnimatedText text="5+" speed={0.5} delay={2} />
              </p>
              <p className="text-gray-400 text-sm">Years Experience</p>
            </div>
            <div className="glass-card p-5 rounded-xl">
              <p className="text-3xl font-bold text-data-accent mb-1">
                <AnimatedText text="15+" speed={0.5} delay={2.2} />
              </p>
              <p className="text-gray-400 text-sm">Projects Completed</p>
            </div>
            <div className="glass-card p-5 rounded-xl hidden md:block">
              <p className="text-3xl font-bold text-data-accent mb-1">
                <AnimatedText text="5+" speed={0.5} delay={2.4} />
              </p>
              <p className="text-gray-400 text-sm">Satisfied Clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
