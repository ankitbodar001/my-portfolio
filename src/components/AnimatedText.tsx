
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
  speed?: number;
  delay?: number;
}

const AnimatedText = ({
  text,
  className = '',
  once = true,
  speed = 0.05,
  delay = 0,
}: AnimatedTextProps) => {
  const textRef = useRef<HTMLSpanElement>(null);
  const initialText = useRef<string>(text);
  const currentText = useRef<string>('');
  const currentIndex = useRef<number>(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => {
            const interval = setInterval(() => {
              if (currentIndex.current < initialText.current.length) {
                currentText.current = initialText.current.slice(0, currentIndex.current + 1);
                if (textRef.current) {
                  textRef.current.textContent = currentText.current;
                }
                currentIndex.current += 1;
              } else {
                clearInterval(interval);
              }
            }, speed * 1000);

            return () => clearInterval(interval);
          }, delay);
          
          if (once) {
            observer.disconnect();
          }
        } else if (!once) {
          currentText.current = '';
          currentIndex.current = 0;
          if (textRef.current) {
            textRef.current.textContent = '';
          }
        }
      },
      { threshold: 0.1 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => observer.disconnect();
  }, [once, speed, delay]);

  return (
    <span ref={textRef} className={cn('inline-block min-h-[1em]', className)}>
      {/* Initially empty, will be populated by the animation */}
    </span>
  );
};

export default AnimatedText;
