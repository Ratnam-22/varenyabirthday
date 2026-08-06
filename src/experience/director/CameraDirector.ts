import { Vector3 } from 'three';

export class CameraDirector {
  public position: Vector3 = new Vector3(0, 0, 10);
  public target: Vector3 = new Vector3(0, 0, 0);

  public setShot(pos: [number, number, number], targetPos: [number, number, number]): void {
    this.position.set(...pos);
    this.target.set(...targetPos);
  }
}
