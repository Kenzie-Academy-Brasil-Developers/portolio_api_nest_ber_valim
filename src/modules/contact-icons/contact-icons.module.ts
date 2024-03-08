import { Module } from '@nestjs/common';
import { ContactIconsService } from './contact-icons.service';
import { ContactIconsController } from './contact-icons.controller';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  controllers: [ContactIconsController],
  providers: [ContactIconsService, PrismaService],
})
export class ContactIconsModule {}
