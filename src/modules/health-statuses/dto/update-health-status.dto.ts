import { PartialType } from '@nestjs/mapped-types';
import { CreateHealthStatusDto } from './create-health-status.dto';

export class UpdateHealthStatusDto extends PartialType(CreateHealthStatusDto) {}
