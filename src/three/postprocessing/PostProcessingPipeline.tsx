'use client';

import React from 'react';
import { EffectComposer, Bloom, Vignette, Noise, ChromaticAberration } from '@react-three/postprocessing';
import { Vector2 } from 'three';
import { EffectSettings } from './types';

export type PostProcessingPipelineProps = Partial<EffectSettings>;

export const PostProcessingPipeline: React.FC<PostProcessingPipelineProps> = ({
  bloomEnabled = true,
  bloomIntensity = 1.0,
  vignetteEnabled = true,
  noiseEnabled = false,
  chromaticAberrationEnabled = false,
}) => {
  return (
    <EffectComposer enableNormalPass={false} multisampling={0}>
      {bloomEnabled ? (
        <Bloom
          intensity={bloomIntensity}
          luminanceThreshold={0.6}
          luminanceSmoothing={0.9}
          mipmapBlur
        />
      ) : (
        <></>
      )}
      {vignetteEnabled ? <Vignette offset={0.3} darkness={0.7} /> : <></>}
      {noiseEnabled ? <Noise opacity={0.02} /> : <></>}
      {chromaticAberrationEnabled ? (
        <ChromaticAberration offset={new Vector2(0.002, 0.002)} />
      ) : (
        <></>
      )}
    </EffectComposer>
  );
};
