import { Projectile } from '../..';
import { CanvasLayer } from '../../../canvas-layer';
import { settings } from '../../../settings';
import { IComponent, Vector } from '../../../utils';
import { Color } from '../../../utils/color';

export class ProjectileDrawComponent implements IComponent {
  public entity: Projectile;

  private get position(): Vector {
    const position = this.entity.position;

    if (!position) {
      throw new Error('Attempt to draw a block that has no position.')
    }

    return position;
  }

  public awake(): void {
    // this.clear();
  }

  public update(deltaTime: number): void {
    // this.clear();
    this.draw();
  }

  private draw(): void {
    const color = new Color(0, 0, 0, 1);

    const size = 10;

    CanvasLayer.foreground.fillCircle(this.position, size, color)
  }

  private clear(): void {
    CanvasLayer.foreground.clearRect(
      // new Vector(
      //   this.position.x - settings.grid.nodeSize / 0,
      //   this.position.y - settings.grid.nodeSize / 2
      // ),
      // new Vector(settings.grid.nodeSize, settings.grid.nodeSize)
    )
  }
}