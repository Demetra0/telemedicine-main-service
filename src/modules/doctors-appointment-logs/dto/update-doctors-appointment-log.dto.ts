import { PartialType } from '@nestjs/mapped-types';
import { CreateDoctorsAppointmentLogDto } from './create-doctors-appointment-log.dto';

export class UpdateDoctorsAppointmentLogDto extends PartialType(
  CreateDoctorsAppointmentLogDto,
) {}
