import { CanvasLayer } from '../canvas-layer';
import { Vector } from '../utils';

export default class Mouse {
  private _velocity: Vector = { x: 0, y: 0 };

  public get velocity(): Vector {
    // console.log(this._velocity);
    return this._velocity;
  }

  constructor(
    // private _canvas: HTMLCanvasElement
  ) {
    document.addEventListener('click', event => {
      if (event.target instanceof HTMLCanvasElement) {
        const angle = Math.atan2(event.clientY - CanvasLayer.canvasSize.y - 125, event.clientX - CanvasLayer.canvasSize.x)

        if (angle < 0) {
          this._velocity = {
            x: Math.cos(angle),
            y: Math.sin(angle),
          }
        }
      }
    })
  }
}