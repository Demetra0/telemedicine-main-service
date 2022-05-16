import { PartialType } from '@nestjs/mapped-types';
import { CreateTypeOfResearchDto } from './create-type-of-research.dto';

export class UpdateTypeOfResearchDto extends PartialType(
  CreateTypeOfResearchDto,
) {}
