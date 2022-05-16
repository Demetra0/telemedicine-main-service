import { Injectable } from '@nestjs/common';
import { CreateDoctorsAppointmentLogDto } from './dto/create-doctors-appointment-log.dto';
import { UpdateDoctorsAppointmentLogDto } from './dto/update-doctors-appointment-log.dto';
import { InjectModel } from '@nestjs/sequelize';
import { DoctorsAppointmentLog } from './entities/doctors-appointment-log.entity';

@Injectable()
export class DoctorsAppointmentLogsService {
  constructor(
    @InjectModel(DoctorsAppointmentLog)
    private doctorsAppointmentLogRepository: typeof DoctorsAppointmentLog,
  ) {}

  async create(createDoctorsAppointmentLogDto: CreateDoctorsAppointmentLogDto) {
    const doctorsAppointmentLog =
      await this.doctorsAppointmentLogRepository.create(
        createDoctorsAppointmentLogDto,
      );
    return doctorsAppointmentLog;
  }

  async findAll() {
    const doctorsAppointmentLog =
      await this.doctorsAppointmentLogRepository.findAll({
        include: { all: true },
      });
    return doctorsAppointmentLog;
  }

  async findOne(id: number) {
    const doctorsAppointmentLog =
      await this.doctorsAppointmentLogRepository.findOne({
        where: { id: id },
      });
    return doctorsAppointmentLog;
  }

  async update(
    id: number,
    updateDoctorsAppointmentLogDto: UpdateDoctorsAppointmentLogDto,
  ) {
    const [numberOfAffectedRows, [updatedDoctorsAppointmentLog]] =
      await this.doctorsAppointmentLogRepository.update(
        updateDoctorsAppointmentLogDto,
        {
          where: { id: id },
          returning: true,
        },
      );
    return { numberOfAffectedRows, updatedDoctorsAppointmentLog };
  }

  async remove(id: number) {
    return await this.doctorsAppointmentLogRepository.destroy({
      where: { id: id },
    });
  }
}
