export abstract class Entity {
  public x: number;
  public y: number;
  public angle: number;

  constructor(x: number, y: number, angle: number) {
    this.x = x;
    this.y = y;
    this.angle = angle;
  }

  draw(context: CanvasRenderingContext2D) {
    context.save();
    context.translate(this.x, this.y);
    context.rotate(this.angle);
    this.drawInternal(context);
    context.restore();
  }

  abstract tick(dt: number): void;

  protected abstract drawInternal(context: CanvasRenderingContext2D): void;
}
