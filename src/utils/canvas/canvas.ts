import { Vector, IAwake } from '..';
import { Color } from '../color';

export class Canvas implements IAwake {
  private _elm: HTMLCanvasElement;
  private _ctx: CanvasRenderingContext2D;

  public get element(): HTMLCanvasElement {
    return this._elm;
  }

  public get context(): CanvasRenderingContext2D {
    return this._ctx;
  }

  constructor(public readonly size: Vector) { }

  public awake(): void {
    const canvas = document.createElement('canvas');
    canvas.setAttribute('width', `${this.size.x}px`);
    canvas.setAttribute('height', `${this.size.y}px`);

    document.body.appendChild(canvas);
    this._elm = canvas;

    const ctx = this._elm.getContext('2d');

    if (!ctx) {
      throw new Error('Context identifier not supported')
    }

    this._ctx = ctx;
  }

  public fillRect(start: Vector, size: Vector, color: Color): void {
    this._ctx.beginPath();
    this._ctx.fillStyle = color.AsString();
    this._ctx.rect(start.x, start.y, size.x, size.y);
    this._ctx.fill();
  }

  public clearRect(start: Vector, size: Vector): void {
    this._ctx.clearRect(start.x, start.y, size.x, size.y)
  }

  public setStyle(style: Partial<CSSStyleDeclaration>): void {
    for (const key in style) {
      if (!Object.hasOwnProperty.call(style, key)) {
        continue
      }

      if (!style[key]) {
        continue
      }

      this._elm.style[key] = style[key] as string
    }
  }
}