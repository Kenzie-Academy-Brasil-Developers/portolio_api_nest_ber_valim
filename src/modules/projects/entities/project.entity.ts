import { randomUUID } from 'crypto';

export class Project {
  readonly id: string;
  projectName: string;
  projectImage: string;
  description: string;
  repositoryLink: string;
  applicationLink: string;

  constructor() {
    this.id = randomUUID();
  }
}
