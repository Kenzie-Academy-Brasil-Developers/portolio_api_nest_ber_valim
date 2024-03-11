import { BadRequestException, Module } from '@nestjs/common';
import { TechsService } from './techs.service';
import { TechsController } from './techs.controller';
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
        if (
          file.mimetype == 'image/jpeg' ||
          file.mimetype == 'image/png' ||
          file.mimetype == 'image/svg'
        ) {
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
  controllers: [TechsController],
  providers: [TechsService, PrismaService],
})
export class TechsModule {}
