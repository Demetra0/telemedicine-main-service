import { Injectable } from '@nestjs/common';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Doctor } from './entities/doctor.entity';

@Injectable()
export class DoctorsService {
  constructor(@InjectModel(Doctor) private doctorRepository: typeof Doctor) {}

  async create(createDoctorDto: CreateDoctorDto): Promise<Doctor> {
    const doctor = await this.doctorRepository.create(createDoctorDto);
    return doctor;
  }

  async findAll() {
    const doctors = await this.doctorRepository.findAll({
      include: { all: true },
    });
    return doctors;
  }

  async findOne(id: number) {
    const doctor = await this.doctorRepository.findOne({
      where: { id: id },
    });
    return doctor;
  }

  async update(id: number, updateDoctorDto: UpdateDoctorDto) {
    const [numberOfAffectedRows, [updatedDoctor]] =
      await this.doctorRepository.update(updateDoctorDto, {
        where: { id: id },
        returning: true,
      });
    return { numberOfAffectedRows, updatedDoctor };
  }

  async remove(id: number) {
    return await this.doctorRepository.destroy({
      where: { id: id },
    });
  }
}
