import { Injectable } from '@nestjs/common';
import { CreateHealthStatusDto } from './dto/create-health-status.dto';
import { UpdateHealthStatusDto } from './dto/update-health-status.dto';

@Injectable()
export class HealthStatusesService {
  create(createHealthStatusDto: CreateHealthStatusDto) {
    return 'This action adds a new healthStatus';
  }

  findAll() {
    return `This action returns all healthStatuses`;
  }

  findOne(id: number) {
    return `This action returns a #${id} healthStatus`;
  }

  update(id: number, updateHealthStatusDto: UpdateHealthStatusDto) {
    return `This action updates a #${id} healthStatus`;
  }

  remove(id: number) {
    return `This action removes a #${id} healthStatus`;
  }
}
