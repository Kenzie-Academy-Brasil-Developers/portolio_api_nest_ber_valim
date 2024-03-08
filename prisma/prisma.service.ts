import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  update(arg0: {
    where: { id: string };
    data: {
      projectName?: string;
      projectImage?: string;
      description?: string;
      repositoryLink?: string;
      applicationLink?: string;
    };
  }) {
    throw new Error('Method not implemented.');
  }
  async onModuleInit() {
    await this.$connect();
  }
}
