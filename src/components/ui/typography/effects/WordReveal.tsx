'use client';

import React from 'react';
import { cn } from '@/utils/cn';

export interface WordRevealProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
  delayMs?: number;
}

export const WordReveal: React.FC<WordRevealProps> = ({
  text,
  delayMs = 150,
  className,
  ...props
}) => {
  const words = text.split(' ');

  return (
    <div className={cn('inline-flex flex-wrap gap-x-2', className)} {...props}>
      {words.map((word, index) => (
        <span
          key={index}
          className="inline-block transition-all duration-700 ease-out"
          style={{ transitionDelay: `${index * delayMs}ms` }}
        >
          {word}
        </span>
      ))}
    </div>
  );
};
