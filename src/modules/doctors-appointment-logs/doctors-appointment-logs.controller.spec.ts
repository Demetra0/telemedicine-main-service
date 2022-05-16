import { Test, TestingModule } from '@nestjs/testing';
import { DoctorsAppointmentLogsController } from './doctors-appointment-logs.controller';
import { DoctorsAppointmentLogsService } from './doctors-appointment-logs.service';

describe('DoctorsAppointmentLogsController', () => {
  let controller: DoctorsAppointmentLogsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DoctorsAppointmentLogsController],
      providers: [DoctorsAppointmentLogsService],
    }).compile();

    controller = module.get<DoctorsAppointmentLogsController>(
      DoctorsAppointmentLogsController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
