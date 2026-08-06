'use client';

import React from 'react';

export interface SplitTextProps {
  children: string;
  renderWord?: (word: string, index: number) => React.ReactNode;
}

export const SplitText: React.FC<SplitTextProps> = ({ children, renderWord }) => {
  const words = children.split(' ');

  return (
    <>
      {words.map((word, index) => (
        <React.Fragment key={index}>
          {renderWord ? renderWord(word, index) : <span>{word}</span>}
          {index < words.length - 1 && ' '}
        </React.Fragment>
      ))}
    </>
  );
};
