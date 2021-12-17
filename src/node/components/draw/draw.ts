import { IComponent, Vector } from '../../../utils';
import { Node } from '../..';
import { settings } from '../../../settings';
import { CanvasLayer } from '../../../canvas-layer';

export class NodeDrawComponent implements IComponent {
  public entity: Node;

  public awake(): void {
    this.clear();
  }

  public update(deltaTime: number): void {
    this.clear();
    this.draw();

  }

  public draw(): void {
    CanvasLayer.background.fillRect(
      this.entity.start,
      this.entity.size,
      settings.grid.color
    )
  }

  private clear(): void {
    CanvasLayer.background.clearRect(
      // this.entity.start, this.entity.size
    )
  }

}