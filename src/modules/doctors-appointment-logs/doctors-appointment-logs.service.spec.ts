import { Test, TestingModule } from '@nestjs/testing';
import { DoctorsAppointmentLogsService } from './doctors-appointment-logs.service';

describe('DoctorsAppointmentLogsService', () => {
  let service: DoctorsAppointmentLogsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DoctorsAppointmentLogsService],
    }).compile();

    service = module.get<DoctorsAppointmentLogsService>(
      DoctorsAppointmentLogsService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
