import { Test, TestingModule } from '@nestjs/testing';
import { TypeOfResearchController } from './type-of-research.controller';
import { TypeOfResearchService } from './type-of-research.service';

describe('TypeOfResearchController', () => {
  let controller: TypeOfResearchController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypeOfResearchController],
      providers: [TypeOfResearchService],
    }).compile();

    controller = module.get<TypeOfResearchController>(TypeOfResearchController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
