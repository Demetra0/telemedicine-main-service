import { PartialType } from '@nestjs/mapped-types';
import { CreateHealthMonitoringDto } from './create-health-monitoring.dto';

export class UpdateHealthMonitoringDto extends PartialType(
  CreateHealthMonitoringDto,
) {}
