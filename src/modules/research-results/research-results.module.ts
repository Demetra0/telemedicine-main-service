import { Module } from '@nestjs/common';
import { ResearchResultsService } from './research-results.service';
import { ResearchResultsController } from './research-results.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { ResearchResult } from './entities/research-result.entity';
import { Patient } from '../patients/entities/patient.entity';
import { TypeOfResearch } from '../type-of-research/entities/type-of-research.entity';

@Module({
  controllers: [ResearchResultsController],
  providers: [ResearchResultsService],
  imports: [SequelizeModule.forFeature([ResearchResult, Patient, TypeOfResearch])],
  exports: [ResearchResultsService],
})
export class ResearchResultsModule {}
