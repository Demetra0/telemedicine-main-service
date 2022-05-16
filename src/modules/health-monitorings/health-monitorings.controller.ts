import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { HealthMonitoringsService } from './health-monitorings.service';
import { CreateHealthMonitoringDto } from './dto/create-health-monitoring.dto';
import { UpdateHealthMonitoringDto } from './dto/update-health-monitoring.dto';

@Controller('health-monitorings')
export class HealthMonitoringsController {
  constructor(
    private readonly healthMonitoringsService: HealthMonitoringsService,
  ) {}

  @Post()
  create(@Body() createHealthMonitoringDto: CreateHealthMonitoringDto) {
    return this.healthMonitoringsService.create(createHealthMonitoringDto);
  }

  @Get()
  findAll() {
    return this.healthMonitoringsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.healthMonitoringsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateHealthMonitoringDto: UpdateHealthMonitoringDto,
  ) {
    return this.healthMonitoringsService.update(+id, updateHealthMonitoringDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.healthMonitoringsService.remove(+id);
  }
}
