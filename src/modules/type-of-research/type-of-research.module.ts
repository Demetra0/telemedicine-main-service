import { Module } from '@nestjs/common';
import { TypeOfResearchService } from './type-of-research.service';
import { TypeOfResearchController } from './type-of-research.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { ResearchResult } from '../research-results/entities/research-result.entity';
import { TypeOfResearch } from './entities/type-of-research.entity';

@Module({
  controllers: [TypeOfResearchController],
  providers: [TypeOfResearchService],
  imports: [SequelizeModule.forFeature([TypeOfResearch, ResearchResult])],
  exports: [TypeOfResearchService],
})
export class TypeOfResearchModule {}
