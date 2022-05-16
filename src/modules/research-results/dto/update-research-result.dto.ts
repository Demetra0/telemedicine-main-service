import { PartialType } from '@nestjs/mapped-types';
import { CreateResearchResultDto } from './create-research-result.dto';

export class UpdateResearchResultDto extends PartialType(
  CreateResearchResultDto,
) {}
