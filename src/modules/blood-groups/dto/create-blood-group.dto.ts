import { BloodGroup } from '../interfaces/blood-group.interface';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateBloodGroupDto implements BloodGroup {
  @IsString()
  @IsNotEmpty()
  group: string;
}
