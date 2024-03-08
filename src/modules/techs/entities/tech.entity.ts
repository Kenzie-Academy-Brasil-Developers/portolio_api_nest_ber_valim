import { randomUUID } from 'crypto';

export class Tech {
  readonly id: string;
  techIcon: string;

  constructor() {
    this.id = randomUUID();
  }
}
