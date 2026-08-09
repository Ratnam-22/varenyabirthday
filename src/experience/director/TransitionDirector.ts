import { eventBus } from '@/three/events/EventBus';
import { experienceStateMachine } from '@/experience/state/ExperienceStateMachine';
import { playCinematicTransition } from '@/animations/presets/cinematicTransition';
import { accessibilityManager } from '@/experience/accessibility/AccessibilityManager';
import { SceneId } from '@/types/scene';

export class TransitionDirector {
  private isListening: boolean = false;
  private isTransitioning: boolean = false;

  constructor() {
    this.initListeners();
  }

  private initListeners(): void {
    if (this.isListening) return;
    this.isListening = true;

    eventBus.on('action:begin-journey', () => {
      this.handleBeginJourney();
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
          if (onComplete) onComplete();
        },
      });
    } catch (err) {
      console.error('Transition error caught gracefully:', err);
      this.isTransitioning = false;
      experienceStateMachine.setState('Idle');
    }
  }

  public async playTransition(_targetScene: SceneId, onComplete?: () => void): Promise<void> {
    this.handleBeginJourney(onComplete);
  }
}

export const transitionDirector = new TransitionDirector();
