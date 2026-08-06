import { AssetTask } from './types';

export class AssetQueue {
  private queue: Map<string, AssetTask> = new Map();

  public enqueue(task: AssetTask): void {
    if (!this.queue.has(task.id)) {
      this.queue.set(task.id, task);
    }
  }

  public get(id: string): AssetTask | undefined {
    return this.queue.get(id);
  }

  public markLoaded(id: string): void {
    const task = this.queue.get(id);
    if (task) {
      task.loaded = true;
    }
  }

  public getAll(): AssetTask[] {
    return Array.from(this.queue.values());
  }
}
