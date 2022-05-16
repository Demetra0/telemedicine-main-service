import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DoctorsAppointmentLogsService } from './doctors-appointment-logs.service';
import { CreateDoctorsAppointmentLogDto } from './dto/create-doctors-appointment-log.dto';
import { UpdateDoctorsAppointmentLogDto } from './dto/update-doctors-appointment-log.dto';

@Controller('doctors-appointment-logs')
export class DoctorsAppointmentLogsController {
  constructor(
    private readonly doctorsAppointmentLogsService: DoctorsAppointmentLogsService,
  ) {}

  @Post()
  create(
    @Body() createDoctorsAppointmentLogDto: CreateDoctorsAppointmentLogDto,
  ) {
    return this.doctorsAppointmentLogsService.create(
      createDoctorsAppointmentLogDto,
    );
  }

  @Get()
  findAll() {
    return this.doctorsAppointmentLogsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.doctorsAppointmentLogsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDoctorsAppointmentLogDto: UpdateDoctorsAppointmentLogDto,
  ) {
    return this.doctorsAppointmentLogsService.update(
      +id,
      updateDoctorsAppointmentLogDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.doctorsAppointmentLogsService.remove(+id);
  }
}
