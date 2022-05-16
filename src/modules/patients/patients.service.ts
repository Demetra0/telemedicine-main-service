import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { Patient } from './entities/patient.entity';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class PatientsService {
  constructor(
    @InjectModel(Patient) private patientRepository: typeof Patient,
  ) {}

  async create(createPatientDto: CreatePatientDto) {
    return await this.patientRepository.create(createPatientDto);
  }

  async findAll(): Promise<Patient[]> {
    return await this.patientRepository.findAll({
      include: { all: true },
    });
  }

  async findOne(id: number): Promise<Patient> {
    const patient = await this.patientRepository.findOne({
      where: { id: id },
    });

    if (!patient) {
      throw new HttpException('Пользователь не найден', HttpStatus.NOT_FOUND);
    }

    return patient;
  }

  async update(id: number, updatePatientDto: UpdatePatientDto) {
    const [numberOfAffectedRows, [updatedPatient]] =
      await this.patientRepository.update(updatePatientDto, {
        where: { id: id },
        returning: true,
      });

    return { numberOfAffectedRows, updatedPatient };
  }

  async remove(id: number) {
    return await this.patientRepository.destroy({
      where: { id: id },
    });
  }
}
