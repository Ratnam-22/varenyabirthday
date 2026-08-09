'use client';

import React, { useState, useEffect } from 'react';
import { EffectComposer, Bloom, Vignette, Noise, ChromaticAberration } from '@react-three/postprocessing';
import { Vector2 } from 'three';
import { EffectSettings } from './types';
import { eventBus } from '../events/EventBus';

export type PostProcessingPipelineProps = Partial<EffectSettings>;

export const PostProcessingPipeline: React.FC<PostProcessingPipelineProps> = ({
  bloomEnabled = true,
  bloomIntensity = 1.0,
  vignetteEnabled = true,
  noiseEnabled = false,
  chromaticAberrationEnabled = false,
}) => {
  const [currentBloom, setCurrentBloom] = useState(bloomIntensity);
  const [currentVignette, setCurrentVignette] = useState(0.7);

  useEffect(() => {
    const unsubRamp = eventBus.on('postprocessing:bloom-ramp', () => {
      setCurrentBloom(1.8);
      setCurrentVignette(0.9);
    });

    const unsubReset = eventBus.on('transition:complete', () => {
      setCurrentBloom(bloomIntensity);
      setCurrentVignette(0.7);
    });

    return () => {
      unsubRamp();
      unsubReset();
    };
  }, [bloomIntensity]);

  return (
    <EffectComposer enableNormalPass={false} multisampling={0}>
      {bloomEnabled ? (
        <Bloom
          intensity={currentBloom}
          luminanceThreshold={0.6}
          luminanceSmoothing={0.9}
          mipmapBlur
        />
      ) : (
        <></>
      )}
      {vignetteEnabled ? <Vignette offset={0.3} darkness={currentVignette} /> : <></>}
      {noiseEnabled ? <Noise opacity={0.02} /> : <></>}
      {chromaticAberrationEnabled ? (
        <ChromaticAberration offset={new Vector2(0.002, 0.002)} />
      ) : (
        <></>
      )}
    </EffectComposer>
  );
};
