import { Test, TestingModule } from '@nestjs/testing';
import { HealthMonitoringsController } from './health-monitorings.controller';
import { HealthMonitoringsService } from './health-monitorings.service';

describe('HealthMonitoringsController', () => {
  let controller: HealthMonitoringsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HealthMonitoringsController],
      providers: [HealthMonitoringsService],
    }).compile();

    controller = module.get<HealthMonitoringsController>(
      HealthMonitoringsController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
