
import React from 'react';
import { cn } from '@/lib/utils';

interface SkillBadgeProps {
  name: string;
  level?: number; // 1-5
  className?: string;
}

const SkillBadge = ({ name, level = 3, className }: SkillBadgeProps) => {
  return (
    <div 
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full bg-data-dark border border-data-accent/30 text-sm',
        'hover:border-data-accent/70 transition-all duration-300 group',
        className
      )}
    >
      <span>{name}</span>
      <div className="ml-2 flex space-x-1 opacity-70 group-hover:opacity-100">
        {Array.from({ length: 5 }).map((_, i) => (
          <div 
            key={i} 
            className={cn(
              'h-1.5 w-1.5 rounded-full transition-all duration-300',
              i < level ? 'bg-data-accent' : 'bg-gray-400/30'
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillBadge;
