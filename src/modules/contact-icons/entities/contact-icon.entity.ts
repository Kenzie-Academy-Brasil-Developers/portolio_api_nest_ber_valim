import { randomUUID } from 'crypto';

export class ContactIcon {
  readonly id: string;
  contactIcon: string;
  contactName: string;
  description: string;
  contactLink: string;

  constructor() {
    this.id = randomUUID();
  }
}
