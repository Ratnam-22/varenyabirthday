'use client';

import React from 'react';
import { Leva } from 'leva';

export interface DebugControlsProps {
  hidden?: boolean;
}

export const DebugControls: React.FC<DebugControlsProps> = ({ hidden = false }) => {
  const isProduction = process.env.NODE_ENV === 'production';

  return <Leva hidden={hidden || isProduction} collapsed />;
};
