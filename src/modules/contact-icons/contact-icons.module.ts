import { Module } from '@nestjs/common';
import { ContactIconsService } from './contact-icons.service';
import { ContactIconsController } from './contact-icons.controller';

@Module({
  controllers: [ContactIconsController],
  providers: [ContactIconsService],
})
export class ContactIconsModule {}
