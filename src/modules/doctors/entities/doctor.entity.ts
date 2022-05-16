import {
  Column,
  DataType,
  Model,
  Table,
  ForeignKey,
  HasMany,
} from 'sequelize-typescript';
import { Doctor as DoctorCreationAttrs } from '../interfaces/doctor.interface';
import { User } from '../../users/entities/users.entity';
import { WorkLog } from '../../work-logs/entities/work-log.entity';
import { HealthStatus } from '../../health-statuses/entities/health-status.entity';
import { DoctorsAppointmentLog } from '../../doctors-appointment-logs/entities/doctors-appointment-log.entity';
import { HealthMonitoring } from '../../health-monitorings/entities/health-monitoring.entity';

@Table({ tableName: 'doctors' })
export class Doctor extends Model<Doctor, DoctorCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  specialization: string;

  @Column({ type: DataType.STRING, allowNull: false })
  workExperience: string;

  @Column({ type: DataType.STRING, allowNull: false })
  qualification: string;

  @ForeignKey(() => User)
  @Column({ type: DataType.STRING })
  userId: string;

  @HasMany(() => WorkLog)
  workLog: WorkLog[];

  @HasMany(() => HealthStatus)
  healthStatuses: HealthStatus[];

  @HasMany(() => HealthMonitoring)
  healthMonitorings: HealthMonitoring[];

  @HasMany(() => DoctorsAppointmentLog)
  doctorsAppointmentLogs: DoctorsAppointmentLog[];
}
