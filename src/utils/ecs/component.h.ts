import { Entity } from './entity';
import { IUpdate, IAwake } from '..';

export interface IComponent extends IUpdate, IAwake {
  entity: Entity | null
}