import { Entity, Vector } from '../utils';
import { Node } from '../node';
import { settings } from '../settings';

export class Grid extends Entity {
  private _nodes: Node[] = [];

  public get nodes(): Node[] {
    return this._nodes;
  }

  public awake(): void {
    super.awake();

    this.initNodes();

    for (const node of this._nodes) {
      node.awake();
    }
  }

  public update(deltaTime: number): void {
    super.update(deltaTime);

    for (const node of this._nodes) {
      node.update(deltaTime)
    }
  }

  private initNodes(): void {
    const size = settings.grid.nodeSize;
    const offset = settings.grid.nodeOffset;

    for (let y = 0; y < settings.grid.columnNodes; y++) {
      for (let x = 0; x < settings.grid.rowNodes; x++) {
        const start = new Vector(
          x * (size + offset) + offset,
          y * (size + offset) + offset
        )

        const end = new Vector(
          start.x + size,
          start.y + size
        )

        const index = new Vector(x, y);

        const node = new Node(start, end, index);

        this._nodes.push(node);
      }
    }
  }
};