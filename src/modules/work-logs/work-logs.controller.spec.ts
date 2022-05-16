import { Test, TestingModule } from '@nestjs/testing';
import { WorkLogsController } from './work-logs.controller';
import { WorkLogsService } from './work-logs.service';

describe('WorkLogsController', () => {
  let controller: WorkLogsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WorkLogsController],
      providers: [WorkLogsService],
    }).compile();

    controller = module.get<WorkLogsController>(WorkLogsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
