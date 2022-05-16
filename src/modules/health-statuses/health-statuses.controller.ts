import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { HealthStatusesService } from './health-statuses.service';
import { CreateHealthStatusDto } from './dto/create-health-status.dto';
import { UpdateHealthStatusDto } from './dto/update-health-status.dto';

@Controller('health-statuses')
export class HealthStatusesController {
  constructor(private readonly healthStatusesService: HealthStatusesService) {}

  @Post()
  create(@Body() createHealthStatusDto: CreateHealthStatusDto) {
    return this.healthStatusesService.create(createHealthStatusDto);
  }

  @Get()
  findAll() {
    return this.healthStatusesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.healthStatusesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateHealthStatusDto: UpdateHealthStatusDto,
  ) {
    return this.healthStatusesService.update(+id, updateHealthStatusDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.healthStatusesService.remove(+id);
  }
}
