import { Module } from '@nestjs/common';
import { HealthStatusesService } from './health-statuses.service';
import { HealthStatusesController } from './health-statuses.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { HealthStatus } from './entities/health-status.entity';
import { Doctor } from '../doctors/entities/doctor.entity';

@Module({
  controllers: [HealthStatusesController],
  providers: [HealthStatusesService],
  imports: [SequelizeModule.forFeature([HealthStatus, Doctor]), Doctor],
  exports: [HealthStatusesService],
})
export class HealthStatusesModule {}
