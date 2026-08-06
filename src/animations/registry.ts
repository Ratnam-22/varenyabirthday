import gsap from 'gsap';
import { SceneId } from '@/types/scene';

export class TimelineRegistry {
  private static instance: TimelineRegistry;
  private timelines: Map<SceneId, gsap.core.Timeline> = new Map();

  private constructor() {}

  public static getInstance(): TimelineRegistry {
    if (!TimelineRegistry.instance) {
      TimelineRegistry.instance = new TimelineRegistry();
    }
    return TimelineRegistry.instance;
  }

  public register(sceneId: SceneId, timeline: gsap.core.Timeline): void {
    this.timelines.set(sceneId, timeline);
  }

  public get(sceneId: SceneId): gsap.core.Timeline | undefined {
    return this.timelines.get(sceneId);
  }
}

export const timelineRegistry = TimelineRegistry.getInstance();
