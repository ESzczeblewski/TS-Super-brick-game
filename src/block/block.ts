import { BlockDrawComponent, BlockMoveComponent } from '.';
import { Node } from '../node';
import { Entity, Vector } from '../utils';

export class Block extends Entity {
  private readonly _moveComponent: BlockMoveComponent;

  public get position(): Vector | null {
    return this._moveComponent.position;
  }

  constructor(node: Node) {
    super();

    this._moveComponent = new BlockMoveComponent();
    this._moveComponent.node = node;
  }

  public awake(): void {
    this.addComponent(this._moveComponent);
    this.addComponent(new BlockDrawComponent());

    super.awake();
  }
}