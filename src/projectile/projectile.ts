import { Entity, Vector } from '../utils';
import { ProjectileDrawComponent, ProjectileMoveComponent } from './components';

export class Projectile extends Entity {
  private _moveComponent: ProjectileMoveComponent;

  public get position(): Vector | null {
    return this._moveComponent.position;
  }

  constructor() {
    super();

    this._moveComponent = new ProjectileMoveComponent();
  }

  public awake(): void {
    this.addComponent(this._moveComponent);
    this.addComponent(new ProjectileDrawComponent);

    super.awake();
  }
}