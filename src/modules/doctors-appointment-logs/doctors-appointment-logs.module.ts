import { Module } from '@nestjs/common';
import { DoctorsAppointmentLogsService } from './doctors-appointment-logs.service';
import { DoctorsAppointmentLogsController } from './doctors-appointment-logs.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Doctor } from '../doctors/entities/doctor.entity';
import { DoctorsAppointmentLog } from './entities/doctors-appointment-log.entity';
import { Patient } from '../patients/entities/patient.entity';

@Module({
  controllers: [DoctorsAppointmentLogsController],
  providers: [DoctorsAppointmentLogsService],
  imports: [
    SequelizeModule.forFeature([DoctorsAppointmentLog, Doctor, Patient]),
  ],
  exports: [DoctorsAppointmentLogsService],
})
export class DoctorsAppointmentLogsModule {}
