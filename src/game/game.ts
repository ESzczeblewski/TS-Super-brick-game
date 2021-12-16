import { Entity } from '../utils';
import { Grid } from '../grid';
import { Level } from '../level';

export class Game extends Entity {

  public _entities: Entity[] = [];

  private _lastTimeStamp = 0;

  public get entities(): Entity[] {
    return this._entities;
  }

  constructor() {
    super();
    this.update();
  }

  public awake(): void {
    super.awake();

    const grid = new Grid();

    this._entities.push(
      grid,
      new Level(1, grid)
    );

    for (const entity of this._entities) {
      entity.awake();
    }

    window.requestAnimationFrame(() => {
      this._lastTimeStamp = Date.now()

      this.update()
    })
  }

  public update(): void {
    const deltaTime = (Date.now() - this._lastTimeStamp) / 1000;

    super.update(deltaTime);

    for (const entity of this._entities) {
      entity.update(deltaTime);
    }

    this._lastTimeStamp = Date.now();

    window.requestAnimationFrame(() => this.update());
  }

}