import { MobileEntity } from "./MobileEntity.ts";

export class Ball extends MobileEntity {
  protected drawInternal(context: CanvasRenderingContext2D) {
    context.fillStyle = "#AAAAFF";
    context.fillRect(-10, -10, 20, 20);
  }

  override tick(dt: number) {
    super.tick(dt);
    this.angle += dt * 2;
  }
}
