import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from '../../../modules/users/entities/users.entity';
import { Doctor } from '../../../modules/doctors/entities/doctor.entity';
import { Patient } from '../../../modules/patients/entities/patient.entity';
import { BloodGroup } from '../../../modules/blood-groups/entities/blood-group.entity';
import { WorkLog } from '../../../modules/work-logs/entities/work-log.entity';
import { HealthStatus } from '../../../modules/health-statuses/entities/health-status.entity';
import { HealthMonitoring } from '../../../modules/health-monitorings/entities/health-monitoring.entity';
import { DoctorsAppointmentLog } from '../../../modules/doctors-appointment-logs/entities/doctors-appointment-log.entity';
import { ResearchResult } from '../../../modules/research-results/entities/research-result.entity';
import { TypeOfResearch } from '../../../modules/type-of-research/entities/type-of-research.entity';
import { DatabaseService } from './provider.service';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [
        User,
        Doctor,
        Patient,
        BloodGroup,
        WorkLog,
        HealthStatus,
        HealthMonitoring,
        DoctorsAppointmentLog,
        ResearchResult,
        TypeOfResearch,
      ],
      autoLoadModels: true,
      synchronize: true,
    }),
  ],
  providers: [DatabaseService],
  exports: [DatabaseService],
})
export class PostgresDatabaseProviderModule {}
