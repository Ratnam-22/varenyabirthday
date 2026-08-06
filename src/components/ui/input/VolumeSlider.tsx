'use client';

import React, { forwardRef } from 'react';
import { Slider } from './Slider';
import { IconButton } from '../button/IconButton';
import { VolumeIcon, MuteIcon } from '../icon/icons';
import { VolumeSliderProps } from './types';

export const VolumeSlider = forwardRef<HTMLInputElement, VolumeSliderProps>(
  (
    {
      volume = 80,
      isMuted = false,
      onVolumeChange,
      onToggleMute,
      className,
      'data-testid': testId = 'volume-slider-component',
    },
    ref
  ) => {
    return (
      <div className={`inline-flex items-center gap-3 ${className || ''}`} data-testid={testId}>
        <IconButton
          icon={isMuted ? <MuteIcon /> : <VolumeIcon />}
          aria-label={isMuted ? 'Unmute' : 'Mute'}
          variant="ghost"
          size="sm"
          onClick={onToggleMute}
        />
        <Slider
          ref={ref}
          min={0}
          max={100}
          value={isMuted ? 0 : volume}
          onChange={(e) => onVolumeChange?.(Number(e.target.value))}
          className="w-24 sm:w-32"
        />
      </div>
    );
  }
);

VolumeSlider.displayName = 'VolumeSlider';
