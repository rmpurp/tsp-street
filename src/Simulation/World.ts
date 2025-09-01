import type { Entity } from "../Entities/Entity.ts";
import { TextEntity } from "../Entities/TextEntity.ts";

export class World {
  public lastTimestamp: DOMHighResTimeStamp | null = null;
  public entities: Entity[] = [];

  constructor() {
    this.entities.push(new TextEntity(100, 100, 0));
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
