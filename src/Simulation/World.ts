import type { Entity } from "../Entities/Entity.ts";
import { TextEntity } from "../Entities/TextEntity.ts";
import { Ball } from "../Entities/Ball.ts";

export class World {
  public lastTimestamp: DOMHighResTimeStamp | null = null;
  public entities: Entity[] = [];

  constructor() {
    this.entities.push(new TextEntity(100, 100, 0));
    this.entities.push(new Ball(250, 250, 0, 100, 0));
  }

  draw(context: CanvasRenderingContext2D): void {
    this.entities.forEach((entity: Entity) => entity.draw(context));
  }

  tick(timestamp: DOMHighResTimeStamp): void {
    if (this.lastTimestamp) {
      const dt = (timestamp - this.lastTimestamp) / 1000;
      this.entities.forEach((entity) => entity.tick(dt));
    }
    this.lastTimestamp = timestamp;
  }
}
