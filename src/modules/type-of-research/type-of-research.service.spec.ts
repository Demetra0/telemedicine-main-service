import { Test, TestingModule } from '@nestjs/testing';
import { TypeOfResearchService } from './type-of-research.service';

describe('TypeOfResearchService', () => {
  let service: TypeOfResearchService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypeOfResearchService],
    }).compile();

    service = module.get<TypeOfResearchService>(TypeOfResearchService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
