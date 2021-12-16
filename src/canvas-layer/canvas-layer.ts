import { Canvas, Vector } from '../utils';
import { settings } from '../settings';

export class CanvasLayer {
  private static _background: Canvas;
  private static _foreground: Canvas;

  private constructor() { /* make it unaccessible */ }

  public static initCanvas(style: Partial<CSSStyleDeclaration>): Canvas {
    const width = (settings.grid.nodeSize + settings.grid.nodeOffset) * settings.grid.rowNodes + settings.grid.nodeOffset;

    const height = (settings.grid.nodeSize + settings.grid.nodeOffset) * settings.grid.columnNodes + settings.grid.nodeOffset;

    const canvas = new Canvas(new Vector(width, height))

    canvas.awake();
    canvas.setStyle(style)

    return canvas;
  }

  public static get background(): Canvas {
    if (!this._background) {
      this._background = this.initCanvas({ zIndex: '0' });
    }

    return this._background
  }

  public static get foreground(): Canvas {
    if (!this._foreground) {
      this._foreground = this.initCanvas({ zIndex: '1' });
    }

    return this._foreground;
  }
}