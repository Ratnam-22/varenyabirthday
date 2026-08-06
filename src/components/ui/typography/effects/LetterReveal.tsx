'use client';

import React from 'react';
import { cn } from '@/utils/cn';

export interface LetterRevealProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
  delayMs?: number;
}

export const LetterReveal: React.FC<LetterRevealProps> = ({
  text,
  delayMs = 50,
  className,
  ...props
}) => {
  return (
    <div className={cn('inline-flex flex-wrap', className)} {...props}>
      {text.split('').map((char, index) => (
        <span
          key={index}
          className="inline-block transition-all duration-500 ease-out"
          style={{ transitionDelay: `${index * delayMs}ms` }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </div>
  );
};
