import { Projectile } from '../..';
import { CanvasLayer } from '../../../canvas-layer';
import { IComponent, Vector } from '../../../utils';

export class ProjectileMoveComponent implements IComponent {
  public entity: Projectile;
  public posX: number = CanvasLayer.canvasSize.x / 2;
  public posY: number = CanvasLayer.canvasSize.y - 20;

  public get position(): Vector | null {
    return { x: this.posX, y: this.posY };
  }

  public awake(): void { }

  public update(deltaTime: number): void {
  }

  public changePos(velocity: Vector) {
    this.posX = this.posX + velocity.x;
    this.posY = this.posY + velocity.y;
  }
}