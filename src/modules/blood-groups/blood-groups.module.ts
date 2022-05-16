import { Module } from '@nestjs/common';
import { BloodGroupsService } from './blood-groups.service';
import { BloodGroupsController } from './blood-groups.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { BloodGroup } from './entities/blood-group.entity';
import { Patient } from '../patients/entities/patient.entity';

@Module({
  controllers: [BloodGroupsController],
  providers: [BloodGroupsService],
  imports: [SequelizeModule.forFeature([BloodGroup, Patient]), Patient],
  exports: [BloodGroupsService],
})
export class BloodGroupsModule {}
