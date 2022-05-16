import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreatePatientDto {
  @IsNumber()
  @IsNotEmpty()
  chiPolicySeries: number;

  @IsNumber()
  @IsNotEmpty()
  chiPolicyNumber: number;

  @IsString()
  @IsNotEmpty()
  dateIssueOfThePolicy: string;

  @IsString()
  @IsNotEmpty()
  userId: string;
}
