import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TypeOfResearchService } from './type-of-research.service';
import { CreateTypeOfResearchDto } from './dto/create-type-of-research.dto';
import { UpdateTypeOfResearchDto } from './dto/update-type-of-research.dto';

@Controller('type-of-research')
export class TypeOfResearchController {
  constructor(private readonly typeOfResearchService: TypeOfResearchService) {}

  @Post()
  create(@Body() createTypeOfResearchDto: CreateTypeOfResearchDto) {
    return this.typeOfResearchService.create(createTypeOfResearchDto);
  }

  @Get()
  findAll() {
    return this.typeOfResearchService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.typeOfResearchService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTypeOfResearchDto: UpdateTypeOfResearchDto,
  ) {
    return this.typeOfResearchService.update(+id, updateTypeOfResearchDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.typeOfResearchService.remove(+id);
  }
}
