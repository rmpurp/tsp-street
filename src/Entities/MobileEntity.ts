import { Entity } from "./Entity.ts";

export abstract class MobileEntity extends Entity {
  speed: number;
  acceleration: number;

  constructor(
    x: number,
    y: number,
    angle: number,
    speed: number, // points per second
    acceleration: number, // points per second per second
  ) {
    super(x, y, angle);
    this.speed = speed;
    this.acceleration = acceleration;
  }

  override tick(dt: number) {
    this.x += dt * this.speed * Math.cos(this.angle);
    this.y += dt * this.speed * Math.sin(this.angle);
    this.speed += dt * this.acceleration;
  }
}
