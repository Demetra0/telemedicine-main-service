import { Module } from '@nestjs/common';
import { DoctorsService } from './doctors.service';
import { DoctorsController } from './doctors.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from '../users/entities/users.entity';
import { Doctor } from './entities/doctor.entity';
import { DoctorsAppointmentLog } from '../doctors-appointment-logs/entities/doctors-appointment-log.entity';
import { HealthMonitoring } from '../health-monitorings/entities/health-monitoring.entity';
import { WorkLog } from '../work-logs/entities/work-log.entity';
import { HealthStatus } from '../health-statuses/entities/health-status.entity';

@Module({
  controllers: [DoctorsController],
  providers: [DoctorsService],
  imports: [
    SequelizeModule.forFeature([
      Doctor,
      User,
      WorkLog,
      HealthStatus,
      HealthMonitoring,
      DoctorsAppointmentLog,
    ]),
  ],
  exports: [DoctorsService],
})
export class DoctorsModule {}
