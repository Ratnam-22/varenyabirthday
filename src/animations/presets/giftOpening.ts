import gsap from 'gsap';
import { experienceStateMachine } from '@/experience/state/ExperienceStateMachine';
import { eventBus } from '@/three/events/EventBus';

export interface GiftOpeningOptions {
  isReducedMotion?: boolean;
  onComplete?: () => void;
}

export function playGiftOpening(options: GiftOpeningOptions = {}): gsap.core.Timeline {
  const { isReducedMotion = false, onComplete } = options;

  const tl = gsap.timeline({
    onStart: () => {
      experienceStateMachine.setState('Transitioning');
      eventBus.emit('gift:opening-start');
    },
    onComplete: () => {
      experienceStateMachine.setState('ReadyForNextScene');
      eventBus.emit('gift:opening-complete');
      if (onComplete) onComplete();
    },
  });

  if (isReducedMotion) {
    // Reduced motion branch: clean opacity & simple lid lift
    tl.to('[data-scene-ui]', {
      opacity: 0,
      duration: 0.6,
      ease: 'power2.out',
    });
    tl.call(() => {
      eventBus.emit('gift:lid-open');
      eventBus.emit('gift:interior-light');
    }, [], 0.3);
    return tl;
  }

  // T+0.0s -> Open activated
  // T+0.0s–0.25s -> Open button & typography exit
  tl.to('[data-scene-ui]', {
    opacity: 0,
    duration: 0.6,
    ease: 'power2.out',
  }, 0);

  // T+0.25s–0.9s -> Ribbon tension release / physical separation
  tl.call(() => {
    eventBus.emit('gift:ribbon-separate');
  }, [], 0.25);

  // T+0.45s–1.5s -> Lid rotates around rear hinge pivot
  tl.call(() => {
    eventBus.emit('gift:lid-open');
  }, [], 0.45);

  // T+0.9s–1.9s -> Interior warm golden light emerges
  tl.call(() => {
    eventBus.emit('gift:interior-light');
  }, [], 0.9);

  // T+1.4s–2.4s -> Camera gently dollies closer to interior
  tl.call(() => {
    eventBus.emit('camera:zoom-interior');
  }, [], 1.4);

  // T+1.8s–2.8s -> Sparkles subtly react & drift upward
  tl.call(() => {
    eventBus.emit('particle:energize');
  }, [], 1.8);

  // T+2.3s–3.3s -> Atmosphere settles into luminous reveal state
  tl.call(() => {
    eventBus.emit('postprocessing:settle');
  }, [], 2.3);

  // T+3.3s–4.0s -> Clean handoff state
  tl.to({}, {
    duration: 1.2,
  }, 2.5);

  return tl;
}
