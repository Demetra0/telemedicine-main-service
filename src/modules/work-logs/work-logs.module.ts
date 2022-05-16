import { Module } from '@nestjs/common';
import { WorkLogsService } from './work-logs.service';
import { WorkLogsController } from './work-logs.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Doctor } from '../doctors/entities/doctor.entity';
import { WorkLog } from './entities/work-log.entity';

@Module({
  controllers: [WorkLogsController],
  providers: [WorkLogsService],
  imports: [SequelizeModule.forFeature([WorkLog, Doctor])],
  exports: [WorkLogsService],
})
export class WorkLogsModule {}
