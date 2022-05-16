import { Test, TestingModule } from '@nestjs/testing';
import { HealthMonitoringsService } from './health-monitorings.service';

describe('HealthMonitoringsService', () => {
  let service: HealthMonitoringsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HealthMonitoringsService],
    }).compile();

    service = module.get<HealthMonitoringsService>(HealthMonitoringsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
