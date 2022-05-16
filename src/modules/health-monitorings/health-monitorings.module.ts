import { Module } from '@nestjs/common';
import { HealthMonitoringsService } from './health-monitorings.service';
import { HealthMonitoringsController } from './health-monitorings.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { HealthMonitoring } from './entities/health-monitoring.entity';
import { HealthStatus } from '../health-statuses/entities/health-status.entity';
import { Doctor } from '../doctors/entities/doctor.entity';
import { Patient } from '../patients/entities/patient.entity';

@Module({
  controllers: [HealthMonitoringsController],
  providers: [HealthMonitoringsService],
  imports: [
    SequelizeModule.forFeature([
      HealthMonitoring,
      HealthStatus,
      Doctor,
      Patient,
    ]),
  ],
  exports: [HealthMonitoringsService],
})
export class HealthMonitoringsModule {}
