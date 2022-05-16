import { Module } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { PatientsController } from './patients.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from '../users/entities/users.entity';
import { Patient } from './entities/patient.entity';
import { BloodGroup } from '../blood-groups/entities/blood-group.entity';
import { DoctorsAppointmentLog } from '../doctors-appointment-logs/entities/doctors-appointment-log.entity';
import { HealthMonitoring } from '../health-monitorings/entities/health-monitoring.entity';
import { ResearchResult } from '../research-results/entities/research-result.entity';

@Module({
  controllers: [PatientsController],
  providers: [PatientsService],
  imports: [
    SequelizeModule.forFeature([
      Patient,
      User,
      BloodGroup,
      DoctorsAppointmentLog,
      HealthMonitoring,
      ResearchResult,
    ]),
  ],
  exports: [PatientsService],
})
export class PatientsModule {}
