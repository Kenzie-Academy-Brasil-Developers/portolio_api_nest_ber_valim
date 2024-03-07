import { Module } from '@nestjs/common';
import { TechsService } from './techs.service';
import { TechsController } from './techs.controller';

@Module({
  controllers: [TechsController],
  providers: [TechsService],
})
export class TechsModule {}
