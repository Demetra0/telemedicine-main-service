import { Test, TestingModule } from '@nestjs/testing';
import { ResearchResultsController } from './research-results.controller';
import { ResearchResultsService } from './research-results.service';

describe('ResearchResultsController', () => {
  let controller: ResearchResultsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ResearchResultsController],
      providers: [ResearchResultsService],
    }).compile();

    controller = module.get<ResearchResultsController>(
      ResearchResultsController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
