import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './entities/users.entity';
import { Doctor } from '../doctors/entities/doctor.entity';
import { DoctorsModule } from '../doctors/doctors.module';
import { PatientsModule } from '../patients/patients.module';
import { Patient } from '../patients/entities/patient.entity';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [SequelizeModule.forFeature([User])],
  exports: [UsersService],
})
export class UsersModule {
}
