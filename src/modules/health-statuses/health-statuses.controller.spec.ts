import { Test, TestingModule } from '@nestjs/testing';
import { HealthStatusesController } from './health-statuses.controller';
import { HealthStatusesService } from './health-statuses.service';

describe('HealthStatusesController', () => {
  let controller: HealthStatusesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HealthStatusesController],
      providers: [HealthStatusesService],
    }).compile();

    controller = module.get<HealthStatusesController>(HealthStatusesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
