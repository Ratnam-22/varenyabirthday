import { Vector3 } from 'three';

export class WindSystem {
  private static instance: WindSystem;
  public direction: Vector3 = new Vector3(1, 0, 0.5).normalize();
  public strength: number = 1.0;
  public gustiness: number = 0.5;
  public turbulence: number = 0.2;

  private constructor() {}

  public static getInstance(): WindSystem {
    if (!WindSystem.instance) {
      WindSystem.instance = new WindSystem();
    }
    return WindSystem.instance;
  }

  public getWindVector(time: number): Vector3 {
    const gust = Math.sin(time * 0.5) * this.gustiness;
    const turb = Math.cos(time * 1.5) * this.turbulence;
    const currentStrength = (this.strength + gust + turb);

    return this.direction.clone().multiplyScalar(currentStrength);
  }
}

export const windSystem = WindSystem.getInstance();
