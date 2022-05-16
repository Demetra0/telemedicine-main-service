import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';

import { DoctorsAppointmentLog as DoctorsAppointmentLogCreationAttrs } from '../interfaces/doctors-appointment-log.interface';
import { Doctor } from '../../doctors/entities/doctor.entity';
import { Patient } from '../../patients/entities/patient.entity';

@Table({ tableName: 'doctors_appointment_logs' })
export class DoctorsAppointmentLog extends Model<
  DoctorsAppointmentLog,
  DoctorsAppointmentLogCreationAttrs
> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.TEXT, allowNull: false })
  complaints: string;

  @Column({ type: DataType.STRING, allowNull: false })
  diagnosis: string;

  @Column({ type: DataType.TEXT, allowNull: false })
  treatment: string;

  @ForeignKey(() => Doctor)
  @Column({ type: DataType.INTEGER })
  doctorId: number;

  @ForeignKey(() => Patient)
  @Column({ type: DataType.INTEGER })
  patientId: number;
}
