import { Doctor } from '../interfaces/doctor.interface';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateDoctorDto implements Doctor {
  @IsString()
  @IsNotEmpty()
  qualification: string;

  @IsString()
  @IsNotEmpty()
  specialization: string;

  @IsString()
  @IsNotEmpty()
  workExperience: string;

  @IsString()
  @IsNotEmpty()
  userId: string;
}
