import { NodeDrawComponent } from '.';
import { Entity, Vector } from '../utils';

export class Node extends Entity {
  public get size(): Vector {
    return new Vector(
      this.end.x - this.start.x,
      this.end.y - this.start.y
    )
  }

  public get position(): Vector {
    return new Vector(
      this.start.x,
      this.start.y
    )
  }

  constructor(
    public readonly start: Vector,
    public readonly end: Vector,
    public readonly index: Vector
  ) {
    super();
  }
  public awake() {
    this.addComponent(new NodeDrawComponent())

    super.awake();
  }
}