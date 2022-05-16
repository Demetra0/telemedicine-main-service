import { Injectable } from '@nestjs/common';
import { CreateResearchResultDto } from './dto/create-research-result.dto';
import { UpdateResearchResultDto } from './dto/update-research-result.dto';

@Injectable()
export class ResearchResultsService {
  create(createResearchResultDto: CreateResearchResultDto) {
    return 'This action adds a new researchResult';
  }

  findAll() {
    return `This action returns all researchResults`;
  }

  findOne(id: number) {
    return `This action returns a #${id} researchResult`;
  }

  update(id: number, updateResearchResultDto: UpdateResearchResultDto) {
    return `This action updates a #${id} researchResult`;
  }

  remove(id: number) {
    return `This action removes a #${id} researchResult`;
  }
}
