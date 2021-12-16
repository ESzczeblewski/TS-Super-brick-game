export class Color {
  public readonly r: number
  public readonly g: number
  public readonly b: number
  public readonly a: number

  constructor(r: number, g: number, b: number, a: number) {
    if (!Color.IsValidChannel(r)) {
      throw new Error('Provided incorrect value for Red channel')
    }

    if (!Color.IsValidChannel(g)) {
      throw new Error('Provided incorrect value for Green channel')
    }

    if (!Color.IsValidChannel(b)) {
      throw new Error('Provided incorrect value for Blue channel')
    }

    if (!Color.IsValidChannel(a, true)) {
      throw new Error('Provided incorrect value for Alpha channel')
    }

    this.r = r
    this.g = g
    this.b = b
    this.a = a
  }

  public static IsValidChannel(v: number, isAlpha = false): boolean {
    const max = isAlpha ? 1 : 255
    if (v < 0 || v > max) {
      return false
    }
    if (!isAlpha && v % 1 !== 0) {
      return false
    }
    return true
  }

  public AsString(): string {
    return `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`
  }
}