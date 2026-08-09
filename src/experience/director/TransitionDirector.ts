import { eventBus } from '@/three/events/EventBus';
import { experienceStateMachine } from '@/experience/state/ExperienceStateMachine';
import { playCinematicTransition } from '@/animations/presets/cinematicTransition';
import { playGiftOpening } from '@/animations/presets/giftOpening';
import { accessibilityManager } from '@/experience/accessibility/AccessibilityManager';
import { director } from './Director';
import { SceneId } from '@/types/scene';

export class TransitionDirector {
  private isListening: boolean = false;
  private isTransitioning: boolean = false;
  private hasHandedOff: boolean = false;
  private isGiftOpening: boolean = false;

  constructor() {
    this.initListeners();
  }

  private initListeners(): void {
    if (this.isListening) return;
    this.isListening = true;

    eventBus.on('action:begin-journey', () => {
      this.handleBeginJourney();
    });

    eventBus.on('action:open-gift', () => {
      this.handleOpenGift();
    });
  }

  public handleBeginJourney(onComplete?: () => void): void {
    if (this.isTransitioning) return;
    this.isTransitioning = true;

    try {
      experienceStateMachine.setState('Interacting');

      const isReducedMotion = accessibilityManager.getPreferences().reducedMotion;

      playCinematicTransition({
        isReducedMotion,
        onComplete: () => {
          this.isTransitioning = false;
          if (!this.hasHandedOff) {
            this.hasHandedOff = true;
            director.orchestrateSceneChange('gift');
          }
          if (onComplete) onComplete();
        },
      });
    } catch (err) {
      console.error('Transition error caught gracefully:', err);
      this.isTransitioning = false;
      experienceStateMachine.setState('Idle');
    }
  }

  public handleOpenGift(onComplete?: () => void): void {
    if (this.isGiftOpening) return;
    this.isGiftOpening = true;

    try {
      experienceStateMachine.setState('Transitioning');

      const isReducedMotion = accessibilityManager.getPreferences().reducedMotion;

      playGiftOpening({
        isReducedMotion,
        onComplete: () => {
          this.isGiftOpening = false;
          experienceStateMachine.setState('ReadyForNextScene');
          if (onComplete) onComplete();
        },
      });
    } catch (err) {
      console.error('Gift opening error caught gracefully:', err);
      this.isGiftOpening = false;
      experienceStateMachine.setState('ReadyForNextScene');
    }
  }

  public async playTransition(_targetScene: SceneId, onComplete?: () => void): Promise<void> {
    this.handleBeginJourney(onComplete);
  }
}

export const transitionDirector = new TransitionDirector();
