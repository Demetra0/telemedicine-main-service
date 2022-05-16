import { PartialType } from '@nestjs/mapped-types';
import { CreateBloodGroupDto } from './create-blood-group.dto';

export class UpdateBloodGroupDto extends PartialType(CreateBloodGroupDto) {}
