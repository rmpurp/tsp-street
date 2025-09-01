import { Entity } from "./Entity.ts";

export class TextEntity extends Entity {
  protected drawInternal(context: CanvasRenderingContext2D) {
    context.fillStyle = "#FFFFFF";
    context.textAlign = "center";
    context.fillText("Hello, world!", 0, 0);
  }

  tick(dt: number): void {
    this.angle += dt;
  }
}
