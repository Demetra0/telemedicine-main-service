import { Injectable } from '@nestjs/common';
import { CreateTypeOfResearchDto } from './dto/create-type-of-research.dto';
import { UpdateTypeOfResearchDto } from './dto/update-type-of-research.dto';

@Injectable()
export class TypeOfResearchService {
  create(createTypeOfResearchDto: CreateTypeOfResearchDto) {
    return 'This action adds a new typeOfResearch';
  }

  findAll() {
    return `This action returns all typeOfResearch`;
  }

  findOne(id: number) {
    return `This action returns a #${id} typeOfResearch`;
  }

  update(id: number, updateTypeOfResearchDto: UpdateTypeOfResearchDto) {
    return `This action updates a #${id} typeOfResearch`;
  }

  remove(id: number) {
    return `This action removes a #${id} typeOfResearch`;
  }
}
