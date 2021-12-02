import { Entity } from './entity';
import { IUpdate } from '../update.h';

export interface IComponent extends IUpdate {
  entity: Entity | null
}