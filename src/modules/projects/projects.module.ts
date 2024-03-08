import { BadRequestException, Module } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ProjectsController } from './projects.controller';
import { PrismaService } from 'prisma/prisma.service';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Module({
  imports: [
    MulterModule.register({
      storage: diskStorage({
        destination: './tmp',
        filename: (_, file, callback) => {
          callback(null, file.originalname);
        },
      }),
      fileFilter: (_, file, callback) => {
        if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/png') {
          callback(null, true);
        } else {
          callback(
            new BadRequestException('Only jpeg/jpg and png are allowed'),
            false,
          );
        }
      },
    }),
  ],
  controllers: [ProjectsController],
  providers: [ProjectsService, PrismaService],
})
export class ProjectsModule {}
