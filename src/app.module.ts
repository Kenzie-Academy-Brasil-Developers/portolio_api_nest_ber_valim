import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectsModule } from './modules/projects/projects.module';
import { TechsModule } from './techs/techs.module';
import { ContactIconsModule } from './contact-icons/contact-icons.module';
import { TechsModule } from './modules/techs/techs.module';
import { ContactIconsModule } from './modules/contact-icons/contact-icons.module';

@Module({
  imports: [ProjectsModule, TechsModule, ContactIconsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
