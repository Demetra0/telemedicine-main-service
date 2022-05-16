import { Test, TestingModule } from '@nestjs/testing';
import { ResearchResultsService } from './research-results.service';

describe('ResearchResultsService', () => {
  let service: ResearchResultsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ResearchResultsService],
    }).compile();

    service = module.get<ResearchResultsService>(ResearchResultsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
