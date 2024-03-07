import { Test, TestingModule } from '@nestjs/testing';
import { ContactIconsController } from './contact-icons.controller';
import { ContactIconsService } from './contact-icons.service';

describe('ContactIconsController', () => {
  let controller: ContactIconsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContactIconsController],
      providers: [ContactIconsService],
    }).compile();

    controller = module.get<ContactIconsController>(ContactIconsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
