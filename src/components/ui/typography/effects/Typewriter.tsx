'use client';

import React, { useState, useEffect } from 'react';
import { cn } from '@/utils/cn';

export interface TypewriterProps extends React.HTMLAttributes<HTMLSpanElement> {
  text: string;
  speedMs?: number;
}

export const Typewriter: React.FC<TypewriterProps> = ({
  text,
  speedMs = 80,
  className,
  ...props
}) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, speedMs);

    return () => clearInterval(interval);
  }, [text, speedMs]);

  return (
    <span className={cn('font-mono', className)} {...props}>
      {displayedText}
      <span className="animate-pulse">|</span>
    </span>
  );
};
