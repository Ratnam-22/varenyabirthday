'use client';

import React, { createContext, useState, useCallback } from 'react';
import { SceneContextType, SceneId, TransitionStatus } from '@/types/scene';
import { SCENE_ORDER, DEFAULT_SCENE } from '@/constants/scene-order';

export const SceneContext = createContext<SceneContextType | null>(null);

export const SceneProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentScene, setCurrentScene] = useState<SceneId>(DEFAULT_SCENE);
  const [previousScene, setPreviousScene] = useState<SceneId | null>(null);
  const [transitionStatus, setTransitionStatus] = useState<TransitionStatus>('idle');

  const goToScene = useCallback((targetScene: SceneId) => {
    if (targetScene === currentScene) return;
    setTransitionStatus('exiting');
    setPreviousScene(currentScene);
    setCurrentScene(targetScene);
    setTransitionStatus('idle');
  }, [currentScene]);

  const nextScene = useCallback(() => {
    const currentIndex = SCENE_ORDER.indexOf(currentScene);
    if (currentIndex < SCENE_ORDER.length - 1) {
      goToScene(SCENE_ORDER[currentIndex + 1]);
    }
  }, [currentScene, goToScene]);

  const prevScene = useCallback(() => {
    const currentIndex = SCENE_ORDER.indexOf(currentScene);
    if (currentIndex > 0) {
      goToScene(SCENE_ORDER[currentIndex - 1]);
    }
  }, [currentScene, goToScene]);

  return (
    <SceneContext.Provider
      value={{
        currentScene,
        previousScene,
        transitionStatus,
        goToScene,
        nextScene,
        prevScene,
      }}
    >
      {children}
    </SceneContext.Provider>
  );
};
