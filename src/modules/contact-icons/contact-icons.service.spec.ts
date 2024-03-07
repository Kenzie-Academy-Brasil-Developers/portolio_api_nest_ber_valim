import { Test, TestingModule } from '@nestjs/testing';
import { ContactIconsService } from './contact-icons.service';

describe('ContactIconsService', () => {
  let service: ContactIconsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContactIconsService],
    }).compile();

    service = module.get<ContactIconsService>(ContactIconsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
