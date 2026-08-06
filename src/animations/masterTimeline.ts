import gsap from 'gsap';

export class MasterTimeline {
  private static instance: MasterTimeline;
  public timeline: gsap.core.Timeline;

  private constructor() {
    this.timeline = gsap.timeline({ paused: true });
  }

  public static getInstance(): MasterTimeline {
    if (!MasterTimeline.instance) {
      MasterTimeline.instance = new MasterTimeline();
    }
    return MasterTimeline.instance;
  }
}

export const masterTimeline = MasterTimeline.getInstance().timeline;
