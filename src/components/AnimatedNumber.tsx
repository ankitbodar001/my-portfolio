
import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedNumberProps {
  value: number;
  duration?: number;
  className?: string;
  formatValue?: (value: number) => string;
  suffix?: string;
}

const AnimatedNumber = ({
  value,
  duration = 2000,
  className,
  formatValue = (val) => Math.floor(val).toString(),
  suffix = ''
}: AnimatedNumberProps) => {
  const [displayValue, setDisplayValue] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const startTimeRef = useRef<number | null>(null);
  const frameRef = useRef<number | null>(null);
  const initialValueRef = useRef<number>(0);
  const isAnimatingRef = useRef<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isAnimatingRef.current) {
          isAnimatingRef.current = true;
          
          const animate = (timestamp: number) => {
            if (!startTimeRef.current) {
              startTimeRef.current = timestamp;
            }

            const elapsedTime = timestamp - startTimeRef.current;
            const progress = Math.min(elapsedTime / duration, 1);
            
            const newValue = initialValueRef.current + progress * (value - initialValueRef.current);
            setDisplayValue(newValue);

            if (progress < 1) {
              frameRef.current = requestAnimationFrame(animate);
            } else {
              isAnimatingRef.current = false;
              startTimeRef.current = null;
            }
          };

          frameRef.current = requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [value, duration]);

  return (
    <div 
      ref={elementRef} 
      className={cn('transition-transform', className)}
    >
      {formatValue(displayValue)}{suffix}
    </div>
  );
};

export default AnimatedNumber;
