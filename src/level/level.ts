import { Entity } from '../utils';
import { Block } from '../block';
import { settings } from '../settings';
import { Grid } from '../grid';
import { CanvasLayer } from '../canvas-layer';

export class Level extends Entity {
  private _blocks: Block[] = [];

  constructor(
    public readonly level: number,
    private readonly _grid: Grid
  ) {
    super();
  }

  public awake(): void {
    super.awake();

    this.prepareBlocks()
  }

  public update(deltaTime: number) {
    super.update(deltaTime);

    this.clear();

    this._blocks.map(block => block.update(deltaTime));
  }

  private prepareBlocks(): void {
    const numOfBlocks = settings.blocks.numOfBlocks;
    const nodes = this._grid.nodes;

    for (let i = 0; i < numOfBlocks; i++) {
      const block = new Block(nodes[i]);
      this._blocks.push(block);
      block.awake();
    }
  }

  private clear(): void {
    CanvasLayer.foreground.clearRect();
  }
}