import { Entity } from '../utils';
import { Grid } from '../grid';
import { Level } from '../level';
import { Projectile } from '../projectile';
import { ProjectileMoveComponent } from '../projectile/components';
import Mouse from '../input/mouse';

export class Game extends Entity {

  public _entities: Entity[] = [];

  private _lastTimeStamp = 0;
  private _input = new Mouse();

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
      new Level(1, grid),
      new Projectile(),
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
    const velocity = this._input.velocity;

    super.update(deltaTime);

    for (const entity of this._entities) {
      entity.update(deltaTime);
    }

    this._lastTimeStamp = Date.now();


    for (const entity of this._entities) {
      if (entity.HasComponent(ProjectileMoveComponent)) {
        const pos = entity.GetComponent(ProjectileMoveComponent);
        pos.changePos(velocity);
      }
    }

    window.requestAnimationFrame(() => this.update());
  }

}