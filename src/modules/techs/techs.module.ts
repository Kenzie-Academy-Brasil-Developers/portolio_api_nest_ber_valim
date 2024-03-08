import { Module } from '@nestjs/common';
import { TechsService } from './techs.service';
import { TechsController } from './techs.controller';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  controllers: [TechsController],
  providers: [TechsService, PrismaService],
})
export class TechsModule {}
