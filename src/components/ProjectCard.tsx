
import React from 'react';
import { cn } from '@/lib/utils';
import { ChartPie, ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  link?: string;
  className?: string;
}

const ProjectCard = ({
  title,
  description,
  tags,
  image,
  link,
  className,
}: ProjectCardProps) => {
  return (
    <div
      className={cn(
        'group glass-card p-5 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-data-accent/10',
        'transform hover:-translate-y-1',
        className
      )}
    >
      <div className="relative aspect-[16/9] mb-4 overflow-hidden rounded-lg bg-data-dark/60">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <ChartPie className="w-12 h-12 text-data-accent/50" />
          </div>
        )}
      </div>
      
      <h3 className="text-xl font-bold mb-2 text-white group-hover:text-data-accent-light transition-colors">
        {title}
      </h3>
      
      <p className="text-gray-300 mb-4 text-sm">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-3">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-1 bg-data-dark rounded-lg text-gray-300"
          >
            {tag}
          </span>
        ))}
      </div>
      
      {link && (
        <div className="flex justify-between items-center mt-3">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-data-accent hover:text-data-accent-light transition-colors text-sm"
          >
            <span>View Project</span>
            <ExternalLink className="ml-1 w-3.5 h-3.5" />
          </a>
          
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-400 hover:text-white transition-colors text-sm"
          >
            <Github className="w-4 h-4" />
          </a>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
