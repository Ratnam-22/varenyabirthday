import gsap from 'gsap';

export class MasterExperienceTimeline {
  private static instance: MasterExperienceTimeline;
  public masterSequence: gsap.core.Timeline;

  private constructor() {
    this.masterSequence = gsap.timeline({ paused: true });
  }

  public static getInstance(): MasterExperienceTimeline {
    if (!MasterExperienceTimeline.instance) {
      MasterExperienceTimeline.instance = new MasterExperienceTimeline();
    }
    return MasterExperienceTimeline.instance;
  }

  public playSequence(): void {
    this.masterSequence.play();
  }

  public pauseSequence(): void {
    this.masterSequence.pause();
  }
}

export const masterExperienceTimeline = MasterExperienceTimeline.getInstance();
