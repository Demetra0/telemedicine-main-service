import { Test, TestingModule } from '@nestjs/testing';
import { HealthStatusesService } from './health-statuses.service';

describe('HealthStatusesService', () => {
  let service: HealthStatusesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HealthStatusesService],
    }).compile();

    service = module.get<HealthStatusesService>(HealthStatusesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
