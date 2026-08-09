import gsap from 'gsap';
import { experienceStateMachine } from '@/experience/state/ExperienceStateMachine';
import { eventBus } from '@/three/events/EventBus';

export interface CinematicTransitionOptions {
  isReducedMotion?: boolean;
  onComplete?: () => void;
}

export function playCinematicTransition(options: CinematicTransitionOptions = {}): gsap.core.Timeline {
  const { isReducedMotion = false, onComplete } = options;

  const tl = gsap.timeline({
    onStart: () => {
      experienceStateMachine.setState('Transitioning');
      eventBus.emit('transition:start');
    },
    onComplete: () => {
      experienceStateMachine.setState('ReadyForNextScene');
      eventBus.emit('transition:complete');
      if (onComplete) onComplete();
    },
  });

  if (isReducedMotion) {
    // Reduced motion branch: clean 1.2s atmospheric crossfade
    tl.to('[data-scene-ui]', {
      opacity: 0,
      duration: 1.2,
      ease: 'power2.inOut',
    });
    return tl;
  }

  // T+0.0s -> User clicks Begin Journey
  // T+0.2s–0.8s -> Button glow expands & UI fades out
  tl.to('[data-scene-ui]', {
    opacity: 0,
    duration: 0.8,
    ease: 'power2.out',
  }, 0.2);

  // T+0.4s–1.2s -> Particle slowdown
  tl.call(() => {
    eventBus.emit('particle:slowdown');
  }, [], 0.4);

  // T+0.8s–2.2s -> Camera dolly forward
  tl.call(() => {
    eventBus.emit('camera:dolly-forward');
  }, [], 0.8);

  // T+1.0s–2.5s -> Bloom & vignette soft atmospheric ramp
  tl.call(() => {
    eventBus.emit('postprocessing:bloom-ramp');
  }, [], 1.0);

  // T+2.0s–3.2s -> Soft scene dark handoff transition
  tl.to({}, {
    duration: 1.2,
  }, 2.0);

  return tl;
}
