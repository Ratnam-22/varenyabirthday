import { createContext } from 'react';
import { animationController, AnimationController } from './controller';

export const AnimationContext = createContext<AnimationController>(animationController);
