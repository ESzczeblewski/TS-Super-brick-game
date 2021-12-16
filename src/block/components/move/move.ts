import { Block } from '../..';
import { IComponent, Vector } from '../../../utils';
import { Node } from '../../../node';

export class BlockMoveComponent implements IComponent {
  public entity: Block;

  private _node: Node | null = null;

  public get node(): Node | null {
    return this._node;
  }

  public set node(v: Node | null) {
    this._node = v;
  }

  public get position(): Vector | null {
    return this.node ? this.node.position : null;
  }

  public awake(): void { }

  public update(deltaTime: number): void { }
}