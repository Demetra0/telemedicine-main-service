import { Injectable } from '@nestjs/common';
import { CreateHealthMonitoringDto } from './dto/create-health-monitoring.dto';
import { UpdateHealthMonitoringDto } from './dto/update-health-monitoring.dto';

@Injectable()
export class HealthMonitoringsService {
  create(createHealthMonitoringDto: CreateHealthMonitoringDto) {
    return 'This action adds a new healthMonitoring';
  }

  findAll() {
    return `This action returns all healthMonitorings`;
  }

  findOne(id: number) {
    return `This action returns a #${id} healthMonitoring`;
  }

  update(id: number, updateHealthMonitoringDto: UpdateHealthMonitoringDto) {
    return `This action updates a #${id} healthMonitoring`;
  }

  remove(id: number) {
    return `This action removes a #${id} healthMonitoring`;
  }
}
